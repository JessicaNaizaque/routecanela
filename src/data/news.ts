export interface NewsItem {
  id: number;
  slug: string;
  title: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  body: string;
  tags: string[];
}

export const news: NewsItem[] = [
  {
    id: 1,
    slug: 'bosque-encantado',
    title: 'Bosque Encantado',
    image: 'https://www.routecanela.de/assets/img/news/Eventos_spandau_Berlin_Fahrrad_Route.jpg',
    date: '14 June 2024',
    author: 'Laura Méndez',
    readTime: '4 min read',
    excerpt: 'A hidden forest trail in Spandau that most Berliners have never heard of.',
    body:
      "Deep in the western edge of Berlin, beyond the brick towers of the Spandau Citadel, a trail cuts into a forest that feels entirely removed from the city. Locals call it the Bosque Encantado — the enchanted forest — though you won't find that name on any map.\n\nThe route runs alongside a quiet canal for the first two kilometres before climbing into dense oak and birch. In spring, the forest floor turns blue-white with wild garlic flowers. In autumn, it glows amber. Both seasons are worth a separate visit.\n\nThe trail is unpaved but flat enough for standard city bikes. The only hazard is losing track of time — there's no phone signal for most of the loop, which, depending on your perspective, is either a warning or the whole point.\n\nWe recommend combining this with the Spandau route, which passes the Citadel and ends near the old town's waterfront. Give yourself a full morning.",
    tags: ['Nature', 'Hidden gems', 'Spandau'],
  },
  {
    id: 2,
    slug: 'cafe-sentidos',
    title: 'Café Sentidos',
    image:
      'https://www.routecanela.de/assets/img/events/Eventos_Neukolln_Fahrrad_Route_Restaurant.jpg',
    date: '2 June 2024',
    author: 'Tomás García',
    readTime: '3 min read',
    excerpt:
      'A small café in Neukölln that has quietly become one of Berlin\'s most interesting stops on two wheels.',
    body:
      'There is no sign above the door at Café Sentidos. You find it the same way most people do — a recommendation whispered over coffee, a photo shared with the caption "you have to go".\n\nThe café occupies the ground floor of a converted Gründerzeit building on a side street behind Hermannplatz. The owner, originally from Oaxaca, roasts her own beans and bakes everything from scratch before 7am. The menu is five items, rotating daily, written on a small blackboard behind the espresso machine.\n\nWhat makes it special for cyclists is the courtyard at the back — a hidden garden that fits about twenty people, shaded by a fig tree, with bike hooks bolted to the walls. It is exactly the kind of place a neighbourhood keeps secret for as long as possible.\n\nWe stumbled across it on a RouteCanela ride through Neukölln and have since rerouted three of our circuits to include it. Consider this your official warning: it gets crowded by 9am on weekends.',
    tags: ['Food', 'Neukölln', 'Coffee'],
  },
  {
    id: 3,
    slug: 'jardin-secreto',
    title: 'Jardín Secreto',
    image: 'https://www.routecanela.de/assets/img/events/Eventos_Kreuzberg_Fahrrad_Route.jpg',
    date: '20 May 2024',
    author: 'Anna Schulz',
    readTime: '5 min read',
    excerpt:
      'A community garden in Kreuzberg built entirely by residents — and the cyclists who helped carry the soil.',
    body:
      'It started as a question posted on a neighbourhood forum: "Does anyone want to turn the empty lot on Graefestraße into something green?" Forty people showed up the following Saturday. Six months later, the Jardín Secreto has raised beds, a tool library, a small stage for events, and a waiting list for plot allocations.\n\nWhat the forum post didn\'t mention — and what has become one of the garden\'s best stories — is that the first 200kg of compost soil was transported almost entirely by bicycle. A WhatsApp group coordinated cargo bike relays across three days, with riders coming from as far as Mitte and Tempelhof.\n\nThe garden is open to visitors Tuesday to Sunday from 10am. There\'s no charge to walk through, and volunteers are always welcome on Wednesday mornings. The herb section near the north fence is particularly impressive right now — rosemary, thyme, and three varieties of mint that the gardeners use to make tea for anyone who stops by.\n\nFor cyclists, the garden makes an excellent midpoint on the Kreuzberg route. Lock up at the gate and ask for whichever volunteer is on duty — they all have good recommendations for the rest of the ride.',
    tags: ['Community', 'Kreuzberg', 'Green spaces'],
  },
  {
    id: 4,
    slug: 'mercado-artesanal',
    title: 'Mercado Artesanal',
    image:
      'https://www.routecanela.de/assets/img/events/Eventos_Steglitz_Fahrrad_Route_Berlin.jpg',
    date: '8 May 2024',
    author: 'Laura Méndez',
    readTime: '3 min read',
    excerpt:
      'Every first Sunday of the month, Steglitz hosts a craft market that draws makers from across the region.',
    body:
      "The Steglitz craft market has operated on the first Sunday of every month for eleven years, but it has never quite broken through to the tourist circuit — which is exactly why it remains so good.\n\nAround 60 makers set up on the esplanade beside the Stadtpark. You'll find ceramics thrown in studios in Zehlendorf, woodwork from a carpenter in Spandau, textiles woven in a collective in Wedding, and preserves made from fruit grown in allotment gardens across the city. Prices are fair. The makers want to talk about their work.\n\nThe market runs 10am to 5pm. Arrive by bike — there's a large dedicated parking area at the park entrance — and combine the visit with a loop through the Steglitz route, which passes through the park's more formal garden sections before heading toward the Schloßpark Lichterfelde.",
    tags: ['Market', 'Steglitz', 'Artisan'],
  },
  {
    id: 5,
    slug: 'museo-historia-natural',
    title: 'Museo de Historia Natural',
    image:
      'https://www.routecanela.de/assets/img/events/Eventos_Tempelhof_Berlin_Fahrrad_Route.jpg',
    date: '29 April 2024',
    author: 'Tomás García',
    readTime: '4 min read',
    excerpt:
      'The Natural History Museum is one of Berlin\'s most underrated institutions — and it\'s best reached by bike.',
    body:
      "The Museum für Naturkunde sits on Invalidenstraße in a red-brick building that looks, from the outside, like it might contain administrative offices. Inside is one of the most extraordinary natural history collections in the world — including the world's largest mounted dinosaur skeleton, a 150-million-year-old Brachiosaurus at 13.27 metres tall.\n\nFor cyclists, the approach via Invalidenstraße is pleasant and direct from both Mitte and Wedding. The museum has bike stands outside the main entrance, and the surrounding streets are quiet enough for a relaxed ride.\n\nThe collection is strongest in palaeontology and meteorites, but the hall of biodiversity — a floor-to-ceiling glass cabinet of taxidermy from around the world — is genuinely moving in a way that is difficult to articulate without seeing it.\n\nAdmission is €8, concessions available. Closed Mondays. We recommend a Tuesday or Wednesday visit for the smallest crowds.",
    tags: ['Museum', 'Mitte', 'History'],
  },
  {
    id: 6,
    slug: 'restaurante-ecologico',
    title: 'Restaurante Ecológico',
    image: 'https://www.routecanela.de/assets/img/events/Eventos_Tiergarten_Fahrrad_Route.jpg',
    date: '15 April 2024',
    author: 'Anna Schulz',
    readTime: '3 min read',
    excerpt: 'A zero-waste restaurant in Mitte that sources everything within 80km of the city.',
    body:
      'When the menu says local, it means it. Every ingredient in the kitchen at Ernte comes from within 80 kilometres of Berlin city centre — grains from Brandenburg farms, dairy from a small cooperative in Havelland, vegetables from market gardens in the Spreewald.\n\nThe menu changes weekly, sometimes daily, and is written on paper rather than printed — a deliberate choice to avoid waste from reprinting. The wine list is exclusively German and Austrian biodynamic producers. The bread comes from a sourdough baker in Friedrichshain who delivers by cargo bike.\n\nSeating is limited to 28 covers. Bookings are essential for dinner; lunch is walk-in only until they\'re full (usually by 12:30). The restaurant is a natural endpoint to the Berlin Mitte cycling route — it sits two minutes from the Tiergarten, and the staff will recommend other local stops if you want to keep exploring after eating.',
    tags: ['Food', 'Sustainability', 'Mitte'],
  },
  {
    id: 7,
    slug: 'centro-cultural',
    title: 'Centro Cultural',
    image: 'https://www.routecanela.de/assets/img/events/Eventos_Zehlendorf_Fahrrad_Route.jpg',
    date: '1 April 2024',
    author: 'Laura Méndez',
    readTime: '4 min read',
    excerpt:
      'A former power station in Zehlendorf turned into one of the city\'s most ambitious community arts spaces.',
    body:
      "The Kulturwerk Zehlendorf has been open for just over two years, but it feels like it has always been here — the kind of place that a neighbourhood needs without quite knowing it until it arrives.\n\nThe building is a former electrical substation, built in 1912, its thick brick walls and tall windows perfectly suited to the gallery space it has become. The programme runs from contemporary art exhibitions to film screenings, ceramics workshops, language exchanges, and a monthly vinyl listening night that draws collectors from across the city.\n\nThe centre is run by a foundation with a diverse board of local residents, businesses, and artists — which shows in the programming. There's a genuine effort to reflect the neighbourhood's different communities rather than serve a single demographic.\n\nCycling to the Kulturwerk from central Berlin takes about 45 minutes via the forest paths of the Grunewald. It's worth building an afternoon around: ride out through the trees, spend two hours at the centre, and ride back as the light changes.",
    tags: ['Culture', 'Zehlendorf', 'Arts'],
  },
  {
    id: 8,
    slug: 'parque-acuatico',
    title: 'Parque Acuático',
    image: 'https://www.routecanela.de/assets/img/events/Eventos_Mitte_Berlin_Fahrrad_Route.jpg',
    date: '18 March 2024',
    author: 'Tomás García',
    readTime: '3 min read',
    excerpt:
      'Berlin\'s open-air swimming season starts earlier than you think — here\'s where to go and how to get there.',
    body:
      "Berliners are serious about open-air swimming. The city has 59 outdoor swimming areas — lakes, rivers, lidos — and the season officially opens in late May, though regulars are in the water weeks before.\n\nFor cyclists, the most accessible combination is the Wannsee bathing beach in Zehlendorf, a 35-minute ride from the city centre through the Grunewald forest. It's the same beach where generations of Berliners have swum since 1907, and it remains one of the finest urban beaches in Europe — a long crescent of sand on a glacial lake, backed by pine trees.\n\nThe Orankesee in Lichtenberg is smaller, quieter, and completely off the tourist circuit — a 20-minute cycle from Friedrichshain through residential streets. It has a lawn, a small dive platform, and a kiosk that sells exactly three things: ice cream, radler, and bratwurst.\n\nWe publish a full guide to Berlin's cycling-accessible swimming spots each spring. Sign up for the newsletter to receive it when it's ready.",
    tags: ['Swimming', 'Summer', 'Lakes'],
  },
  {
    id: 9,
    slug: 'parque-aventuras-medieval',
    title: 'Parque Aventuras Medieval',
    image: 'https://www.routecanela.de/assets/img/news/Eventos_spandau_Berlin_Fahrrad_Route.jpg',
    date: '5 March 2024',
    author: 'Anna Schulz',
    readTime: '5 min read',
    excerpt:
      'The Spandau Citadel\'s annual medieval festival is one of Berlin\'s most spectacular weekends — and cyclists get the best approach.',
    body:
      "Every June, the Spandau Citadel — a Renaissance fortress that has stood at the confluence of the Havel and Spree rivers since 1559 — is taken over by one of Germany's largest medieval festivals. Knights, falconers, armourers, fire jugglers, and market traders fill the courtyards for three days, drawing around 80,000 visitors over the weekend.\n\nFor cyclists, the approach is one of the great Berlin rides: west along the Spree, through the forests of Spandau, and across the drawbridge into the fortress itself. The route avoids the traffic congestion that makes driving to the festival a misery. Several hundred cyclists arrive this way each year.\n\nThe festival runs Friday evening to Sunday, with the jousting tournament scheduled for both Saturday and Sunday afternoons. Evening programmes include fire shows and a medieval banquet (bookable separately). Tickets: €14 / €9 concession / children under 12 free.\n\nPlan to arrive by 10am to see the artisan workshops in full swing. By midday the courtyards are at capacity, and the atmosphere — that particular mix of spectacle and genuine craft — is something worth giving your full attention.",
    tags: ['Festival', 'Spandau', 'History'],
  },
];
