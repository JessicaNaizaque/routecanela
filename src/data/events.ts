export interface EventItem {
  id: number;
  slug: string;
  title: string;
  image: string;
  category: string;
  date: string;
  location: string;
  duration: string;
  price: string;
  description: string;
  highlights: string[];
}

export const events: EventItem[] = [
  {
    id: 1,
    slug: 'tiergarten',
    title: 'Tiergarten',
    image: 'https://www.routecanela.de/assets/img/events/Eventos_Tiergarten_Fahrrad_Route.jpg',
    category: 'Park',
    date: 'Every Saturday, 08:00–18:00',
    location: 'Tiergarten, Berlin Mitte',
    duration: '3–4 hours',
    price: 'Free',
    description:
      "Berlin's most beloved green lung comes alive every weekend. Cycle through 210 hectares of ancient forest, past rowboats drifting on the Neuer See, and along paths lined with sculptures. This is the Berlin that locals keep to themselves — unhurried, quiet, and surprisingly wild at its heart.",
    highlights: [
      'Neuer See & rowboat rental',
      'Victory Column viewpoint',
      'Rose Garden in bloom (May–Oct)',
      'Hidden beer gardens along the paths',
    ],
  },
  {
    id: 2,
    slug: 'festival-arte',
    title: 'Festival Arte',
    image:
      'https://www.routecanela.de/assets/img/events/Eventos_Neukolln_Fahrrad_Route_Restaurant.jpg',
    category: 'Art',
    date: '12–20 July 2024',
    location: 'Neukölln Arts Quarter',
    duration: 'Full day',
    price: '€5 suggested donation',
    description:
      "Neukölln's most eclectic arts festival spills out of gallery doors and into the streets every summer. Expect large-scale murals being painted live, open studio visits, and a twilight market where artists sell work directly. The energy is collaborative rather than commercial — bring curiosity, leave with something you'll treasure.",
    highlights: [
      'Live mural painting sessions',
      'Open studio tours (free)',
      'Twilight art market',
      'Community music stage from 18:00',
    ],
  },
  {
    id: 3,
    slug: 'concierto',
    title: 'Concierto en Kreuzberg',
    image: 'https://www.routecanela.de/assets/img/events/Eventos_Kreuzberg_Fahrrad_Route.jpg',
    category: 'Music',
    date: '3 August 2024, 20:00',
    location: 'Görlitzer Park, Kreuzberg',
    duration: '3 hours',
    price: 'Free entry',
    description:
      'As the sun sets over Görlitzer Park, a stage rises and Kreuzberg transforms into an open-air concert hall. The lineup mixes jazz, electronic, and Latin rhythms — a reflection of the neighbourhood\'s famously diverse soul. Bring a blanket, grab a Club Mate, and settle in.',
    highlights: [
      'Live jazz & electronic sets',
      'Street food stalls from 18:00',
      'Bike parking area on-site',
      'Dog-friendly event',
    ],
  },
  {
    id: 4,
    slug: 'palacio-charlottenburg',
    title: 'Palacio Charlottenburg',
    image: 'https://www.routecanela.de/assets/img/events/Charlottenburg-Fahrrad-route.jpg',
    category: 'Culture',
    date: 'Open year-round, Tue–Sun 10:00–17:30',
    location: 'Spandauer Damm 10–22, Charlottenburg',
    duration: '2–3 hours',
    price: '€12 / €8 concession',
    description:
      'The largest surviving royal residence in Berlin is a study in Baroque excess — gilded halls, porcelain cabinets, and formal gardens that stretch toward the Spree. The cycle ride here through the western avenues of Charlottenburg is itself part of the experience. Arrive before 10:00 to have the gardens almost entirely to yourself.',
    highlights: [
      'Golden Tower with panoramic views',
      'Porcelain Cabinet & Oak Gallery',
      'Formal gardens (free entry)',
      'Museum café in the orangery',
    ],
  },
  {
    id: 5,
    slug: 'mercado-pulgas',
    title: 'Mercado de Pulgas',
    image:
      'https://www.routecanela.de/assets/img/events/Eventos_Prenzlauer_Berg_Fahrrad_Route.jpg',
    category: 'Market',
    date: 'Every Sunday, 09:00–16:00',
    location: 'Mauerpark, Prenzlauerberg',
    duration: '2–4 hours',
    price: 'Free entry',
    description:
      "Mauerpark's legendary flea market is part treasure hunt, part street theatre. Over 200 vendors lay out vintage clothing, DDR-era curiosities, vinyl records, and handmade goods along the former death strip. The karaoke amphitheatre next door provides a joyful soundtrack. Come hungry — the food stalls are exceptional.",
    highlights: [
      '200+ vendors every Sunday',
      'Infamous Bearpit Karaoke from 15:00',
      'Vintage & vinyl specialist stalls',
      'International street food court',
    ],
  },
  {
    id: 6,
    slug: 'isla-museos',
    title: 'Isla de los Museos',
    image: 'https://www.routecanela.de/assets/img/events/Eventos_Mitte_Berlin_Fahrrad_Route.jpg',
    category: 'Museum',
    date: 'Tue–Sun 10:00–18:00 (Thu until 20:00)',
    location: 'Museumsinsel, Berlin Mitte',
    duration: 'Half to full day',
    price: '€18 day pass (all 5 museums)',
    description:
      "A UNESCO World Heritage island in the middle of the Spree river, home to five world-class museums within easy cycling distance of each other. The Pergamon's ancient gates, the Nefertiti bust in the Neues Museum, and the golden treasures of the Bode — a day pass unlocks all of it. Lock your bike at the island's dedicated stands and walk the rest.",
    highlights: [
      'Pergamon Altar & Ishtar Gate',
      'Bust of Nefertiti (Neues Museum)',
      'Bode Museum sculpture collection',
      'Outdoor café with Spree views',
    ],
  },
  {
    id: 7,
    slug: 'tour-gastronomico',
    title: 'Tour Gastronómico',
    image: 'https://www.routecanela.de/assets/img/events/Eventos_Schoneberg_Fahrrad_Route.jpg',
    category: 'Food',
    date: 'Fridays & Saturdays, 18:00',
    location: 'Starting point: Schöneberg Rathaus',
    duration: '2.5 hours',
    price: '€35 per person (tastings included)',
    description:
      "A guided cycle tour through Schöneberg's most authentic eating spots — from a family-run Turkish bakery that has been perfecting its simit since 1987, to a hidden Lebanese canteen with no sign on the door and a two-month waiting list. Seven tastings, four neighbourhoods, one very full stomach.",
    highlights: [
      '7 curated food tastings',
      'Off-menu & reservation-only stops',
      'Guided by a local food writer',
      'Max 10 participants per tour',
    ],
  },
  {
    id: 8,
    slug: 'picnic',
    title: 'Picnic Colectivo',
    image:
      'https://www.routecanela.de/assets/img/events/Eventos_Steglitz_Fahrrad_Route_Berlin.jpg',
    category: 'Outdoor',
    date: '25 August 2024, 12:00–19:00',
    location: 'Stadtpark Steglitz',
    duration: 'All afternoon',
    price: 'Free — bring your own food',
    description:
      "A community picnic for cyclists and neighbours in the tranquil Stadtpark Steglitz. Lay your blanket next to strangers who quickly become friends. There's a kids' bike skills course at 14:00 and a gentle guided sunset ride at 18:00 for those who want to close the day on two wheels.",
    highlights: [
      'Community blanket gathering',
      "Kids' bike skills course at 14:00",
      'Guided sunset ride at 18:00',
      'Dog-friendly & family event',
    ],
  },
  {
    id: 9,
    slug: 'nature-park',
    title: 'Nature Park Tour',
    image: 'https://www.routecanela.de/assets/img/events/Eventos_Zehlendorf_Fahrrad_Route.jpg',
    category: 'Nature',
    date: 'Every Sunday, 09:30',
    location: 'Zehlendorf S-Bahn station',
    duration: '4 hours',
    price: '€10 guided / free self-guided',
    description:
      "Leave the city behind without leaving the city. The forests and lakes of Zehlendorf — the Grunewald, the Wannsee, the Pfaueninsel — make up one of Europe's great urban nature reserves. Join the Sunday guided group or download the self-guided PDF and go at your own pace. Either way, wear layers.",
    highlights: [
      'Grunewald ancient forest',
      'Wannsee lakeside cycling',
      'Pfaueninsel (Peacock Island) ferry',
      'Wildlife spotting: deer, herons, foxes',
    ],
  },
  {
    id: 10,
    slug: 'julio-2024',
    title: 'Fête de la Musique — Julio',
    image:
      'https://www.routecanela.de/assets/img/events/Eventos_Tempelhof_Berlin_Fahrrad_Route.jpg',
    category: 'Monthly',
    date: '21 July 2024, 14:00–midnight',
    location: 'Tempelhofer Feld',
    duration: 'Full evening',
    price: 'Free',
    description:
      "Berlin's edition of the global music celebration takes over the vast open runways of Tempelhofer Feld every summer. Dozens of stages, hundreds of acts, and a crowd that cycles in from every corner of the city. The scale is staggering — you could wander the stages for hours and never hear the same song twice.",
    highlights: [
      '40+ stages across the airfield',
      'Genres: jazz, punk, classical, techno',
      'Bike-in concert format',
      'Food trucks & pop-up bars throughout',
    ],
  },
  {
    id: 11,
    slug: 'septiembre-2024',
    title: 'Lange Nacht der Museen — Sep',
    image: 'https://www.routecanela.de/assets/img/events/Eventos_Mitte_Berlin_Fahrrad_Route.jpg',
    category: 'Monthly',
    date: '28 September 2024, 18:00–02:00',
    location: 'Citywide — 80+ museums',
    duration: 'One night',
    price: '€18 (single ticket, all venues)',
    description:
      "One night, one ticket, 80 museums open until 2am. Berlin's legendary long night of museums is best navigated by bicycle — there are dedicated cycle routes between clusters of venues, and the mood across the city is festive and unhurried. Highlights this edition include the Egyptian Museum, the Technikmuseum, and a special after-dark installation at the Hamburger Bahnhof.",
    highlights: [
      '80+ museums, one ticket',
      'Special night-only installations',
      'Cycle route map provided',
      'Late-night bar at Hamburger Bahnhof',
    ],
  },
  {
    id: 12,
    slug: 'mayo-2024',
    title: 'Köpenick im Grünen — Mayo',
    image: 'https://www.routecanela.de/assets/img/events/Eventos_Kopenick_Berlin_Fahrrad.jpg',
    category: 'Monthly',
    date: '18–19 May 2024',
    location: 'Alt-Köpenick, Berlin East',
    duration: 'Full weekend',
    price: 'Free',
    description:
      "The waterside district of Köpenick hosts its annual outdoor festival on the Müggelspree banks each May — a calm, local affair of boat races, lakeside concerts, and a craft market that draws artisans from across Brandenburg. It's a long ride out east, but the forest paths and waterway scenery make it one of the most beautiful cycles the city offers.",
    highlights: [
      'Boat races on the Müggelspree',
      'Craft & artisan market',
      'Lakeside live music',
      'Ferry trips to the Müggelsee',
    ],
  },
];
