import { ChevronDown } from 'lucide-react';
import {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../context/LanguageContext';
import type { Lang } from '../translations';

const OPTIONS: { lang: Lang; flag: string; label: string; code: string }[] = [
  { lang: 'DE', flag: '🇩🇪', label: 'Deutsch', code: 'DE' },
  { lang: 'EN', flag: '🇬🇧', label: 'English', code: 'EN' },
  { lang: 'ES', flag: '🇪🇸', label: 'Español', code: 'ES' },
];

const DROPDOWN_MIN_W = 176;

type LanguageSwitcherProps = {
  /** Use on pale backgrounds (e.g. mobile menu drawer) instead of dark navbar */
  lightSurface?: boolean;
};

export function LanguageSwitcher({ lightSurface = false }: LanguageSwitcherProps) {
  const { lang, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const listId = useId();

  const updatePosition = () => {
    const el = triggerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const left = Math.min(
      window.innerWidth - DROPDOWN_MIN_W - 8,
      Math.max(8, rect.right - DROPDOWN_MIN_W),
    );
    setCoords({ top: rect.bottom + 8, left });
  };

  useLayoutEffect(() => {
    if (!open) return;
    updatePosition();
  }, [open, lang]);

  useEffect(() => {
    if (!open) return;
    const onScrollOrResize = () => updatePosition();
    window.addEventListener('scroll', onScrollOrResize, true);
    window.addEventListener('resize', onScrollOrResize);
    return () => {
      window.removeEventListener('scroll', onScrollOrResize, true);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      const t = e.target as Node;
      if (triggerRef.current?.contains(t)) return;
      if (dropdownRef.current?.contains(t)) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  const active = OPTIONS.find((o) => o.lang === lang) ?? OPTIONS[1];

  const dropdown =
    open &&
    createPortal(
      <div
        ref={dropdownRef}
        id={listId}
        className="fixed z-[200] min-w-[176px] rounded-xl border border-amber-200 bg-[#fdfcfa] py-1 shadow-xl ring-1 ring-stone-900/5"
        style={{ top: coords.top, left: coords.left }}
        role="listbox"
      >
        {OPTIONS.map((o) => (
          <button
            key={o.lang}
            type="button"
            role="option"
            aria-selected={o.lang === lang}
            onClick={() => {
              setLanguage(o.lang);
              setOpen(false);
            }}
            className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-stone-700 transition-colors hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-amber-400/40"
          >
            <span>{o.flag}</span>
            <span className="flex-1">{o.label}</span>
            <span className="text-stone-400">{o.code}</span>
          </button>
        ))}
      </div>,
      document.body,
    );

  return (
    <div className="relative z-50">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1 rounded-lg px-2 py-1 text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
          lightSurface
            ? 'text-stone-700 hover:bg-amber-100'
            : 'text-white/90 hover:bg-white/10'
        }`}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={open ? listId : undefined}
      >
        <span>{active.code}</span>
        <ChevronDown className="h-3.5 w-3.5 opacity-70" />
      </button>
      {dropdown}
    </div>
  );
}
