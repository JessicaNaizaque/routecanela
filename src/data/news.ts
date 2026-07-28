import type { Lang } from '../translations';

type Localized<T = string> = Record<Lang, T>;

export interface NewsItem {
  id: number;
  slug: string;
  image: string;
  author: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  body: string;
  tags: string[];
}

interface NewsSource {
  id: number;
  slug: string;
  image: string;
  author: string;
  title: Localized;
  date: Localized;
  readTime: Localized;
  excerpt: Localized;
  body: Localized;
  tags: Localized<string[]>;
}

const newsSources: NewsSource[] = [
  {
    id: 1,
    slug: 'Mauerpark Flohmarkt',
    image: '/assets/img/news/Routecanela_fac.png',x
    author: 'Laura Méndez',
    title: { DE: 'Mauerpark Flohmarkt', EN: 'Mauerpark Flohmarkt', ES: 'Mauerpark Flohmarkt' },
    date: {
      DE: 'Sonntags · Prenzlauer Berg',
      EN: 'Sundays · Prenzlauer Berg',
      ES: 'Domingos · Prenzlauer Berg',
    },
    readTime: { DE: '4 Min. Lesezeit', EN: '4 min read', ES: '4 min de lectura' },
    excerpt: {
      DE: 'Berlins berühmtester Flohmarkt, jeden Sonntag in Prenzlauer Berg.',
      EN: 'Berlin's most famous flea market, every Sunday in Prenzlauer Berg.'
      ES: 'El mercado de pulgas más famoso de Berlín, cada domingo en Prenzlauer Berg.',
    },
    body: {
      DE: 'Der Flohmarkt im Mauerpark findet seit 2004 jeden Sonntag statt, mit Ständen von privaten Verkäufern — keinen Geschäften —, die Second-Hand-Kleidung, Vinylplatten, CDs, Schmuck und sogar ein eigenes Zelt nur für Möbel und Antiquitäten anbieten. Wenige Schritte entfernt beherbergt das natürliche Amphitheater des Hügels jeden Sonntagnachmittag das 'Bearpit Karaoke' — Berlins beliebteste spontane Gesangsshow.',
      EN: 'The Mauerpark flea market has run every Sunday since 2004, with stalls run by private sellers — not businesses — offering secondhand clothing, vinyl records, CDs, jewelry, and even a tent dedicated solely to furniture and antiques. A few steps away, across the park's basketball court, the hill's natural amphitheater hosts 'Bearpit Karaoke' every Sunday afternoon — Berlin's most beloved impromptu singing show, where anyone can climb up and sing in front of hundreds of strangers.',
      ES: 'El mercado de pulgas de Mauerpark funciona cada domingo desde 2004, con puestos de vendedores particulares —no negocios— ofreciendo ropa de segunda mano, discos de vinilo, CDs, joyería y hasta una carpa dedicada solo a muebles y antigüedades. A pocos metros, cruzando la cancha de básquet del parque, el anfiteatro natural de la colina alberga cada domingo por la tarde el 'Bearpit Karaoke' — el espectáculo de canto improvisado más querido de Berlín, donde cualquiera puede subir a cantar frente a cientos de desconocidos sentados en las gradas naturales.',
    },
    tags: {
      DE: ['Natur', 'Geheimtipps', 'Prenzlauer Berg, Flohmarkt Berlin,'],
      EN: ['Nature', 'Hidden gems', 'Prenzlauer Berg', 'Bearpit Karaoke'],
      ES: ['Naturaleza', 'Joyas escondidas', 'Prenzlauer Berg','ropa vintage Berlín'],
    },
  },
  {
    id: 2,
    slug: 'Boxhagener Platz ('Boxi')',
    image:
      '/assets/img/news/Routecanela_fac.png',
    author: 'Tomás García',
    title: { DE: 'Boxhagener Platz (Boxi)', EN: 'Boxhagener Platz (Boxi)', ES: 'Boxhagener Platz (Boxi)' },
    date: {
      DE: 'Sonntags · Friedrichshain',
      EN: 'Sundays · Friedrichshain',
      ES: 'Domingos · Friedrichshain',
    },
    readTime: { DE: '3 Min. Lesezeit', EN: '3 min read', ES: '3 min de lectura' },
    excerpt: {
      DE: 'Die lokalere, entspanntere Version des Mauerparks, im Herzen von Friedrichshain.',
      EN: "The more local, relaxed version of Mauerpark, in the heart of Friedrichshain.",
      ES: 'La versión más local y relajada de Mauerpark, en el corazón de Friedrichshain.',
    },
    body: {
      DE: 'Während sich der Mauerpark im Laufe der Jahre mit Touristen füllte, bleibt 'Boxi' der Markt, den die Friedrichshainer selbst bevorzugen — dieselbe Mischung aus Vintage-Kleidung, Platten und kuriosen Objekten, aber auf dem Platz eines Wohnviertels, ohne Touristenrouten. Sonntags dient der Platz auch als Treffpunkt für die umliegenden Cafés und Bars.',
      EN: "While Mauerpark filled up with tourists over the years, 'Boxi' remains the market Friedrichshain locals actually prefer — the same mix of vintage clothing, records, and curious objects, but set in a residential neighborhood square, without the tourist circuit or the crowds. On Sundays, the square also doubles as a meeting point for the cafés and bars around it.",
      ES: 'Mientras Mauerpark se llenó de turistas con los años, 'Boxi' sigue siendo el mercado que prefieren los propios berlineses de Friedrichshain — misma esencia de ropa vintage, discos y objetos curiosos, pero en la plaza de un barrio residencial, sin el circuito turístico ni las multitudes. Los domingos, la plaza también sirve de punto de encuentro para las cafeterías y bares que la rodean.',
    },
    tags: {
      DE: ['entspanntere ', 'Friedrichshain', 'Kaffee'],
      EN: ['relaxed', 'Friedrichshain', 'Coffee'],
      ES: ['relajada', 'Friedrichshain', 'Café'],
    },
  },
  {
    id: 3,
    slug: 'Neukölln Flowmarkt',
    image: '/assets/img/news/Routecanela_fac.png',
    author: 'Anna Schulz',
    title: { DE: 'econd-Hand-Markt', EN: 'Secondhand market', ES: 'Mercado de segunda' },
    date: {
      DE: '1. und 3. Sonntag, April-November · Maybachufer',
      EN: '1st and 3rd Sundays, April-November · Maybachufer',
      ES: '1er y 3er domingo, abril-noviembre · Maybachufer',
    },
    readTime: { DE: '5 Min. Lesezeit', EN: '5 min read', ES: '5 min de lectura' },
    excerpt: {
      DE: 'Second-Hand-Markt am Kanal, mit starkem Fokus auf Nachhaltigkeit.',
      EN: 'Secondhand market by the canal, with a strong focus on sustainability.',
      ES: 'Mercado de segunda mano junto al canal, con fuerte enfoque en sostenibilidad.',
    },
    body: {
      DE: 'Anders als bei fast allen anderen Märkten der Stadt gibt es hier keine professionellen Händler — nur Nachbarn, die ihre eigenen Sachen verkaufen, mit dem Maybachufer-Kanal als Kulisse an jedem ersten und dritten Sonntag im Monat, von April bis November. Der Name selbst verbindet 'Neukölln' mit 'flow'.',
      EN: 'Unlike almost every other market in the city, there are no professional dealers here — just neighbors selling their own belongings, many already recycled or repaired, with the Maybachufer canal as a backdrop every first and third Sunday of the month, from April to November. The name itself blends 'Neukölln' with 'flow,' a nod to the canal water.',
      ES: 'A diferencia de casi todos los demás mercados de la ciudad, aquí no hay comerciantes profesionales — solo vecinos vendiendo sus propias pertenencias, muchas ya recicladas o reparadas, con el canal de Maybachufer como telón de fondo cada primer y tercer domingo del mes, de abril a noviembre. El propio nombre mezcla 'Neukölln' con 'flow', en referencia al agua del canal.',
    },
    tags: {
      DE: ['Designermöbel', 'Neukölln Flowmarkt', 'Grünflächen', 'Maybachufer'],
      EN: ['designer furniture', 'Neukölln Flowmarkt', 'Green spaces','Maybachufer'],
      ES: ['muebles de diseño', 'Neukölln Flowmarkt', 'Zonas verdes','Maybachufer'],
    },
  },
  {
    id: 4,
    slug: 'RAW-Gelände Flohmarkt',
    image:
      '/assets/img/news/Routecanela_fac.png',
    author: 'Laura Méndez',
    title: { DE: 'RAW-Gelände Flohmarkt', EN: 'RAW-Gelände Flohmarkt', ES: 'RAW-Gelände Flohmarkt' },
    date: {
      DE: 'Sonntags · Friedrichshain',
      EN: 'Sundays · Friedrichshain',
      ES: 'Domingos · Friedrichshain',
    },
    readTime: { DE: '3 Min. Lesezeit', EN: '3 min read', ES: '3 min de lectura' },
    excerpt: {
      DE: 'Markt in einer ehemaligen Eisenbahnwerkstatt, die zum kreativen Ort wurde.',
      EN: 'Market inside a former railway workshop turned creative space.',
      ES: 'Mercado dentro de un antiguo taller ferroviario reconvertido en espacio creativo.',
    },
    body: {
      DE: 'Das Gelände, auf dem dieser Markt heute stattfindet, war ab 1867 eine Eisenbahnwerkstatt und beschäftigte um 1918 rund 1.200 Menschen unter dem Namen Reichsbahnausbesserungswerk. Erst seit 1999 wurde daraus der heutige Markt- und Street-Art-Ort, auf dem sich Vintage-Kleiderstände, Food Trucks und ständig wechselnde Wandbilder das Gelände teilen.',
      EN: "The site where this market takes place operated as a railway workshop starting in 1867, and by 1918 employed 1,200 people under the name Reichsbahnausbesserungswerk — the source of the RAW initials. Only since 1999 has it become the market, street art, and alternative culture space it is now, with vintage clothing stalls, food trucks, and ever-changing murals all sharing the same grounds.",
      ES: 'El terreno donde hoy se instala este mercado funcionó como taller ferroviario desde 1867, y hacia 1918 llegó a emplear a 1.200 personas bajo el nombre de Reichsbahnausbesserungswerk — de ahí vienen las siglas RAW que el lugar conserva hasta hoy. Solo desde 1999 se convirtió en el espacio de mercados, arte urbano y cultura alternativa que es ahora, y hoy conviven en el mismo predio puestos de ropa vintage, food trucks y murales que cambian todo el tiempo.',
    },
    tags: {
      DE: ['Markt', 'Friedrichshain', 'Kunsthandwerk', 'RAW Gelände'],
      EN: ['Market', 'Friedrichshain', 'Artisan', 'RAW Gelände'],
      ES: ['Mercado', 'Friedrichshain', 'Artesanía', 'RAW Gelände'],
    },
  },
  {
    id: 5,
    slug: 'Arkonaplatz Flohmarkt',
    image:
      '/assets/img/news/Routecanela_fac.png',
    author: 'Tomás García',
    title: {
      DE: 'Arkonaplatz Flohmarkt',
      EN: 'Arkonaplatz Flohmarkt,
      ES: 'Arkonaplatz Flohmarkt',
    },
    date: {
      DE: 'Sonntags - Mitte',
      EN: 'Sundays - Mitte',
      ES: 'Domingos - Mitte',
    },
    readTime: { DE: '4 Min. Lesezeit', EN: '4 min read', ES: '4 min de lectura' },
    excerpt: {
      DE: 'Sonntagsmarkt spezialisiert auf Designermöbel und antiquarische Bücher.',
      EN: "Sunday market specializing in designer furniture and secondhand books.",
      ES: 'Mercado dominical especializado en muebles de diseño y libros de segunda mano.',
    },
    body: {
      DE: 'Während andere Märkte alles mischen, hat sich der Arkonaplatz spezialisiert: die erste Adresse für Mid-Century-Möbel oder gebrauchte Bücher, in einer ruhigeren Atmosphäre.',
      EN: "While other markets mix everything together, Arkonaplatz specialized: it's the go-to spot for mid-century design furniture or a good secondhand book collection, in a much calmer atmosphere.",
      ES: 'Mientras otros mercados mezclan de todo, Arkonaplatz se especializó: es el punto de referencia para quien busca muebles de mediados de siglo o una buena colección de libros usados, en un ambiente más tranquilo.',
    },
    tags: {
      DE: ['Arkonaplatz', 'Flohmarkt', 'Geschichte', 'Mitte'],
      EN: ['Arkonaplatz', 'Flohmarkt', 'History', 'Mitte'],
      ES: ['Arkonaplatz', 'Flohmarkt', 'Historia', 'Mitte'],
    },
  },
  {
    id: 6,
    slug: 'Prinzessinnengärten',
    image: '/assets/img/news/Cafevegan.jpg',
    author: 'Anna Schulz',
    title: { DE: 'Prinzessinnengärten', EN: 'Prinzessinnengärten', ES: 'Prinzessinnengärten' },
    date: {
      DE: 'Self-managed by the local community · Mon 2pm - 5pm, Tue 11am - 6pm, Wed 3pm - 5pm, Thu 1pm - 8pm, Fri 2pm - 7pm, Sat 12 noon - 4pm, Sun 12 noon - 6pm (open assembly every Sunday at 12 noon) · Moritzplatz, Kreuzberg/Neukölln',
      EN: 'Von der Nachbarschaft selbst verwaltet · Mo 14 - 17 Uhr, Di 11 - 18 Uhr, Mi 15 - 17 Uhr, Do 13 - 20 Uhr, Fr 14 - 19 Uhr, Sa 12 - 16 Uhr, So 12 - 18 Uhr (jeden Sonntag um 12 Uhr offene Versammlung) · Moritzplatz, Kreuzberg/Neukölln',
      ES: 'Autogestionado por el vecindario · Lun 14-17h, Mar 11-18h, Mié 15-17h, Jue 13-20h, Vie 14-19h, Sáb 12-16h, Dom 12-18h (asamblea abierta cada domingo 12h) · Moritzplatz, Kreuzberg/Neukölln',
    },
    readTime: { DE: '3 Min. Lesezeit', EN: '3 min read', ES: '3 min de lectura' },
    excerpt: {
      DE: 'Stadtgarten am Moritzplatz mit vegetarischem und veganem Café.',
      EN: 'Urban garden on Moritzplatz with a vegetarian and vegan café.',
      ES: 'Jardín urbano en Moritzplatz con café vegetariano y vegano.',
    },
    body: {
      DE: 'Das Gelände der Prinzessinnengärten lag mehr als 60 Jahre brach, bis eine Gruppe von Nachbarn und die Organisation Nomadisch Grün im Sommer 2009 zwei Tonnen Müll entfernten. Der gesamte Garten ist mobil konzipiert: Die Pflanzen wachsen in recycelten Bäckerkisten, Tetra-Pak-Verpackungen und Reissäcken — sodass der ganze Garten im Zweifel abgebaut und woanders wieder aufgebaut werden kann.',
      EN: 'The Prinzessinnengärten site sat abandoned for more than 60 years, until in the summer of 2009 a group of neighbors and the organization Nomadisch Grün cleared two tons of trash from the lot. A month later they already had 100 garden beds planted. The whole garden is designed to be mobile: plants grow in recycled bakery crates, Tetra Pak cartons, and rice sacks — so that if they ever lose the land, the entire garden can be dismantled and moved elsewhere.',
      ES: 'El terreno de los Prinzessinnengärten estuvo abandonado más de 60 años, hasta que en el verano de 2009 un grupo de vecinos y la organización Nomadisch Grün retiraron dos toneladas de basura del lugar. Un mes después ya tenían 100 huertos plantados, y al mes siguiente cosecharon las primeras verduras. Todo el jardín está diseñado para ser móvil: las plantas crecen en cajas de panadería recicladas, envases de Tetra Pak y sacos de arroz — de forma que, si algún día pierden el terreno, todo el jardín puede desmontarse y trasladarse a otro lugar.',
    },
    tags: {
      DE: ['Essen', 'Nachhaltigkeit', 'Kreuzberg'],
      EN: ['Food', 'Sustainability', 'urban gardening Berlin', 'Kreuzberg'],
      ES: ['Gastronomía', 'Sostenibilidad', 'Kreuzberg', 'cafe vegano'],
    },
  },
  {
    id: 7,
    slug: 'Allmende-Kontor',
    image: '/assets/img/news/Urban-garten.jpg',
    author: 'Laura Méndez',
    title: { DE: 'Allmende-Kontor', EN: 'Allmende-Kontor', ES: 'Allmende-Kontor' },
    date: {
      DE: 'Gartensaison: April bis Oktober (allgemeine Angabe, bitte vor dem Besuch überprüfen) · Tempelhofer Feld',
      EN: 'Garden season: April to October (general information – please check before visiting) · Tempelhofer Feld',
      ES: 'Temporada de jardín: abril a octubre (dato general, verificar antes de ir) · Tempelhofer Feld',
    },
    readTime: { DE: '4 Min. Lesezeit', EN: '4 min read', ES: '4 min de lectura' },
    excerpt: {
      DE: 'Stadtgarten am Moritzplatz mit vegetarischem und veganem Café.',
      EN: 'Urban garden on Moritzplatz with a vegetarian and vegan café.',
      ES: 'Jardín urbano en Moritzplatz con café vegetariano y vegano.',
    },
    body: {
      DE: 'Das Gelände der Prinzessinnengärten lag mehr als 60 Jahre brach, bis eine Gruppe von Nachbarn und die Organisation Nomadisch Grün im Sommer 2009 zwei Tonnen Müll entfernten. Der gesamte Garten ist mobil konzipiert: Die Pflanzen wachsen in recycelten Bäckerkisten, Tetra-Pak-Verpackungen und Reissäcken — sodass der ganze Garten im Zweifel abgebaut und woanders wieder aufgebaut werden kann.',
      EN: 'The Prinzessinnengärten site sat abandoned for more than 60 years, until in the summer of 2009 a group of neighbors and the organization Nomadisch Grün cleared two tons of trash from the lot. A month later they already had 100 garden beds planted. The whole garden is designed to be mobile: plants grow in recycled bakery crates, Tetra Pak cartons, and rice sacks — so that if they ever lose the land, the entire garden can be dismantled and moved elsewhere.',
      ES: 'El terreno de los Prinzessinnengärten estuvo abandonado más de 60 años, hasta que en el verano de 2009 un grupo de vecinos y la organización Nomadisch Grün retiraron dos toneladas de basura del lugar. Un mes después ya tenían 100 huertos plantados, y al mes siguiente cosecharon las primeras verduras. Todo el jardín está diseñado para ser móvil: las plantas crecen en cajas de panadería recicladas, envases de Tetra Pak y sacos de arroz — de forma que, si algún día pierden el terreno, todo el jardín puede desmontarse y trasladarse a otro lugar.',
    },
    tags: {
      DE: ['Kultur', 'Zehlendorf', 'Kunst', 'Tempelhofer Feld', 'urban gardening Berlin'],
      EN: ['Culture', 'Zehlendorf', 'Arts', 'Tempelhofer Feld', 'urban gardening Berlin'],
      ES: ['Cultura', 'Zehlendorf', 'Arte', 'Tempelhofer Feld', 'urban gardening Berlin'],
    },
  },
  {
    id: 8,
    slug: 'Allmende-Kontor',
    image: '/assets/img/news/Tempelhofer.jpg',
    author: 'Tomás García',
    title: { DE: 'Allmende-Kontor', EN: 'Allmende-Kontor', ES: 'Allmende-Kontor' },
    date: {
      DE: 'Tempelhofer Feld',
      EN: 'Tempelhofer Feld',
      ES: 'Tempelhofer Feld',
    },
    readTime: { DE: '5 Min. Lesezeit', EN: '5 min read', ES: '5 min de lectura' },
    excerpt: {
      DE: 'Gemeinschaftsgarten mitten im Tempelhofer Feld, mit Hochbeeten und Workshops.',
      EN: "Community garden inside Tempelhofer Feld, with raised beds and workshops.",
      ES: 'Jardín comunitario dentro del Tempelhofer Feld, con huertos elevados y talleres.',
    },
    body: {
      DE: 'Mitten im größten Park Berlins lädt dieser 5.000 m² große Gemeinschaftsgarten dazu ein, urbane Landwirtschaft aus der Nähe kennenzulernen — offen für alle, auch ohne Vorerfahrung. Da er innerhalb des Tempelhofer Felds liegt, besteht kein Risiko, das Gelände an neue Bebauung zu verlieren: Der Park ist durch einen Bürgerentscheid geschützt.',
      EN: 'In the middle of Berlin's largest park, this 5,000-square-meter community garden invites visitors to see urban farming up close — with raised beds designed so anyone, with no prior experience, can join a planting or harvesting shift. Because it sits inside Tempelhofer Feld, there's no risk of losing the land to new construction: the park is protected by a citizen referendum.',
      ES: 'En medio del parque más grande de Berlín, este jardín comunitario de 5.000 m² invita a conocer de cerca cómo funciona la agricultura urbana — con huertos elevados pensados para que cualquiera, sin experiencia previa, pueda sumarse a un turno de siembra o cosecha. Al estar dentro del Tempelhofer Feld, no hay riesgo de que el terreno se pierda por una obra nueva: es parque protegido por decisión de un referéndum ciudadano.',
    },
    tags: {
      DE: ['Tempelhofer Feld', 'garten Berlin', 'Seen'],
      EN: ['Tempelhofer Feld', 'community garden Berlin', 'Lakes'],
      ES: ['Tempelhofer Feld', 'Verano', 'Lagos'],
    },
  },
  {
    id: 9,
    slug: 'Himmelbeet',
    image: '/assets/img/news/Routecanela_fac.png',
    author: 'Anna Schulz',
    title: {
      DE: 'Himmelbeet',
      EN: 'Himmelbeet',
      ES: 'Himmelbeet',
    },
    date: {
      DE: 'Wedding',
      EN: 'Wedding',
      ES: 'Wedding',
    },
    readTime: { DE: '5 Min. Lesezeit', EN: '5 min read', ES: '5 min de lectura' },
    excerpt: {
      DE: 'Gemeinschaftsgarten in Wedding, als Treffpunkt konzipiert.',
      EN: 'Community garden in Wedding, designed as a meeting point.',
      ES: 'Jardín comunitario en Wedding pensado como punto de encuentro.',
    },
    body: {
      DE: 'Himmelbeet ist ein interkulturelles Stadtgarten-Projekt in Wedding, das sowohl einzeln gepachtete Parzellen als auch gemeinschaftlich bewirtschaftete Flächen bietet, dazu Workshops zu sozialen und ökologischen Themen. Im Gartencafé werden Obst, Gemüse und sogar Pilze serviert, die direkt vor Ort geerntet wurden, auf einer ausschließlich vegetarischen und veganen Karte. Der gesamte Ort ist barrierefrei.',
      EN: "Himmelbeet is an intercultural urban gardening project in Wedding that offers both individually leased plots and communally cultivated areas, alongside workshops on social and ecological topics. The Garden Café serves fruit, vegetables, and even mushrooms harvested right on site, on an exclusively vegetarian and vegan menu, served on benches built from recycled pallets. The whole space is barrier-free.",
      ES: 'Himmelbeet es un proyecto de jardinería urbana intercultural en Wedding que ofrece tanto parcelas individuales en alquiler como áreas de cultivo comunitario, además de talleres sobre temas sociales y ecológicos. El Café del Jardín sirve frutas, verduras y hasta hongos cosechados directamente ahí mismo, en un menú exclusivamente vegetariano y vegano, servido en bancos construidos con palets reciclados. Todo el espacio es accesible sin barreras.',
    },
    tags: {
      DE: ['Festival', 'Wedding', 'Geschichte', 'Gemeinschaftsgarten'],
      EN: ['Festival', 'Wedding', 'History', 'Gemeinschaftsgarten'],
      ES: ['Festival', 'Wedding', 'Historia', 'Gemeinschaftsgarten'],
    },
  },
   {
    id: 10,
    slug: 'Gleisbeet',
    image: '/assets/img/news/Gleisbeet.jgp',
    author: 'Anna Schulz',
    title: {
      DE: 'Ehemaliger Bahnhof Wriezen · Friedrichshain',
      EN: 'Former Wriezen railway station · Friedrichshain',
      ES: 'Antigua estación de Wriezen · Friedrichshain',
    },
    date: {
      DE: 'Wriezen · Friedrichshain',
      EN: 'Wriezen · Friedrichshain',
      ES: 'Wriezen · Friedrichshain',
    },
    readTime: { DE: '5 Min. Lesezeit', EN: '5 min read', ES: '5 min de lectura' },
    excerpt: {
      DE: 'Gemeinschaftsgarten in Wedding, als Treffpunkt konzipiert.',
      EN: 'Community garden in Wedding, designed as a meeting point.',
      ES: 'Jardín comunitario en Wedding pensado como punto de encuentro.',
    },
    body: {
      DE: 'Auf den Gleisen des verschwundenen Bahnhofs Wriezen fand dieses Permakultur-Projekt ein zweites Leben für ein Stück verlassener Bahninfrastruktur — heute bietet es Balkongarten-Workshops sowie Vorträge zu Umweltschutz und kleinräumigem städtischem Kompostieren.',
      EN: 'On the tracks of the vanished Wriezen station, this permaculture project gave a second life to a piece of abandoned rail infrastructure — today it offers balcony gardening workshops for anyone who wants to apply what they learn at home, plus talks on environmental protection and small-scale urban composting.',
      ES: 'Sobre los rieles de la desaparecida estación de Wriezen, este proyecto de permacultura le encontró una segunda vida a un pedazo de infraestructura ferroviaria abandonada — hoy ofrece talleres de huerto en balcón para quien quiere aplicar lo aprendido en su propia casa, además de charlas sobre protección ambiental y compostaje urbano a pequeña escala.',
    },
    tags: {
      DE: ['Festival', 'Friedrichshain,', 'balkongarten', 'Balkongarten Workshop'],
      EN: ['Festival', 'Friedrichshain,', 'balkongarten', 'Gemeinschaftsgarten'],
      ES: ['Festival', 'Friedrichshain,', 'balkongarten', 'Gemeinschaftsgarten'],
    },
  },
   {
    id: 11,
    slug: 'Klunkerkranich',
    image: '/assets/img/news/Routecanela_fac.png',
    author: 'Anna Schulz',
    title: {
      DE: 'Dachterrasse in Neukölln',
      EN: 'Roof terrace in Neukölln',
      ES: 'Azotea en Neukölln',
    },
    date: {
      DE: 'Neukölln',
      EN: 'Neukölln',
      ES: 'Neukölln',
    },
    readTime: { DE: '5 Min. Lesezeit', EN: '5 min read', ES: '5 min de lectura' },
    excerpt: {
      DE: 'Dachgarten und Bar in Neukölln, mit Blick über die ganze Stadt.',
      EN: 'Rooftop garden and bar in Neukölln, with views over the whole city.',
      ES: 'Jardín y bar en una azotea de Neukölln, con vistas a toda la ciudad.',
    },
    body: {
      DE: 'Der Aufstieg zu diesem Dachgarten bedeutet buchstäblich, mit dem Aufzug bis ins fünfte Parkdeck zu fahren und dann zu Fuß ins sechste weiterzugehen. Im Klunkerkranich selbst befindet sich die 'Horstwirtschaft', wahrscheinlich das höchstgelegene Stadtgarten-Projekt der Stadt: Im 'KlunkerGarten' wachsen Kräuter wie Wermut, Thymian und Oregano, die später in den Cocktails der Bar landen — der Zugang ist kostenlos.',
      EN: 'Getting up to this rooftop garden literally means taking the elevator to the fifth floor of a parking garage and continuing on foot to the sixth — the reward is one of the best panoramic views in Berlin. Inside Klunkerkranich itself runs 'Horstwirtschaft,' probably the city's highest urban gardening project: herbs like wormwood, thyme, and oregano grow in the 'KlunkerGarten' and later end up in the bar's cocktails — access to the garden is free, because, in their own words, 'it should be there for everyone.',
      ES: 'Subir a este jardín en la azotea implica literalmente tomar el ascensor hasta el quinto piso de un estacionamiento y seguir a pie hasta el sexto — la recompensa es una de las mejores vistas panorámicas de Berlín. Dentro del propio Klunkerkranich funciona la 'Horstwirtschaft', probablemente el proyecto de jardinería urbana más alto de la ciudad: en el 'KlunkerGarten' crecen hierbas como ajenjo, tomillo y orégano, que después terminan en los cócteles del bar — el acceso al jardín es gratuito, porque, según sus propias palabras, 'debe ser para todos'.',
    },
    tags: {
      DE: ['Dachgarten Berlin', 'Wedding', 'Geschichte', 'Gemeinschaftsgarten'],
      EN: ['rooftop bar Berlín', 'Wedding', 'History', 'Gemeinschaftsgarten'],
      ES: ['azotea Neukölln', 'Wedding', 'Historia', 'Gemeinschaftsgarten'],
    },
  },
   {
    id: 12,
    slug: 'RAW-Gelände',
    image: '/assets/img/news/IMG_2835.jpg',
    author: 'Anna Schulz',
    title: {
      DE: 'RAW-Gelände',
      EN: 'RAW-Gelände',
      ES: 'RAW-Gelände',
    },
    date: {
      DE: 'Friedrichshain',
      EN: 'Friedrichshain',
      ES: 'Friedrichshain',
    },
    readTime: { DE: '5 Min. Lesezeit', EN: '5 min read', ES: '5 min de lectura' },
    excerpt: {
      DE: 'Ehemalige Eisenbahnwerkstatt, heute Street Art, Skatepark und Sommerbad.',
      EN: 'Former railway workshop turned street art, skatepark, and summer pool.',
      ES: 'Antiguo taller ferroviario transformado en arte urbano, skatepark y piscina de verano.',
    },
    body: {
      DE: 'Seit 1999 umgenutzt, vereint diese über 8 Hektar große ehemalige Werkstatt heute Street Art, eine Kletterwand, ein Sommerbad und mehrere Bars unter einem industriellen Dach. Die Wandbilder wechseln alle paar Wochen, sodass kein Besuch dem vorherigen gleicht.',
      EN: 'Repurposed since 1999, this former railway workshop of more than 8 hectares now combines street art, a climbing wall, a summer pool, and several bars under one industrial roof — the clearest example of how Berlin reuses its abandoned spaces instead of tearing them down. The murals on the walls change every few weeks, so no visit ever looks quite the same as the last.",
      ES: 'Reconvertido desde 1999, este antiguo taller ferroviario de más de 8 hectáreas hoy combina arte urbano, un muro de escalada, una piscina de verano y varios bares bajo un mismo techo industrial — la muestra más clara de cómo Berlín reutiliza sus espacios abandonados en vez de demolerlos. Las paredes cambian de mural cada pocas semanas, así que ninguna visita se ve exactamente igual a la anterior.',
    },
    tags: {
      DE: ['skatepark Friedrichshain,', 'Friedrichshain', 'Gemeinschaftsgarten'],
      EN: ['skatepark Friedrichshain', 'Friedrichshain', 'street art Berlin'],
      ES: ['skatepark Friedrichshain,', 'Friedrichshain', 'Gemeinschaftsgarten'],
    },
  },
   {
    id: 13,
    slug: 'Heldenmarkt',
    image: '/assets/img/news/Routecanela_fac.png',
    author: 'Anna Schulz',
    title: {
      DE: 'Herbstmesse · wechselnder Veranstaltungsort',
      EN: 'Autumn Fair · rotating venue',
      ES: 'Feria de otoño · ubicación rotativa',
    },
    date: {
      DE: 'Berlin',
      EN: 'Berlin',
      ES: 'Berlin',
    },
    readTime: { DE: '5 Min. Lesezeit', EN: '5 min read', ES: '5 min de lectura' },
    excerpt: {
      DE: 'Herbstmesse ganz im Zeichen der Nachhaltigkeit, mit rund 100 Ausstellern.',
      EN: 'Autumn fair fully dedicated to sustainability, with around 100 exhibitors.',
      ES: 'Feria de otoño dedicada por completo a la sostenibilidad, con cerca de 100 expositores.',
    },
    body: {
      DE: 'Bevor nachhaltige Marken in jedem Supermarkt zum Trend wurden, versammelte der Heldenmarkt bereits rund 100 Aussteller fairer Mode, bewusster Ernährung und sauberer Technologie unter dem Konzept eines 'temporären Kaufhauses' — mit kostenlosen Verkostungen und Vorträgen zu verantwortungsvollem Konsum.',
      EN: 'Before sustainable brands became a trend in every supermarket, Heldenmarkt was already bringing together around 100 exhibitors of ethical fashion, mindful food, and clean tech under the concept of a 'temporary department store' — a fair designed to discover new brands before they go mainstream, with free tastings and talks on responsible consumption all weekend long.',
      ES: 'Antes de que las marcas sostenibles fueran tendencia en cualquier supermercado, Heldenmarkt ya reunía cerca de 100 expositores de moda ética, alimentación consciente y tecnología limpia bajo el concepto de 'gran almacén temporal' — una feria pensada para descubrir marcas nuevas antes de que se vuelvan masivas, con degustaciones gratuitas y charlas sobre consumo responsable durante todo el fin de semana.',
    },
    tags: {
      DE: ['nachhaltiger Markt Berlin', 'Berlin'],
      EN: ['sustainability', 'Heldenmarkt ', 'History', 'exhibitors'],
      ES: ['Festival', 'Heldenmarkt ', 'Historia', 'marcas sostenibles],
    },
  },
   {
    id: 14,
    slug: 'Ökowerk',
    image: '/assets/img/news/okowerk.jpg',
    author: 'Anna Schulz',
    title: {
      DE: 'Ökowerk',
      EN: 'Ökowerk',
      ES: 'Ökowerk',
    },
    date: {
      DE: 'Grunewald',
      EN: 'Grunewald',
      ES: 'Grunewald',
    },
    readTime: { DE: '5 Min. Lesezeit', EN: '5 min read', ES: '5 min de lectura' },
    excerpt: {
      DE: 'Berlins ältestes Umweltbildungszentrum, mitten im Grunewald.',
      EN: 'Berlins oldest environmental education center, deep in the Grunewald forest.',
      ES: 'El centro de educación ambiental más antiguo de Berlín, en pleno bosque de Grunewald.',
    },
    body: {
      DE: 'Das Ökowerk wurde 1985 am Teufelssee, mitten im Grunewald, gegründet, untergebracht im ersten Wasserwerk Berlins, heute denkmalgeschützt. Der Verein pflegt 2,8 Hektar Natur mit verschiedenen Biotopen auf diesem hundertjährigen Industriegelände, wo man Ringelnattern, Frösche und Eidechsen beobachten und an Workshops zu naturnaher Gartengestaltung teilnehmen kann.',
      EN: "Ökowerk was founded in 1985 next to Lake Teufelssee, deep in the Grunewald forest, housed in what was Berlin's first water treatment plant, now protected as a historic monument. The association maintains 2.8 hectares of nature with different biotopes inside this century-old industrial site, where visitors can spot grass snakes, frogs, and lizards in their natural habitat, and take part in wild gardening workshops.",
      ES: 'El Ökowerk nació en 1985 junto al lago Teufelssee, en pleno bosque de Grunewald, instalado en la que fue la primera planta de tratamiento de agua de Berlín, hoy protegida como monumento histórico. La asociación mantiene 2,8 hectáreas de naturaleza con distintos biotopos dentro de este sitio industrial centenario, donde es posible ver de cerca serpientes de pasto, ranas y lagartijas en su hábitat natural, además de participar en talleres sobre jardinería silvestre.',
    },
    tags: {
      DE: ['Naturschutzzentrum Berlin', 'Workshops,', 'Ökowerk'],
      EN: ['Grunewald forest', 'Grunewald,', 'Ökowerk'],
      ES: ['Festival', 'Grunewald,', 'Historia', 'Ökowerk'],
    },
  },
   {
    id: 15,
    slug: 'BSR Second-Hand-Kaufhaus',
    image: '/assets/img/news/Routecanela_fac.png',
    author: 'Anna Schulz',
    title: {
      DE: 'Himmelbeet',
      EN: 'Himmelbeet',
      ES: 'Himmelbeet',
    },
    date: {
      DE: 'Wedding',
      EN: 'Wedding',
      ES: 'Wedding',
    },
    readTime: { DE: '5 Min. Lesezeit', EN: '5 min read', ES: '5 min de lectura' },
    excerpt: {
      DE: 'Second-Hand-Kaufhaus, betrieben von Berlins eigener Stadtreinigung.',
      EN: 'Secondhand store run by Berlins own city cleaning company.',
      ES: 'Tienda de segunda mano gestionada por la propia empresa de limpieza urbana de Berlín.',
    },
    body: {
      DE: 'Eine der kuriosesten Tatsachen Berlins: Dasselbe Unternehmen, das für die Stadtreinigung zuständig ist, betreibt auch dieses überdachte Second-Hand-Kaufhaus. Alles, was dort verkauft wird, stammt direkt von den eigenen Recyclinghöfen der BSR und wird zu symbolischen Preisen angeboten.',
      EN: "It's one of Berlin's most curious facts: the very company in charge of the city's street cleaning also runs this covered secondhand store, where items someone else discarded get a second life before ending up as trash. Everything sold there comes directly from BSR's own recycling points, checked over and put up for sale at symbolic prices.",
      ES: 'Es uno de los datos más curiosos de Berlín: la misma empresa encargada de la limpieza urbana de la ciudad gestiona esta tienda cubierta de segunda mano, donde los objetos que alguien más descartó encuentran una segunda vida antes de terminar en la basura. Todo lo que se vende ahí proviene directamente de los puntos de reciclaje de la propia BSR, revisado y puesto a la venta a precios simbólicos.',
    },
    tags: {
      DE: ['Laden', 'Second-Hand', 'BSR Kaufhaus'],
      EN: ['Schop', 'Second-Hand', 'BSR Kaufhaus'],
      ES: ['tienda', 'Segunda mano', 'BSR Kaufhaus'],
    },
  },
];

function resolveNews(source: NewsSource, lang: Lang): NewsItem {
  return {
    id: source.id,
    slug: source.slug,
    image: source.image,
    author: source.author,
    title: source.title[lang],
    date: source.date[lang],
    readTime: source.readTime[lang],
    excerpt: source.excerpt[lang],
    body: source.body[lang],
    tags: source.tags[lang],
  };
}

export function getNews(lang: Lang): NewsItem[] {
  return newsSources.map((source) => resolveNews(source, lang));
}

export function getNewsItem(slug: string, lang: Lang): NewsItem | undefined {
  const source = newsSources.find((n) => n.slug === slug);
  return source ? resolveNews(source, lang) : undefined;
}
