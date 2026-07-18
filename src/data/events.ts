import type { Lang } from '../translations';

type Localized<T = string> = Record<Lang, T>;

export interface EventItem {
  id: number;
  slug: string;
  image: string;
  location: string;
  categoryKey: string;
  title: string;
  category: string;
  date: string;
  duration: string;
  recommendAudience: string;
  description: string;
  highlights: string[];
}

interface EventSource {
  id: number;
  slug: string;
  image: string;
  location: string;
  categoryKey: string;
  title: Localized;
  category: Localized;
  date: Localized;
  duration: Localized;
  recommendAudience: Localized;
  description: Localized;
  highlights: Localized<string[]>;
}

const eventSources: EventSource[] = [
  {
    id: 1,
    slug: 'carnival-cultures',
    image: '/assets/images/events/Carnavalkultere_routecanela.png',
    location: 'Kreuzberg / Friedrichshain',
    categoryKey: 'Culture',
    title: { DE: 'Karneval der Kulturen', EN: 'Carnival of Cultures', ES: 'Carnival of Cultures' },
    category: { DE: 'Kultur', EN: 'Culture', ES: 'Cultura' },
    date: {
      DE: 'Findet einmal im Jahr im Mai statt',
      EN: 'May (held once a year)',
      ES: 'Mayo (se celebra una vez al año)',
    },
    duration: { DE: '10:00 - 23:00 Uhr', EN: '10:00 AM - 11:00 PM', ES: '10:00 a. m. - 11:00 p. m.' },
    recommendAudience: { 
      DE: 'Alle Altersgruppen, Familien, Kinder (6-12 Jahre)', 
      EN: 'General public, Families, Children (ages 6-12)', 
      ES: 'Público en general, familias, niños (de 6 a 12 años)' 
    },
    description: {
      DE: 'Der **Karneval der Kulturen** ist eine der lebendigsten und bekanntesten Veranstaltungen Berlins und findet jedes Jahr im Frühjahr im Stadtteil Kreuzberg statt. Es handelt sich um ein großes Stadtfest, das Musik, Tanz, internationale Gastronomie und farbenfrohe Umzüge vereint, an denen Hunderte von kulturellen Gemeinschaften teilnehmen, die in der Stadt leben. \n Das Besondere an diesem Festival ist sein Geist: Es ist keine geschlossene oder exklusive Veranstaltung, sondern ein Fest, das vollständig für die Öffentlichkeit zugänglich ist. Menschen jeden Alters, jeder Herkunft und jedes Lebensstils sind willkommen - ob als Zuschauer oder als Teil der Energie des Umzugs und der Straßenaktivitäten. \n Mehrere Tage lang verwandeln sich die Straßen in einen Ort des Miteinanders, an dem afrikanische, lateinamerikanische, asiatische und europäische Rhythmen aufeinandertreffen und eine einzigartige Atmosphäre schaffen, die die echte Vielfalt Berlins widerspiegelt. Es ist eine ideale Erfahrung für alle, die die Stadt von ihrer kreativsten, menschlichsten und multikulturellsten Seite entdecken möchten.',
      EN: "The **Karneval der Kulturen** is one of Berlin's most vibrant and iconic events, held every year in the Kreuzberg district during spring. It is a large urban festival that brings together music, dance, international cuisine, and colorful parades, with hundreds of cultural communities living in the city taking part. \n What makes this festival especially unique is its spirit: it is not a closed or exclusive event, but a celebration that is completely open to the public. People of all ages, backgrounds, and lifestyles are welcome to participate, whether as spectators or as part of the energy of the parade and street activities. \n Over several days, the streets are transformed into a shared space where African, Latin American, Asian, and European rhythms come together, creating a unique atmosphere that reflects Berlin's true diversity. It is an ideal experience for those who want to discover the city through its most creative, human, and multicultural side.",
      ES: 'El **Karneval der Kulturen** es uno de los eventos más vibrantes y representativos de Berlín, celebrado cada año en el barrio de Kreuzberg durante la primavera. Es una gran fiesta urbana que reúne música, danza, gastronomía internacional y desfiles llenos de color, donde participan cientos de comunidades culturales que viven en la ciudad. \n Lo más especial de este festival es su espíritu: no es un evento cerrado ni exclusivo, sino una celebración completamente abierta al público. Personas de todas las edades, orígenes y estilos de vida son bienvenidas a participar, ya sea  como espectadores o formando parte de la energía del desfile y las actividades callejeras. \n Durante varios días, las calles se transforman en un espacio de convivencia donde conviven ritmos africanos, latinoamericanos, asiáticos y europeos, creando una atmósfera única que refleja la diversidad real de Berlín. Es una experiencia ideal para quienes quieren descubrir la ciudad desde su lado más creativo, humano y multicultural.',
    },
    highlights: {
      DE: [
        'Neuer See & Ruderbootverleih',
        'Aussichtspunkt Siegessäule',
        'Blühender Rosengarten (Mai–Okt)',
        'Versteckte Biergärten entlang der Wege',
      ],
      EN: [
        'Neuer See & rowboat rental',
        'Victory Column viewpoint',
        'Rose Garden in bloom (May–Oct)',
        'Hidden beer gardens along the paths',
      ],
      ES: [
        'Neuer See y alquiler de botes de remo',
        'Mirador de la Columna de la Victoria',
        'Jardín de rosas en flor (may–oct)',
        'Cervecerías al aire libre escondidas por los senderos',
      ],
    },
  },
  {
    id: 2,
    slug: 'staatsoper',
    image: '/assets/img/events/Eventos_Neukolln_Fahrrad_Route_Restaurant.jpg',
    location: 'Mitte / Mitte',
    categoryKey: 'Music',
    title: { DE: 'Staatsoper für alle', EN: 'Staatsoper for All', ES: 'Staatsoper für alle' },
    category: { DE: 'Musik', EN: 'Music', ES: 'Música' },
    date: {
      DE: 'Findet einmal im Jahr im Mai statt',
      EN: 'May - held once a year',
      ES: 'Mayo - se celebra una vez al año',
    },
    duration: { DE: '10:00 - 20:00 Uhr', EN: '10:00 - 20:00', ES: '10:00 - 20:00' },
    recommendAudience: {
      DE: 'Alle Altersgruppen, Familien, Kinder (6-12 Jahre)',
      EN: 'General public, Families, Children (aged 6-12)',
      ES: 'Público en general, familias, niños (de 6 a 12 años)',
    },
    description: {
      DE: 'Die **Staatsoper für Alle** ist ein einzigartiges Kulturerlebnis in Berlin, bei dem die Oper ihre traditionellen Säle verlässt und direkt in den öffentlichen Raum kommt. \n Während der Veranstaltung kann klassische Musik unter freiem Himmel auf einer großen Leinwand vor der Staatsoper genossen werden. So erhält jeder die Möglichkeit, eine Aufführung von Weltklasse zu erleben - ganz ohne Eintrittskarte oder Vorkenntnisse. \n Die Veranstaltung richtet sich an alle Menschen und wurde geschaffen, um die Oper näher an die Stadt zu bringen und sie zu einem gemeinsamen, zugänglichen und unvergesslichen Erlebnis im Herzen Berlins zu machen.',
      EN: "**Staatsoper for All** is a unique cultural experience in Berlin where opera leaves its traditional halls and comes directly into the public space. \n During the event, classical music can be enjoyed outdoors on a giant screen in front of the State Opera House, allowing anyone to experience a world-class performance without needing a ticket or any prior knowledge of opera. \n It is an event open to everyone, designed to bring opera closer to the city and transform it into a shared, accessible, and unforgettable experience in the heart of Berlin.",
      ES: 'El **Staatsoper für Alle** es una experiencia cultural única en Berlín donde la ópera sale de sus salas tradicionales para llegar directamente al espacio público. \n Durante el evento, la música clásica se disfruta al aire libre en una gran pantalla frente a la Staatsoper, permitiendo que cualquier persona pueda vivir una actuación de nivel mundial sin necesidad de entrada ni experiencia previa. \n Es un encuentro abierto a todo el público, pensado para acercar la ópera a la ciudad y convertirla en una experiencia compartida, accesible e inolvidable en pleno corazón de Berlín.',
    },
    highlights: {
      DE: [
        'Live-Wandmalerei-Sessions',
        'Offene Atelierführungen (kostenlos)',
        'Kunstmarkt in der Dämmerung',
        'Community-Musikbühne ab 18:00',
      ],
      EN: [
        'Live mural painting sessions',
        'Open studio tours (free)',
        'Twilight art market',
        'Community music stage from 18:00',
      ],
      ES: [
        'Sesiones de pintura mural en vivo',
        'Visitas a estudios abiertos (gratis)',
        'Mercado de arte al atardecer',
        'Escenario de música comunitaria desde las 18:00',
      ],
    },
  },
  {
    id: 3,
    slug: 'womens-run',
    image: '/assets/img/events/Eventos_Kreuzberg_Fahrrad_Route.jpg',
    location: 'Tiergarten',
    categoryKey: 'Sport',
    title: {
      DE: "Berlin Women's Run",
      EN: "Berlin Women's Run",
      ES: "Berlin Women's Run",
    },
    category: { DE: 'Sport', EN: 'Sport', ES: 'Deporte' },
    date: {
      DE: 'Findet einmal im Jahr im Mai statt',
      EN: 'May (held once a year)',
      ES: 'Mayo se realiza una vez al año',
    },
    duration: { DE: '09:00 - 18:00 Uhr', EN: '09:00-18:00', ES: '09:00-18:00' },
    recommendAudience: { DE: 'Alle Altersgruppen, Familien, Kinder', EN: 'General public, Families, Children', ES: 'General, Familias, Niños' },
    description: {
      DE: "Der **Berlin Women's Run** ist eine jährlich stattfindende Sportveranstaltung in Berlin, die das Laufen von Frauen in einem inklusiven, motivierenden und festlichen Umfeld feiert. \n Es handelt sich nicht um einen Wettkampf, sondern um ein Erlebnis, das dazu einlädt, sich in seinem eigenen Tempo zu bewegen, den Moment zu genießen und ihn gemeinsam mit anderen Frauen in einer Atmosphäre voller Unterstützung und positiver Energie zu erleben. Teilnehmen können Frauen jeden Alters und jedes Leistungsniveaus - von Anfängerinnen bis hin zu erfahrenen Läuferinnen. \n Die Strecke führt in der Regel durch Grünanlagen wie den Tiergarten und schafft eine entspannte Atmosphäre, in der nicht die Zeit zählt, sondern das Gefühl von Wohlbefinden, Gemeinschaft und Selbstfürsorge.",
      EN: "The **Berlin Women's Run** is an annual sporting event in Berlin that celebrates women's running in an inclusive, motivating, and festive environment. \n It is not a competition, but an experience designed to be enjoyed at your own pace, allowing you to move comfortably and share the moment with other women in an atmosphere of support and positive energy. Women of all ages and fitness levels take part, from beginners to experienced runners. \n The route is usually set through green spaces such as the Tiergarten, creating a relaxed atmosphere where the focus is not on finishing times, but on wellbeing, community, and self- care.",
      ES: "El **Berlin Women's Run** es un evento deportivo anual en Berlín que celebra el running femenino en un ambiente inclusivo, motivador y festivo. \n No es una competencia, sino una experiencia pensada para disfrutar contigo misma, moverte a tu ritmo y compartir el momento con otras mujeres en un entorno de apoyo y energía positiva. Participan mujeres de todas las edades y niveles, desde principiantes hasta corredoras experimentadas. \n El recorrido suele realizarse en espacios verdes como el Tiergarten, creando una atmósfera relajada donde lo importante no es el tiempo, sino la experiencia de bienestar, comunidad y autocuidado.",
    },
    highlights: {
      DE: [
        'Live-Jazz- & Elektro-Sets',
        'Streetfood-Stände ab 18:00',
        'Fahrradparkplatz vor Ort',
        'Hundefreundliche Veranstaltung',
      ],
      EN: [
        'Live jazz & electronic sets',
        'Street food stalls from 18:00',
        'Bike parking area on-site',
        'Dog-friendly event',
      ],
      ES: [
        'Sets de jazz y electrónica en vivo',
        'Puestos de comida callejera desde las 18:00',
        'Zona de aparcamiento de bicicletas in situ',
        'Evento apto para perros',
      ],
    },
  },
  {
    id: 4,
    slug: 'design-week',
    image: '/assets/images/events/Berlin_routecanela.png',
    location: 'Mitte / Kreuzberg',
    categoryKey: 'Culture',
    title: {
      DE: 'Berlin Design Week',
      EN: 'Berlin Design Week',
      ES: 'Berlin Design Week',
    },
    category: { DE: 'Kultur', EN: 'Culture', ES: 'Cultura' },
    date: {
      DE: 'Findet einmal im Jahr im Mai statt',
      EN: 'May (held once a year)',
      ES: 'Mayo (se celebra una vez al año)',
    },
    duration: { DE: '09:00 - 18:00 Uhr', EN: '09:00 - 18:00', ES: '09:00 - 18:00' },
    recommendAudience: {
      DE: 'Alle Altersgruppen, Familien',
      EN: 'General public, Families, Children',
      ES: 'público en general, familias',
    },
    description: {
      DE: 'Die Berlin Design Week ist eine jährlich stattfindende Veranstaltung, die die Stadt zu einem Treffpunkt für zeitgenössisches Design, Innovation und Kreativität macht. \n Mehrere Tage lang öffnen Studios, Galerien, Marken und kulturelle Einrichtungen ihre Türen und präsentieren Ausstellungen, Vorträge sowie interaktive Formate, die zeigen, wie Design das städtische Leben, die Technologie und die Kultur beeinflusst. \n Die Veranstaltung richtet sich sowohl an Fachleute als auch an die breite Öffentlichkeit und ist ideal für alle, die neue Ideen, aktuelle Trends und innovative Perspektiven auf die Zukunft entdecken möchten - in einer der bedeutendsten Kreativmetropolen Europas.',
      EN: "The Berlin Women's Run is an annual sporting event in Berlin that celebrates women's running in an inclusive, motivating, and festive environment. \n It is not a competition, but an experience designed to be enjoyed at your own pace, allowing you to move comfortably and share the moment with other women in an atmosphere of support and positive energy. Women of all ages and fitness levels take part, from beginners to experienced runners. \n The route is usually set through green spaces such as the Tiergarten, creating a relaxed atmosphere where the focus is not on finishing times, but on wellbeing, community, and self- care.",
      ES: 'La **Berlin Design Week** es un evento anual que transforma la ciudad en un punto de encuentro para el diseño contemporáneo, la innovación y la creatividad. \n Durante varios días, estudios, galerías, marcas y espacios culturales abren sus puertas con exposiciones, charlas y experiencias que muestran cómo el diseño influye en la vida urbana, la tecnología y la cultura. \n Es un evento abierto a profesionales y al público general, ideal para quienes quieren descubrir nuevas ideas, tendencias y formas de pensar el futuro desde una de las ciudades creativas más importantes de Europa.',
    },
    highlights: {
      DE: [
        'Goldener Turm mit Panoramablick',
        'Porzellankabinett & Eichengalerie',
        'Formale Gärten (Eintritt frei)',
        'Museumscafé in der Orangerie',
      ],
      EN: [
        'Golden Tower with panoramic views',
        'Porcelain Cabinet & Oak Gallery',
        'Formal gardens (free entry)',
        'Museum café in the orangery',
      ],
      ES: [
        'Torre dorada con vistas panorámicas',
        'Gabinete de porcelana y Galería de Roble',
        'Jardines formales (entrada gratuita)',
        'Café del museo en la naranjería',
      ],
    },
  },
  {
    id: 5,
    slug: 'mowe-festival',
    image:
      '/assets/img/events/Eventos_Prenzlauer_Berg_Fahrrad_Route.jpg',
    location: 'Moabit / Wedding',
    categoryKey: 'Art',
    title: { DE: 'Mowe Festival for Art and Urban Culture', EN: 'Mowe Festival for Art and Urban Culture', ES: 'Mowe Festival for Art and Urban Culture' },
    category: { DE: 'Kunst', EN: 'Art', ES: 'Art' },
    date: {
      DE: 'Findet einmal im Jahr im Mai statt',
      EN: 'May (held once a year)',
      ES: 'Mayo se realiza una vez al año',
    },
    duration: { DE: '09:00 - 18:00 Uhr', EN: '09:00 - 18:00', ES: '09:00 - 18:00' },
    recommendAudience: { DE: 'Alle Altersgruppen, Familien, Kinder', EN: 'General public, families, children', ES: 'General, Familias, Niños' },
    description: {
      DE: 'Das **Mowe Festival for Art and Urban Culture** ist ein Festival für zeitgenössische Kunst und urbane Kultur, das verschiedene Orte in Berlin in kreative Räume verwandelt, die der gesamten Stadt offenstehen. \n Während der Veranstaltung werden Ausstellungen, Interventionen im öffentlichen Raum, Kunstinstallationen, Musik und Performances präsentiert, die lokale und internationale Künstler mit dem urbanen Umfeld verbinden. Die Stadt selbst wird Teil des Kunstwerks und lädt das Publikum dazu ein, neue Wege des Sehens, Erlebens und Nutzens öffentlicher Räume zu entdecken. \n Die Veranstaltung ist vollständig offen für alle Besucher, und es sind keine Vorkenntnisse im Bereich Kunst erforderlich. Ziel ist es, zeitgenössische Kreativität näher an den Alltag zu bringen und ein immersives, freies und zugängliches Erlebnis für alle zu schaffen, die sich für Kultur und urbane Entdeckungen interessieren.',
      EN: "The **Mowe Festival for Art and Urban Culture** is a festival dedicated to contemporary art and urban culture that transforms different areas of Berlin into creative spaces open to the entire city. \n Throughout the event, visitors can experience exhibitions, public-space interventions, art installations, music, and performances that connect local and international artists with the urban environment. The city itself becomes part of the artwork, inviting people to explore new ways of seeing, feeling, and inhabiting public spaces. \n It is a completely open event for everyone, where no prior knowledge of art is required to participate. The aim is to bring contemporary creativity closer to everyday life and offer an immersive, free, and accessible experience for anyone interested in culture and urban exploration.",
      ES: 'El **Mowe Festival for Art and Urban Culture** es un festival dedicado al arte contemporáneo y la cultura urbana que transforma distintos espacios de Berlín en escenarios creativos abiertos a la ciudad. \n A lo largo del evento se presentan exposiciones, intervenciones en el espacio público, instalaciones artísticas, música y performances que conectan a artistas locales e internacionales con el entorno urbano. La ciudad se convierte en parte de la obra, invitando al público a explorar nuevas formas de ver, sentir y habitar el espacio. \n Es un evento completamente abierto a todo el público, donde no hace falta ser experto en arte para participar. La idea es acercar la creación contemporánea a la vida cotidiana y ofrecer una experiencia inmersiva, libre y accesible para cualquier persona interesada en la cultura y la exploración urbana.',
    },
    highlights: {
      DE: [
        'Über 200 Händler jeden Sonntag',
        'Berüchtigtes Bearpit-Karaoke ab 15:00',
        'Spezialstände für Vintage & Vinyl',
        'Internationaler Streetfood-Bereich',
      ],
      EN: [
        '200+ vendors every Sunday',
        'Infamous Bearpit Karaoke from 15:00',
        'Vintage & vinyl specialist stalls',
        'International street food court',
      ],
      ES: [
        'Más de 200 vendedores cada domingo',
        'El célebre Bearpit Karaoke desde las 15:00',
        'Puestos especializados en vintage y vinilo',
        'Zona de comida callejera internacional',
      ],
    },
  },
  {
    id: 6,
    slug: 'chili-fest',
    image: '/assets/img/events/Eventos_Mitte_Berlin_Fahrrad_Route.jpg',
    location: 'Varies',
    categoryKey: 'Food',
    title: { DE: 'Berlin Chili Fest', EN: 'Berlin Chili Fest', ES: 'Berlin Chili Fest' },
    category: { DE: 'Essen', EN: 'Food', ES: 'Gastronomía' },
    date: {
      DE: 'Mai - Juni, findet einmal im Jahr statt',
      EN: 'May-June (held once a year)',
      ES: 'Mayo - Junio se realiza una vez al año',
    },
    duration: {
      DE: '09:00 - 22:00 Uhr',
      EN: '09:00-22:00',
      ES: '09:00 - 22:00',
    },
    recommendAudience: {
      DE: 'Alle Altersgruppen, Familien, Kinder',
      EN: 'General public, families, children',
      ES: 'General, Familias, Niños',
    },
    description: {
      DE: 'Das **Berlin Chili Fest** ist ein gastronomisches Festival rund um die Welt der Schärfe, bei dem Kulinarik, kreative Küche und Spaß zu einem intensiven und sinnlichen Erlebnis verschmelzen. \n Während der Veranstaltung können Besucher handgemachte Chilisaucen, internationale Gerichte mit unterschiedlichen Schärfegraden, freundschaftliche Chili-Wettbewerbe sowie Produkte lokaler und internationaler Anbieter entdecken. Das Ganze findet in einer festlichen Atmosphäre mit Musik, Aktivitäten und zahlreichen Möglichkeiten statt, neue kulinarische Trends kennenzulernen. \n Die Veranstaltung ist für alle offen und eignet sich sowohl für Neugierige als auch für Liebhaber scharfer Speisen. Im Mittelpunkt stehen nicht Wettbewerb oder Leistung, sondern der Genuss, das Entdecken außergewöhnlicher Geschmacksrichtungen und das gemeinsame Erleben einer besonderen kulinarischen Erfahrung in Berlin.',
      EN: "The **Berlin Chili Fest** is a culinary festival dedicated to the world of spicy food, where gastronomy, creativity, and entertainment come together in an intense and highly sensory experience. \n During the event, visitors can sample artisanal hot sauces, international dishes with varying levels of heat, friendly chili-eating challenges, and products from local and international vendors. All of this takes place in a festive setting with music, activities, and opportunities to discover new food trends. \n It is an event open to everyone, ideal for both curious newcomers and dedicated spice enthusiasts. The focus is not on competition, but on enjoying the experience, exploring bold flavors, and sharing a unique culinary adventure in Berlin.",
      ES: 'El **Berlin Chili Fest** es un festival gastronómico dedicado al mundo del picante, donde la comida, la creatividad culinaria y la diversión se combinan en una experiencia intensa y muy sensorial. \n Durante el evento, visitantes pueden probar salsas artesanales, platos internacionales con distintos niveles de picante, competiciones amistosas de resistencia al chile y puestos de productores locales e internacionales. Todo se desarrolla en un ambiente festivo, con música, actividades y espacios para descubrir nuevas tendencias gastronómicas. \n Es un evento abierto a todo el público, ideal tanto para curiosos como para amantes del picante, donde lo importante no es competir, sino disfrutar, explorar sabores extremos y compartir una experiencia culinaria diferente en Berlín.',
    },
    highlights: {
      DE: [
        'Pergamonaltar & Ischtar-Tor',
        'Nofretete-Büste (Neues Museum)',
        'Skulpturensammlung im Bode-Museum',
        'Außencafé mit Spreeblick',
      ],
      EN: [
        'Pergamon Altar & Ishtar Gate',
        'Bust of Nefertiti (Neues Museum)',
        'Bode Museum sculpture collection',
        'Outdoor café with Spree views',
      ],
      ES: [
        'Altar de Pérgamo y Puerta de Ishtar',
        'Busto de Nefertiti (Neues Museum)',
        'Colección de escultura del Bode Museum',
        'Café al aire libre con vistas al Spree',
      ],
    },
  },
  {
    id: 7,
    slug: 'sciences-night',
    image: '/assets/img/events/Eventos_Schoneberg_Fahrrad_Route.jpg',
    location: 'Berlin',
    categoryKey: 'Science',
    title: { DE: 'Lange Nacht der Wissenschaften', EN: 'Long Night of the Sciences', ES: 'Long Night of the Sciences' },
    category: { DE: 'Wissenschaft', EN: 'Science', ES: 'Ciencia' },
    date: { DE: 'Juni', EN: 'June', ES: 'Junio' },
    duration: { DE: '09:00 - 18:00 Uhr', EN: '09:00 - 18:00', ES: '09:00 - 18:00' },
    recommendAudience: {
      DE: 'Alle Altersgruppen, Familien, Kinder',
      EN: 'General public, Families, Children',
      ES: 'General, Familias, Niños',
    },
    description: {
      DE: 'Die **Lange Nacht der Wissenschaften** ist eine jährlich stattfindende Veranstaltung in Berlin, bei der Universitäten, Labore, Forschungsinstitute und wissenschaftliche Einrichtungen ihre Türen für die Öffentlichkeit öffnen. \n In der ganzen Stadt können Besucher Live-Experimente, interaktive Vorträge, technologische Demonstrationen und geführte Rundgänge erleben, die Wissenschaft auf praktische und zugängliche Weise vermitteln. Es ist eine einzigartige Gelegenheit, die Forschung hinter unserem Alltag kennenzulernen - von der Medizin bis zur Künstlichen Intelligenz. \n Die Veranstaltung ist für alle offen und eignet sich besonders für Familien, neugierige Menschen und wissbegierige Entdecker. Lernen wird hier zu einer unterhaltsamen, interaktiven und überraschenden Erfahrung im Herzen Berlins.',
      EN: "The **Long Night of the Sciences** is an annual event in Berlin during which universities, laboratories, research institutes, and scientific centers open their doors to the public for a special evening. \n Across the city, visitors can explore live experiments, interactive talks, technology demonstrations, and guided tours that make science practical, engaging, and accessible. It is a unique opportunity to discover how the research behind everyday life works, from medicine to artificial intelligence. \n The event is completely open to everyone and is ideal for families, curious visitors, and inquisitive minds. It transforms learning into a fun, interactive, and inspiring experience in the heart of Berlin.",
      ES: 'La **Long Night of the Sciences** es un evento anual en Berlín donde universidades, laboratorios, institutos de investigación y centros científicos abren sus puertas al público durante una noche especial. \n A lo largo de la ciudad se pueden explorar experimentos en vivo, charlas interactivas, demostraciones tecnológicas y recorridos guiados que acercan la ciencia de forma práctica y accesible. Es una oportunidad única para descubrir cómo funciona la investigación detrás de la vida cotidiana, desde la medicina hasta la inteligencia artificial. \n Es un evento completamente abierto a todo el público, ideal para familias, curiosos y mentes inquietas, donde aprender se convierte en una experiencia divertida, participativa y sorprendente en el corazón de Berlín.',
    },
    highlights: {
      DE: [
        '7 kuratierte Verkostungen',
        'Stopps abseits der Karte & nur mit Reservierung',
        'Geführt von einem lokalen Food-Autor',
        'Max. 10 Teilnehmer pro Tour',
      ],
      EN: [
        '7 curated food tastings',
        'Off-menu & reservation-only stops',
        'Guided by a local food writer',
        'Max 10 participants per tour',
      ],
      ES: [
        '7 degustaciones seleccionadas',
        'Paradas fuera de carta y solo con reserva',
        'Guiado por un escritor gastronómico local',
        'Máximo 10 participantes por tour',
      ],
    },
  },
  {
    id: 8,
    slug: 'fete-musique',
    image:
      '/assets/img/events/Eventos_Steglitz_Fahrrad_Route_Berlin.jpg',
    location: 'Berlin',
    categoryKey: 'Music',
    title: { DE: 'Fête de la Musique', EN: 'Fête de la Musique', ES: 'Fête de la Musique' },
    category: { DE: 'Musik', EN: 'Music', ES: 'Música' },
    date: { DE: 'Juni', EN: 'June', ES: 'Junio' },
    duration: { DE: '09:00 - 23:00 Uhr', EN: '09:00 - 23:00', ES: '09:00 - 23:00' },
    recommendAudience: {
      DE: 'Alle Altersgruppen, Familien, Kinder',
      EN: 'General public, Families, Children',
      ES: 'General, Familias, Niños',
    },
    description: {
      DE: 'Die **Fête de la Musique** ist ein jährliches Musikfest, das die Straßen Berlins mit kostenlosen Konzerten in Parks, auf Plätzen, in Bars und in kulturellen Einrichtungen belebt. \n Einen ganzen Tag lang präsentieren professionelle Musiker und Amateure unterschiedlichster Stilrichtungen - von Jazz und Rock bis hin zu elektronischer Musik und Klassik - ihr Können unter freiem Himmel und verwandeln die gesamte Stadt in eine große Bühne. \n Die Veranstaltung ist für alle offen und zeichnet sich dadurch aus, dass es keine Grenzen zwischen Künstlern und Publikum gibt. Jeder kann die Atmosphäre genießen, neue Klänge entdecken und Berlin als ein großes gemeinschaftliches Musikfest erleben.',
      EN: "**Fête de la Musique** is an annual celebration of music that fills the streets of Berlin with free concerts in parks, public squares, bars, and cultural venues. \n Throughout the day, professional and amateur musicians from every genre — from jazz and rock to electronic and classical music — share their talent in open-air performances, transforming the entire city into a stage. \n It is an event open to everyone, where there are no barriers between artists and audiences. Anyone can enjoy the atmosphere, discover new sounds, and experience Berlin as one great collective musical celebration.",
      ES: 'La **Fête de la Musique** es una celebración anual de la música que llena las calles de Berlín con conciertos gratuitos en parques, plazas, bares y espacios culturales. \n Durante todo un día, músicos profesionales y aficionados de todos los estilos —desde jazz y rock hasta electrónica y música clásica— comparten su talento al aire libre, creando una ciudad completamente convertida en escenario. \n Es un evento abierto a todo el público, donde no hay barreras entre artistas y espectadores: cualquiera puede disfrutar, descubrir nuevos sonidos y vivir Berlín como una gran fiesta musical colectiva.',
    },
    highlights: {
      DE: [
        'Gemeinsames Deckentreffen',
        'Fahrrad-Geschicklichkeitskurs für Kinder um 14:00',
        'Geführte Sonnenuntergangstour um 18:00',
        'Hunde- & familienfreundliche Veranstaltung',
      ],
      EN: [
        'Community blanket gathering',
        "Kids' bike skills course at 14:00",
        'Guided sunset ride at 18:00',
        'Dog-friendly & family event',
      ],
      ES: [
        'Encuentro colectivo sobre mantas',
        'Circuito de habilidades en bici para niños a las 14:00',
        'Paseo guiado al atardecer a las 18:00',
        'Evento apto para perros y familias',
      ],
    },
  },
  {
    id: 9,
    slug: 'italian-food-festival',
    image: '/assets/img/events/Eventos_Zehlendorf_Fahrrad_Route.jpg',
    location: 'Berlin',
    categoryKey: 'Food',
    title: { DE: 'Italian Street Food Festival', EN: 'Italian Street Food Festival', ES: 'Italian Street Food Festival' },
    category: { DE: 'Essen', EN: 'Food', ES: 'Gastronomía' },
    date: { DE: 'Juni', EN: 'June', ES: 'Junio' },
    duration: { DE: '09:00 - 21:00 Uhr', EN: '09:00 - 21:00', ES: '09:00 - 21:00' },
    recommendAudience: {
      DE: 'Alle Altersgruppen, Familien, Kinder',
      EN: 'General public, Families, Children',
      ES: 'General, Familias, Niños',
    },
    description: {
      DE: 'Das **Italian Street Food Festival** ist eine gastronomische Veranstaltung in Berlin, die der italienischen Straßenküche gewidmet ist. Verschiedene Produzenten, Köche und kulinarische Konzepte, inspiriert von der italienischen Tradition, kommen hier zusammen. \n Während des Festivals können Besucher Spezialitäten wie frische Pasta, Pizza al Taglio, Arancini, Focaccia, traditionelle Süßspeisen und regionale Getränke probieren - alles in einer lockeren, festlichen Atmosphäre, die zum Genießen unter freiem Himmel einlädt. \n Die Veranstaltung ist für alle offen und ideal für alle, die die italienische Küche auf eine unkomplizierte, vielfältige und zugängliche Weise kennenlernen möchten. Statt eines klassischen Restaurantbesuchs erwartet die Gäste das Flair eines urbanen Marktes und ein geselliges kulinarisches Erlebnis.',
      EN: "The **Italian Street Food Festival** is a gastronomic event in Berlin dedicated to Italian street cuisine, bringing together producers, chefs, and culinary concepts inspired by Italy's rich food traditions. \n Throughout the festival, visitors can enjoy specialties such as fresh pasta, pizza al taglio, arancini, focaccia, traditional desserts, and regional beverages, all served in a relaxed and festive setting designed for outdoor enjoyment. \n It is an event open to everyone, ideal for those who want to discover Italian cuisine in a friendly, diverse, and accessible way, without the formality of a restaurant, through the atmosphere of an urban market and a shared social experience.",
      ES: 'El **Italian Street Food Festival** es un evento gastronómico en Berlín dedicado a la cocina callejera italiana, donde se reúnen distintos productores, chefs y propuestas culinarias inspiradas en la tradición italiana. \n Durante el festival se pueden probar especialidades como pasta fresca, pizza al taglio, arancini, focaccia, dulces típicos y bebidas regionales, todo en un ambiente informal, festivo y pensado para disfrutar al aire libre. \n Es un evento abierto a todo el público, ideal para quienes quieren descubrir la gastronomía italiana de una forma cercana, variada y accesible, sin necesidad de restaurante, en un formato de mercado urbano y experiencia social.',
    },
    highlights: {
      DE: [
        'Uralter Grunewald',
        'Radfahren am Wannsee-Ufer',
        'Fähre zur Pfaueninsel',
        'Tierbeobachtung: Rehe, Reiher, Füchse',
      ],
      EN: [
        'Grunewald ancient forest',
        'Wannsee lakeside cycling',
        'Pfaueninsel (Peacock Island) ferry',
        'Wildlife spotting: deer, herons, foxes',
      ],
      ES: [
        'Bosque centenario de Grunewald',
        'Ciclismo a orillas del Wannsee',
        'Ferry a la Pfaueninsel (Isla de los Pavos Reales)',
        'Avistamiento de fauna: ciervos, garzas, zorros',
      ],
    },
  },
  {
    id: 10,
    slug: 'street-food-teufelsberg',
    image:
      '/assets/img/events/Eventos_Tempelhof_Berlin_Fahrrad_Route.jpg',
    location: 'Berlin',
    categoryKey: 'Food',
    title: {
      DE: 'Street Food Fest auf dem Teufelsberg',
      EN: 'Street Food Fest on Teufelsberg',
      ES: 'Street Food Fest on Teufelsberg',
    },
    category: { DE: 'Essen', EN: 'Food', ES: 'Gastronomía' },
    date: { DE: 'Juni', EN: 'June', ES: 'Junio' },
    duration: { DE: '09:00 - 21:00 Uhr', EN: '09:00 - 21:00', ES: '09:00 - 21:00' },
    recommendAudience: {
      DE: 'Alle Altersgruppen, Familien, Kinder',
      EN: 'General public, Families, Children',
      ES: 'General, Familias, Niños',
    },
    description: {
      DE: 'Das **Street Food Fest auf dem Teufelsberg** ist eine gastronomische und kulturelle Veranstaltung, die an einem der bekanntesten und alternativen Orte Berlins stattfindet: der ehemaligen Abhörstation auf dem Teufelsberg. \n Das Festival vereint internationale Street-Food-Küche mit Musik, urbaner Kunst und Panoramablicken über die Stadt und schafft so ein einzigartiges Erlebnis in einer Umgebung voller Geschichte und Natur. Besucher können verschiedene Essensstände entdecken und gleichzeitig die kreative und künstlerische Atmosphäre des Ortes erleben. \n Die Veranstaltung ist für alle offen und ideal für alle, die etwas Abwechslung zu traditionellen Märkten suchen - eine Mischung aus Gastronomie, Kultur und einem der außergewöhnlichsten Orte Berlins.',
      EN: "The **Street Food Fest on Teufelsberg** is a gastronomic and cultural event held in one of Berlin's most iconic and alternative locations: the former listening station on Teufelsberg. \n The festival combines international street food with music, urban art, and panoramic views of the city, creating a unique experience in a setting rich in history and surrounded by nature. Visitors can explore a variety of food stalls while discovering the creative atmosphere and artistic character of the site. \n It is an event open to everyone, ideal for those looking for something different from traditional markets, blending gastronomy, culture, and one of Berlin's most distinctive locations.",
      ES: 'El **Street Food Fest on Teufelsberg** es un evento gastronómico y cultural que se celebra en uno de los lugares más icónicos y alternativos de Berlín: la antigua estación de escucha en el Teufelsberg. \n El festival combina cocina callejera internacional con música, arte urbano y vistas panorámicas de la ciudad, creando una experiencia única en un entorno lleno de historia y naturaleza. Los visitantes pueden recorrer distintos puestos de comida mientras exploran el ambiente creativo y el carácter artístico del lugar. \n Es un evento abierto a todo el público, ideal para quienes buscan algo diferente a los mercados tradicionales, mezclando gastronomía, cultura y una de las localizaciones más singulares de Berlín.',
    },
    highlights: {
      DE: [
        'Über 40 Bühnen auf dem Flugfeld',
        'Genres: Jazz, Punk, Klassik, Techno',
        'Bike-in-Konzertformat',
        'Foodtrucks & Pop-up-Bars überall',
      ],
      EN: [
        '40+ stages across the airfield',
        'Genres: jazz, punk, classical, techno',
        'Bike-in concert format',
        'Food trucks & pop-up bars throughout',
      ],
      ES: [
        'Más de 40 escenarios por todo el aeródromo',
        'Géneros: jazz, punk, clásica, techno',
        'Formato de concierto «bike-in»',
        'Food trucks y bares pop-up por todas partes',
      ],
    },
  },
  {
    id: 11,
    slug: 'fashion-week',
    image: '/assets/img/events/Eventos_Mitte_Berlin_Fahrrad_Route.jpg',
    location: 'Teufelsberg',
    categoryKey: 'Culture',
    title: {
      DE: 'Berlin Fashion Week',
      EN: 'Berlin Fashion Week',
      ES: 'Berlin Fashion Week',
    },
    category: { DE: 'Kultur', EN: 'Culture', ES: 'Cultura' },
    date: { DE: 'Juli', EN: 'July', ES: 'Julio' },
    duration: { DE: '13:00 - 22:00 Uhr', EN: '13:00 - 22:00', ES: '13:00 - 22:00' },
    recommendAudience: {
      DE: 'Alle Altersgruppen, Familien',
      EN: 'General public, Families',
      ES: 'General, Familias',
    },
    description: {
      DE: 'Die **Berlin Fashion Week** ist eines der wichtigsten Ereignisse im Kreativkalender der Stadt, bei dem aufstrebende Designer und internationale Marken ihre neuen Kollektionen und Trends präsentieren. \n Während der Modewoche füllt sich Berlin mit Modenschauen, Präsentationen, Showrooms und offenen Veranstaltungen, die die Modebranche mit Kunst, urbaner Kultur und Innovation verbinden. Sie ist ein zentraler Treffpunkt für Branchenprofis, bietet aber auch zugängliche Formate für ein Publikum, das neue Trends entdecken möchte. \n Viele der Begleitveranstaltungen sind für die Öffentlichkeit zugänglich und eignen sich ideal für alle, die Mode aus einer zeitgenössischen, experimentellen Perspektive erkunden möchten, die eng mit dem kreativen Geist Berlins verbunden ist.',
      EN: "**Berlin Fashion Week** is one of the most important events in the city's creative calendar, where emerging designers and international brands present their new collections and trends. \n During fashion week, Berlin fills with runway shows, presentations, showrooms, and open events that connect the fashion industry with art, urban culture, and innovation. It is a key meeting point for industry professionals, but it also offers accessible activities for audiences interested in discovering new trends. \n Many of its side events are open to the public, making it ideal for those who want to explore fashion from a contemporary, experimental perspective deeply connected to Berlin's creative spirit.",
      ES: 'La **Berlin Fashion Week** es uno de los eventos más importantes del calendario creativo de la ciudad, donde diseñadores emergentes y marcas internacionales presentan sus nuevas colecciones y tendencias. \n Durante la semana de la moda, Berlín se llena de desfiles, presentaciones, showrooms y eventos abiertos que conectan la industria de la moda con el arte, la cultura urbana y la innovación. Es un punto de encuentro clave para profesionales del sector, pero también ofrece actividades accesibles para el público interesado en descubrir nuevas tendencias. \n Es un evento abierto a todo el público en muchas de sus actividades paralelas, ideal para quienes quieren explorar la moda desde una perspectiva contemporánea, experimental y profundamente ligada al espíritu creativo de Berlín.',
    },
    highlights: {
      DE: [
        'Über 80 Museen, ein Ticket',
        'Besondere Installationen nur bei Nacht',
        'Radroutenkarte inklusive',
        'Late-Night-Bar im Hamburger Bahnhof',
      ],
      EN: [
        '80+ museums, one ticket',
        'Special night-only installations',
        'Cycle route map provided',
        'Late-night bar at Hamburger Bahnhof',
      ],
      ES: [
        'Más de 80 museos, una entrada',
        'Instalaciones especiales solo nocturnas',
        'Se facilita un mapa de rutas ciclistas',
        'Bar nocturno en el Hamburger Bahnhof',
      ],
    },
  },
  {
    id: 12,
    slug: 'night-museums',
    image: '/assets/img/events/Eventos_Kopenick_Berlin_Fahrrad.jpg',
    location: 'Mitte',
    categoryKey: 'Culture',
    title: {
      DE: 'Lange Nacht der Museen',
      EN: 'Long Night of Museums',
      ES: 'Long Night of Museums',
    },
    category: { DE: 'Kultur', EN: 'Culture', ES: 'Cultura' },
    date: { DE: 'August', EN: 'August', ES: 'Agosto' },
    duration: { DE: '19:00 - 00:00 Uhr', EN: '7 pm - midnight', ES: '19:00 - 00:00' },
    recommendAudience: { DE: 'Alle Altersgruppen, Familien', EN: 'General public, families', ES: 'General, Familias' },
    description: {
      DE: 'Die **Lange Nacht der Museen** ist eine jährlich stattfindende Kulturveranstaltung in Berlin, bei der Dutzende Museen, Galerien und kulturelle Einrichtungen bis tief in die Nacht geöffnet bleiben. \n Während dieser besonderen Nacht können Besucher sowohl permanente als auch temporäre Ausstellungen erkunden, an Führungen, Performances und speziellen Programmen teilnehmen, die ausschließlich für dieses Event organisiert werden. Mit einem einzigen Ticket kann man sich frei zwischen den teilnehmenden Institutionen in der ganzen Stadt bewegen. \n Die Veranstaltung ist für alle offen und ideal, um Berlins künstlerisches, historisches und wissenschaftliches Erbe auf eine andere, dynamische und nächtliche Weise zu entdecken. Für eine Nacht wird die Stadt zu einem lebendigen Museum.',
      EN: "The **Long Night of Museums** is an annual cultural event in Berlin where dozens of museums, galleries, and cultural spaces open their doors late into the night. \n During this special evening, visitors can explore permanent and temporary exhibitions, take part in guided tours, performances, and special activities organized exclusively for the event. All of this is accessible with a single ticket that allows free movement between institutions across the city. \n It is an event open to everyone, ideal for discovering Berlin’s artistic, historical, and scientific heritage in a different, dynamic, and nighttime setting, turning the city into a living museum for one night only.",
      ES: 'La **Long Night of Museums** es un evento cultural anual en Berlín donde decenas de museos, galerías y espacios culturales abren sus puertas hasta altas horas de la noche. \n Durante esta noche especial, los visitantes pueden recorrer exposiciones permanentes y temporales, participar en visitas guiadas, performances y actividades especiales organizadas exclusivamente para el evento. Todo ello con un solo ticket que permite moverse libremente entre instituciones de toda la ciudad. \n Es un evento abierto a todo el público, ideal para descubrir el patrimonio artístico, histórico y científico de Berlín de una forma diferente, dinámica y nocturna, convirtiendo la ciudad en un gran museo vivo por una sola noche.',
    },
    highlights: {
      DE: [
        'Bootsrennen auf der Müggelspree',
        'Kunsthandwerks- & Handwerkermarkt',
        'Live-Musik am See',
        'Fährfahrten zum Müggelsee',
      ],
      EN: [
        'Boat races on the Müggelspree',
        'Craft & artisan market',
        'Lakeside live music',
        'Ferry trips to the Müggelsee',
      ],
      ES: [
        'Regatas en el Müggelspree',
        'Mercado de artesanía',
        'Música en vivo junto al lago',
        'Travesías en ferry al Müggelsee',
      ],
    },
  },
  {
    id: 13,
    slug: 'berlin-marathon',
    image: '/assets/img/events/Eventos_Kopenick_Berlin_Fahrrad.jpg',
    location: 'Berlin',
    categoryKey: 'Sport',
    title: {
      DE: 'Berlin-Marathon',
      EN: 'Berlin Marathon',
      ES: 'Berlin Marathon',
    },
    category: { DE: 'Sport', EN: 'Sport', ES: 'Deporte' },
    date: { DE: 'September', EN: 'September', ES: 'Septiembre' },
    duration: { DE: '09:00 - 17:00 Uhr', EN: '09:00 - 17:00', ES: '09:00 - 17:00' },
    recommendAudience: { DE: 'Alle Altersgruppen, Familien', EN: 'General public, families', ES: 'General, Familias' },
    description: {
      DE: 'Der **Berlin-Marathon** ist einer der wichtigsten Marathons weltweit und Teil der World Marathon Majors. Er bringt professionelle und Hobbyläufer aus allen Kontinenten zusammen. \n Die Strecke führt durch einige der bekanntesten Wahrzeichen der Stadt und schafft damit ein einzigartiges Erlebnis sowohl für die Teilnehmenden als auch für die Zuschauer, die entlang der gesamten Route anfeuern. \n Die Veranstaltung ist offen für die Stadt in ihrer Atmosphäre und als Zuschauererlebnis. Berlin verwandelt sich dabei in ein großes Sportfest, geprägt von Energie, persönlicher Überwindung und der Verbindung zwischen Läufern und Publikum im gemeinsamen urbanen Raum.',
      EN: "The **Berlin Marathon** is one of the most significant marathons in the world and is part of the World Marathon Majors, bringing together professional and amateur runners from all continents. \n The course passes through some of the city's most iconic landmarks, creating a unique experience both for participants and for spectators, who line the streets to cheer throughout the entire route. \n It is an event that is open to the city in its atmosphere and as a spectacle, where Berlin transforms into a large-scale sports celebration defined by energy, personal achievement, and the connection between runners and the public sharing the same urban space.",
      ES: 'El **Berlin Marathon** es uno de los maratones más importantes del mundo y forma parte de los World Marathon Majors, reuniendo a corredores profesionales y aficionados de todos los continentes. \n El recorrido atraviesa algunos de los puntos más emblemáticos de la ciudad, creando una experiencia única tanto para los participantes como para el público, que llena las calles para animar durante todo el trayecto. \n Es un evento abierto a la ciudad en su ambiente y espectador, donde Berlín se transforma en una gran celebración deportiva, marcada por la energía, la superación personal y la conexión entre corredores y público en un mismo espacio urbano.',
    },
    highlights: {
      DE: [
        'Bootsrennen auf der Müggelspree',
        'Kunsthandwerks- & Handwerkermarkt',
        'Live-Musik am See',
        'Fährfahrten zum Müggelsee',
      ],
      EN: [
        'Boat races on the Müggelspree',
        'Craft & artisan market',
        'Lakeside live music',
        'Ferry trips to the Müggelsee',
      ],
      ES: [
        'Regatas en el Müggelspree',
        'Mercado de artesanía',
        'Música en vivo junto al lago',
        'Travesías en ferry al Müggelsee',
      ],
    },
  },
  {
    id: 14,
    slug: 'art-fair',
    image: '/assets/img/events/Eventos_Kopenick_Berlin_Fahrrad.jpg',
    location: 'Tempelhof',
    categoryKey: 'Art',
    title: {
      DE: 'Positions Berlin Art Fair',
      EN: 'Positions Berlin Art Fair',
      ES: 'Positions Berlin Art Fair',
    },
    category: { DE: 'Kunst', EN: 'Art', ES: 'Art' },
    date: { DE: 'September', EN: 'September', ES: 'Septiembre' },
    duration: { DE: '12:00 - 21:00 Uhr', EN: '12:00 - 21:00', ES: '12:00 - 21:00' },
    recommendAudience: { DE: 'Alle Altersgruppen, Familien', EN: 'General public, families', ES: 'General, Familias' },
    description: {
      DE: 'Die **Positions Berlin Art Fair** ist eine internationale Messe für zeitgenössische Kunst, die im Herbst in Berlin Galerien, Künstler und Sammler zusammenbringt. \n Die Veranstaltung präsentiert eine kuratierte Auswahl aktueller Werke - von Malerei und Skulptur bis hin zu Installationen und digitaler Kunst - und bietet einen umfassenden Einblick in die europäische und internationale Gegenwartskunst. Ergänzend zur Ausstellung umfasst sie Vorträge, Begegnungen und Sonderprogramme, die Künstler mit Publikum und Fachleuten verbinden. \n Die Messe ist mit Eintrittskarte auch für die breite Öffentlichkeit zugänglich und eignet sich ideal für alle, die neue Trends der zeitgenössischen Kunst in einem zugänglichen, dynamischen und konzentrierten Kulturformat entdecken möchten.',
      EN: "**Positions Berlin Art Fair** is an international contemporary art fair that brings together galleries, artists, and collectors in Berlin during the autumn season. \n The event presents a curated selection of current works, ranging from painting and sculpture to installations and digital art, offering a broad view of the contemporary European and international art scene. Alongside the exhibition, it features talks, meetings, and special programs that connect artists with the public and industry professionals. \n It is open to the general public with an entry ticket, making it ideal for those who want to discover new trends in contemporary art through an accessible, dynamic, and concentrated cultural experience in the city.",
      ES: 'La **Positions Berlin Art Fair** es una feria internacional de arte contemporáneo que reúne galerías, artistas y coleccionistas en Berlín durante la temporada de otoño. \n El evento presenta una selección curada de obras actuales, desde pintura y escultura hasta instalaciones y arte digital, ofreciendo una visión del panorama artístico contemporáneo europeo e internacional. Además de la exposición, incluye charlas, encuentros y programas especiales que conectan a artistas con el público y profesionales del sector. \n Es un evento abierto al público general mediante entrada, ideal para quienes quieren descubrir nuevas tendencias del arte contemporáneo en un formato accesible, dinámico y concentrado en una sola experiencia cultural en la ciudad.',
    },
    highlights: {
      DE: [
        'Bootsrennen auf der Müggelspree',
        'Kunsthandwerks- & Handwerkermarkt',
        'Live-Musik am See',
        'Fährfahrten zum Müggelsee',
      ],
      EN: [
        'Boat races on the Müggelspree',
        'Craft & artisan market',
        'Lakeside live music',
        'Ferry trips to the Müggelsee',
      ],
      ES: [
        'Regatas en el Müggelspree',
        'Mercado de artesanía',
        'Música en vivo junto al lago',
        'Travesías en ferry al Müggelsee',
      ],
    },
  },
  {
    id: 15,
    slug: 'festival-lights',
    image: '/assets/img/events/Eventos_Kopenick_Berlin_Fahrrad.jpg',
    location: 'Berlin-Mitte',
    categoryKey: 'Art',
    title: {
      DE: 'Festival of Lights',
      EN: 'Festival of Lights',
      ES: 'Festival of Lights',
    },
    category: { DE: 'Kunst', EN: 'Art', ES: 'Art' },
    date: { DE: 'Oktober', EN: 'October', ES: 'Octubre' },
    duration: { DE: '18:00 - 23:00 Uhr', EN: '6.00 pm - 11.00 pm', ES: '18:00 - 23:00' },
    recommendAudience: { DE: 'Alle Altersgruppen, Familien und Kinder', EN: 'General public, families and children', ES: 'General, Familias y niños' },
    description: {
      DE: 'Das **Festival of Lights** ist eines der bekanntesten visuellen Ereignisse in Berlin, bei dem Denkmäler, Plätze und historische Gebäude mit Lichtshows, künstlerischen Projektionen und Mapping-Installationen inszeniert werden. \n An mehreren Tagen im Herbst verwandelt sich die Stadt in eine Freiluftgalerie, die dazu einlädt, Berlin bei Nacht zu erkunden und seine bekanntesten Orte durch Lichtkunst und digitale Kreativität neu zu entdecken. \n Die Veranstaltung ist für alle offen und in weiten Teilen kostenlos zugänglich. Sie eignet sich ideal zum Spazieren, Fotografieren und dafür, die Stadt aus einer völlig neuen Perspektive zu erleben, in der Architektur zu einer immersiven visuellen Erfahrung wird.',
      EN: "The **Festival of Lights** is one of Berlin's most iconic visual events, where monuments, squares, and historic buildings are illuminated with light shows, artistic projections, and mapping installations. \n Over several days in autumn, the city turns into an open-air gallery, inviting visitors to explore Berlin at night and discover its most famous landmarks reinterpreted through light art and digital creativity. \n It is an event open to everyone and largely free of charge for most installations, making it ideal for walking, photography, and experiencing the city from a completely different perspective, where architecture becomes an immersive visual experience.",
      ES: 'El **Festival of Lights** es uno de los eventos visuales más emblemáticos de Berlín, donde monumentos, plazas y edificios históricos se iluminan con espectáculos de luz, proyecciones artísticas y mapping. \n Durante varios días en otoño, la ciudad se transforma en una galería al aire libre, invitando a recorrer Berlín de noche y descubrir sus lugares más icónicos reinterpretados a través del arte lumínico y la creatividad digital. \n Es un evento abierto a todo el público y completamente gratuito en gran parte de sus instalaciones, ideal para pasear, fotografiar y vivir la ciudad desde una perspectiva totalmente diferente, donde la arquitectura se convierte en una experiencia visual inmersiva.',
    },
    highlights: {
      DE: [
        'Bootsrennen auf der Müggelspree',
        'Kunsthandwerks- & Handwerkermarkt',
        'Live-Musik am See',
        'Fährfahrten zum Müggelsee',
      ],
      EN: [
        'Boat races on the Müggelspree',
        'Craft & artisan market',
        'Lakeside live music',
        'Ferry trips to the Müggelsee',
      ],
      ES: [
        'Regatas en el Müggelspree',
        'Mercado de artesanía',
        'Música en vivo junto al lago',
        'Travesías en ferry al Müggelsee',
      ],
    },
  },
  {
    id: 16,
    slug: 'food-week',
    image: '/assets/img/events/Eventos_Kopenick_Berlin_Fahrrad.jpg',
    location: 'Berlin',
    categoryKey: 'Food',
    title: {
      DE: 'Berlin Food Week',
      EN: 'Berlin Food Week',
      ES: 'Berlin Food Week',
    },
    category: { DE: 'Essen', EN: 'Food', ES: 'Gastronomía' },
    date: { DE: 'Oktober', EN: 'October', ES: 'Octubre' },
    duration: { DE: '18:00 - 23:00 Uhr', EN: '6.00 pm - 11.00 pm', ES: '18:00 - 23:00' },
    recommendAudience: { DE: 'Alle Altersgruppen, Familien', EN: 'General public, families', ES: 'General, Familias' },
    description: {
      DE: 'Die **Berlin Food Week** ist ein jährlich stattfindendes kulinarisches Festival, das die gastronomische Vielfalt der Stadt feiert und Köche, Restaurants, Produzenten und Genussliebhaber zusammenbringt. \n Über mehrere Tage hinweg werden spezielle Menüs, Pop-up-Events, Verkostungen, Food-Märkte und exklusive kulinarische Erlebnisse organisiert, die die aktuellen Trends der Berliner Food- Szene zeigen - von lokaler Küche bis hin zu internationalen und innovativen Konzepten. \n Die Veranstaltung ist über verschiedene Angebote und Reservierungen für die Öffentlichkeit zugänglich und eignet sich ideal für alle, die Berlin durch seine zeitgenössische, kreative und ständig weiterentwickelte Gastronomie entdecken möchten.',
      EN: "**Berlin Food Week** is an annual culinary festival that celebrates the city's gastronomic diversity, bringing together chefs, restaurants, producers, and food lovers. /n Over several days, special menus, pop-up events, tastings, food markets, and exclusive culinary experiences are organized, showcasing the most current trends in Berlin's food scene, from local cuisine to international and innovative concepts. /n It is an event open to the public through various activities and reservations, ideal for those who want to discover Berlin through its contemporary, creative, and constantly evolving gastronomy.",
      ES: 'La **Berlin Food Week** es un festival gastronómico anual que celebra la diversidad culinaria de la ciudad, reuniendo chefs, restaurantes, productores y amantes de la buena comida.  \n Durante varios días se organizan menús especiales, eventos pop-up, degustaciones, mercados gastronómicos y experiencias culinarias exclusivas que muestran las tendencias más actuales de la escena food de Berlín, desde cocina local hasta propuestas internacionales e innovadoras.  \n Es un evento abierto a todo el público mediante distintas actividades y reservas, ideal para quienes quieren descubrir Berlín a través de su gastronomía contemporánea, creativa y en constante evolución.',
    },
    highlights: {
      DE: [
        'Bootsrennen auf der Müggelspree',
        'Kunsthandwerks- & Handwerkermarkt',
        'Live-Musik am See',
        'Fährfahrten zum Müggelsee',
      ],
      EN: [
        'Boat races on the Müggelspree',
        'Craft & artisan market',
        'Lakeside live music',
        'Ferry trips to the Müggelsee',
      ],
      ES: [
        'Regatas en el Müggelspree',
        'Mercado de artesanía',
        'Música en vivo junto al lago',
        'Travesías en ferry al Müggelsee',
      ],
    },
  },
  {
    id: 17,
    slug: 'christmas-breitscheidplatz',
    image: '/assets/img/events/Eventos_Kopenick_Berlin_Fahrrad.jpg',
    location: 'Charlottenburg',
    categoryKey: 'Culture',
    title: {
      DE: 'Weihnachtsmarkt am Breitscheidplatz',
      EN: 'Christmas Market on Breitscheidplatz',
      ES: 'Christmas Market on Breitscheidplatz',
    },
    category: { DE: 'Kultur', EN: 'Culture', ES: 'Cultura' },
    date: { DE: 'November - Januar', EN: 'November - January', ES: 'Noviembre - Enero' },
    duration: { DE: '13:00 - 23:00 Uhr', EN: '13:00 - 23:00', ES: '13:00 - 23:00' },
    recommendAudience: { DE: 'Alle Altersgruppen, Familien, Kinder', EN: 'General public, families, children', ES: 'General, Familias, niños' },
    description: {
      DE: 'Der **Weihnachtsmarkt am Breitscheidplatz** ist einer der bekanntesten Weihnachtsmärkte Berlins und befindet sich direkt neben der Kaiser-Wilhelm-Gedächtniskirche im Herzen von Charlottenburg. \n In der Wintersaison füllt sich der Platz mit Lichtern, Handwerksständen, traditioneller deutscher Küche, Glühwein und festlicher Dekoration und schafft eine warme, festliche Atmosphäre mitten in der Stadt. Er zählt zu den meistbesuchten Orten in Berlin während der Weihnachtszeit. \n Die Veranstaltung ist für alle offen und eignet sich ideal zum Spazierengehen, zum Genießen der winterlichen Stimmung und zum Erleben der Berliner Weihnachtstradition an einem ihrer bekanntesten Orte.',
      EN: "The **Christmas Market on Breitscheidplatz** is one of Berlin's most iconic Christmas markets, located next to the Kaiser Wilhelm Memorial Church in the heart of Charlottenburg. \n During the winter season, the area fills with lights, craft stalls, traditional German food, mulled wine, and festive decorations, creating a warm and celebratory atmosphere in the middle of the city. It is one of the most visited places in Berlin during Christmas time. \n It is an event open to everyone, ideal for strolling, enjoying the winter atmosphere, and experiencing Berlin's Christmas traditions in one of its most iconic settings",
      ES: 'El **Christmas Market on Breitscheidplatz** es uno de los mercados navideños más emblemáticos de Berlín, ubicado junto a la iglesia conmemorativa Kaiser Wilhelm en el centro de Charlottenburg. \n Durante la temporada de invierno, el espacio se llena de luces, puestos artesanales, comida típica alemana, vino caliente y decoraciones navideñas, creando una atmósfera cálida y festiva en medio de la ciudad. Es uno de los puntos más visitados durante la Navidad en Berlín. \n Es un evento abierto a todo el público, ideal para pasear, disfrutar del ambiente invernal y vivir la tradición navideña berlinesa en uno de sus escenarios más icónicos.',
    },
    highlights: {
      DE: [
        'Bootsrennen auf der Müggelspree',
        'Kunsthandwerks- & Handwerkermarkt',
        'Live-Musik am See',
        'Fährfahrten zum Müggelsee',
      ],
      EN: [
        'Boat races on the Müggelspree',
        'Craft & artisan market',
        'Lakeside live music',
        'Ferry trips to the Müggelsee',
      ],
      ES: [
        'Regatas en el Müggelspree',
        'Mercado de artesanía',
        'Música en vivo junto al lago',
        'Travesías en ferry al Müggelsee',
      ],
    },
  },
  {
    id: 18,
    slug: 'christmas-gendarmenmarkt',
    image: '/assets/img/events/Eventos_Kopenick_Berlin_Fahrrad.jpg',
    location: 'Mitte',
    categoryKey: 'Culture',
    title: {
      DE: 'Weihnachtsmarkt am Gendarmenmarkt',
      EN: 'Christmas Market on Gendarmenmarkt',
      ES: 'Christmas Market on Gendarmenmarkt',
    },
    category: { DE: 'Kultur', EN: 'Culture', ES: 'Cultura' },
    date: { DE: 'November - Dezember', EN: 'November - December', ES: 'Noviembre - Diciembre' },
    duration: { DE: '13:00 - 23:00 Uhr', EN: '13:00 - 23:00', ES: '13:00 - 23:00' },
    recommendAudience: { DE: 'Alle Altersgruppen, Familien, Kinder', EN: 'General public, families, children', ES: 'General, Familias, niños' },
    description: {
      DE: 'Der **Weihnachtsmarkt am Gendarmenmarkt** ist einer der elegantesten und bekanntesten Weihnachtsmärkte Berlins und befindet sich auf einem der schönsten Plätze der Stadt, umgeben vom Konzerthaus sowie dem Französischen und dem Deutschen Dom. \n In der Wintersaison bietet der Markt hochwertiges Kunsthandwerk, traditionelle Gastronomie, Live-Performances und eine sorgfältig gestaltete Atmosphäre mit festlicher Beleuchtung und historischer Architektur als Kulisse. Die Stimmung ist ruhiger und gehobener als auf vielen anderen Märkten der Stadt. \n Die Veranstaltung ist für alle offen und eignet sich ideal für alle, die ein besonderes und ästhetisches Weihnachtserlebnis suchen, bei dem Spaziergänge, Kulinarik und Tradition in einem einzigartigen Rahmen im Herzen Berlins zusammenkommen.',
      EN: "The **Christmas Market on Gendarmenmarkt** is one of the most elegant and renowned Christmas markets in Berlin, located in one of the city's most beautiful squares, surrounded by the Konzerthaus and the French and German Cathedrals. \n During the winter season, the market features high-quality crafts, traditional cuisine, live performances, and a carefully designed atmosphere with festive lights and historic architecture as a backdrop. Its ambiance is calmer and more refined than many other markets in the city. \n It is an event open to everyone, ideal for those looking for a more special and aesthetic Christmas experience, where walking, gastronomy, and tradition come together in a unique setting in the heart of Berlin.",
      ES: 'El **Christmas Market on Gendarmenmarkt** es uno de los mercados navideños más elegantes y reconocidos de Berlín, situado en una de las plazas más bonitas de la ciudad, rodeada por la Konzerthaus y las catedrales francesa y alemana. \n Durante la temporada de invierno, el mercado ofrece artesanía de alta calidad, gastronomía tradicional, espectáculos en vivo y un ambiente cuidadosamente decorado con luces y arquitectura histórica como telón de fondo. Su atmósfera es más tranquila y cuidada que otros mercados de la ciudad. \n Es un evento abierto a todo el público, ideal para quienes buscan una experiencia navideña más especial y estética, donde el paseo, la gastronomía y la tradición se combinan en un entorno único en el corazón de Berlín.',
    },
    highlights: {
      DE: [
        'Bootsrennen auf der Müggelspree',
        'Kunsthandwerks- & Handwerkermarkt',
        'Live-Musik am See',
        'Fährfahrten zum Müggelsee',
      ],
      EN: [
        'Boat races on the Müggelspree',
        'Craft & artisan market',
        'Lakeside live music',
        'Ferry trips to the Müggelsee',
      ],
      ES: [
        'Regatas en el Müggelspree',
        'Mercado de artesanía',
        'Música en vivo junto al lago',
        'Travesías en ferry al Müggelsee',
      ],
    },
  },
  {
    id: 19,
    slug: 'medieval-christmas-market',
    image: '/assets/img/events/Eventos_Kopenick_Berlin_Fahrrad.jpg',
    location: 'Friedrichshain',
    categoryKey: 'Culture',
    title: {
      DE: 'Mittelalterlicher Weihnachtsmarkt im RAW-Gelände',
      EN: 'Medieval Christmas Market at the RAW Compound',
      ES: 'Medieval Christmas Market at the RAW Compound',
    },
    category: { DE: 'Kultur', EN: 'Culture', ES: 'Cultura' },
    date: { DE: 'November - Dezember', EN: 'November - December', ES: 'Noviembre - Diciembre' },
    duration: { DE: '13:00 - 23:00 Uhr', EN: '13:00 - 23:00', ES: '13:00 - 23:00' },
    recommendAudience: { DE: 'Alle Altersgruppen, Familien, Kinder', EN: 'General public, families, children', ES: 'General, Familias, niños' },
    description: {
      DE: 'Der **Mittelalterliche Weihnachtsmarkt** im RAW-Gelände ist ein alternativer Weihnachtsmarkt in Berlin, der eine mittelalterliche Atmosphäre im Kulturareal RAW-Gelände in Friedrichshain nachbildet. \n Während der Veranstaltung verwandelt sich das Gelände mit Handwerksständen, traditionellem Essen, Live-Musik und von der Mittelalterzeit inspirierten Shows in ein Erlebnis, das sich deutlich von klassischen Weihnachtsmärkten der Stadt unterscheidet. Die Atmosphäre ist rustikaler, kreativer und alternativer und stark mit der urbanen Kulturszene Berlins verbunden. \n Die Veranstaltung ist für alle offen und ideal für alle, die ein anderes Weihnachten erleben möchten - experimenteller und mit einem historischen Fantasy-Touch - an einem der bekanntesten Orte der alternativen Berliner Kultur.',
      EN: "The **Medieval Christmas Market** at the RAW Compound is an alternative Christmas market in Berlin that recreates a medieval atmosphere within the RAW Gelände cultural space in Friedrichshain. \n During the event, the venue transforms with craft stalls, traditional food, live music, and performances inspired by the Middle Ages, creating an experience that differs from the city's classic Christmas markets. The atmosphere is more rustic, creative, and alternative, closely connected to Berlin's urban cultural scene. \n It is an event open to everyone, ideal for those looking for a different kind of Christmas—more experimental and with a historical-fantasy touch—set in one of the most iconic spaces of Berlin's alternative culture.",
      ES: 'El **Medieval Christmas Market** at the RAW Compound es un mercado navideño alternativo en Berlín que recrea una atmósfera medieval dentro del espacio cultural RAW Gelände en Friedrichshain. \n Durante el evento, el recinto se transforma con puestos artesanales, comida tradicional, música en vivo y espectáculos inspirados en la Edad Media, creando una experiencia distinta a los mercados navideños clásicos de la ciudad. El ambiente es más rústico, creativo y alternativo, muy ligado a la escena cultural urbana de Berlín. \n Es un evento abierto a todo el público, ideal para quienes buscan una Navidad diferente, más experimental y con un toque histórico- fantástico en uno de los espacios más icónicos de la cultura alternativa berlinesa.',
    },
    highlights: {
      DE: [
        'Bootsrennen auf der Müggelspree',
        'Kunsthandwerks- & Handwerkermarkt',
        'Live-Musik am See',
        'Fährfahrten zum Müggelsee',
      ],
      EN: [
        'Boat races on the Müggelspree',
        'Craft & artisan market',
        'Lakeside live music',
        'Ferry trips to the Müggelsee',
      ],
      ES: [
        'Regatas en el Müggelspree',
        'Mercado de artesanía',
        'Música en vivo junto al lago',
        'Travesías en ferry al Müggelsee',
      ],
    },
  },
  {
    id: 20,
    slug: 'berlinale',
    image: '/assets/img/events/Eventos_Kopenick_Berlin_Fahrrad.jpg',
    location: 'Mitte / Potsdamer Platz',
    categoryKey: 'Cinema',
    title: {
      DE: 'Berlinale',
      EN: 'Berlinale',
      ES: 'Berlinale',
    },
    category: { DE: 'Kino', EN: 'Cinema', ES: 'Cine' },
    date: { DE: 'Februar', EN: 'February', ES: 'Febrero' },
    duration: { DE: '09:00 - 23:00 Uhr', EN: '09:00 - 23:00', ES: '09:00 - 23:00' },
    recommendAudience: { DE: 'Alle Altersgruppen, Familien', EN: 'General public, families', ES: 'General, Familias' },
    description: {
      DE: 'Die **Berlinale** ist eines der wichtigsten Filmfestivals weltweit und zählt zu den großen kulturellen Höhepunkten Berlins jedes Jahr. \n Im Februar verwandelt sich die Stadt mehrere Tage lang in ein internationales Zentrum des Films mit Weltpremieren, roten Teppichen, Vorführungen in zahlreichen Kinos sowie Begegnungen mit Regisseuren, Schauspielern und Fachleuten der Filmbranche. Das Festival zeigt sowohl Independent-Produktionen als auch große internationale Premieren. \n Die Veranstaltung ist über Kinotickets für die Öffentlichkeit zugänglich und eignet sich ideal für Filmfans und Neugierige, die Berlin von seiner kulturellsten, globalsten und kreativsten Seite erleben möchten, wo Kino in der ganzen Stadt spürbar wird.',
      EN: "The **Berlinale** is one of the most important film festivals worldwide and a major cultural highlight in Berlin each year. \n For several days in February, the city becomes an international hub for cinema, with world premieres, red carpet events, screenings across multiple venues, and encounters with directors, actors, and film industry professionals. The festival showcases both independent productions and major international releases. \n It is an event open to the public through ticketed screenings, ideal for film enthusiasts and curious visitors who want to experience Berlin at its most cultural, global, and creative, where cinema is felt throughout the entire city.",
      ES: 'La **Berlinale** es uno de los festivales de cine más importantes del mundo y una de las grandes citas culturales de Berlín cada año. \n Durante varios días en febrero, la ciudad se convierte en el centro internacional del cine con estrenos mundiales, alfombras rojas, proyecciones en múltiples salas y encuentros con directores, actores y profesionales de la industria. El festival reúne tanto producciones independientes como grandes estrenos internacionales. \n Es un evento abierto al público mediante entradas para proyecciones, ideal para amantes del cine y curiosos que quieren vivir Berlín en su faceta más cultural, global y creativa, donde el cine se experimenta en toda la ciudad.',
    },
    highlights: {
      DE: [
        'Bootsrennen auf der Müggelspree',
        'Kunsthandwerks- & Handwerkermarkt',
        'Live-Musik am See',
        'Fährfahrten zum Müggelsee',
      ],
      EN: [
        'Boat races on the Müggelspree',
        'Craft & artisan market',
        'Lakeside live music',
        'Ferry trips to the Müggelsee',
      ],
      ES: [
        'Regatas en el Müggelspree',
        'Mercado de artesanía',
        'Música en vivo junto al lago',
        'Travesías en ferry al Müggelsee',
      ],
    },
  },
  {
    id: 21,
    slug: 'achtung',
    image: '/assets/img/events/Eventos_Kopenick_Berlin_Fahrrad.jpg',
    location: 'Berlin',
    categoryKey: 'Cinema',
    title: {
      DE: 'Achtung Berlin',
      EN: 'Achtung Berlin',
      ES: 'Achtung Berlin',
    },
    category: { DE: 'Kino', EN: 'Cinema', ES: 'Cine' },
    date: { DE: 'April', EN: 'April', ES: 'Abril' },
    duration: { DE: '11:00 - 22:00 Uhr', EN: '11:00 - 22:00', ES: '11:00 - 22:00' },
    recommendAudience: { DE: 'Alle Altersgruppen, Familien', EN: 'General public, families', ES: 'General, Familias' },
    description: {
      DE: '**Achtung Berlin** ist ein Filmfestival für unabhängige Produktionen aus Berlin und der Region Brandenburg. \n Über mehrere Tage werden Spielfilme, Dokumentarfilme und Kurzfilme gezeigt, die die kreative Vielfalt der lokalen Szene widerspiegeln, ergänzt durch Premieren, Diskussionen und Treffen mit Filmschaffenden. Es ist eine zentrale Plattform, um neue Stimmen des zeitgenössischen deutschen Kinos zu entdecken. \n Die Veranstaltung ist über Eintrittskarten für die Öffentlichkeit zugänglich und eignet sich ideal für alle, die ein näherbares, authentisches Kinoerlebnis suchen, das eng mit der kulturellen Realität Berlins verbunden ist und sich von großen kommerziellen Filmkreisen entfernt.',
      EN: "**Achtung Berlin** is an independent film festival centered on the cinematic production of Berlin and the Brandenburg region. \n Over several days, feature films, documentaries, and short films are presented, reflecting the creative diversity of the local scene, along with premieres, discussions, and meetings with filmmakers. It is a key platform for discovering new voices in contemporary German cinema. \n It is an event open to the public through ticketed screenings, ideal for those seeking a more intimate, authentic cinematic experience connected to Berlin’s cultural reality, far from mainstream commercial circuits.",
      ES: 'El **Achtung Berlin** es un festival de cine independiente centrado en la producción cinematográfica de Berlín y la región de Brandeburgo. \n Durante varios días se presentan largometrajes, documentales y cortometrajes que reflejan la diversidad creativa de la escena local, acompañados de estrenos, debates y encuentros con cineastas. Es un espacio clave para descubrir nuevas voces del cine alemán contemporáneo. \n Es un evento abierto al público mediante entradas, ideal para quienes buscan una experiencia cinematográfica más cercana, auténtica y conectada con la realidad cultural de Berlín, lejos de los grandes circuitos comerciales.',
    },
    highlights: {
      DE: [
        'Bootsrennen auf der Müggelspree',
        'Kunsthandwerks- & Handwerkermarkt',
        'Live-Musik am See',
        'Fährfahrten zum Müggelsee',
      ],
      EN: [
        'Boat races on the Müggelspree',
        'Craft & artisan market',
        'Lakeside live music',
        'Ferry trips to the Müggelsee',
      ],
      ES: [
        'Regatas en el Müggelspree',
        'Mercado de artesanía',
        'Música en vivo junto al lago',
        'Travesías en ferry al Müggelsee',
      ],
    },
  },
  {
    id: 22,
    slug: 'open-air-cinema',
    image: '/assets/img/events/Eventos_Kopenick_Berlin_Fahrrad.jpg',
    location: 'Berlin',
    categoryKey: 'Cinema',
    title: {
      DE: 'Open-Air-Kino und Filmreihen im Freien',
      EN: 'Open-Air Cinema Events and Film Series',
      ES: 'Fiestas y ciclos de cine al aire libre',
    },
    category: { DE: 'Kino', EN: 'Cinema', ES: 'Cine' },
    date: { DE: 'Juni - August', EN: 'June - August', ES: 'Junio - Agosto' },
    duration: { DE: '19:00 - 23:00 Uhr', EN: '19:00 - 23:00', ES: '19:00 - 23:00' },
    recommendAudience: { DE: 'Alle Altersgruppen, Familien', EN: 'General public, families', ES: 'General, Familias' },
    description: {
      DE: 'Die **Open-Air-Kinos und Filmreihen im Freien** gehören zu den beliebtesten kulturellen Sommertraditionen Berlins, bei denen Parks, Innenhöfe und urbane Orte in Kinos unter freiem Himmel verwandelt werden. \n Während der Sommersaison werden sowohl Filmklassiker als auch aktuelle Filme in entspannter Atmosphäre mit Decken, Stühlen und Foodtrucks gezeigt und schaffen ein soziales, offenes Erlebnis, bei dem Kino auf eine freiere und gemeinschaftliche Weise genossen wird. \n Die Veranstaltung ist für alle offen und eignet sich ideal für Paare, Freundesgruppen oder Besucher, die Berlin von seiner sommerlichsten, kulturellsten und geselligsten Seite erleben möchten, indem sie Kino, Stadtleben und Freiluftatmosphäre verbinden.',
      EN: "**Open-air cinema events and film series** in Berlin are one of the city's most popular summer cultural traditions, where parks, courtyards, and urban spaces are transformed into cinemas under the stars. \n During the summer season, everything from film classics to recent releases is screened in a relaxed atmosphere with blankets, chairs, and food trucks, creating a social and open experience where cinema is enjoyed in a freer, more communal way. \n It is an activity open to everyone, ideal for couples, groups of friends, or visitors who want to experience Berlin at its most summery, cultural, and social, combining film, city life, and the outdoors.",
      ES: 'Las **fiestas y ciclos de cine al aire libre** en Berlín son una de las tradiciones culturales más populares del verano en la ciudad, donde parques, patios y espacios urbanos se transforman en salas de cine bajo las estrellas. \n Durante la temporada estival se proyectan desde clásicos del cine hasta estrenos recientes, en un ambiente relajado con mantas, sillas y food trucks, creando una experiencia social y abierta en la que el cine se disfruta de una forma más libre y comunitaria. \n Es una actividad abierta a todo el público, ideal para parejas, grupos de amigos o visitantes que quieren vivir Berlín en su versión más veraniega, cultural y social, combinando cine, ciudad y vida al aire libre.',
    },
    highlights: {
      DE: [
        'Bootsrennen auf der Müggelspree',
        'Kunsthandwerks- & Handwerkermarkt',
        'Live-Musik am See',
        'Fährfahrten zum Müggelsee',
      ],
      EN: [
        'Boat races on the Müggelspree',
        'Craft & artisan market',
        'Lakeside live music',
        'Ferry trips to the Müggelsee',
      ],
      ES: [
        'Regatas en el Müggelspree',
        'Mercado de artesanía',
        'Música en vivo junto al lago',
        'Travesías en ferry al Müggelsee',
      ],
    },
  },
  {
    id: 23,
    slug: 'open-air-cinema',
    image: '/assets/img/events/Eventos_Kopenick_Berlin_Fahrrad.jpg',
    location: 'Berlin',
    categoryKey: 'Cinema',
    title: {
      DE: 'Open-Air-Kino und Filmreihen im Freien',
      EN: 'British Shorts and Short Film Festivals',
      ES: 'British Shorts y festivales de cortometraje',
    },
    category: { DE: 'Kino', EN: 'Cinema', ES: 'Cine' },
    date: { DE: 'Juni - August', EN: 'June - August', ES: 'Junio - Agosto' },
    duration: { DE: '19:00 - 23:00 Uhr', EN: '10:00 am - 11:00 pm', ES: '10:00am - 23:00' },
    recommendAudience: { DE: 'Alle Altersgruppen, Familien', EN: 'General', ES: 'General' },
    description: {
      DE: 'Das **British Shorts Film Festival** ist eines der wichtigsten Kurzfilmfestivals in Berlin und widmet sich dem zeitgenössischen Kurzfilm aus dem Vereinigten Königreich und Irland. \n Während der Veranstaltung wird eine vielfältige Auswahl an Kurzfilmen gezeigt - von Spielfilm, Dokumentarfilm über Animation bis hin zu experimentellen Arbeiten - ergänzt durch thematische Programme, Diskussionen und Treffen mit Filmschaffenden. Es ist eine zentrale Plattform, um neue Stimmen des unabhängigen Kurzfilms zu entdecken. \n Die Veranstaltung ist mit Eintrittskarten für die Öffentlichkeit zugänglich und eignet sich ideal für alle, die ein dynamisches, alternatives und konzentriertes Kinoerlebnis suchen, bei dem das Kurzfilmformat viele Geschichten in einer einzigen Session in verschiedenen Kulturorten der Stadt erlebbar macht.',
      EN: "The **British Shorts Film Festival** is one of Berlin's most important short film festivals, dedicated to contemporary short cinema from the United Kingdom and Ireland. \n During the event, a diverse selection of short films is screened, ranging from fiction and documentary to animation and experimental works, accompanied by themed sessions, discussions, and meetings with filmmakers. It is a key platform for discovering new voices in independent short filmmaking. \n It is an event open to the public with a ticket, ideal for those seeking a dynamic, alternative, and concentrated cinematic experience, where the short format allows multiple stories to be explored in a single session across different cultural venues in the city.",
      ES: 'El **British Shorts Film Festival** es uno de los festivales de cortometrajes más importantes de Berlín, dedicado al cine corto contemporáneo del Reino Unido e Irlanda. \n Durante el evento se proyecta una selección diversa de cortometrajes que abarcan ficción, documental, animación y experimentación, acompañados de sesiones temáticas, debates y encuentros con cineastas. Es una plataforma clave para descubrir nuevas voces del cine independiente en formato corto. \n Es un evento abierto al público mediante entrada, ideal para quienes buscan una experiencia cinematográfica dinámica, alternativa y concentrada, donde el formato corto permite explorar muchas historias en una sola sesión en distintos espacios culturales de la ciudad.',
    },
    highlights: {
      DE: [
        'Bootsrennen auf der Müggelspree',
        'Kunsthandwerks- & Handwerkermarkt',
        'Live-Musik am See',
        'Fährfahrten zum Müggelsee',
      ],
      EN: [
        'Boat races on the Müggelspree',
        'Craft & artisan market',
        'Lakeside live music',
        'Ferry trips to the Müggelsee',
      ],
      ES: [
        'Regatas en el Müggelspree',
        'Mercado de artesanía',
        'Música en vivo junto al lago',
        'Travesías en ferry al Müggelsee',
      ],
    },
  },
  {
    id: 24,
    slug: 'open-air-cinema',
    image: '/assets/images/events/Routecanela_fac.png',
    location: 'Berlin',
    categoryKey: 'Cinema',
    title: {
      DE: 'Open-Air-Kino und Filmreihen im Freien',
      EN: 'British Shorts and Short Film Festivals',
      ES: 'British Shorts y festivales de cortometraje',
    },
    category: { DE: 'Kino', EN: 'Cinema', ES: 'Cine' },
    date: { DE: 'Juni - August', EN: 'June - August', ES: 'Junio - Agosto' },
    duration: { DE: '19:00 - 23:00 Uhr', EN: '10:00 am - 11:00 pm', ES: '10:00am - 23:00' },
    recommendAudience: { DE: 'Alle Altersgruppen, Familien', EN: 'General', ES: 'General' },
    description: {
      DE: 'Das **British Shorts Film Festival** ist eines der wichtigsten Kurzfilmfestivals in Berlin und widmet sich dem zeitgenössischen Kurzfilm aus dem Vereinigten Königreich und Irland. \n Während der Veranstaltung wird eine vielfältige Auswahl an Kurzfilmen gezeigt - von Spielfilm, Dokumentarfilm über Animation bis hin zu experimentellen Arbeiten - ergänzt durch thematische Programme, Diskussionen und Treffen mit Filmschaffenden. Es ist eine zentrale Plattform, um neue Stimmen des unabhängigen Kurzfilms zu entdecken. \n Die Veranstaltung ist mit Eintrittskarten für die Öffentlichkeit zugänglich und eignet sich ideal für alle, die ein dynamisches, alternatives und konzentriertes Kinoerlebnis suchen, bei dem das Kurzfilmformat viele Geschichten in einer einzigen Session in verschiedenen Kulturorten der Stadt erlebbar macht.',
      EN: "The **British Shorts Film Festival** is one of Berlin's most important short film festivals, dedicated to contemporary short cinema from the United Kingdom and Ireland. \n During the event, a diverse selection of short films is screened, ranging from fiction and documentary to animation and experimental works, accompanied by themed sessions, discussions, and meetings with filmmakers. It is a key platform for discovering new voices in independent short filmmaking. \n It is an event open to the public with a ticket, ideal for those seeking a dynamic, alternative, and concentrated cinematic experience, where the short format allows multiple stories to be explored in a single session across different cultural venues in the city.",
      ES: 'El **British Shorts Film Festival** es uno de los festivales de cortometrajes más importantes de Berlín, dedicado al cine corto contemporáneo del Reino Unido e Irlanda. \n Durante el evento se proyecta una selección diversa de cortometrajes que abarcan ficción, documental, animación y experimentación, acompañados de sesiones temáticas, debates y encuentros con cineastas. Es una plataforma clave para descubrir nuevas voces del cine independiente en formato corto. \n Es un evento abierto al público mediante entrada, ideal para quienes buscan una experiencia cinematográfica dinámica, alternativa y concentrada, donde el formato corto permite explorar muchas historias en una sola sesión en distintos espacios culturales de la ciudad.',
    },
    highlights: {
      DE: [
        'Bootsrennen auf der Müggelspree',
        'Kunsthandwerks- & Handwerkermarkt',
        'Live-Musik am See',
        'Fährfahrten zum Müggelsee',
      ],
      EN: [
        'Boat races on the Müggelspree',
        'Craft & artisan market',
        'Lakeside live music',
        'Ferry trips to the Müggelsee',
      ],
      ES: [
        'Regatas en el Müggelspree',
        'Mercado de artesanía',
        'Música en vivo junto al lago',
        'Travesías en ferry al Müggelsee',
      ],
    },
  },
];

function resolveEvent(source: EventSource, lang: Lang): EventItem {
  return {
    id: source.id,
    slug: source.slug,
    image: source.image,
    location: source.location,
    categoryKey: source.categoryKey,
    title: source.title[lang],
    category: source.category[lang],
    date: source.date[lang],
    duration: source.duration[lang],
    recommendAudience: source.recommendAudience[lang],
    description: source.description[lang],
    highlights: source.highlights[lang],
  };
}

export function getEvents(lang: Lang): EventItem[] {
  return eventSources.map((source) => resolveEvent(source, lang));
}

export function getEvent(slug: string, lang: Lang): EventItem | undefined {
  const source = eventSources.find((e) => e.slug === slug);
  return source ? resolveEvent(source, lang) : undefined;
}
