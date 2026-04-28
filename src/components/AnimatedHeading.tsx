import { useEffect, useMemo, useState } from 'react';

const CHAR_DELAY_MS = 30;
const START_DELAY_MS = 200;
const CHAR_TRANSITION_MS = 500;

type AnimatedHeadingProps = {
  text: string;
  className?: string;
};

export function AnimatedHeading({ text, className = '' }: AnimatedHeadingProps) {
  const lines = useMemo(() => text.split('\n'), [text]);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setStarted(true), START_DELAY_MS);
    return () => window.clearTimeout(id);
  }, []);

  const charsBeforeLine = (upToLine: number) =>
    lines.slice(0, upToLine).reduce((acc, l) => acc + l.length, 0);

  return (
    <span className={`inline-block ${className}`}>
      {lines.map((line, lineIndex) => {
        const chars = [...line];
        return (
          <span key={lineIndex} className="block">
            {chars.map((char, charIndex) => {
              const offset = charsBeforeLine(lineIndex);
              const stagger =
                offset * CHAR_DELAY_MS + charIndex * CHAR_DELAY_MS;
              const display = char === ' ' ? '\u00A0' : char;

              return (
                <span
                  key={`${lineIndex}-${charIndex}`}
                  className="inline-block transition-[opacity,transform] will-change-transform"
                  style={{
                    transitionDuration: `${CHAR_TRANSITION_MS}ms`,
                    opacity: started ? 1 : 0,
                    transform: started ? 'translateX(0)' : 'translateX(-18px)',
                    transitionDelay: `${stagger}ms`,
                  }}
                >
                  {display}
                </span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}
