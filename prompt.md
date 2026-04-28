# RouteCanela — Full Website Rebuild Prompt

## Project Overview

Build a complete, multi-page React + TypeScript + Vite + Tailwind CSS website for **RouteCanela**, a Berlin cycling route discovery platform. The design language is cinematic and dark — a liquid-glass aesthetic with a full-screen video hero, smooth entrance animations, and a warm amber/gold accent palette that evokes the brand name "Canela" (cinnamon). No UI libraries. No purple or indigo. All pages live inside a single-page React app using React Router.

---

## Stack & Setup

- **React + TypeScript + Vite**
- **Tailwind CSS** (extend config as specified)
- **React Router v6** for client-side routing
- **Google Font: Inter** — import via `<link>` in `index.html`:
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
  ```
- In `tailwind.config.ts`, extend: `fontFamily: { sans: ['Inter', 'sans-serif'] }`
- On `body` in global CSS: `font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;`
- Global background: `#0a0a0a` (near-black)
- Global text: white
- Accent color: `#D4A853` (warm amber/gold — "canela")

---

## Global CSS

Add to `index.css` or `globals.css`:

```css
/* Liquid Glass */
.liquid-glass {
  background: rgba(0, 0, 0, 0.4);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}
.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(
    180deg,
    rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.1) 80%, rgba(255,255,255,0.3) 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

/* Accent glass — warm amber tint */
.accent-glass {
  background: rgba(212, 168, 83, 0.15);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  box-shadow: inset 0 1px 1px rgba(212, 168, 83, 0.2);
  position: relative;
  overflow: hidden;
}
```

---

## Reusable Components

### `FadeIn`
Wrapper component. Props: `delay` (ms), `duration` (ms, default 1000), `className`.  
Starts `opacity: 0`, sets `opacity: 1` after `delay` via `setTimeout` + React state.  
Uses `transition-opacity` Tailwind class + inline `transitionDuration`.

### `AnimatedHeading`
Props: `text` (string with `\n` literal line breaks), `className`.  
Splits by `\n` into lines, each line into characters.  
Each character: `<span>` with `display: inline-block`, CSS transition on `opacity` and `transform: translateX`.  
Initial state: `opacity: 0`, `translateX(-18px)`.  
Final state: `opacity: 1`, `translateX(0)`.  
`charDelay = 30ms`. Delay per char: `(lineIndex * lineLength * charDelay) + (charIndex * charDelay)`.  
Whole animation starts after 200ms. Each char transition: 500ms.  
Spaces render as `\u00A0`.

### `LanguageSwitcher`
A dropdown component. Props: none (reads from a global `LanguageContext`).  
The trigger button shows the active language code (e.g. `DE`, `EN`, `ES`) with a small caret icon.  
On click, a dropdown panel appears below with the three options, each showing: flag emoji + language name + code.  
Options:
- 🇩🇪 Deutsch · DE
- 🇬🇧 English · EN  
- 🇪🇸 Español · ES

Use a `LanguageContext` (React Context + `useState`) that holds the current language and a `setLanguage` function. Wrap the entire app in this provider. All user-facing strings are defined in a `translations.ts` file (see Translations section). The switcher uses `useLanguage()` hook that consumes the context.  
Dropdown: `liquid-glass border border-white/20 rounded-xl` panel, min-width 160px, `z-50`, absolutely positioned below the trigger. Closes on outside click.

### `Navbar`
Fixed, full-width, top-0, z-50. Does NOT have a background itself — its inner bar does.  
Horizontal padding: `px-6 md:px-12 lg:px-16`, top padding: `pt-6`.

**Inner bar**: `.liquid-glass rounded-xl px-4 py-2 flex items-center` — three zones:

- **Left (menu)**: Uses `useLocation()` to detect if we are on a detail page (pathname matches `/events/:id`, `/news/:id`, or `/routes/:id`).
  - **On detail pages**: Show a subtle back arrow button before the nav links. Format: `← Events` / `← News` / `← Routes` depending on the parent section. Style: `flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors mr-4`. Use lucide `ArrowLeft` icon `w-3.5 h-3.5`. Clicking it calls `navigate(-1)` (React Router `useNavigate`).
  - **Always**: Nav links — `Home`, `Routes`, `Events`, `News`. `text-sm gap-6 hidden md:flex`. Each is a `<NavLink>`. Active: `text-amber-400`. Inactive: `text-white/80 hover:text-white`. Transition: `transition-colors duration-200`.

- **Center (logo)**: `<img src="https://www.routecanela.de/assets/img/logo.png" alt="RouteCanela" className="h-8" />`.  
  Absolutely positioned center of the bar (`absolute left-1/2 -translate-x-1/2`).

- **Right (actions)**: Three items in a row, `flex items-center gap-3`.
  1. **Search icon button**: lucide `Search` `w-4 h-4`. On click → opens full-screen search overlay.
  2. **Language switcher**: `<LanguageSwitcher />`.
  3. **Login button**: `bg-white text-black px-5 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors`.

**Mobile**: Below `md`, show a hamburger icon on the right. Nav links slide in from the left as a drawer (`.liquid-glass` panel, full height, `w-64`). The drawer also contains the back arrow (if on a detail page), language switcher, and login button.

### `Footer`
Four columns on desktop, stacked on mobile. Dark background (`bg-black/60 backdrop-blur`), top border `border-t border-white/10`, padding `py-16 px-6 md:px-12 lg:px-16`.

Columns:
1. **Brand**: Logo image + tagline (translated). Below: social icons (Instagram, Facebook, X/Twitter) as icon-only buttons.
2. **Subscribe**: Short translated description + email input field (`liquid-glass border border-white/20 rounded-lg px-4 py-2 text-sm text-white placeholder-white/40 outline-none w-full`) + `bg-amber-500 hover:bg-amber-400 text-black font-medium px-4 py-2 rounded-lg text-sm` subscribe button.
3. **Links**: Quick links list — Home, Routes, Events, News. `text-white/60 hover:text-white text-sm gap-2`.
4. **Contact**: Email address, location text ("Berlin, Germany"). Small map pin icon next to location.

Bottom bar: `© 2024 RouteCanela · All rights reserved` centered, `text-white/30 text-xs pt-8`.

### `RouteCard`
Props: `name`, `image`, `duration`, `distance`, `difficulty` (optional), `tags` (string[]).  
Card: `rounded-2xl overflow-hidden group cursor-pointer` with hover scale effect `hover:scale-[1.02] transition-transform duration-300`.  
Image: full-width, `h-52 object-cover`.  
Bottom section: `liquid-glass p-4`.  
Route name: `text-lg font-semibold`.  
Stats row: `text-sm text-white/60` — clock icon + duration, map pin icon + distance.  
Tags: small pill badges `bg-white/10 text-white/70 text-xs px-2 py-0.5 rounded-full`.

### `EventCard`
Props: `title`, `image`, `category` (optional), `slug` (string — used as the link target).  
The entire card is wrapped in a `<Link to={/events/${slug}}>` — **always**, including on the home page. `cursor-pointer` is set on the card wrapper.  
Card: `rounded-2xl overflow-hidden relative group cursor-pointer block`.  
Image fills the card: `w-full h-full object-cover`.  
Gradient overlay at bottom: `from-black/80 to-transparent`.  
Title: bottom-left, `text-white font-semibold text-lg`.  
Category badge top-right: `liquid-glass text-xs px-3 py-1 rounded-full text-amber-400`.

### `NewsCard`
Props: `title`, `image`, `excerpt` (optional), `slug` (string — used as the link target).  
The entire card is wrapped in a `<Link to={/news/${slug}}>` — **always**, including on the home page. `cursor-pointer` on the wrapper.  
Layout: image on top, text block below on `bg-white/5 rounded-b-2xl p-4`.

### `SectionHeader`
Props: `title`, `subtitle` (optional), `align` (`left` | `center`).  
Title: `text-3xl md:text-4xl font-normal text-white` with `letterSpacing: '-0.03em'`.  
Small amber line accent below title: `w-12 h-0.5 bg-amber-400 mt-3 mb-2`.  
Subtitle: `text-white/60 text-base`.

### `SearchOverlay`
Full-screen overlay, `fixed inset-0 z-[100] bg-black/80 backdrop-blur-md`.  
Centered search input: large, `text-2xl text-white bg-transparent border-b border-white/30 outline-none w-full max-w-xl`.  
Close button (×) top-right.  
As the user types, filter routes and events by name — show results as a list of `RouteCard`-style compact rows below.  
Animate in: `opacity-0 → opacity-1` + `translateY(-8px) → translateY(0)` over 200ms.

---

## Translations

Create `src/translations.ts` with this structure:

```ts
export type Lang = 'DE' | 'EN' | 'ES';

export const t: Record<Lang, Record<string, string>> = {
  DE: {
    nav_home: 'Home',
    nav_routes: 'Routen',
    nav_events: 'Events',
    nav_news: 'Neuigkeiten',
    hero_heading: 'Berlin\nauf zwei Rädern.',
    hero_sub: 'Entdecke die schönsten Fahrradrouten durch Berlins lebhafteste Viertel.',
    hero_cta_primary: 'Routen entdecken',
    hero_cta_secondary: 'Mehr erfahren',
    routes_title: 'Unsere Routen',
    routes_subtitle: 'Erforsche Berlin auf eigene Faust.',
    events_title: 'Events',
    events_subtitle: 'Was in Berlin los ist.',
    news_title: 'Neuigkeiten',
    news_subtitle: 'Aktuelles aus der Community.',
    footer_tagline: 'Berlin entdecken, einen Weg nach dem anderen.',
    footer_subscribe: 'Abonnieren',
    footer_subscribe_placeholder: 'Deine E-Mail',
    footer_links: 'Links',
    footer_contact: 'Kontakt',
    footer_follow: 'Folge uns',
    login: 'Anmelden',
    search_placeholder: 'Suche nach Routen, Events...',
    filter_all: 'Alle',
    filter_short: 'Kurz',
    filter_medium: 'Mittel',
    filter_long: 'Lang',
    testimonials_title: 'Was unsere Community sagt',
    back_to_events: '← Events',
    back_to_news: '← Neuigkeiten',
    back_to_routes: '← Routen',
    more_events: 'Weitere Events',
    more_stories: 'Weitere Artikel',
    start_route: 'Route starten',
    highlights: 'Highlights',
    not_found_title: 'Auf der falschen Route?',
    not_found_sub: 'Diese Seite existiert nicht — aber Berlin wartet draußen.',
    not_found_cta: 'Zurück zur Startseite',
    see_all_routes: 'Alle Routen',
    see_all_events: 'Alle Events',
    see_all_news: 'Alle Neuigkeiten',
  },
  EN: {
    nav_home: 'Home',
    nav_routes: 'Routes',
    nav_events: 'Events',
    nav_news: 'News',
    hero_heading: 'Berlin\non two wheels.',
    hero_sub: 'Discover the most beautiful cycling routes through Berlin\'s most vibrant neighbourhoods.',
    hero_cta_primary: 'Explore Routes',
    hero_cta_secondary: 'Learn More',
    routes_title: 'Our Routes',
    routes_subtitle: 'Explore Berlin at your own pace.',
    events_title: 'Events',
    events_subtitle: 'What\'s happening in Berlin.',
    news_title: 'News',
    news_subtitle: 'Latest from the community.',
    footer_tagline: 'Discovering Berlin, one route at a time.',
    footer_subscribe: 'Subscribe',
    footer_subscribe_placeholder: 'Your email',
    footer_links: 'Links',
    footer_contact: 'Contact',
    footer_follow: 'Follow us',
    login: 'Login',
    search_placeholder: 'Search routes, events...',
    filter_all: 'All',
    filter_short: 'Short',
    filter_medium: 'Medium',
    filter_long: 'Long',
    testimonials_title: 'What our community says',
    back_to_events: '← Events',
    back_to_news: '← News',
    back_to_routes: '← Routes',
    more_events: 'More Events',
    more_stories: 'More Stories',
    start_route: 'Start this route',
    highlights: 'Highlights',
    not_found_title: 'Wrong turn?',
    not_found_sub: 'This page doesn\'t exist — but Berlin is waiting outside.',
    not_found_cta: 'Back to Home',
    see_all_routes: 'All Routes',
    see_all_events: 'All Events',
    see_all_news: 'All News',
  },
  ES: {
    nav_home: 'Inicio',
    nav_routes: 'Rutas',
    nav_events: 'Eventos',
    nav_news: 'Noticias',
    hero_heading: 'Berlín\nen dos ruedas.',
    hero_sub: 'Descubre las rutas ciclistas más bellas por los barrios más vibrantes de Berlín.',
    hero_cta_primary: 'Explorar Rutas',
    hero_cta_secondary: 'Saber más',
    routes_title: 'Nuestras Rutas',
    routes_subtitle: 'Explora Berlín a tu ritmo.',
    events_title: 'Eventos',
    events_subtitle: 'Lo que pasa en Berlín.',
    news_title: 'Noticias',
    news_subtitle: 'Lo último de la comunidad.',
    footer_tagline: 'Descubriendo Berlín, una ruta a la vez.',
    footer_subscribe: 'Suscribirse',
    footer_subscribe_placeholder: 'Tu correo',
    footer_links: 'Enlaces',
    footer_contact: 'Contacto',
    footer_follow: 'Síguenos',
    login: 'Iniciar sesión',
    search_placeholder: 'Buscar rutas, eventos...',
    filter_all: 'Todos',
    filter_short: 'Corta',
    filter_medium: 'Media',
    filter_long: 'Larga',
    testimonials_title: 'Lo que dice nuestra comunidad',
    back_to_events: '← Eventos',
    back_to_news: '← Noticias',
    back_to_routes: '← Rutas',
    more_events: 'Más Eventos',
    more_stories: 'Más Artículos',
    start_route: 'Iniciar ruta',
    highlights: 'Destacados',
    not_found_title: '¿Ruta equivocada?',
    not_found_sub: 'Esta página no existe — pero Berlín te espera ahí fuera.',
    not_found_cta: 'Volver al inicio',
    see_all_routes: 'Todas las Rutas',
    see_all_events: 'Todos los Eventos',
    see_all_news: 'Todas las Noticias',
  },
};
```

---

## Data

Create `src/data.ts` with the following static data:

### Routes (`src/data/routes.ts`)
```ts
export const routes = [
  { id: 'charlottenburg', name: 'Charlottenburg', image: 'https://www.routecanela.de/assets/img/routes/Charlottenburg.webp', duration: '30 min', distance: '7 km', events: ['Charlottenburger Frühlingsfest','Classic Open Air am Gendarmenmarkt','Lange Nacht der Museen','Herbstfest im Schlosspark Charlottenburg'], parks: ['Schlosspark Charlottenburg','Tiergarten','Volkspark Jungfernheide'], restaurants: ['The Bowl','Good Bank','Funky Fisch','Brammibal\'s Donuts'] },
  { id: 'schoneberg', name: 'Schöneberg', image: 'https://www.routecanela.de/assets/img/routes/Schoneberg.webp', duration: '1 hr 20 min', distance: '8.5 km', events: ['Schöneberger Frühling','Flohmarkt am Rathaus Schöneberg','Weihnachtsmarkt am Rathaus Schöneberg','Lesbisch-Schwules Stadtfest'], parks: ['Volkspark Schöneberg-Wilmersdorf','Gleisdreieck Park'], restaurants: ['Maharadscha','Daluma','Vaust Braugaststätte','Benedict'] },
  { id: 'kreuzberg', name: 'Kreuzberg', image: 'https://www.routecanela.de/assets/img/routes/Kreuzberg.webp', duration: '1 hr 30 min', distance: '9 km', events: ['XJAZZ Festival','Festival of Lights','Bergmannstraßenfest','MyFest'], parks: ['Görlitzer Park','Viktoriapark','Tempelhofer Feld','Prinzessinnengarten'], restaurants: ['Yellow Sunshine','Vöner','Brammibal\'s Donuts','Chay Viet'] },
  { id: 'friedenau', name: 'Friedenau', image: 'https://www.routecanela.de/assets/img/routes/Friedenau.webp', duration: '1 hr', distance: '6 km', events: ['Mercado semanal en Breslauer Platz','Talleres en el Nachbarschaftshaus Friedenau'], parks: ['Volkspark Friedenau','Biblioteca Municipal de Friedenau','Südgelände Natur-Park'], restaurants: ['Chay Long','Tianfuzius','Momos','Frau Lüske'] },
  { id: 'neukolln', name: 'Neukölln', image: 'https://www.routecanela.de/assets/img/routes/Neukolln.webp', duration: '45 min', distance: '8 km', events: ['Neuköllner Maientage','Neukölln Arcaden Street Food Markt'], parks: ['Körnerpark','Britzer Garten','Park am Buschkrug'], restaurants: ['Jivamuktea Café','Ohlàlà Veganerie','Café Morgenrot'] },
  { id: 'prenzlauerberg', name: 'Prenzlauerberg', image: 'https://www.routecanela.de/assets/img/routes/Prenzlauerberg.webp', duration: 'TBD', distance: 'TBD', events: ['Sommerfest im Mauerpark','Jazz im Park'], parks: ['Ernst-Thälmann-Park','Kollwitzplatz','Volkspark Friedrichshain'], restaurants: ['Brammibal\'s Donuts','Happies','Satt & Glücklich'] },
  { id: 'berlin-mitte', name: 'Berlín Mitte', image: 'https://www.routecanela.de/assets/img/routes/Berlin_Mitte.webp', duration: 'TBD', distance: 'TBD', events: ['Berlinale','MaerzMusik','Gallery Weekend Berlin','Karneval der Kulturen','Fête de la Musique'], parks: ['Tiergarten','Volkspark am Weinbergsweg','James-Simon-Park','Park am Gleisdreieck'], restaurants: ['Cookies Cream','Daluma','Kopps','The Bowl'] },
  { id: 'steglitz', name: 'Steglitz', image: 'https://www.routecanela.de/assets/img/routes/Steglitz.webp', duration: '2 hrs', distance: '13 km', events: ['Sommerkonzert im Stadtpark Steglitz','Steglitzer Weinfest','Herbstfest im Stadtpark'], parks: ['Stadtpark Steglitz','Wrangelpark','Bäkepark','Schloßpark Lichterfelde'], restaurants: ['Saravanaa Bhavan','Plant Base','Hans Wurst','Café Bleibtreu'] },
];
```

### Events (`src/data/events.ts`)
```ts
export const events = [
  { id: 1, slug: 'tiergarten', title: 'Tiergarten', image: 'https://www.routecanela.de/assets/img/events/Eventos_Tiergarten_Fahrrad_Route.jpg', category: 'Park', date: 'Every Saturday, 08:00–18:00', location: 'Tiergarten, Berlin Mitte', duration: '3–4 hours', price: 'Free', description: 'Berlin\'s most beloved green lung comes alive every weekend. Cycle through 210 hectares of ancient forest, past rowboats drifting on the Neuer See, and along paths lined with sculptures. This is the Berlin that locals keep to themselves — unhurried, quiet, and surprisingly wild at its heart.', highlights: ['Neuer See & rowboat rental', 'Victory Column viewpoint', 'Rose Garden in bloom (May–Oct)', 'Hidden beer gardens along the paths'] },
  { id: 2, slug: 'festival-arte', title: 'Festival Arte', image: 'https://www.routecanela.de/assets/img/events/Eventos_Neukolln_Fahrrad_Route_Restaurant.jpg', category: 'Art', date: '12–20 July 2024', location: 'Neukölln Arts Quarter', duration: 'Full day', price: '€5 suggested donation', description: 'Neukölln\'s most eclectic arts festival spills out of gallery doors and into the streets every summer. Expect large-scale murals being painted live, open studio visits, and a twilight market where artists sell work directly. The energy is collaborative rather than commercial — bring curiosity, leave with something you\'ll treasure.', highlights: ['Live mural painting sessions', 'Open studio tours (free)', 'Twilight art market', 'Community music stage from 18:00'] },
  { id: 3, slug: 'concierto', title: 'Concierto en Kreuzberg', image: 'https://www.routecanela.de/assets/img/events/Eventos_Kreuzberg_Fahrrad_Route.jpg', category: 'Music', date: '3 August 2024, 20:00', location: 'Görlitzer Park, Kreuzberg', duration: '3 hours', price: 'Free entry', description: 'As the sun sets over Görlitzer Park, a stage rises and Kreuzberg transforms into an open-air concert hall. The lineup mixes jazz, electronic, and Latin rhythms — a reflection of the neighbourhood\'s famously diverse soul. Bring a blanket, grab a Club Mate, and settle in.', highlights: ['Live jazz & electronic sets', 'Street food stalls from 18:00', 'Bike parking area on-site', 'Dog-friendly event'] },
  { id: 4, slug: 'palacio-charlottenburg', title: 'Palacio Charlottenburg', image: 'https://www.routecanela.de/assets/img/events/Charlottenburg-Fahrrad-route.jpg', category: 'Culture', date: 'Open year-round, Tue–Sun 10:00–17:30', location: 'Spandauer Damm 10–22, Charlottenburg', duration: '2–3 hours', price: '€12 / €8 concession', description: 'The largest surviving royal residence in Berlin is a study in Baroque excess — gilded halls, porcelain cabinets, and formal gardens that stretch toward the Spree. The cycle ride here through the western avenues of Charlottenburg is itself part of the experience. Arrive before 10:00 to have the gardens almost entirely to yourself.', highlights: ['Golden Tower with panoramic views', 'Porcelain Cabinet & Oak Gallery', 'Formal gardens (free entry)', 'Museum café in the orangery'] },
  { id: 5, slug: 'mercado-pulgas', title: 'Mercado de Pulgas', image: 'https://www.routecanela.de/assets/img/events/Eventos_Prenzlauer_Berg_Fahrrad_Route.jpg', category: 'Market', date: 'Every Sunday, 09:00–16:00', location: 'Mauerpark, Prenzlauerberg', duration: '2–4 hours', price: 'Free entry', description: 'Mauerpark\'s legendary flea market is part treasure hunt, part street theatre. Over 200 vendors lay out vintage clothing, DDR-era curiosities, vinyl records, and handmade goods along the former death strip. The karaoke amphitheatre next door provides a joyful soundtrack. Come hungry — the food stalls are exceptional.', highlights: ['200+ vendors every Sunday', 'Infamous Bearpit Karaoke from 15:00', 'Vintage & vinyl specialist stalls', 'International street food court'] },
  { id: 6, slug: 'isla-museos', title: 'Isla de los Museos', image: 'https://www.routecanela.de/assets/img/events/Eventos_Mitte_Berlin_Fahrrad_Route.jpg', category: 'Museum', date: 'Tue–Sun 10:00–18:00 (Thu until 20:00)', location: 'Museumsinsel, Berlin Mitte', duration: 'Half to full day', price: '€18 day pass (all 5 museums)', description: 'A UNESCO World Heritage island in the middle of the Spree river, home to five world-class museums within easy cycling distance of each other. The Pergamon\'s ancient gates, the Nefertiti bust in the Neues Museum, and the golden treasures of the Bode — a day pass unlocks all of it. Lock your bike at the island\'s dedicated stands and walk the rest.', highlights: ['Pergamon Altar & Ishtar Gate', 'Bust of Nefertiti (Neues Museum)', 'Bode Museum sculpture collection', 'Outdoor café with Spree views'] },
  { id: 7, slug: 'tour-gastronomico', title: 'Tour Gastronómico', image: 'https://www.routecanela.de/assets/img/events/Eventos_Schoneberg_Fahrrad_Route.jpg', category: 'Food', date: 'Fridays & Saturdays, 18:00', location: 'Starting point: Schöneberg Rathaus', duration: '2.5 hours', price: '€35 per person (tastings included)', description: 'A guided cycle tour through Schöneberg\'s most authentic eating spots — from a family-run Turkish bakery that has been perfecting its simit since 1987, to a hidden Lebanese canteen with no sign on the door and a two-month waiting list. Seven tastings, four neighbourhoods, one very full stomach.', highlights: ['7 curated food tastings', 'Off-menu & reservation-only stops', 'Guided by a local food writer', 'Max 10 participants per tour'] },
  { id: 8, slug: 'picnic', title: 'Picnic Colectivo', image: 'https://www.routecanela.de/assets/img/events/Eventos_Steglitz_Fahrrad_Route_Berlin.jpg', category: 'Outdoor', date: '25 August 2024, 12:00–19:00', location: 'Stadtpark Steglitz', duration: 'All afternoon', price: 'Free — bring your own food', description: 'A community picnic for cyclists and neighbours in the tranquil Stadtpark Steglitz. Lay your blanket next to strangers who quickly become friends. There\'s a kids\' bike skills course at 14:00 and a gentle guided sunset ride at 18:00 for those who want to close the day on two wheels.', highlights: ['Community blanket gathering', 'Kids\' bike skills course at 14:00', 'Guided sunset ride at 18:00', 'Dog-friendly & family event'] },
  { id: 9, slug: 'nature-park', title: 'Nature Park Tour', image: 'https://www.routecanela.de/assets/img/events/Eventos_Zehlendorf_Fahrrad_Route.jpg', category: 'Nature', date: 'Every Sunday, 09:30', location: 'Zehlendorf S-Bahn station', duration: '4 hours', price: '€10 guided / free self-guided', description: 'Leave the city behind without leaving the city. The forests and lakes of Zehlendorf — the Grunewald, the Wannsee, the Pfaueninsel — make up one of Europe\'s great urban nature reserves. Join the Sunday guided group or download the self-guided PDF and go at your own pace. Either way, wear layers.', highlights: ['Grunewald ancient forest', 'Wannsee lakeside cycling', 'Pfaueninsel (Peacock Island) ferry', 'Wildlife spotting: deer, herons, foxes'] },
  { id: 10, slug: 'julio-2024', title: 'Fête de la Musique — Julio', image: 'https://www.routecanela.de/assets/img/events/Eventos_Tempelhof_Berlin_Fahrrad_Route.jpg', category: 'Monthly', date: '21 July 2024, 14:00–midnight', location: 'Tempelhofer Feld', duration: 'Full evening', price: 'Free', description: 'Berlin\'s edition of the global music celebration takes over the vast open runways of Tempelhofer Feld every summer. Dozens of stages, hundreds of acts, and a crowd that cycles in from every corner of the city. The scale is staggering — you could wander the stages for hours and never hear the same song twice.', highlights: ['40+ stages across the airfield', 'Genres: jazz, punk, classical, techno', 'Bike-in concert format', 'Food trucks & pop-up bars throughout'] },
  { id: 11, slug: 'septiembre-2024', title: 'Lange Nacht der Museen — Sep', image: 'https://www.routecanela.de/assets/img/events/Eventos_Mitte_Berlin_Fahrrad_Route.jpg', category: 'Monthly', date: '28 September 2024, 18:00–02:00', location: 'Citywide — 80+ museums', duration: 'One night', price: '€18 (single ticket, all venues)', description: 'One night, one ticket, 80 museums open until 2am. Berlin\'s legendary long night of museums is best navigated by bicycle — there are dedicated cycle routes between clusters of venues, and the mood across the city is festive and unhurried. Highlights this edition include the Egyptian Museum, the Technikmuseum, and a special after-dark installation at the Hamburger Bahnhof.', highlights: ['80+ museums, one ticket', 'Special night-only installations', 'Cycle route map provided', 'Late-night bar at Hamburger Bahnhof'] },
  { id: 12, slug: 'mayo-2024', title: 'Köpenick im Grünen — Mayo', image: 'https://www.routecanela.de/assets/img/events/Eventos_Kopenick_Berlin_Fahrrad.jpg', category: 'Monthly', date: '18–19 May 2024', location: 'Alt-Köpenick, Berlin East', duration: 'Full weekend', price: 'Free', description: 'The waterside district of Köpenick hosts its annual outdoor festival on the Müggelspree banks each May — a calm, local affair of boat races, lakeside concerts, and a craft market that draws artisans from across Brandenburg. It\'s a long ride out east, but the forest paths and waterway scenery make it one of the most beautiful cycles the city offers.', highlights: ['Boat races on the Müggelspree', 'Craft & artisan market', 'Lakeside live music', 'Ferry trips to the Müggelsee'] },
];

### News (`src/data/news.ts`)
```ts
export const news = [
  { id: 1, slug: 'bosque-encantado', title: 'Bosque Encantado', image: 'https://www.routecanela.de/assets/img/news/Eventos_spandau_Berlin_Fahrrad_Route.jpg', date: '14 June 2024', author: 'Laura Méndez', readTime: '4 min read', excerpt: 'A hidden forest trail in Spandau that most Berliners have never heard of.', body: 'Deep in the western edge of Berlin, beyond the brick towers of the Spandau Citadel, a trail cuts into a forest that feels entirely removed from the city. Locals call it the Bosque Encantado — the enchanted forest — though you won\'t find that name on any map.\n\nThe route runs alongside a quiet canal for the first two kilometres before climbing into dense oak and birch. In spring, the forest floor turns blue-white with wild garlic flowers. In autumn, it glows amber. Both seasons are worth a separate visit.\n\nThe trail is unpaved but flat enough for standard city bikes. The only hazard is losing track of time — there\'s no phone signal for most of the loop, which, depending on your perspective, is either a warning or the whole point.\n\nWe recommend combining this with the Spandau route, which passes the Citadel and ends near the old town\'s waterfront. Give yourself a full morning.', tags: ['Nature', 'Hidden gems', 'Spandau'] },
  { id: 2, slug: 'cafe-sentidos', title: 'Café Sentidos', image: 'https://www.routecanela.de/assets/img/events/Eventos_Neukolln_Fahrrad_Route_Restaurant.jpg', date: '2 June 2024', author: 'Tomás García', readTime: '3 min read', excerpt: 'A small café in Neukölln that has quietly become one of Berlin\'s most interesting stops on two wheels.', body: 'There is no sign above the door at Café Sentidos. You find it the same way most people do — a recommendation whispered over coffee, a photo shared with the caption "you have to go".\n\nThe café occupies the ground floor of a converted Gründerzeit building on a side street behind Hermannplatz. The owner, originally from Oaxaca, roasts her own beans and bakes everything from scratch before 7am. The menu is five items, rotating daily, written on a small blackboard behind the espresso machine.\n\nWhat makes it special for cyclists is the courtyard at the back — a hidden garden that fits about twenty people, shaded by a fig tree, with bike hooks bolted to the walls. It is exactly the kind of place a neighbourhood keeps secret for as long as possible.\n\nWe stumbled across it on a RouteCanela ride through Neukölln and have since rerouted three of our circuits to include it. Consider this your official warning: it gets crowded by 9am on weekends.', tags: ['Food', 'Neukölln', 'Coffee'] },
  { id: 3, slug: 'jardin-secreto', title: 'Jardín Secreto', image: 'https://www.routecanela.de/assets/img/events/Eventos_Kreuzberg_Fahrrad_Route.jpg', date: '20 May 2024', author: 'Anna Schulz', readTime: '5 min read', excerpt: 'A community garden in Kreuzberg built entirely by residents — and the cyclists who helped carry the soil.', body: 'It started as a question posted on a neighbourhood forum: "Does anyone want to turn the empty lot on Graefestraße into something green?" Forty people showed up the following Saturday. Six months later, the Jardín Secreto has raised beds, a tool library, a small stage for events, and a waiting list for plot allocations.\n\nWhat the forum post didn\'t mention — and what has become one of the garden\'s best stories — is that the first 200kg of compost soil was transported almost entirely by bicycle. A WhatsApp group coordinated cargo bike relays across three days, with riders coming from as far as Mitte and Tempelhof.\n\nThe garden is open to visitors Tuesday to Sunday from 10am. There\'s no charge to walk through, and volunteers are always welcome on Wednesday mornings. The herb section near the north fence is particularly impressive right now — rosemary, thyme, and three varieties of mint that the gardeners use to make tea for anyone who stops by.\n\nFor cyclists, the garden makes an excellent midpoint on the Kreuzberg route. Lock up at the gate and ask for whichever volunteer is on duty — they all have good recommendations for the rest of the ride.', tags: ['Community', 'Kreuzberg', 'Green spaces'] },
  { id: 4, slug: 'mercado-artesanal', title: 'Mercado Artesanal', image: 'https://www.routecanela.de/assets/img/events/Eventos_Steglitz_Fahrrad_Route_Berlin.jpg', date: '8 May 2024', author: 'Laura Méndez', readTime: '3 min read', excerpt: 'Every first Sunday of the month, Steglitz hosts a craft market that draws makers from across the region.', body: 'The Steglitz craft market has operated on the first Sunday of every month for eleven years, but it has never quite broken through to the tourist circuit — which is exactly why it remains so good.\n\nAround 60 makers set up on the esplanade beside the Stadtpark. You\'ll find ceramics thrown in studios in Zehlendorf, woodwork from a carpenter in Spandau, textiles woven in a collective in Wedding, and preserves made from fruit grown in allotment gardens across the city. Prices are fair. The makers want to talk about their work.\n\nThe market runs 10am to 5pm. Arrive by bike — there\'s a large dedicated parking area at the park entrance — and combine the visit with a loop through the Steglitz route, which passes through the park\'s more formal garden sections before heading toward the Schloßpark Lichterfelde.', tags: ['Market', 'Steglitz', 'Artisan'] },
  { id: 5, slug: 'museo-historia-natural', title: 'Museo de Historia Natural', image: 'https://www.routecanela.de/assets/img/events/Eventos_Tempelhof_Berlin_Fahrrad_Route.jpg', date: '29 April 2024', author: 'Tomás García', readTime: '4 min read', excerpt: 'The Natural History Museum is one of Berlin\'s most underrated institutions — and it\'s best reached by bike.', body: 'The Museum für Naturkunde sits on Invalidenstraße in a red-brick building that looks, from the outside, like it might contain administrative offices. Inside is one of the most extraordinary natural history collections in the world — including the world\'s largest mounted dinosaur skeleton, a 150-million-year-old Brachiosaurus at 13.27 metres tall.\n\nFor cyclists, the approach via Invalidenstraße is pleasant and direct from both Mitte and Wedding. The museum has bike stands outside the main entrance, and the surrounding streets are quiet enough for a relaxed ride.\n\nThe collection is strongest in palaeontology and meteorites, but the hall of biodiversity — a floor-to-ceiling glass cabinet of taxidermy from around the world — is genuinely moving in a way that is difficult to articulate without seeing it.\n\nAdmission is €8, concessions available. Closed Mondays. We recommend a Tuesday or Wednesday visit for the smallest crowds.', tags: ['Museum', 'Mitte', 'History'] },
  { id: 6, slug: 'restaurante-ecologico', title: 'Restaurante Ecológico', image: 'https://www.routecanela.de/assets/img/events/Eventos_Tiergarten_Fahrrad_Route.jpg', date: '15 April 2024', author: 'Anna Schulz', readTime: '3 min read', excerpt: 'A zero-waste restaurant in Mitte that sources everything within 80km of the city.', body: 'When the menu says local, it means it. Every ingredient in the kitchen at Ernte comes from within 80 kilometres of Berlin city centre — grains from Brandenburg farms, dairy from a small cooperative in Havelland, vegetables from market gardens in the Spreewald.\n\nThe menu changes weekly, sometimes daily, and is written on paper rather than printed — a deliberate choice to avoid waste from reprinting. The wine list is exclusively German and Austrian biodynamic producers. The bread comes from a sourdough baker in Friedrichshain who delivers by cargo bike.\n\nSeating is limited to 28 covers. Bookings are essential for dinner; lunch is walk-in only until they\'re full (usually by 12:30). The restaurant is a natural endpoint to the Berlin Mitte cycling route — it sits two minutes from the Tiergarten, and the staff will recommend other local stops if you want to keep exploring after eating.', tags: ['Food', 'Sustainability', 'Mitte'] },
  { id: 7, slug: 'centro-cultural', title: 'Centro Cultural', image: 'https://www.routecanela.de/assets/img/events/Eventos_Zehlendorf_Fahrrad_Route.jpg', date: '1 April 2024', author: 'Laura Méndez', readTime: '4 min read', excerpt: 'A former power station in Zehlendorf turned into one of the city\'s most ambitious community arts spaces.', body: 'The Kulturwerk Zehlendorf has been open for just over two years, but it feels like it has always been here — the kind of place that a neighbourhood needs without quite knowing it until it arrives.\n\nThe building is a former electrical substation, built in 1912, its thick brick walls and tall windows perfectly suited to the gallery space it has become. The programme runs from contemporary art exhibitions to film screenings, ceramics workshops, language exchanges, and a monthly vinyl listening night that draws collectors from across the city.\n\nThe centre is run by a foundation with a diverse board of local residents, businesses, and artists — which shows in the programming. There\'s a genuine effort to reflect the neighbourhood\'s different communities rather than serve a single demographic.\n\nCycling to the Kulturwerk from central Berlin takes about 45 minutes via the forest paths of the Grunewald. It\'s worth building an afternoon around: ride out through the trees, spend two hours at the centre, and ride back as the light changes.', tags: ['Culture', 'Zehlendorf', 'Arts'] },
  { id: 8, slug: 'parque-acuatico', title: 'Parque Acuático', image: 'https://www.routecanela.de/assets/img/events/Eventos_Mitte_Berlin_Fahrrad_Route.jpg', date: '18 March 2024', author: 'Tomás García', readTime: '3 min read', excerpt: 'Berlin\'s open-air swimming season starts earlier than you think — here\'s where to go and how to get there.', body: 'Berliners are serious about open-air swimming. The city has 59 outdoor swimming areas — lakes, rivers, lidos — and the season officially opens in late May, though regulars are in the water weeks before.\n\nFor cyclists, the most accessible combination is the Wannsee bathing beach in Zehlendorf, a 35-minute ride from the city centre through the Grunewald forest. It\'s the same beach where generations of Berliners have swum since 1907, and it remains one of the finest urban beaches in Europe — a long crescent of sand on a glacial lake, backed by pine trees.\n\nThe Orankesee in Lichtenberg is smaller, quieter, and completely off the tourist circuit — a 20-minute cycle from Friedrichshain through residential streets. It has a lawn, a small dive platform, and a kiosk that sells exactly three things: ice cream, radler, and bratwurst.\n\nWe publish a full guide to Berlin\'s cycling-accessible swimming spots each spring. Sign up for the newsletter to receive it when it\'s ready.', tags: ['Swimming', 'Summer', 'Lakes'] },
  { id: 9, slug: 'parque-aventuras-medieval', title: 'Parque Aventuras Medieval', image: 'https://www.routecanela.de/assets/img/news/Eventos_spandau_Berlin_Fahrrad_Route.jpg', date: '5 March 2024', author: 'Anna Schulz', readTime: '5 min read', excerpt: 'The Spandau Citadel\'s annual medieval festival is one of Berlin\'s most spectacular weekends — and cyclists get the best approach.', body: 'Every June, the Spandau Citadel — a Renaissance fortress that has stood at the confluence of the Havel and Spree rivers since 1559 — is taken over by one of Germany\'s largest medieval festivals. Knights, falconers, armourers, fire jugglers, and market traders fill the courtyards for three days, drawing around 80,000 visitors over the weekend.\n\nFor cyclists, the approach is one of the great Berlin rides: west along the Spree, through the forests of Spandau, and across the drawbridge into the fortress itself. The route avoids the traffic congestion that makes driving to the festival a misery. Several hundred cyclists arrive this way each year.\n\nThe festival runs Friday evening to Sunday, with the jousting tournament scheduled for both Saturday and Sunday afternoons. Evening programmes include fire shows and a medieval banquet (bookable separately). Tickets: €14 / €9 concession / children under 12 free.\n\nPlan to arrive by 10am to see the artisan workshops in full swing. By midday the courtyards are at capacity, and the atmosphere — that particular mix of spectacle and genuine craft — is something worth giving your full attention.', tags: ['Festival', 'Spandau', 'History'] },
];
```

### Testimonials (`src/data/testimonials.ts`)
```ts
export const testimonials = [
  { name: 'Emma King', avatar: 'https://www.routecanela.de/assets/img/testimonials/emmak.jpg', text: '"A beautiful way to explore Berlin."' },
  { name: 'Maria Wenke', avatar: 'https://www.routecanela.de/assets/img/testimonials/mariaw.jpg', text: '"My favourite weekend activity."' },
  { name: 'Thomas Gron', avatar: 'https://www.routecanela.de/assets/img/testimonials/thomasg.jpg', text: '"Routes are well thought out and fun."' },
  { name: 'Sophie Langer', avatar: 'https://www.routecanela.de/assets/img/testimonials/sophiel.jpg', text: '"I discovered hidden gems I never knew existed."' },
  { name: 'Gustav Stahn', avatar: 'https://www.routecanela.de/assets/img/testimonials/gustavs.jpg', text: '"Perfect for the whole family."' },
  { name: 'Pablo Ruiz', avatar: 'https://www.routecanela.de/assets/img/testimonials/pablor.jpg', text: '"Como berlinés de adopción, esto es mágico."' },
  { name: 'Sara Haliba', avatar: 'https://www.routecanela.de/assets/img/testimonials/sarah.jpg', text: '"Beautifully curated and easy to follow."' },
];
```

---

## Routing

Use React Router v6 with `<BrowserRouter>` in `main.tsx`. Routes:
- `/` → `<HomePage />`
- `/routes` → `<RoutesPage />`
- `/routes/:id` → `<RouteDetailPage />`
- `/events` → `<EventsPage />`
- `/events/:id` → `<EventDetailPage />`
- `/news` → `<NewsPage />`
- `/news/:id` → `<NewsDetailPage />`
- `*` → `<NotFoundPage />` (catch-all, must be last)

Wrap all routes inside a `<Layout>` component that renders `<Navbar />`, `<Outlet />`, and `<Footer />`.  
**Exception**: `HomePage` renders its own hero section (with the video) flush to the top — the Layout's `<Outlet />` should have `pt-0` for the home page only (use `useLocation` to detect `/`).

### SEO — `document.title`
Every page sets its own browser tab title via `useEffect`. The format is always: **`RouteCanela`** — just the brand name on every page with no suffix. Set it at the top of each page component:
```tsx
useEffect(() => { document.title = 'RouteCanela'; }, []);
```
Apply this to: `HomePage`, `RoutesPage`, `RouteDetailPage`, `EventsPage`, `EventDetailPage`, `NewsPage`, `NewsDetailPage`, and `NotFoundPage`.

---

## Page: Home (`/`)

### Hero Section
Full-viewport (`min-h-screen`) section, `relative overflow-hidden`, black background.

**Video background**:
- `<video>` absolutely positioned, fills viewport (`absolute inset-0 w-full h-full`), `object-cover`.
- URL: `https://www.routecanela.de/assets/img/video_header.mp4`
- Attributes: `autoPlay loop muted playsInline preload="auto"`
- **`poster`**: Use the first frame of the video as a static image placeholder shown instantly while the video loads. Generate a poster by extracting the first frame and hosting it, OR use a solid dark image (`#0a0a0a`) as fallback — set it via the `poster` attribute on the `<video>` tag.
- **NO dark overlay, NO gradient, NO dimming layer.** The video plays raw.

**Video loading — performance & mobile reliability**:
The browser may silently block `autoPlay` on mobile even with `muted`. Add this `useEffect` in the hero component to force play after mount:
```tsx
const videoRef = useRef<HTMLVideoElement>(null);
useEffect(() => {
  const video = videoRef.current;
  if (!video) return;
  video.play().catch(() => {
    // Autoplay blocked — video stays on poster frame, which is fine
  });
}, []);
```
Attach `ref={videoRef}` to the `<video>` element.

**Smooth video reveal**: The video should fade in gracefully rather than popping in. Set `opacity-0` on the video initially, then set `opacity-100` once the `canplay` event fires. Use a `onCanPlay` handler and React state:
```tsx
const [videoReady, setVideoReady] = useState(false);
// <video ... onCanPlay={() => setVideoReady(true)}
//   className={`... transition-opacity duration-700 ${videoReady ? 'opacity-100' : 'opacity-0'}`} />
```
While `!videoReady`, the `poster` image (or black background) shows — no flash of broken layout.

**Mobile consideration**: On very slow connections, the video may never load. The black `#0a0a0a` body background acts as the final fallback — the hero text is still fully readable without the video.

**Content layer** (`absolute inset-0 flex flex-col`):
- Navbar sits at the top (rendered by Layout or included at top of hero).
- Hero text pushed to bottom: `flex-1 flex flex-col justify-end pb-12 lg:pb-16 px-6 md:px-12 lg:px-16`.
- **2-column grid on lg**: `lg:grid lg:grid-cols-2 lg:items-end`.

**Left column:**
- `<AnimatedHeading>` with translated `hero_heading` text (contains `\n`). Responsive: `text-4xl md:text-5xl lg:text-6xl xl:text-7xl`. `font-normal mb-4`. `letterSpacing: '-0.04em'`.
- Subheading: `<FadeIn delay={800}>`. `text-base md:text-lg text-gray-300 mb-5`.
- Buttons row `<FadeIn delay={1200}>`: flex-wrap, gap-4.
  - Primary: `bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors`
  - Secondary: `liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-all`

**Right column:**
- `<FadeIn delay={1400}>` wrapping a `flex items-end justify-start lg:justify-end h-full`.
- Glass tag card: `liquid-glass border border-white/20 px-6 py-3 rounded-xl`.
- Text: `"Exploring. Cycling. Discovering."` — `text-lg md:text-xl lg:text-2xl font-light`.

---

### Home — Routes Section (below hero)
`py-24 px-6 md:px-12 lg:px-16`  
`<SectionHeader title={t.routes_title} subtitle={t.routes_subtitle} align="left" />`  
Responsive grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10`  
Show first **6** routes from the routes data as `<RouteCard />` cards.  
Below grid: centered `<Link to="/routes">` button styled as `liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium`.

---

### Home — Events Section
`py-24 px-6 md:px-12 lg:px-16 bg-white/[0.02]`  
`<SectionHeader title={t.events_title} subtitle={t.events_subtitle} align="left" />`  
3-column grid on lg (2 on md, 1 on mobile), gap-6, mt-10.  
Show first **6** events as `<EventCard />`.  
Same "see all" link button below.

---

### Home — News Section
`py-24 px-6 md:px-12 lg:px-16`  
`<SectionHeader title={t.news_title} subtitle={t.news_subtitle} align="left" />`  
3-column grid, show first **3** news items as `<NewsCard />`.  
Same "see all" link button below.

---

### Home — Testimonials Section
`py-24 px-6 md:px-12 lg:px-16 bg-white/[0.02]`  
`<SectionHeader title={t.testimonials_title} align="center" />`  
Horizontal scroll row (or auto-scrolling marquee) of testimonial cards on mobile; 3-column grid on desktop.  
Each testimonial card: `liquid-glass border border-white/10 rounded-2xl p-6`.  
Avatar: `w-10 h-10 rounded-full object-cover`.  
Name: `text-sm font-semibold text-white`.  
Quote text: `text-white/60 text-sm mt-2`.

---

## Page: Routes (`/routes`)

**Page header**: No video. `pt-32 pb-12 px-6 md:px-12 lg:px-16` (to clear fixed navbar).  
Large title `<AnimatedHeading>` with `t.routes_title`. Subtitle in `text-white/60`.

**Filter bar** (below title, `mt-8 mb-10`):
A horizontal scrollable row of pill-filter buttons.  
Options: All · Short (≤1 hr) · Medium (1–2 hr) · Long (2+ hr)  
Active filter pill: `bg-amber-500 text-black font-medium`.  
Inactive: `liquid-glass border border-white/20 text-white/70 hover:text-white`.  
`text-sm px-5 py-2 rounded-full`.  
Filter logic: filter the `routes` array by duration category.

**Route grid**: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 lg:px-16 pb-24`.  
All 8 routes, each as a `<RouteCard />` that is also a `<Link to={/routes/${route.id}}>`.

**Testimonials section** at the bottom of this page (same as Home version).

---

## Page: Route Detail (`/routes/:id`)

Lookup route by `id` param. If not found, show a "Route not found" message.

**Hero sub-header**:
- Full-width image banner `h-80 object-cover rounded-b-3xl` with the route's image.
- Gradient overlay `from-black/60 to-transparent` from bottom.
- Route name overlaid at bottom-left: `text-4xl font-normal text-white` with `letterSpacing: '-0.03em'`.

**Content** (`px-6 md:px-12 lg:px-16 py-12`):

2-column layout on lg:
- **Left (2/3 width)**: 
  - Stats bar: `liquid-glass border border-white/10 rounded-2xl flex gap-8 px-6 py-4 mb-10`. Items: clock icon + duration, map-pin icon + distance. Each item `text-white/60 text-sm` label, `text-white font-semibold` value.
  - Three subsections (each with amber-accented sub-header `text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3`):
    - **Events** (calendar icon): unordered list, each item `text-white/80 text-sm py-1 border-b border-white/5`.
    - **Parks & Green Spaces** (tree icon): same list style.
    - **Restaurants** (utensils icon): same list style.

- **Right (1/3 width)**:
  - Sticky card (`sticky top-32`): `liquid-glass border border-white/20 rounded-2xl p-6`.
  - Title: "Start this route" (translated per lang).
  - Short description copy.
  - Full-width amber CTA button: `bg-amber-500 hover:bg-amber-400 text-black font-semibold w-full py-3 rounded-xl`.
  - Secondary: "Back to all routes" link in `text-white/50 hover:text-white text-sm`.

---

## Page: Events (`/events`)

**Page header**: `pt-32 pb-12 px-6 md:px-12 lg:px-16`.  
`<AnimatedHeading>` with `t.events_title`. Subtitle.

**Category filter bar** (same pill-style as Routes page):
Categories derived from the event data: All · Park · Art · Music · Culture · Market · Museum · Food · Outdoor · Nature · Monthly.  
Filter logic: filter `events` array by `category`.

**Events grid**: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12 lg:px-16 pb-24 mt-10`.  
All 12 events as `<EventCard />`. Each card is a `<Link to={/events/${event.slug}}>` — the entire card is clickable, no separate button needed.  
Each card is taller on this page: image height `h-72`.  
On hover: a subtle amber tint appears on the category badge, and the image scales slightly.

---

## Page: News (`/news`)

**Page header**: `pt-32 pb-12 px-6 md:px-12 lg:px-16`.  
`<AnimatedHeading>` with `t.news_title`. Subtitle.

**Layout**: Two-column on desktop (`lg:grid-cols-3 gap-8`).  
Featured first article: spans full width (`col-span-3`) with a large image (`h-96 object-cover`) and title overlaid. Rest of articles in `grid-cols-3`.  
All 9 news items as `<NewsCard />`.  
Each card is a `<Link to={/news/${news.slug}}>` — the entire card is clickable.  
Each card on hover: image slightly zooms in (`group-hover:scale-105 transition-transform duration-500`).

---

## Page: Event Detail (`/events/:id`)

Lookup event by `slug` param. If not found, show a "Not found" message with a back link.

**Design philosophy**: Spacious, editorial. One strong image, one clean body of information. No sidebars, no clutter. The user should feel like they're reading a beautifully laid-out magazine spread.

**Full-bleed hero image** (no navbar overlap — the fixed navbar floats above it):
- `w-full h-[55vh] object-cover` image at the top of the page (`pt-0` — image goes edge to edge).
- A subtle gradient at the very bottom of the image fades into `#0a0a0a`: `bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent h-32 absolute bottom-0 left-0 right-0`. This is the only gradient permitted — it merges the image into the page background, not an overlay.
- Category badge top-left corner (with `pt-24` to clear the navbar): `liquid-glass border border-white/20 text-amber-400 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full`.

**Content block** (`max-w-2xl mx-auto px-6 py-16`):
- Event title: `text-4xl md:text-5xl font-normal text-white mb-6` with `letterSpacing: '-0.03em'`. `<FadeIn delay={100}>`.
- Info strip: a single horizontal row of 3–4 key facts, separated by a thin `|` in `text-white/20`. Each fact: small lucide icon + text. Facts: Date, Location, Duration, Price. Style: `text-sm text-white/60 flex items-center gap-6 flex-wrap mb-10`. `<FadeIn delay={200}>`.
- Description body: `text-base text-white/80 leading-relaxed mb-12`. `<FadeIn delay={300}>`. Text comes from `event.description`.
- **Highlights section**: `<FadeIn delay={400}>`. Overline: `text-xs font-semibold uppercase tracking-widest text-amber-400 mb-4`. Then a clean list — NOT bullet points but a set of pill-style tags: `flex flex-wrap gap-2`. Each highlight: `liquid-glass border border-white/10 text-white/70 text-sm px-4 py-2 rounded-full`.
- **Back link** at the bottom: `← Back to Events` — `text-white/40 hover:text-white text-sm transition-colors flex items-center gap-2 mt-16`.

**Related events strip** (below content, full-width): A `py-16 px-6 md:px-12 lg:px-16` section with a `text-sm text-white/40 uppercase tracking-widest mb-6` label "More Events", then a horizontal scroll row of 3 other `<EventCard />` components (exclude the current event). On desktop: `grid grid-cols-3 gap-6`. Each is also a clickable link to its detail page.

---

## Page: News Detail (`/news/:id`)

Lookup news item by `slug` param. If not found, show a "Not found" message with a back link.

**Design philosophy**: Long-form editorial. Feels like a clean, modern blog post. The image is immersive, the text has room to breathe, and the reading experience comes first.

**Full-bleed hero image** (same treatment as Event Detail):
- `w-full h-[60vh] object-cover` — slightly taller than event hero to signal more content to come.
- Same bottom gradient merge into `#0a0a0a`.
- `loading="eager"` on this image (above fold).

**Article header** (`max-w-2xl mx-auto px-6 pt-12 pb-6`):
- Meta row: `<FadeIn delay={100}>` — author avatar (if available, else initials in a `w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs` circle) + author name (`text-sm text-white/60`) + `·` separator + date + `·` + read time. All `text-sm text-white/50`.
- Article title: `text-4xl md:text-5xl font-normal text-white mt-4 mb-2` with `letterSpacing: '-0.03em'`. `<FadeIn delay={150}>`.
- Excerpt (the short description): `text-lg text-white/50 font-light leading-relaxed mb-10 border-l-2 border-amber-400/50 pl-4`. `<FadeIn delay={200}>`. This blockquote style gives it an editorial pull-quote feel.

**Article body** (`max-w-2xl mx-auto px-6 pb-16`): `<FadeIn delay={300}>`.
- The `body` field from the news data item. Split by `\n\n` into paragraphs. Each paragraph: `<p className="text-base text-white/80 leading-relaxed mb-6">`.
- No headers inside the body — the writing flows as prose.

**Tags row** below the body: `<FadeIn delay={400}>`. Label: `text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3`. Tags from `news.tags`: same pill style as Event Detail highlights.

**Back link**: `← Back to News` — same style as Event Detail.

**More from the blog** strip: same pattern as Event Detail's related strip — 3 other news cards in a horizontal grid, labeled "More Stories".

---

## Page: Not Found (`*`)

Rendered when no route matches. Full-viewport, centered layout (`min-h-screen flex flex-col items-center justify-center px-6`), dark background.

**Content** (all centered, `text-center max-w-md`):
- Large cycling emoji or a simple lucide `Bike` icon: `w-16 h-16 text-amber-400 mb-8 mx-auto`. Animate it with a gentle left-right `translateX` CSS keyframe loop (`-6px → 6px`, 1.5s ease-in-out infinite alternate) to feel playful.
- Heading: translated `not_found_title` (e.g. "Wrong turn?"). `text-4xl font-normal text-white mb-4` with `letterSpacing: '-0.03em'`.
- Subtext: translated `not_found_sub`. `text-white/50 text-base leading-relaxed mb-10`.
- CTA button: `<Link to="/">` styled as `bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all hover:shadow-lg`. Label: translated `not_found_cta`.

No footer on this page — keep it clean and focused. The navbar still renders (it's part of Layout).

---

## Color Palette Reference

| Token | Value |
|---|---|
| Background | `#0a0a0a` |
| Surface | `rgba(255,255,255,0.04)` |
| Border | `rgba(255,255,255,0.10)` |
| Text primary | `#ffffff` |
| Text secondary | `rgba(255,255,255,0.60)` |
| Accent | `#D4A853` (amber-400/500 range) |
| Accent hover | `#C49340` |
| Liquid glass bg | `rgba(0,0,0,0.40)` |

---

## Modern Design System

The site must feel premium and contemporary — not a generic template. Every detail should reinforce this. The following rules are non-negotiable.

### Typographic Rhythm
- Section titles use `letterSpacing: '-0.03em'` — tight tracking reads as editorial and modern.
- Body text: `leading-relaxed` (1.625 line height). Never cramped.
- Labels, tags, and overlines: `text-xs font-semibold uppercase tracking-widest text-amber-400` — this pattern signals hierarchy without using size alone.
- Never use `font-bold` for headings — use `font-normal` or `font-light` for large display text. Bold is reserved for UI labels only.

### Spacing & Layout
- Generous whitespace between sections: `py-24` minimum, `py-32` preferred on desktop.
- Cards never touch each other: always `gap-6` or `gap-8`.
- Content max-width: `max-w-7xl mx-auto` — prevent ultra-wide lines on large monitors.
- Section padding: `px-6 md:px-12 lg:px-16` consistently throughout.

### Micro-interactions (apply to all interactive elements)
Every button, link, and card must have a hover/focus state that feels intentional:
- **Buttons**: `transition-all duration-200` with a subtle `hover:shadow-lg` or background shift — never just a color change alone.
- **Cards**: `group` class on the wrapper. On hover, the image scales `group-hover:scale-105 transition-transform duration-500`. Text elements within use `group-hover:` to shift subtly.
- **Nav links**: Underline grows from left on hover using a `::after` pseudo-element (or a `<span>` with `scaleX` transform): `w-0 group-hover:w-full transition-all duration-300 h-px bg-amber-400`.
- **Pill filters**: On active, not just a color change — also `shadow-[0_0_12px_rgba(212,168,83,0.4)]` amber glow.
- **Focus states**: All interactive elements have `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black`.

### Page Transitions
Implement a simple fade transition between routes. Wrap `<Outlet />` in a component that applies `opacity-0 → opacity-100` over 300ms on route change. Use React Router's `useLocation` key to trigger the effect:
```tsx
const location = useLocation();
const [visible, setVisible] = useState(false);
useEffect(() => {
  setVisible(false);
  const t = setTimeout(() => setVisible(true), 50);
  return () => clearTimeout(t);
}, [location.pathname]);
// Apply: className={`transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
```

### Scroll Behaviour
- Set `scroll-behavior: smooth` on `html` in global CSS.
- When navigating to a new page via React Router, scroll to top: add a `<ScrollToTop />` component that calls `window.scrollTo(0, 0)` on `location.pathname` change inside a `useEffect`.

### Image Loading
All `<img>` tags should have `loading="lazy"` except above-the-fold images (e.g. the first RouteCard in view). Cards below the fold get lazy loading to prevent layout shifts and speed up initial paint.

### No Visual Clutter
- One accent color only: amber/gold. No secondary accents.
- Borders are always `white/10` or `white/20` — never fully opaque on dark backgrounds.
- Icons from `lucide-react` only, at consistent sizes: `w-4 h-4` inline, `w-5 h-5` for buttons, `w-6 h-6` standalone.
- No drop shadows on text. No text-stroke. No gradients on type.
- Section dividers: never use `<hr>` — use negative space alone.

---

## Animation Summary

| Element | Delay | Duration | Effect |
|---|---|---|---|
| Hero heading chars | 200ms + stagger | 500ms per char | opacity + translateX(-18px→0) |
| Hero subheading | 800ms | 1000ms | opacity fade |
| Hero buttons | 1200ms | 1000ms | opacity fade |
| Hero right tag | 1400ms | 1000ms | opacity fade |
| Cards on scroll | IntersectionObserver | 600ms | opacity + translateY(20px→0) |
| Event card hover | — | 300ms | scale + overlay reveal |
| Route card hover | — | 300ms | scale(1.02) |

For cards: use an `<InViewFade>` component that uses `IntersectionObserver` to trigger the fade-in when the card enters the viewport. Each card in a grid gets an incrementally larger delay (`index * 80ms`).

---

## File Structure

```
src/
  components/
    AnimatedHeading.tsx
    FadeIn.tsx
    InViewFade.tsx
    LanguageSwitcher.tsx
    Navbar.tsx
    Footer.tsx
    SearchOverlay.tsx
    ScrollToTop.tsx
    RouteCard.tsx
    EventCard.tsx
    NewsCard.tsx
    SectionHeader.tsx
  context/
    LanguageContext.tsx
  data/
    routes.ts
    events.ts
    news.ts
    testimonials.ts
  pages/
    HomePage.tsx
    RoutesPage.tsx
    RouteDetailPage.tsx
    EventsPage.tsx
    EventDetailPage.tsx
    NewsPage.tsx
    NewsDetailPage.tsx
    NotFoundPage.tsx
  translations.ts
  App.tsx
  main.tsx
  index.css
```

---

## Critical Rules

1. **No UI libraries.** Only Tailwind, lucide-react icons, React Router.
2. **No purple, indigo, or blue accent colors.** Only black, white, gray, and amber/gold.
3. **No overlay on the video.** The hero video plays raw.
4. **All text strings go through the translation system** — nothing hardcoded in English only. This includes detail page strings (`back_to_events`, `more_events`, `start_route`, `highlights`, etc.).
5. **Logo centered in navbar at all breakpoints.**
6. **Language switcher is a dropdown** (not toggle buttons) — shows flag emoji + language name on expand.
7. **All pages have full content** — no placeholder lorem ipsum.
8. **Route, event, and news detail pages are fully functional** — linked from their cards everywhere, including on the home page.
9. **Cards animate in on scroll** using IntersectionObserver.
10. **The site is dark-first** — never use a white or light background for any section background.
11. **Video must load fast and reliably.** Use `preload="auto"`, a `poster` fallback, an `onCanPlay` fade-in, and a `useEffect` `.play()` call to handle mobile autoplay blocking.
12. **Every interactive element has a micro-interaction.** No bare color-only hover states — always pair with a transform, shadow, or underline animation.
13. **Page transitions are smooth.** Fade in/out on route change using `useLocation` key and opacity transition.
14. **Scroll to top on navigation.** `<ScrollToTop />` component fires on every route change.
15. **Images below the fold use `loading="lazy"`** to prevent unnecessary network requests on first paint.
16. **Every page sets `document.title = 'RouteCanela'`** via `useEffect` — no page should inherit a stale title from a previous route.
17. **`EventCard` and `NewsCard` are always `<Link>` wrappers** — they must be clickable everywhere they appear, including the home page preview sections.
18. **A `*` catch-all route renders `<NotFoundPage />`** — never leave unmatched routes blank or showing a React error.
19. **The back arrow in the navbar uses `navigate(-1)`** — not a hardcoded link — so it respects the user's actual navigation history.
20. **`cursor-pointer` is explicit on all card wrappers** — never rely on browser defaults for linked cards.