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
    slug: 'Berliner Halbmarathon',
    image: '/assets/img/events/Maraton.jpg',
    location: 'Berlin',
    categoryKey: 'Sport',
    title: { DE: 'Berliner Halbmarathon', EN: 'Berliner Halbmarathon', ES: 'Berliner Halbmarathon' },
    category: { DE: 'Sport', EN: 'Sport', ES: 'Sport' },
    date: {
      DE: 'März/April · Zentrum von Berlin',
      EN: 'March/April · Downtown Berlin',
      ES: 'Marzo/Abril · Centro de Berlín',
    },
    duration: { DE: '08:00 - 18:00 Uhr', EN: '08:00 AM - 18:00 PM', ES: '08:00 a. m. - 18:00 p. m.' },
    recommendAudience: { 
      DE: 'Eröffnet die Berliner Laufsaison, mit Tausenden Läufern, die die Innenstadt durchqueren.', 
      EN: 'Opens Berlins racing season, with thousands of runners crossing the city center.', 
      ES: 'Abre la temporada de carreras en Berlín, con miles de corredores cruzando el centro de la ciudad.' 
    },
    description: {
      DE: 'Der Ursprung von SCC EVENTS, der Organisation hinter dem Halbmarathon, geht auf 1964 zurück, als Studenten der Freien Universität Berlin das erste Geländelauf-Rennen der Stadt auf dem Teufelsberg organisierten. Die Strecke ist genau 21,0975 km lang, die letzten 2 Kilometer führen direkt zum Brandenburger Tor über Unter den Linden. 2026 fand die 45. Ausgabe statt, mit mehr als 40.000 Teilnehmenden — mit stetig wachsendem Frauenanteil: 46% der Läuferinnen sind Frauen, gegenüber 39% im Jahr 2019.',
      EN: 'The origins of SCC EVENTS, the organization behind the half marathon, trace back to 1964, when a group of students from the Free University of Berlin organized the citys first cross-country race, on the Teufelsberg itself. The course runs exactly 21.0975 km, with its final 2 kilometers leading straight to the Brandenburg Gate along Unter den Linden. In 2026 the race reached its 45th edition, with more than 40,000 participants — and with womens participation steadily climbing: 46% of runners are women, up from 39% in 2019.',
      ES: 'El origen de SCC EVENTS, la organización detrás del medio maratón, se remonta a 1964, cuando un grupo de estudiantes de la Universidad Libre de Berlín organizó la primera carrera campo a través de la ciudad, en el propio Teufelsberg. La carrera recorre exactamente 21,0975 km, y sus últimos 2 kilómetros llevan directo a la Puerta de Brandeburgo por la avenida Unter den Linden. En 2026 se corrió la edición número 45, con más de 40.000 participantes entre corredores, patinadores, sillas de ruedas y handbikes — y con una participación femenina que no para de crecer: 46% de las corredoras son mujeres, frente al 39% de 2019.',
    },
    highlights: {
      DE: [
        'Berliner Halbmarathon, Frühlingslauf Berlin, Laufen Berlin',
      ],
      EN: [
        'Berlin Half Marathon, spring race Berlin, running Berlin',
      ],
      ES: [
        'medio maratón Berlín, carrera de primavera, running Berlín',
      ],
    },
  },
  {
    id: 2,
    slug: 'MaerzMusik',
    image: '/assets/img/events/Maerz11.jpg',
    location: 'Berlin',
    categoryKey: 'Music',
    title: { DE: 'MaerzMusik', EN: 'MaerzMusik', ES: 'MaerzMusik' },
    category: { DE: 'Musik', EN: 'Music', ES: 'Música' },
    date: {
      DE: 'März - findet einmal im Jahr statt',
      EN: 'March - held once a year',
      ES: 'Marzo - se celebra una vez al año',
    },
    duration: { DE: '12:00 - 20:00 Uhr', EN: '12:00 - 20:00', ES: '12:00 - 20:00' },
    recommendAudience: {
      DE: 'Festival für zeitgenössische Musik, das internationale Künstler an mehreren Orten der Stadt zusammenbringt.',
      EN: "Contemporary music festival bringing together international artists across several venues in the city.",
      ES: 'Festival de música contemporánea que reúne artistas internacionales en varios escenarios de la ciudad.',
    },
    description: {
      DE: 'MaerzMusik hat seine Wurzeln in der musique concrète und der akusmatischen Musik, Genres, die die Wahrnehmung von Klang revolutionierten — heute zieht das Festival jährlich mehr als 20.000 Besucher zu über 100 Veranstaltungen an. Seit 2010 gibt es die Tradition QuerKlang, bei der junge Menschen eigene Stücke komponieren und uraufführen. Zwischen 2015 und 2019 schloss jede Ausgabe mit The Long Now, einer Zusammenarbeit mit Berlin Atonal von über 30 ununterbrochenen Stunden.',
      EN: "MaerzMusik has its roots in musique concrète and acousmatic music, genres that revolutionized how sound is perceived — today the festival draws more than 20,000 visitors each year across over 100 different events, organized by the Berliner Festspiele. Since 2010 it has kept the 'QuerKlang' tradition, where young people compose and premiere their own pieces. Between 2015 and 2019, each edition closed with 'The Long Now,' a collaboration with Berlin Atonal lasting more than 30 uninterrupted hours.",
      ES: 'MaerzMusik tiene sus raíces en la música concreta y acusmática, géneros que revolucionaron la forma de percibir el sonido — hoy el festival reúne a más de 20.000 visitantes cada año en más de 100 eventos distintos, organizado por los Berliner Festspiele en el Haus der Berliner Festspiele y otras sedes. Desde 2010 mantiene la tradición QuerKlang, donde jóvenes componen y estrenan piezas propias. Entre 2015 y 2019, cada edición cerraba con The Long Now, una colaboración con Berlin Atonal de más de 30 horas ininterrumpidas de música.',
    },
    highlights: {
      DE: [
        'Festival zeitgenössische Musik, experimentelle Musik Berlin',
      ],
      EN: [
        'contemporary music festival, experimental music Berlin',
      ],
      ES: [
        'festival música contemporánea, música experimental Berlín',
      ],
    },
  },
  {
    id: 3,
    slug: 'ITB Berlin',
    image: '/assets/img/events/ITB-Berlin.jpg',
    location: 'Berlin',
    categoryKey: 'Tourismus',
    title: {
      DE: "ITB Berlin",
      EN: "ITB Berlin",
      ES: "ITB Berlin",
    },
    category: { DE: 'Tourismus', EN: 'Tourism', ES: 'Turismo' },
    date: {
      DE: 'Die weltgrößte Reisemesse, mit Ausstellern von allen Kontinenten.',
      EN: "The world's largest travel trade show, with exhibitors from every continent.",
      ES: 'La feria de turismo más grande del mundo, con expositores de todos los continentes.',
    },
    duration: { DE: '09:00 - 18:00 Uhr', EN: '09:00-18:00', ES: '09:00-18:00' },
    recommendAudience: { DE: 'Alle Altersgruppen', EN: 'General public', ES: 'General' },
    description: {
      DE: "Die ITB Berlin startete 1966 mit nur neun Ausstellern aus fünf Ländern — Ägypten, Brasilien, Westdeutschland, Guinea und dem Irak. Heute versammelt sie mehr als 5.800 Aussteller aus 170 Ländern im Berlin Expocenter City. Parallel dazu bringt die ITB Berlin Convention mehr als 400 internationale Referenten zusammen, um über Nachhaltigkeit und Technologie zu diskutieren.",
      EN: "ITB Berlin started in 1966 with just nine exhibitors from five countries — Egypt, Brazil, West Germany, Guinea, and Iraq. Today it brings together more than 5,800 exhibitors from 170 countries at the Berlin Expocenter City. Alongside it, the ITB Berlin Convention brings together more than 400 international speakers to discuss sustainability and technology in the industry, included with the trade visitor ticket.",
      ES: "ITB Berlin arrancó en 1966 con apenas nueve expositores de cinco países — Egipto, Brasil, Alemania Occidental, Guinea e Irak. Hoy reúne a más de 5.800 expositores de 170 países en el Berlin Expocenter City, y se ha convertido en el barómetro real de hacia dónde va el turismo mundial cada año. Paralelamente, el ITB Berlin Convention reúne a más de 400 ponentes internacionales para discutir sostenibilidad y tecnología en el sector, con acceso incluido en la entrada de profesional.",
    },
    highlights: {
      DE: [
        'Reisemesse Berlin, internationale Tourismusmesse',
      ],
      EN: [
        'Berlin travel trade show, international tourism fair',
      ],
      ES: [
        'feria de turismo Berlín, turismo internacional',
      ],
    },
  },
  {
    id: 4,
    slug: 'Frauentag',
    image: '/assets/img/events/Frauentag.jpg',
    location: 'Berlin',
    categoryKey: 'Culture',
    title: {
      DE: 'Frauentag',
      EN: 'Frauentag',
      ES: 'Frauentag',
    },
    category: { DE: 'Kultur', EN: 'Culture', ES: 'Cultura' },
    date: {
      DE: 'Findet einmal im Jahr im Mai statt',
      EN: 'May (held once a year)',
      ES: 'Mayo (se celebra una vez al año)',
    },
    duration: { DE: '09:00 - 18:00 Uhr', EN: '09:00 - 18:00', ES: '09:00 - 18:00' },
    recommendAudience: {
      DE: 'Feiertag in Berlin mit kulturellen und Gedenkveranstaltungen in der ganzen Stadt.',
      EN: 'Public holiday in Berlin with cultural and commemorative activities across the city.',
      ES: 'Feriado en Berlín con actividades culturales y conmemorativas por toda la ciudad.',
    },
    description: {
      DE: 'Der Internationale Frauentag wurde erstmals 1911 begangen und brachte in fünf Ländern mehr als eine Million Menschen auf die Straße — die zentrale Forderung damals war das Frauenwahlrecht. Berlin war ab 2019 das erste deutsche Bundesland, das den 8. März zum offiziellen Feiertag erklärte. Den ganzen März über organisieren verschiedene Bezirke den sogenannten 'Frauenmärz', einen ganzen Monat mit Vorträgen, Workshops und Kiezrundgängen.',
      EN: "International Women's Day was first observed in 1911, bringing more than a million people onto the streets in five countries: Denmark, Germany, Austria, Switzerland, and the United States — the central demand at the time was women's right to vote. Berlin was the first German federal state to make March 8 an official holiday, starting in 2019, alongside Mecklenburg-Vorpommern. Throughout March, different districts organize the so-called 'Frauenmärz,' a full month of talks, workshops, and neighborhood walks dedicated to women who shaped local history.",
      ES: 'El Día Internacional de la Mujer se celebró por primera vez en 1911, y llevó a más de un millón de personas a las calles en cinco países: Dinamarca, Alemania, Austria, Suiza y Estados Unidos — la exigencia central de entonces era el derecho al voto femenino. Berlín fue el primer estado federado de Alemania en declarar el 8 de marzo feriado oficial, a partir de 2019, junto con Mecklemburgo-Pomerania Occidental. Durante todo marzo, distintos distritos organizan el llamado 'Frauenmärz', un mes completo de charlas, talleres y recorridos por el barrio dedicados a mujeres que marcaron la historia local.',
    },
    highlights: {
      DE: [
        'Internationaler Frauentag Berlin, Feiertag 8. März',
      ],
      EN: [
        "International Women's Day Berlin, March 8 holiday",
      ],
      ES: [
        'Día de la Mujer Berlín, feriado 8 de marzo',
      ],
    },
  },
  {
    id: 5,
    slug: 'Gallery Weekend Berlin',
    image:
      '/assets/img/events/Gallery.Berlin',
    location: 'Berlin',
    categoryKey: 'Art',
    title: { DE: 'Gallery Weekend Berlin', EN: 'Gallery Weekend Berlin', ES: 'Gallery Weekend Berlin' },
    category: { DE: 'Kunst', EN: 'Art', ES: 'Art' },
    date: {
      DE: 'Die besten Galerien der Stadt öffnen gleichzeitig ihre Türen mit neuen Ausstellungen.',
      EN: "The city's best galleries open their doors at the same time with new exhibitions.",
      ES: 'Las mejores galerías de la ciudad abren sus puertas al mismo tiempo con nuevas exposiciones.',
    },
    duration: { DE: '09:00 - 18:00 Uhr', EN: '09:00 - 18:00', ES: '09:00 - 18:00' },
    recommendAudience: { DE: 'Alle Altersgruppen, Familien, Kinder', EN: 'General public, families, children', ES: 'General, Familias, Niños' },
    description: {
      DE: 'Gallery Weekend Berlin entstand 2005 auf Initiative von Galeristen wie Max Hetzler, Tim Neuger und Esther Schipper als dezentrale Alternative zu den großen Kunstmessen. Die 22. Ausgabe (2026) vereinte 50 Galerien an 63 verschiedenen Orten mit über 80 künstlerischen Positionen und zieht jährlich mehr als 20.000 Besucher an. Die Idee funktionierte so gut, dass Städte wie London, Mailand, Paris, Nairobi und Neu-Delhi das Format übernahmen.',
      EN: "Gallery Weekend Berlin was born in 2005, on the initiative of gallerists such as Max Hetzler, Tim Neuger, and Esther Schipper, as a decentralized alternative to the big art fairs. The 22nd edition (2026) brought together 50 galleries across 63 different venues, showing more than 80 artistic positions, and draws over 20,000 visitors each year. The idea worked so well that cities like London, Milan, Paris, Nairobi, and New Delhi ended up copying the format.",
      ES: 'Gallery Weekend Berlin nació en 2005, por iniciativa de galeristas como Max Hetzler, Tim Neuger y Esther Schipper, como alternativa descentralizada a las grandes ferias de arte — en vez de reunir todo bajo un mismo techo, invita a recorrer la ciudad de galería en galería. La edición 22 (2026) reunió a 50 galerías en 63 sedes distintas, mostrando más de 80 posiciones artísticas, y atrae a más de 20.000 visitantes cada año. La idea funcionó tan bien que ciudades como Londres, Milán, París, Nairobi y Nueva Delhi terminaron copiando el formato.',
    },
    highlights: {
      DE: [
        'zeitgenössische Kunst Berlin, Kunstgalerien Wochenende',
      ],
      EN: [
        'contemporary art Berlin, art galleries weekend',
      ],
      ES: [
        'arte contemporáneo Berlín, galerías de arte',
      ],
    },
  },
  {
    id: 6,
    slug: 'Berlin Design Week',
    image: '/assets/img/events/Design.Week.jpg',
    location: 'Varies',
    categoryKey: 'Design',
    title: { DE: 'Berlin Design Week', EN: 'Berlin Design Week', ES: 'Berlin Design Week' },
    category: { DE: 'Design', EN: 'Design', ES: 'Diseño' },
    date: {
      DE: 'April · Verschiedene Veranstaltungsorte',
      EN: 'April · Various venues',
      ES: 'Abril · Varias sedes',
    },
    duration: {
      DE: '10:00 - 22:00 Uhr',
      EN: '10:00-22:00',
      ES: '10:00 - 22:00',
    },
    recommendAudience: {
      DE: 'Eine Woche rund um Design, Architektur und urbane Innovation.',
      EN: 'A week dedicated to design, architecture, and urban innovation.',
      ES: 'Una semana dedicada al diseño, la arquitectura y la innovación urbana.',
    },
    description: {
      DE: "Die Berlin Design Week 2026 findet unter dem Motto 'DESIGN REAL' vom 28. bis 31. Mai statt, zeitgleich mit dem 20-jährigen Jubiläum Berlins als UNESCO-Stadt des Designs. Mehr als 90 Orte öffnen ihre Türen und versammeln über 15.000 Design-Profis, Architekten und Marken. Das Programm umfasst die 'Berlin Design Nights' sowie den 'Design Pool', einen kuratierten Markt für Kleinserien-Möbel und -Mode.",
      EN: "Berlin Design Week 2026 is held under the theme 'DESIGN REAL,' from May 28 to 31, coinciding with Berlin's 20th anniversary as a UNESCO City of Design. More than 90 venues — studios, galleries, agencies, and universities — open their doors, bringing together more than 15,000 design professionals, architects, and brands. The program includes 'Berlin Design Nights,' with studios open late, and the 'Design Pool,' a curated market for small-batch furniture and fashion.",
      ES: "Berlin Design Week 2026 se celebra bajo el lema 'DESIGN REAL', del 28 al 31 de mayo, coincidiendo con el 20 aniversario de Berlín como Ciudad del Diseño de la UNESCO. Más de 90 sedes —estudios, galerías, agencias y universidades— abren sus puertas, reuniendo a más de 15.000 profesionales del diseño, arquitectos y marcas. El programa incluye las 'Berlin Design Nights', con estudios abiertos hasta tarde, y el 'Design Pool', un mercado curado de mobiliario y moda en pequeñas series.",
    },
    highlights: {
      DE: [
        'Designwoche Berlin, Architektur Innovation',
      ],
      EN: [
        'design week Berlin, architecture innovation',
      ],
      ES: [
        'semana del diseño Berlín, arquitectura innovación',
      ],
    },
  },
  {
    id: 7,
    slug: 'Britzer Baumblüte',
    image: '/assets/img/events/Baumbl.jpg',
    location: 'Berlin',
    categoryKey: 'Science',
    title: { DE: 'Britzer Baumblüte', EN: 'Britzer Baumblüte', ES: 'Britzer Baumblüte' },
    category: { DE: 'Frühlingsfest', EN: 'Spring festival', ES: 'Festival anual de primavera' },
    date: { DE: 'April', EN: 'April', ES: 'Abril' },
    duration: { DE: '09:00 - 19:00 Uhr', EN: '09:00 - 19:00', ES: '09:00 - 19:00' },
    recommendAudience: {
      DE: 'Der Britzer Garten verwandelt sich zum jährlichen Frühlingsfest in ein Meer aus Kirschblüten.',
      EN: "Britzer Garten fills with cherry blossoms for its annual spring festival.",
      ES: 'El Britzer Garten se llena de flores de cerezo en su festival anual de primavera.',
    },
    description: {
      DE: 'Die Britzer Baumblüte feiert 2026 ihre 70. Ausgabe, stets auf dem Gelände des Gutsparks Britz. Der Tradition nach eröffnet der Bezirksbürgermeister von Neukölln das Fest mit dem Anstich eines Freibierfasses. Zu den Attraktionen gehört die Familienachterbahn 'Nessi', mittwochs ist 'Familientag' mit ermäßigten Preisen. Der Eintritt ist frei, das Fest läuft vom 27. März bis 19. April.',
      EN: "The Britzer Baumblüte celebrates its 70th edition in 2026, always held on the grounds of Gutspark Britz. Tradition has it that the mayor of Neukölln district opens the festival by tapping a free beer barrel. Attractions include the family roller coaster 'Nessi,' and Wednesdays are 'Family Day,' with reduced prices on rides. Admission to the festival is free, running from March 27 to April 19.",
      ES: 'La Britzer Baumblüte celebra en 2026 su edición número 70, siempre en el mismo terreno del Gutspark Britz. La tradición marca que sea el propio alcalde del distrito de Neukölln quien abra el festival perforando un barril de cerveza gratuita. Entre las atracciones está la montaña rusa familiar 'Nessi', y los miércoles son 'Día de la Familia', con precios reducidos. La entrada al festival es gratuita, y corre del 27 de marzo al 19 de abril.',
    },
    highlights: {
      DE: [
        'Kirschblütenfest Berlin, Frühlingsfest',
      ],
      EN: [
        'cherry blossom festival Berlin, spring fair',
      ],
      ES: [
        'flor de cerezo Berlín, feria de primavera',
      ],
    },
  },
  {
    id: 8,
    slug: 'Achtung Berlin Festival',
    image:
      '/assets/img/events/Achtung.berlin.jpg',
    location: 'Berlin',
    categoryKey: 'Music',
    title: { DE: 'Achtung Berlin Festival', EN: 'Achtung Berlin Festival', ES: 'Achtung Berlin Festival' },
    category: { DE: 'Filmfestival ', EN: 'Filmfestival ', ES: 'Festival de cine' },
    date: { DE: 'Juni', EN: 'June', ES: 'Junio' },
    duration: { DE: '12:00 - 21:00 Uhr', EN: '12:00 - 21:00', ES: '12:00 - 21:00' },
    recommendAudience: {
      DE: 'Filmfestival mit Fokus auf Produktionen aus Berlin und Brandenburg.',
      EN: 'Film festival focused on productions made in Berlin and Brandenburg.',
      ES: 'Festival de cine centrado en producciones hechas en Berlín y Brandeburgo.',
    },
    description: {
      DE: 'achtung berlin feiert 2026 seine 22. Ausgabe, was die Gründung auf etwa 2005 datiert — jedes Jahr werden rund 80 Filme gezeigt.',
      EN: "achtung berlin celebrates its 22nd edition in 2026, placing its founding around 2005 — each year it presents around 80 films.",
      ES: 'achtung berlin celebra en 2026 su edición número 22, lo que sitúa su nacimiento alrededor de 2005 — cada año presenta unas 80 películas entre largometrajes, documentales y series, todas con algún vínculo con Berlín o Brandeburgo.',
    },
    highlights: {
      DE: [
        'Filmfestival Berlin, unabhängiges Kino',
      ],
      EN: [
        'Berlin film festival, independent cinema',
      ],
      ES: [
        'festival de cine Berlín, cine independiente',
      ],
    },
  },
  {
    id: 9,
    slug: 'VELOBerlin',
    image: '/assets/img/events/VeloBerlin.jpg',
    location: 'Berlin - Tempelhof',
    categoryKey: 'Sport',
    title: { DE: 'VELOBerlin', EN: 'VELOBerlin', ES: 'VELOBerlin' },
    category: { DE: 'Fahrrad', EN: 'Bike', ES: 'Bicicleta' },
    date: { DE: 'April/Mai ', EN: 'April/May ', ES: 'Abril/Mayo' },
    duration: { DE: '09:00 - 19:00 Uhr', EN: '09:00 - 19:00', ES: '09:00 - 19:00' },
    recommendAudience: {
      DE: 'Die größte Fahrradmesse im Nordosten Deutschlands, ideal für alle, die auf zwei Rädern unterwegs sind.',
      EN: 'The largest bike fair in northeastern Germany, perfect if you travel on two wheels.',
      ES: 'La feria de bicicletas más grande del noreste de Alemania, ideal si viajas en dos ruedas.',
    },
    description: {
      DE: 'VELOBerlin versammelt jedes Jahr mehr als 200 Fahrrad- und Mobilitätsmarken auf dem Gelände des ehemaligen Flughafens Tempelhof, mit über 120 Programmpunkten auf drei Bühnen — von Testfahrten bis zu Gesprächen mit Profiradfahrern wie Marcel Kittel und Tony Martin. Das Festival umfasst Rennen für alle Altersgruppen und geführte Gruppenausfahrten.',
      EN: "VELOBerlin brings together more than 200 bicycle and urban mobility brands every year on the grounds of the former Tempelhof airport, with more than 120 activities spread across three stages — from test rides to talks with professional cyclists like Marcel Kittel and Tony Martin, both former world cycling champions. The festival includes races for all ages and guided group rides through the city.",
      ES: 'VELOBerlin reúne cada año a más de 200 marcas de bicicletas y movilidad urbana en el terreno del antiguo aeropuerto de Tempelhof, con más de 120 actividades distribuidas en tres escenarios — desde pruebas de manejo hasta charlas con ciclistas profesionales como Marcel Kittel y Tony Martin, ambos excampeones mundiales de ciclismo. Además de bicicletas eléctricas y cargo bikes, el festival incluye carreras para todas las edades y recorridos grupales guiados por la ciudad.',
    },
    highlights: {
      DE: [
        'Fahrradmesse Berlin, nachhaltige Mobilität',
      ],
      EN: [
        'bike fair Berlin, sustainable mobility',
      ],
      ES: [
        'feria de bicicletas Berlín, movilidad sostenible',
      ],
    },
  },
  {
    id: 10,
    slug: 'Veggienale',
    image:
      '/assets/img/events/Veggienale.jpg',
    location: 'Berlin',
    categoryKey: 'Food',
    title: {
      DE: 'Veggienale',
      EN: 'Veggienale',
      ES: 'Veggienale',
    },
    category: { DE: 'Essen', EN: 'Food', ES: 'Gastronomía' },
    date: { DE: 'April/Mai ', EN: 'April/May ', ES: 'Abril/Mayo' },
    duration: { DE: '12:00 - 21:00 Uhr', EN: '12:00 - 21:00', ES: '12:00 - 21:00' },
    recommendAudience: {
      DE: 'Veganes und vegetarisches Festival mit Verkostungen, Vorträgen und nachhaltigen Produkten.',
      EN: 'Vegan and vegetarian festival with tastings, talks, and sustainable products.',
      ES: 'Festival vegano y vegetariano con degustaciones, charlas y productos sostenibles.',
    },
    description: {
      DE: 'Die Veggienale versammelt mehr als 100 Aussteller in einem ethischen Marktplatz, der weit über Essen hinausgeht: vegane Kosmetik, nachhaltige Mode, verantwortungsvolle Geldanlagen und Zero-Waste-Lösungen treffen auf pflanzliche Kochvorführungen. Das Festival bietet kostenlose Workshops zu Bio-Ernährung, nachhaltiger Mode und kreativem Upcycling sowie ein Kinderprogramm.',
      EN: "Veggienale brings together more than 100 exhibitors in an ethical marketplace that goes far beyond food: vegan cosmetics, sustainable fashion, responsible investments, and zero-waste solutions share space with plant-based cooking demonstrations. The festival offers free workshops on organic food, sustainable fashion, and creative upcycling, plus a special program for kids.",
      ES: 'Veggienale reúne a más de 100 expositores en un mercado ético que va mucho más allá de la comida: cosméticos veganos, moda sostenible, inversiones responsables y soluciones de cero residuos comparten espacio con degustaciones de cocina vegetal. El festival ofrece talleres gratuitos sobre alimentación orgánica, moda sostenible y reutilización creativa, además de una programación especial pensada para los más chicos.',
    },
    highlights: {
      DE: [
        'veganes Festival Berlin, vegetarische Messe',
      ],
      EN: [
        'Vegan festival Berlin, vegetarian fair',
      ],
      ES: [
        'Festival vegano Berlín, feria vegetariana',
      ],
    },
  },
  {
    id: 11,
    slug: 'Maifeiertag',
    image: '/assets/img/events/Maifeiertag.jpg',
    location: 'Teufelsberg',
    categoryKey: 'Culture',
    title: {
      DE: 'Maifeiertag',
      EN: 'Maifeiertag',
      ES: 'Maifeiertag',
    },
    category: { DE: 'Kultur', EN: 'Culture', ES: 'Cultura' },
    date: { DE: '1 Mai', EN: '1 May', ES: '1 de mayo' },
    duration: { DE: '13:00 - 22:00 Uhr', EN: '13:00 - 22:00', ES: '13:00 - 22:00' },
    recommendAudience: {
      DE: 'Der Tag der Arbeit wird mit Straßenfesten in der ganzen Stadt gefeiert.',
      EN: 'Labor Day is celebrated with neighborhood street parties across the city.',
      ES: 'El Día del Trabajo se celebra con fiestas de barrio en toda la ciudad.',
    },
    description: {
      DE: 'Am 1. Mai feiert der Rest Deutschlands den Tag der Arbeit mit Gewerkschaftsveranstaltungen, während Kreuzberg seit 2003 sein eigenes Straßenfest organisiert.',
      EN: "On May 1, while the rest of Germany celebrates Labor Day with union events, Kreuzberg has organized its own street festival since 2003.",
      ES: 'El 1 de mayo, mientras el resto de Alemania celebra el Día del Trabajo con actos gremiales, Kreuzberg organiza desde 2003 su propia fiesta de calle — con hasta ocho escenarios de música y gastronomía entre Oranienstraße y Mariannenplatz.',
    },
    highlights: {
      DE: [
        '1. Mai Berlin, Tag der Arbeit',
      ],
      EN: [
        'May Day Berlin, Labor Day',
      ],
      ES: [
        '1 de mayo Berlín, Día del Trabajo',
      ],
    },
  },
  {
    id: 12,
    slug: 'Theatertreffen',
    image: '/assets/img/events/theatertreffen.jpg',
    location: 'Berlin',
    categoryKey: 'Culture',
    title: {
      DE: 'Theatertreffen',
      EN: 'Theatertreffen',
      ES: 'Theatertreffen',
    },
    category: { DE: 'Kultur', EN: 'Culture', ES: 'Cultura' },
    date: { DE: 'Mai', EN: 'May', ES: 'Mayo' },
    duration: { DE: '19:00 - 00:00 Uhr', EN: '7 pm - midnight', ES: '19:00 - 00:00' },
    recommendAudience: { DE: 'Berlins größter multikultureller Umzug, mit mehr als 70 Küchen der Welt und Tausenden Akteuren.', EN: "Berlin's biggest multicultural parade, with more than 70 cuisines and thousands of performers.", ES: 'El desfile multicultural más grande de Berlín, con más de 70 gastronomías y miles de artistas.' },
    description: {
      DE: "Das erste Theatertreffen fand im Oktober 1964 unter dem Namen 'Berliner Theaterwettbewerb' statt und lud die 10 besten deutschsprachigen Inszenierungen einer Spielzeit nach Berlin ein. Jedes Jahr sichtet eine Kritikerjury Dutzende Vorschläge — 36 für die Ausgabe 2026 — bevor sie die 10 Finalisten bekannt gibt. Die Datenbank erfasst seit 1964 jede eingeladene Inszenierung.",
      EN: "The first Theatertreffen was held in October 1964, under the name 'Berliner Theaterwettbewerb,' inviting Berlin's 10 best theater productions from Germany, Austria, and Switzerland in a single season. Each year, a jury of critics reviews dozens of proposals — 36 for the 2026 edition — before announcing the 10 finalists at a press conference. Its database has tracked every invited production since 1964.",
      ES: "El primer Theatertreffen se celebró en octubre de 1964, bajo el nombre 'Berliner Theaterwettbewerb', invitando a Berlín las 10 mejores producciones teatrales de Alemania, Austria y Suiza de una sola temporada. Cada año, un jurado de críticos evalúa docenas de propuestas —36 en la edición 2026— antes de anunciar en una conferencia de prensa las 10 finalistas. Directores como Peter Zadek, Claus Peymann y Peter Stein construyeron buena parte de su carrera gracias a las invitaciones reiteradas a este mismo festival, cuya base de datos registra cada producción invitada desde 1964.",
    },
    highlights: {
      DE: [
        'Theaterfestival Berlin, deutschsprachiges Theater',
      ],
      EN: [
        'theater festival Berlin, German theater',
      ],
      ES: [
        'festival de teatro Berlín, teatro alemán',
      ],
    },
  },
  {
    id: 13,
    slug: 'Karneval der Kulturen',
    image: '/assets/img/events/Karneval-kulturen.jpg',
    location: 'Kreuzberg',
    categoryKey: 'Sport',
    title: {
      DE: 'Karneval der Kulturen',
      EN: 'Karneval der Kulturen',
      ES: 'Karneval der Kulturen',
    },
    category: { DE: 'Kulturel', EN: 'Kulturel', ES: 'Cultural' },
    date: { DE: 'Mai', EN: 'May', ES: 'Mayo' },
    duration: { DE: '10:00 - 21:00 Uhr', EN: '10:00 - 21:00', ES: '10:00 - 21:00' },
    recommendAudience: { DE: 'Berlins größter multikultureller Umzug, mit mehr als 70 Küchen der Welt und Tausenden Akteuren.', EN: "Berlin's biggest multicultural parade, with more than 70 cuisines and thousands of performers.", ES: 'El desfile multicultural más grande de Berlín, con más de 70 gastronomías y miles de artistas.' },
    description: {
      DE: 'Der Karneval der Kulturen wurde 1996 ins Leben gerufen, organisiert von einer erst drei Jahre zuvor gegründeten Kulturwerkstatt in Neukölln. Über 4 Tage füllt sich Kreuzberg mit Musikbühnen und Ständen aus mehr als 70 Küchen, bis zum großen Sonntagsumzug: mehr als 4.500 Tänzer, Musiker und Künstler, beobachtet von mehr als einer Million Zuschauern.',
      EN: "Karneval der Kulturen was born in 1996, organized by a cultural workshop founded just three years earlier in Neukölln. Over 4 days, Kreuzberg fills with music stages and food stalls representing more than 70 different cuisines, building up to the grand Sunday parade: more than 4,500 dancers, musicians, and performers marching along Hermannplatz and Gneisenaustraße, watched by more than a million spectators lining the streets.",
      ES: 'El Karneval der Kulturen nació en 1996, organizado por un taller cultural fundado apenas tres años antes en Neukölln — de esa primera edición pequeña salió el desfile multicultural que hoy reúne a miles de artistas cada Pentecostés. Durante 4 días, Kreuzberg se llena de escenarios de música y puestos con más de 70 gastronomías distintas, hasta llegar al gran desfile del domingo: más de 4.500 bailarines, músicos y artistas recorriendo Hermannplatz y Gneisenaustraße, observados por más de un millón de espectadores en la calle.',
    },
    highlights: {
      DE: [
        'multikultureller Umzug Berlin, Pfingsten Berlin',
      ],
      EN: [
        'multicultural parade Berlin, Pentecost Berlin',
      ],
      ES: [
        'desfile multicultural Berlín, Pentecostés Berlín',
      ],
    },
  },
  
  {
    id: 15,
    slug: 'Frühlingsfest Primavera',
    image: '/assets/img/events/Primavera.jpg',
    location: 'Schöneberg',
    categoryKey: 'Art',
    title: {
      DE: 'Frühlingsfest Primavera',
      EN: 'Frühlingsfest Primavera',
      ES: 'Frühlingsfest Primavera',
    },
    category: { DE: 'Frühlingsfest', EN: 'Spring festival', ES: 'Fiesta de primavera' },
    date: { DE: 'Mai', EN: 'May', ES: 'Mayo' },
    duration: { DE: '13:00 - 22:00 Uhr', EN: '13:00 pm - 10.00 pm', ES: '13:00 - 22:00' },
    recommendAudience: { DE: 'Frühlingsfest in Schöneberg mit Spargelgerichten und Live-Programm.', EN: 'Spring festival in Schöneberg with asparagus dishes and live entertainment.', ES: 'Fiesta de primavera en Schöneberg con platos de espárragos y programa en vivo.' },
    description: {
      DE: 'Das Berliner Frühlingsfest, mittlerweile in seiner 55. Ausgabe, eröffnet jedes Jahr auf dem Zentralen Festplatz die Frühjahrsmarkt-Saison.',
      EN: "The Berliner Frühlingsfest, now in its 55th edition, opens Berlin's spring fair season every year at the Zentraler Festplatz.",
      ES: 'El Berliner Frühlingsfest, en su edición número 55, abre la temporada de ferias populares de Berlín cada primavera en el Zentraler Festplatz — con casi 80 atracciones, incluida una noria gigante llamada 'Anubis' y la casa de sustos más grande del mundo.',
    },
    highlights: {
      DE: [
        'Frühlingsfest Berlin, Spargelfest',
      ],
      EN: [
        'spring fair Berlin, asparagus festival',
      ],
      ES: [
        'feria de primavera Berlín, espárragos Berlín',
      ],
    },
  },
  {
    id: 16,
    slug: 'Fête de la Musique',
    image: '/assets/img/events/Fette.jpg',
    location: 'Berlin',
    categoryKey: 'FMusic',
    title: {
      DE: 'Fête de la Musique',
      EN: 'Fête de la Musique',
      ES: 'Fête de la Musique',
    },
    category: { DE: 'Musik', EN: 'Music', ES: 'Música' },
    date: { DE: '21. Juni ', EN: '21. June', ES: '21. Junio ' },
    duration: { DE: '14:00 - 23:00 Uhr', EN: '2.00 pm - 11.00 pm', ES: '14:00 - 23:00' },
    recommendAudience: { DE: 'Hunderte kostenlose Konzerte auf den Straßen der ganzen Stadt, an einem einzigen Tag im Jahr.', EN: 'Hundreds of free concerts on the streets throughout the city, on a single day each year.', ES: 'Cientos de conciertos gratuitos en las calles de toda la ciudad, un solo día al año.' },
    description: {
      DE: 'Die Fête de la Musique wurde 1982 in Paris ins Leben gerufen, angetrieben vom französischen Kulturministerium, mit einer einzigen Regel, die bis heute gilt: Jeder Auftritt ist kostenlos, niemand wird durch Ticketverkäufe bezahlt. Berlin stieg 1995 ein und veranstaltet heute eine der größten Ausgaben außerhalb Frankreichs — mit rund 300 Bühnen verteilt auf die 12 Bezirke. Jeder kann ohne besondere Genehmigung akustische Musik auf der Straße spielen. 2026 ist Reinickendorf der Partnerbezirk.',
      EN: "The Fête de la Musique was born in 1982 in Paris, driven by the French Ministry of Culture, with a single rule that still holds today: every performance is free, and no one is paid through ticket sales. Berlin joined in 1995, and today runs one of the biggest editions outside France — with around 300 stages spread across its 12 districts. Anyone can play acoustic music on the street without a special permit, as long as they stay at least 20 meters from hospitals, care homes, or memorials, and keep each set under 60 minutes. In 2026, the partner district is Reinickendorf.",
      ES: 'La Fête de la Musique nació en 1982 en París, impulsada por el Ministerio de Cultura francés, con una sola regla que se mantiene intacta hasta hoy: cada actuación es gratuita, y a nadie se le paga con la venta de entradas. Berlín se sumó en 1995, y hoy es una de las sedes más grandes fuera de Francia — con cerca de 300 escenarios repartidos por los 12 distritos. Cualquier persona puede tocar música acústica en la calle sin pedir permiso especial, siempre que respete una distancia mínima de 20 metros de hospitales, residencias o memoriales, y que cada set no supere los 60 minutos. Las presentaciones oficiales corren de 4 a 10 de la tarde; después, la fiesta se traslada a clubes y bares que se suman a la llamada 'Fête de la Musique'. En 2026, el distrito socio de la edición es Reinickendorf.',
    },
    highlights: {
      DE: [
        'kostenlose Straßenmusik, Sommersonnenwende Berlin',
      ],
      EN: [
        'free street music, summer solstice Berlin',
      ],
      ES: [
        'música gratis en la calle, solsticio de verano',
      ],
    },
  },
  {
    id: 17,
    slug: '48 Stunden Neukölln',
    image: '/assets/img/events/48stunden.jpg',
    location: 'Neukölln',
    categoryKey: 'Culture',
    title: {
      DE: 'Weihnachtsmarkt am Breitscheidplatz',
      EN: 'Christmas Market on Breitscheidplatz',
      ES: 'Christmas Market on Breitscheidplatz',
    },
    category: { DE: 'Kultur', EN: 'Culture', ES: 'Cultura' },
    date: { DE: 'Juni', EN: 'June', ES: 'Junio' },
    duration: { DE: '13:00 - 23:00 Uhr', EN: '13:00 - 23:00', ES: '13:00 - 23:00' },
    recommendAudience: { DE: 'Neukölln verwandelt sich für 48 Stunden in eine offene Kunstgalerie.', EN: 'Neukölln transforms into an open art gallery for 48 hours.', ES: 'Neukölln se transforma en una galería de arte abierta durante 48 horas.' },
    description: {
      DE: "48 Stunden Neukölln wurde 1999 ins Leben gerufen. Die Ausgabe 2026, die 28., steht unter dem Motto 'Out/Side/In' und untersucht Identität, Zugehörigkeit und soziale Grenzen. Rund 300 Orte öffnen an einem einzigen Wochenende ihre Türen.",
      EN: "48 Stunden Neukölln was born in 1999, organized by a cultural network founded just four years earlier by 14 institutions in the district. The 2026 edition, the 28th, revolves around the theme 'Out/Side/In,' exploring identity, belonging, and social boundaries. Around 300 spaces open their doors for a single weekend.",
      ES: "48 Stunden Neukölln nació en 1999, organizado por una red cultural fundada apenas cuatro años antes por 14 instituciones del distrito. La edición 2026, la número 28, gira en torno al lema 'Out/Side/In', explorando temas de identidad, pertenencia y límites sociales. Cerca de 300 espacios abren sus puertas en un solo fin de semana, con un presupuesto modesto que depende sobre todo del compromiso de artistas e iniciativas locales.",
    },
    highlights: {
      DE: [
        'Kunstfestival Neukölln, Kunst Wochenende Berlin',
      ],
      EN: [
        'Neukölln art festival, Berlin art weekend',
      ],
      ES: [
        'arte Neukölln, festival de arte Berlín',
      ],
    },
  },
  {
    id: 18,
    slug: 'Klassik Open Air Gendarmenmarkt',
    image: '/assets/img/events/Klassik.open',
    location: 'Mitte',
    categoryKey: 'Culture',
    title: {
      DE: 'Klassik Open Air Gendarmenmarkt',
      EN: 'Klassik Open Air Gendarmenmarkt',
      ES: 'Klassik Open Air Gendarmenmarkt',
    },
    category: { DE: 'Kultur', EN: 'Culture', ES: 'Cultura' },
    date: { DE: 'Juli', EN: 'July', ES: 'Julio' },
    duration: { DE: '19:00 - 23:00 Uhr', EN: '19:00 - 23:00', ES: '19:00 - 23:00' },
    recommendAudience: { DE: 'Fünf AbMalfestivalende klassischer Musik unter freiem Himmel vor dem Konzerthaus.', EN: 'Five nights of open-air classical music in front of the Konzerthaus.', ES: 'Cinco noches de música clásica al aire libre frente al Konzerthaus.' },
    description: {
      DE: "Der Name des Festivals verwendet bewusst das englische 'Classic' statt des deutschen 'Klassik'. Mit mehr als 30 Jahren Geschichte eröffnet die Ausgabe 2026 am 9. Juli mit dem Konzerthausorchester Berlin unter Joana Mallwitz, gefolgt von Künstlern wie David Garrett, Giovanni Zarrella und Alphaville.",
      EN: "The festival's own name deliberately uses the English 'Classic' instead of the German 'Klassik.' With more than 30 years of history, the 2026 edition opens on July 9 with the Konzerthausorchester Berlin under conductor Joana Mallwitz, followed by artists like David Garrett, Giovanni Zarrella, and the band Alphaville.",
      ES: "El propio nombre del festival usa 'Classic' en inglés en vez de 'Klassik' en alemán a propósito — para dejar claro que mezcla conciertos puramente clásicos con versiones cruzadas de pop, rock y jazz. Con más de 30 años de historia, la edición 2026 abre el 9 de julio con la Konzerthausorchester Berlin bajo la batuta de Joana Mallwitz, y suma en noches siguientes a artistas como David Garrett, Giovanni Zarrella y la banda Alphaville.",
    },
    highlights: {
      DE: [
        'klassische Musik Open Air, Konzert Gendarmenmarkt',
      ],
      EN: [
        'open air classical music, Gendarmenmarkt concert',
      ],
      ES: [
        'música clásica al aire libre, concierto Gendarmenmarkt',
      ],
    },
  },
  {
    id: 19,
    slug: 'Moment Mal Festival',
    image: '/assets/img/events/Malfestival.jpg, 
    location: 'Mitte',
    categoryKey: 'Culture',
    title: {
      DE: 'Moment Mal Festival',
      EN: 'Moment Mal Festival',
      ES: 'Moment Mal Festival',
    },
    category: { DE: 'Kultur', EN: 'Culture', ES: 'Cultura' },
    date: { DE: 'November - Dezember', EN: 'November - December', ES: 'Noviembre - Diciembre' },
    duration: { DE: '13:00 - 23:00 Uhr', EN: '13:00 - 23:00', ES: '13:00 - 23:00' },
    recommendAudience: { DE: 'Kulturfestival im temporären Bauhaus-Archiv, mit Vorträgen und kreativen Aktivitäten.', EN: 'Cultural festival at the temporary Bauhaus Archive, with talks and creative activities.', ES: 'Festival cultural en el Archivo Bauhaus temporal, con charlas y actividades creativas.' },
    description: {
      DE: 'Das Bauhaus-Archiv wurde 1960 in Darmstadt vom Kunsthistoriker Hans Maria Wingler mit direkter Unterstützung von Walter Gropius gegründet.',
      EN: "The Bauhaus Archive was founded in 1960 in Darmstadt by art historian Hans Maria Wingler with the direct support of Walter Gropius.",
      ES: 'El Archivo Bauhaus nació en 1960 en Darmstadt, fundado por el historiador de arte Hans Maria Wingler con el apoyo directo de Walter Gropius — hoy alberga la colección más grande del mundo sobre la escuela Bauhaus.',
    },
    highlights: {
      DE: [
        'Bauhaus-Archiv Festival, Sommerkulturfestival',
      ],
      EN: [
        'Bauhaus Archive festival, summer cultural festival',
      ],
      ES: [
        'Festival Bauhaus Berlín, festival cultural verano',
      ],
    },
  },
 

 {
    id: 22,
    slug: 'UdK Rundgang',
    image: '/assets/img/events/Udk.jpg',
    location: 'Berlin',
    categoryKey: 'Kunst',
    title: {
      DE: 'UdK Rundgang',
      EN: 'UdK Rundgang',
      ES: 'UdK Rundgang',
    },
    category: { DE: 'Kunst', EN: 'Art', ES: 'Arte' },
    date: { DE: 'Sommer', EN: 'Sommer', ES: 'Verano' },
    duration: { DE: '13:00 - 18:00 Uhr', EN: '13:00 - 18:00', ES: '13:00 - 18:00' },
    recommendAudience: { DE: 'Die Kunsthochschule öffnet kostenlos ihre Werkstätten und Ateliers für das Publikum.', EN: 'The art university opens its workshops and studios to the public, for free.', ES: 'La universidad de artes abre sus talleres y estudios al público, gratis.' },
    description: {
      DE: 'Der Rundgang der Universität der Künste Berlin bringt 2026, vom 17. bis 19. Juli, die Fakultäten Bildende Kunst, Gestaltung, Musik, Darstellende Kunst sowie das Jazz-Institut an mehr als einem Dutzend Standorten in Charlottenburg zusammen. Der Eintritt ist komplett kostenlos und erfordert kein Ticket.',
      EN: "The Rundgang of Berlin's University of the Arts brings together, in 2026, from July 17 to 19, the Fine Arts, Design, Music, Performing Arts faculties, and the Jazz Institute across more than a dozen venues spread throughout Charlottenburg. Admission is completely free and requires no ticket: visitors can walk freely between workshops and talk directly with students about their creative process.",
      ES: 'El Rundgang de la Universidad de las Artes de Berlín reúne, en 2026, del 17 al 19 de julio, a las facultades de Bellas Artes, Diseño, Música, Artes Escénicas y al Instituto de Jazz en más de una decena de sedes repartidas por Charlottenburg. La entrada es completamente gratuita y no requiere entrada previa: se puede caminar libremente entre talleres, ver bocetos sin terminar y conversar directamente con los estudiantes sobre su proceso creativo.',
    },
    highlights: {
      DE: [
        'Universität der Künste Berlin, Studierendenkunst',
      ],
      EN: [
        'Berlin University of the Arts, student art',
      ],
      ES: [
        'Universidad de las Artes Berlín, arte estudiantil',
      ],
    },
  },
  

  {
    id: 25,
    slug: 'Lange Nacht der Wissenschaften',
    image: '/assets/img/events/2.1.png',
    location: 'Berlin',
    categoryKey: 'Culture',
    title: {
      DE: 'Lange Nacht der Wissenschaften',
      EN: 'Lange Nacht der Wissenschaften',
      ES: 'Lange Nacht der Wissenschaften',
    },
    category: { DE: 'Kultur', EN: 'Culture', ES: 'Cultura' },
    date: { DE: 'Juni', EN: 'Juny', ES: 'Junio' },
    duration: { DE: '18:00 - 23:00 Uhr', EN: '18:00 - 23:00', ES: '18:00 - 23:00' },
    recommendAudience: { DE: 'Universitäten und Forschungseinrichtungen öffnen für eine Nacht ihre Türen für die Öffentlichkeit.', EN: 'Universities and research institutes open their doors for one night to show their work to the public.', ES: 'Universidades e institutos abren sus puertas por una noche para mostrar su trabajo al público.' },
    description: {
      DE: 'Die Lange Nacht der Wissenschaften wurde 2001 in Berlin ins Leben gerufen. In der Ausgabe 2026, geplant für den 6. Juni, öffnen rund 60 Einrichtungen von 17 bis 24 Uhr ihre Türen, unter dem Motto Wissenschaft als Antwort auf Fake News — frühere Ausgaben zählten mehr als 30.000 Besucher.',
      EN: "The Lange Nacht der Wissenschaften was born in Berlin in 2001, inspired by the successful model of the Lange Nacht der Museen. In the 2026 edition, scheduled for June 6, around 60 institutions open their doors from 5 pm to midnight, under the theme of science as an answer to fake news — past editions have drawn more than 30,000 curious visitors in a single night.",
      ES: 'La Lange Nacht der Wissenschaften nació en Berlín en 2001, inspirada en el modelo exitoso de la Lange Nacht der Museen. En su edición 2026, programada para el 6 de junio, cerca de 60 instituciones abren sus puertas de 5 de la tarde a medianoche, bajo el lema de la ciencia como respuesta a las noticias falsas y las teorías conspirativas — ediciones anteriores han reunido a más de 30.000 personas curiosas en una sola noche.',
    },
    highlights: {
      DE: [
        'Lange Nacht der Wissenschaften, offene Wissenschaft',
      ],
      EN: [
        'Long night of sciences Berlin, open science',
      ],
      ES: [
        'Noche de las ciencias Berlín, ciencia abierta',
      ],
    },
  },
  
    {
    id: 27,
    slug: 'Baden in städtischen Seen',
    image: '/assets/img/events/Kumelanke.jpg',
    location: 'Wannsee, Schlachtensee, Müggelsee',
    categoryKey: 'Culture',
    title: {
      DE: 'Baden in städtischen Seen',
      EN: 'Baden in städtischen Seen',
      ES: 'Baden in städtischen Seen',
    },
    category: { DE: 'Kultur', EN: 'Culture', ES: 'Cultura' },
    date: { DE: 'Sommer', EN: 'Sommer', ES: 'Verano' },
    duration: { DE: '13:00 - 23:00 Uhr', EN: '13:00 - 23:00', ES: '13:00 - 23:00' },
    recommendAudience: { DE: 'Die Berliner Tradition, in den Seen der Stadt zu schwimmen, sobald es warm wird.', EN: 'Berlin's tradition of swimming in the city's lakes once the warm weather arrives.', ES: 'La tradición berlinesa de nadar en los lagos de la ciudad cuando llega el calor.' },
    description: {
      DE: 'Bis Mai 1907 war das Baden im Großen Wannsee verboten — nach Aufhebung des Verbots begann noch im selben Monat der Bau des Strandbads. Heute wählen die Berliner ihren See je nach gewünschter Stimmung: Schlachtensee und Krumme Lanke, waldumgeben; der Müggelsee, der größte und stillste; und der Wannsee selbst, der belebteste, mit seinem historischen Strandbad.',
      EN: "Until May 1907, swimming in the Großer Wannsee was banned — once the ban was lifted, construction of the beach began that same month. Today Berliners choose their lake based on the vibe they're after: Schlachtensee and Krumme Lanke, forest-ringed and quieter; the Müggelsee, the largest and quietest, out east; and Wannsee itself, the busiest, with its historic Strandbad.",
      ES: 'Hasta mayo de 1907, estaba prohibido bañarse en el Gran Wannsee — cuando se levantó la prohibición, la construcción de la playa comenzó ese mismo mes. Hoy los berlineses eligen su lago según el ambiente que buscan: Schlachtensee y Krumme Lanke, rodeados de bosque y más tranquilos; el Müggelsee, el más grande y silencioso, al este; y el propio Wannsee, el más concurrido, con su histórico Strandbad.',
    },
    highlights: {
      DE: [
        'Berliner Seen baden, Stadtstrände',
      ],
      EN: [
        'Berlin lakes swimming, urban beaches',
      ],
      ES: [
        'Playas de Berlín, nadar en lagos',
      ],
    },
  },
 
  },
    {
    id: 30,
    slug: 'Berlin Art Week',
    image: '/assets/img/events/ALID4224.JPG',
    location: 'Museen in Berlin ',
    categoryKey: 'Culture',
    title: {
      DE: 'Berlin Art Week',
      EN: 'Berlin Art Week',
      ES: 'Berlin Art Week',
    },
    category: { DE: 'Kultur', EN: 'Culture', ES: 'Cultura' },
    date: { DE: 'September ', EN: 'September', ES: 'Septiembre' },
    duration: { DE: '13:00 - 19:00 Uhr', EN: '13:00 - 19:00', ES: '13:00 - 19:00' },
    recommendAudience: { DE: 'Die größte Plattform für zeitgenössische Kunst der Stadt, mit gleichzeitig teilnehmenden Galerien und Museen.', EN: "The city's largest contemporary art platform, with galleries and museums taking part at once.", ES: 'La mayor plataforma de arte contemporáneo de la ciudad, con galerías y museos participando a la vez.' },
    description: {
      DE: "Berlin Art Week wurde 2012 gegründet und feiert 2026 ihr 15-jähriges Bestehen, vom 9. bis 13. September. Jedes Jahr wird ein 'Berlin Art Week Garden' an einem anderen Ort der Stadt aufgebaut, mit kostenlosem Open-Air-Programm.",
      EN: "Berlin Art Week was born in 2012 and in 2026 celebrates its 15th anniversary, from September 9 to 13. Every year it sets up a 'Berlin Art Week Garden' in a different part of the city, with free open-air programming of talks and international symposia.",
      ES: "Berlin Art Week nació en 2012 y en 2026 celebra su 15 aniversario, del 9 al 13 de septiembre. Cada año instala un 'Berlin Art Week Garden' en una zona distinta de la ciudad, con programación gratuita al aire libre de charlas y simposios internacionales. El miércoles de apertura, museos y galerías abren simultáneamente en una gran celebración conjunta por toda la ciudad.",
    },
    highlights: {
      DE: [
        'Berlin Art Week, zeitgenössische Kunst Herbst',
      ],
      EN: [
        'Berlin art week, contemporary art autumn',
      ],
      ES: [
        'Semana del arte Berlín, arte contemporáneo otoño',
      ],
    },
  },
    {
    id: 31,
    slug: 'Internationales Literaturfestival Berlin',
    image: '/assets/img/events/IMG_2809.jpg',
    location: 'Berlin',
    categoryKey: 'Culture',
    title: {
      DE: 'Internationales Literaturfestival Berlin',
      EN: 'Internationales Literaturfestival Berlin',
      ES: 'Internationales Literaturfestival Berlin',
    },
    category: { DE: 'Kultur', EN: 'Culture', ES: 'Cultura' },
    date: { DE: 'September', EN: 'September', ES: 'Septiembre' },
    duration: { DE: '13:00 - 23:00 Uhr', EN: '13:00 - 23:00', ES: '13:00 - 23:00' },
    recommendAudience: { DE: 'Festival, das die zeitgenössische literarische Vielfalt aus aller Welt versammelt.', EN: 'Festival bringing together contemporary literary diversity from around the world.', ES: 'Festival que reúne la diversidad literaria contemporánea del mundo.' },
    description: {
      DE: 'Das Internationale Literaturfestival Berlin wurde von Ulrich Schreiber gegründet, seit 2005 ist das Haus der Berliner Festspiele Hauptspielort, seit 2023 unter Lavinia Frey. Die Ausgabe 2026, die 26., läuft vom 3. bis 12. September und versammelt rund 200 Autoren aus mehr als 40 Ländern — darunter Nobelpreisträgerin Han Kang.',
      EN: "The International Literature Festival Berlin was founded by Ulrich Schreiber, and since 2005 its main venue has been the Haus der Berliner Festspiele, directed since 2023 by Lavinia Frey. The 2026 edition, the 26th, runs from September 3 to 12 and brings together around 200 authors from more than 40 countries — including Nobel Literature laureate Han Kang and writer Dave Eggers.",
      ES: 'El Festival Internacional de Literatura de Berlín fue fundado por Ulrich Schreiber, y desde 2005 tiene su sede principal en el Haus der Berliner Festspiele, dirigido desde 2023 por Lavinia Frey. La edición 2026, la número 26, se celebra del 3 al 12 de septiembre y reúne a cerca de 200 autores de más de 40 países — entre ellos la Premio Nobel de Literatura Han Kang y el escritor Dave Eggers.',
    },
    highlights: {
      DE: [
        'Literaturfestival Berlin, internationale Literatur',
      ],
      EN: [
        'Literature festival Berlin, international literature',
      ],
      ES: [
        'Festival de literatura Berlín, literatura internacional',
      ],
    },
  },
    {
    id: 32,
    slug: 'Positions Berlin Art Fair',
    image: '/assets/img/events/Berlin-Art-Fair.jpg',
    location: 'Tempelhof',
    categoryKey: 'Kunst',
    title: {
      DE: 'Positions Berlin Art Fair',
      EN: 'Positions Berlin Art Fair',
      ES: 'Positions Berlin Art Fair',
    },
    category: { DE: 'Kunst', EN: 'Art', ES: 'Arte' },
    date: { DE: 'September', EN: 'September', ES: 'Septiembre' },
    duration: { DE: '13:00 - 19:00 Uhr', EN: '13:00 - 19:00', ES: '13:00 - 19:00' },
    recommendAudience: { DE: 'Kunstmesse in den ehemaligen Hangars des Flughafens Tempelhof.', EN: 'Art fair set up in the former hangars of Tempelhof airport.', ES: 'Feria de arte en los antiguos hangares del aeropuerto de Tempelhof.' },
    description: {
      DE: 'Positions Berlin, Teil der Berlin Art Week, versammelt mehr als 100 nationale und internationale Galerien in den Hangars des historischen Flughafens Tempelhof — die Ausgabe 2026 fällt mit dem 15-jährigen Jubiläum des Festivals zusammen.',
      EN: "Positions Berlin, part of Berlin Art Week, brings together more than 100 national and international galleries inside the hangars of the historic Tempelhof airport — the 2026 edition coincides with the festival's 15th anniversary.",
      ES: 'Positions Berlin, parte de la Berlin Art Week, reúne a más de 100 galerías nacionales e internacionales dentro de los hangares del histórico aeropuerto de Tempelhof — la edición 2026 coincide con el 15 aniversario del festival, y se espera una asistencia especialmente alta de curadores y coleccionistas internacionales.',
    },
    highlights: {
      DE: [
        'Kunstmesse Tempelhof, Kunst in Hangars',
      ],
      EN: [
        'Art fair Tempelhof, art in hangars',
      ],
      ES: [
        'Feria de arte Tempelhof, arte en hangares',
      ],
    },
  },
    {
    id: 35,
    slug: 'Festival of Lights',
    image: '/assets/img/events/Lights-Berlin.jpg',
    location: 'Berlin',
    categoryKey: 'Culture',
    title: {
      DE: 'Festival of Lights',
      EN: 'Festival of Lights',
      ES: 'Festival of Lights',
    },
    category: { DE: 'Kultur', EN: 'Culture', ES: 'Cultura' },
    date: { DE: '9. bis 18. Oktober', EN: '9-18 October', ES: '9-18 de octubre' },
    duration: { DE: '19:00 - 23:00 Uhr', EN: '19:00 - 23:00', ES: '19:00 - 23:00' },
    recommendAudience: { DE: 'Berlins bekannteste Wahrzeichen erstrahlen mehrere Tage lang in Lichtkunst.', EN: "Berlin's most iconic landmarks light up with illuminated art for several days.", ES: 'Los monumentos más icónicos de Berlín se iluminan con arte lumínico durante varios días.' },
    description: {
      DE: 'Das Festival of Lights entstand 2005 auf Initiative der Berliner Produzentin Birgit Zander und sollte ursprünglich dem Rückgang der Touristenzahlen entgegenwirken, unter dem Berlin jeden Herbst litt. Jedes Jahr werden dabei Sehenswürdigkeiten wie die 12 dorischen Säulen des Brandenburger Tors beleuchtet.',
      EN: "The Festival of Lights was launched in 2005, the brainchild of Berlin-based producer Birgit Zander, and was originally conceived to counteract the decline in tourism that Berlin experienced every autumn. Every year, it illuminates landmarks such as the 12 Doric columns of the Brandenburg Gate.",
      ES: 'El Festival of Lights nació en 2005, idea de la productora berlinesa Birgit Zander, pensado originalmente para combatir la caída de turismo que Berlín sufría cada otoño. Ilumina cada año monumentos como las 12 columnas dóricas de la Puerta de Brandeburgo.',
    },
    highlights: {
      DE: [
        'Festival of Lights Berlin, beleuchtete Wahrzeichen',
      ],
      EN: [
        'Festival of Lights Berlin, illuminated landmarks',
      ],
      ES: [
        'Festival de luces Berlín, monumentos iluminados',
      ],
    },
  },
   

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
