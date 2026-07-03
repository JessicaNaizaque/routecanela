export interface RouteItem {
  id: string;
  name: string;
  image: string;
  duration: string;
  distance: string;
  events: string[];
  parks: string[];
  restaurants: string[];
}

export const routes: RouteItem[] = [
  {
    id: 'charlottenburg',
    name: 'Charlottenburg',
    image: '/assets/img/routes/Charlottenburg.webp',
    duration: '30 min',
    distance: '7 km',
    events: [
      'Charlottenburger Frühlingsfest',
      'Classic Open Air am Gendarmenmarkt',
      'Lange Nacht der Museen',
      'Herbstfest im Schlosspark Charlottenburg',
    ],
    parks: ['Schlosspark Charlottenburg', 'Tiergarten', 'Volkspark Jungfernheide'],
    restaurants: ["The Bowl", 'Good Bank', 'Funky Fisch', "Brammibal's Donuts"],
  },
  {
    id: 'schoneberg',
    name: 'Schöneberg',
    image: '/assets/img/routes/Schoneberg.webp',
    duration: '1 hr 20 min',
    distance: '8.5 km',
    events: [
      'Schöneberger Frühling',
      'Flohmarkt am Rathaus Schöneberg',
      'Weihnachtsmarkt am Rathaus Schöneberg',
      'Lesbisch-Schwules Stadtfest',
    ],
    parks: ['Volkspark Schöneberg-Wilmersdorf', 'Gleisdreieck Park'],
    restaurants: ['Maharadscha', 'Daluma', 'Vaust Braugaststätte', 'Benedict'],
  },
  {
    id: 'kreuzberg',
    name: 'Kreuzberg',
    image: '/assets/img/routes/Kreuzberg.webp',
    duration: '1 hr 30 min',
    distance: '9 km',
    events: ['XJAZZ Festival', 'Festival of Lights', 'Bergmannstraßenfest', 'MyFest'],
    parks: ['Görlitzer Park', 'Viktoriapark', 'Tempelhofer Feld', 'Prinzessinnengarten'],
    restaurants: ["Yellow Sunshine", 'Vöner', "Brammibal's Donuts", 'Chay Viet'],
  },
  {
    id: 'friedenau',
    name: 'Friedenau',
    image: '/assets/img/routes/Friedenau.webp',
    duration: '1 hr',
    distance: '6 km',
    events: [
      'Mercado semanal en Breslauer Platz',
      'Talleres en el Nachbarschaftshaus Friedenau',
    ],
    parks: ['Volkspark Friedenau', 'Biblioteca Municipal de Friedenau', 'Südgelände Natur-Park'],
    restaurants: ['Chay Long', 'Tianfuzius', 'Momos', 'Frau Lüske'],
  },
  {
    id: 'neukolln',
    name: 'Neukölln',
    image: '/assets/img/routes/Neukolln.webp',
    duration: '45 min',
    distance: '8 km',
    events: ['Neuköllner Maientage', 'Neukölln Arcaden Street Food Markt'],
    parks: ['Körnerpark', 'Britzer Garten', 'Park am Buschkrug'],
    restaurants: ['Jivamuktea Café', 'Ohlàlà Veganerie', 'Café Morgenrot'],
  },
  {
    id: 'prenzlauerberg',
    name: 'Prenzlauerberg',
    image: '/assets/img/routes/Prenzlauerberg.webp',
    duration: 'TBD',
    distance: 'TBD',
    events: ['Sommerfest im Mauerpark', 'Jazz im Park'],
    parks: ['Ernst-Thälmann-Park', 'Kollwitzplatz', 'Volkspark Friedrichshain'],
    restaurants: ["Brammibal's Donuts", 'Happies', 'Satt & Glücklich'],
  },
  {
    id: 'berlin-mitte',
    name: 'Berlín Mitte',
    image: '/assets/img/routes/Berlin_Mitte.webp',
    duration: 'TBD',
    distance: 'TBD',
    events: [
      'Berlinale',
      'MaerzMusik',
      'Gallery Weekend Berlin',
      'Karneval der Kulturen',
      'Fête de la Musique',
    ],
    parks: [
      'Tiergarten',
      'Volkspark am Weinbergsweg',
      'James-Simon-Park',
      'Park am Gleisdreieck',
    ],
    restaurants: ['Cookies Cream', 'Daluma', 'Kopps', 'The Bowl'],
  },
  {
    id: 'steglitz',
    name: 'Steglitz',
    image: '/assets/img/routes/Steglitz.webp',
    duration: '2 hrs',
    distance: '13 km',
    events: [
      'Sommerkonzert im Stadtpark Steglitz',
      'Steglitzer Weinfest',
      'Herbstfest im Stadtpark',
    ],
    parks: ['Stadtpark Steglitz', 'Wrangelpark', 'Bäkepark', 'Schloßpark Lichterfelde'],
    restaurants: ['Saravanaa Bhavan', 'Plant Base', 'Hans Wurst', 'Café Bleibtreu'],
  },
];
