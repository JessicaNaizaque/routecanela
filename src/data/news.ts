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
    slug: 'bosque-encantado',
    image: '/assets/img/news/Eventos_spandau_Berlin_Fahrrad_Route.jpg',
    author: 'Laura Méndez',
    title: { DE: 'Verwunschener Wald', EN: 'Enchanted Forest', ES: 'Bosque Encantado' },
    date: {
      DE: '14. Juni 2024',
      EN: '14 June 2024',
      ES: '14 de junio de 2024',
    },
    readTime: { DE: '4 Min. Lesezeit', EN: '4 min read', ES: '4 min de lectura' },
    excerpt: {
      DE: 'Ein versteckter Waldweg in Spandau, von dem die meisten Berliner noch nie gehört haben.',
      EN: 'A hidden forest trail in Spandau that most Berliners have never heard of.',
      ES: 'Un sendero forestal escondido en Spandau del que la mayoría de los berlineses nunca ha oído hablar.',
    },
    body: {
      DE: 'Tief im westlichen Rand Berlins, jenseits der Backsteintürme der Spandauer Zitadelle, führt ein Pfad in einen Wald, der gänzlich von der Stadt losgelöst wirkt. Die Einheimischen nennen ihn den Bosque Encantado — den verwunschenen Wald — auch wenn du diesen Namen auf keiner Karte findest.\n\nDie Strecke verläuft die ersten zwei Kilometer entlang eines stillen Kanals, bevor sie in dichten Eichen- und Birkenwald ansteigt. Im Frühling färbt sich der Waldboden blau-weiß von Bärlauchblüten. Im Herbst leuchtet er bernsteinfarben. Beide Jahreszeiten sind einen eigenen Besuch wert.\n\nDer Weg ist unbefestigt, aber flach genug für gewöhnliche Cityräder. Die einzige Gefahr ist, die Zeit zu vergessen — auf dem Großteil der Runde gibt es keinen Handyempfang, was, je nach Sichtweise, entweder eine Warnung oder genau der Sinn der Sache ist.\n\nWir empfehlen, dies mit der Spandau-Route zu verbinden, die an der Zitadelle vorbeiführt und nahe der Uferpromenade der Altstadt endet. Plane einen ganzen Vormittag ein.',
      EN: "Deep in the western edge of Berlin, beyond the brick towers of the Spandau Citadel, a trail cuts into a forest that feels entirely removed from the city. Locals call it the Bosque Encantado — the enchanted forest — though you won't find that name on any map.\n\nThe route runs alongside a quiet canal for the first two kilometres before climbing into dense oak and birch. In spring, the forest floor turns blue-white with wild garlic flowers. In autumn, it glows amber. Both seasons are worth a separate visit.\n\nThe trail is unpaved but flat enough for standard city bikes. The only hazard is losing track of time — there's no phone signal for most of the loop, which, depending on your perspective, is either a warning or the whole point.\n\nWe recommend combining this with the Spandau route, which passes the Citadel and ends near the old town's waterfront. Give yourself a full morning.",
      ES: 'En el extremo occidental de Berlín, más allá de las torres de ladrillo de la Ciudadela de Spandau, un sendero se adentra en un bosque que parece completamente ajeno a la ciudad. Los locales lo llaman el Bosque Encantado — aunque no encontrarás ese nombre en ningún mapa.\n\nLa ruta discurre junto a un canal tranquilo durante los primeros dos kilómetros antes de ascender hacia un denso robledal y abedular. En primavera, el suelo del bosque se vuelve blanco azulado con las flores del ajo silvestre. En otoño, resplandece de color ámbar. Ambas estaciones merecen una visita aparte.\n\nEl sendero no está pavimentado, pero es lo bastante llano para bicicletas de ciudad normales. El único peligro es perder la noción del tiempo — no hay cobertura de móvil en la mayor parte del circuito, lo que, según se mire, es una advertencia o justo lo mejor de todo.\n\nRecomendamos combinarlo con la ruta de Spandau, que pasa por la Ciudadela y termina cerca del paseo fluvial del casco antiguo. Reserva toda una mañana.',
    },
    tags: {
      DE: ['Natur', 'Geheimtipps', 'Spandau'],
      EN: ['Nature', 'Hidden gems', 'Spandau'],
      ES: ['Naturaleza', 'Joyas escondidas', 'Spandau'],
    },
  },
  {
    id: 2,
    slug: 'cafe-sentidos',
    image:
      '/assets/img/events/Eventos_Neukolln_Fahrrad_Route_Restaurant.jpg',
    author: 'Tomás García',
    title: { DE: 'Café Sentidos', EN: 'Café Sentidos', ES: 'Café Sentidos' },
    date: {
      DE: '2. Juni 2024',
      EN: '2 June 2024',
      ES: '2 de junio de 2024',
    },
    readTime: { DE: '3 Min. Lesezeit', EN: '3 min read', ES: '3 min de lectura' },
    excerpt: {
      DE: 'Ein kleines Café in Neukölln, das sich klammheimlich zu einem der interessantesten Stopps Berlins auf zwei Rädern entwickelt hat.',
      EN: "A small café in Neukölln that has quietly become one of Berlin's most interesting stops on two wheels.",
      ES: 'Un pequeño café en Neukölln que se ha convertido discretamente en una de las paradas sobre dos ruedas más interesantes de Berlín.',
    },
    body: {
      DE: 'Über der Tür des Café Sentidos gibt es kein Schild. Du findest es so, wie die meisten es finden — eine bei Kaffee zugeflüsterte Empfehlung, ein Foto mit der Bildunterschrift „da musst du hin".\n\nDas Café liegt im Erdgeschoss eines umgebauten Gründerzeitgebäudes in einer Seitenstraße hinter dem Hermannplatz. Die Inhaberin, ursprünglich aus Oaxaca, röstet ihre eigenen Bohnen und backt vor 7 Uhr alles von Grund auf. Die Karte umfasst fünf Gerichte, die täglich wechseln und auf einer kleinen Tafel hinter der Espressomaschine stehen.\n\nWas es für Radfahrer besonders macht, ist der Hinterhof — ein versteckter Garten für etwa zwanzig Personen, beschattet von einem Feigenbaum, mit an die Wände geschraubten Fahrradhaken. Genau die Art Ort, die ein Viertel so lange wie möglich für sich behält.\n\nWir sind bei einer RouteCanela-Tour durch Neukölln darauf gestoßen und haben seitdem drei unserer Touren umgeleitet, um es einzubauen. Betrachte das als offizielle Warnung: An Wochenenden ist es ab 9 Uhr voll.',
      EN: 'There is no sign above the door at Café Sentidos. You find it the same way most people do — a recommendation whispered over coffee, a photo shared with the caption "you have to go".\n\nThe café occupies the ground floor of a converted Gründerzeit building on a side street behind Hermannplatz. The owner, originally from Oaxaca, roasts her own beans and bakes everything from scratch before 7am. The menu is five items, rotating daily, written on a small blackboard behind the espresso machine.\n\nWhat makes it special for cyclists is the courtyard at the back — a hidden garden that fits about twenty people, shaded by a fig tree, with bike hooks bolted to the walls. It is exactly the kind of place a neighbourhood keeps secret for as long as possible.\n\nWe stumbled across it on a RouteCanela ride through Neukölln and have since rerouted three of our circuits to include it. Consider this your official warning: it gets crowded by 9am on weekends.',
      ES: 'No hay ningún cartel sobre la puerta del Café Sentidos. Lo encuentras igual que la mayoría — una recomendación susurrada mientras tomas un café, una foto compartida con el pie «tienes que ir».\n\nEl café ocupa la planta baja de un edificio Gründerzeit reformado, en una calle lateral detrás de Hermannplatz. La dueña, originaria de Oaxaca, tuesta sus propios granos y hornea todo desde cero antes de las 7 de la mañana. La carta tiene cinco platos, que rotan a diario, escritos en una pequeña pizarra detrás de la máquina de espresso.\n\nLo que lo hace especial para los ciclistas es el patio trasero — un jardín escondido en el que caben unas veinte personas, a la sombra de una higuera, con ganchos para bicicletas atornillados a las paredes. Es exactamente el tipo de lugar que un barrio guarda en secreto el mayor tiempo posible.\n\nLo descubrimos en una ruta de RouteCanela por Neukölln y desde entonces hemos modificado tres de nuestros circuitos para incluirlo. Considera esto tu advertencia oficial: los fines de semana se llena a las 9 de la mañana.',
    },
    tags: {
      DE: ['Essen', 'Neukölln', 'Kaffee'],
      EN: ['Food', 'Neukölln', 'Coffee'],
      ES: ['Gastronomía', 'Neukölln', 'Café'],
    },
  },
  {
    id: 3,
    slug: 'jardin-secreto',
    image: '/assets/img/events/Eventos_Kreuzberg_Fahrrad_Route.jpg',
    author: 'Anna Schulz',
    title: { DE: 'Geheimer Garten', EN: 'Secret Garden', ES: 'Jardín Secreto' },
    date: {
      DE: '20. Mai 2024',
      EN: '20 May 2024',
      ES: '20 de mayo de 2024',
    },
    readTime: { DE: '5 Min. Lesezeit', EN: '5 min read', ES: '5 min de lectura' },
    excerpt: {
      DE: 'Ein Gemeinschaftsgarten in Kreuzberg, der vollständig von Anwohnern angelegt wurde — und von den Radfahrern, die halfen, die Erde herbeizuschaffen.',
      EN: 'A community garden in Kreuzberg built entirely by residents — and the cyclists who helped carry the soil.',
      ES: 'Un huerto comunitario en Kreuzberg construido enteramente por los vecinos — y por los ciclistas que ayudaron a acarrear la tierra.',
    },
    body: {
      DE: 'Es begann mit einer Frage in einem Nachbarschaftsforum: „Will jemand das leere Grundstück an der Graefestraße in etwas Grünes verwandeln?" Vierzig Leute kamen am darauffolgenden Samstag. Sechs Monate später hat der Jardín Secreto Hochbeete, eine Werkzeugbibliothek, eine kleine Bühne für Veranstaltungen und eine Warteliste für Parzellen.\n\nWas der Forumsbeitrag nicht erwähnte — und was zu einer der schönsten Geschichten des Gartens geworden ist —, ist, dass die ersten 200 kg Komposterde fast vollständig per Fahrrad transportiert wurden. Eine WhatsApp-Gruppe koordinierte über drei Tage Lastenrad-Staffeln, mit Fahrern, die von so weit her wie Mitte und Tempelhof kamen.\n\nDer Garten ist für Besucher dienstags bis sonntags ab 10 Uhr geöffnet. Der Rundgang ist kostenlos, und mittwochvormittags sind Freiwillige stets willkommen. Der Kräuterbereich am nördlichen Zaun ist gerade besonders beeindruckend — Rosmarin, Thymian und drei Minzsorten, aus denen die Gärtner Tee für alle machen, die vorbeischauen.\n\nFür Radfahrer ist der Garten ein hervorragender Zwischenstopp auf der Kreuzberg-Route. Schließ am Tor ab und frag, welcher Freiwillige gerade Dienst hat — sie alle haben gute Tipps für den Rest der Tour.',
      EN: 'It started as a question posted on a neighbourhood forum: "Does anyone want to turn the empty lot on Graefestraße into something green?" Forty people showed up the following Saturday. Six months later, the Jardín Secreto has raised beds, a tool library, a small stage for events, and a waiting list for plot allocations.\n\nWhat the forum post didn\'t mention — and what has become one of the garden\'s best stories — is that the first 200kg of compost soil was transported almost entirely by bicycle. A WhatsApp group coordinated cargo bike relays across three days, with riders coming from as far as Mitte and Tempelhof.\n\nThe garden is open to visitors Tuesday to Sunday from 10am. There\'s no charge to walk through, and volunteers are always welcome on Wednesday mornings. The herb section near the north fence is particularly impressive right now — rosemary, thyme, and three varieties of mint that the gardeners use to make tea for anyone who stops by.\n\nFor cyclists, the garden makes an excellent midpoint on the Kreuzberg route. Lock up at the gate and ask for whichever volunteer is on duty — they all have good recommendations for the rest of the ride.',
      ES: 'Empezó como una pregunta publicada en un foro vecinal: «¿Alguien quiere convertir el solar vacío de Graefestraße en algo verde?». Cuarenta personas se presentaron el sábado siguiente. Seis meses después, el Jardín Secreto tiene bancales elevados, una biblioteca de herramientas, un pequeño escenario para eventos y una lista de espera para asignar parcelas.\n\nLo que el mensaje del foro no mencionaba — y que se ha convertido en una de las mejores historias del jardín — es que los primeros 200 kg de tierra de compost se transportaron casi por completo en bicicleta. Un grupo de WhatsApp coordinó relevos de bicicletas de carga durante tres días, con ciclistas que venían desde lugares tan lejanos como Mitte y Tempelhof.\n\nEl jardín está abierto a los visitantes de martes a domingo desde las 10 de la mañana. La entrada es gratuita y los voluntarios son siempre bienvenidos los miércoles por la mañana. La zona de hierbas junto a la valla norte está ahora especialmente impresionante — romero, tomillo y tres variedades de menta que los jardineros usan para hacer té a cualquiera que se pase por allí.\n\nPara los ciclistas, el jardín es un excelente punto intermedio en la ruta de Kreuzberg. Ata la bici en la entrada y pregunta por el voluntario que esté de turno — todos tienen buenas recomendaciones para el resto del recorrido.',
    },
    tags: {
      DE: ['Gemeinschaft', 'Kreuzberg', 'Grünflächen'],
      EN: ['Community', 'Kreuzberg', 'Green spaces'],
      ES: ['Comunidad', 'Kreuzberg', 'Zonas verdes'],
    },
  },
  {
    id: 4,
    slug: 'mercado-artesanal',
    image:
      '/assets/img/events/Eventos_Steglitz_Fahrrad_Route_Berlin.jpg',
    author: 'Laura Méndez',
    title: { DE: 'Kunsthandwerksmarkt', EN: 'Artisan Market', ES: 'Mercado Artesanal' },
    date: {
      DE: '8. Mai 2024',
      EN: '8 May 2024',
      ES: '8 de mayo de 2024',
    },
    readTime: { DE: '3 Min. Lesezeit', EN: '3 min read', ES: '3 min de lectura' },
    excerpt: {
      DE: 'An jedem ersten Sonntag im Monat veranstaltet Steglitz einen Handwerksmarkt, der Macher aus der ganzen Region anzieht.',
      EN: 'Every first Sunday of the month, Steglitz hosts a craft market that draws makers from across the region.',
      ES: 'Cada primer domingo de mes, Steglitz acoge un mercado artesanal que atrae a creadores de toda la región.',
    },
    body: {
      DE: 'Der Steglitzer Handwerksmarkt findet seit elf Jahren am ersten Sonntag jedes Monats statt, hat aber nie ganz den Sprung in den Touristenkreislauf geschafft — genau deshalb ist er so gut geblieben.\n\nRund 60 Macher bauen auf der Esplanade neben dem Stadtpark auf. Du findest Keramik aus Ateliers in Zehlendorf, Holzarbeiten von einem Tischler in Spandau, Textilien aus einem Kollektiv in Wedding und Eingemachtes aus Obst, das in Schrebergärten der ganzen Stadt gewachsen ist. Die Preise sind fair. Die Macher reden gern über ihre Arbeit.\n\nDer Markt läuft von 10 bis 17 Uhr. Komm mit dem Rad — am Parkeingang gibt es einen großen eigenen Abstellbereich — und verbinde den Besuch mit einer Runde auf der Steglitz-Route, die durch die formaleren Gartenbereiche des Parks führt, bevor es Richtung Schloßpark Lichterfelde geht.',
      EN: "The Steglitz craft market has operated on the first Sunday of every month for eleven years, but it has never quite broken through to the tourist circuit — which is exactly why it remains so good.\n\nAround 60 makers set up on the esplanade beside the Stadtpark. You'll find ceramics thrown in studios in Zehlendorf, woodwork from a carpenter in Spandau, textiles woven in a collective in Wedding, and preserves made from fruit grown in allotment gardens across the city. Prices are fair. The makers want to talk about their work.\n\nThe market runs 10am to 5pm. Arrive by bike — there's a large dedicated parking area at the park entrance — and combine the visit with a loop through the Steglitz route, which passes through the park's more formal garden sections before heading toward the Schloßpark Lichterfelde.",
      ES: 'El mercado artesanal de Steglitz se celebra el primer domingo de cada mes desde hace once años, pero nunca ha llegado del todo al circuito turístico — y precisamente por eso sigue siendo tan bueno.\n\nUnos 60 creadores se instalan en la explanada junto al Stadtpark. Encontrarás cerámica torneada en estudios de Zehlendorf, trabajos en madera de un carpintero de Spandau, textiles tejidos en un colectivo de Wedding y conservas hechas con fruta cultivada en huertos urbanos de toda la ciudad. Los precios son justos. Los creadores tienen ganas de hablar de su trabajo.\n\nEl mercado abre de 10 a 17 h. Llega en bici — hay una amplia zona de aparcamiento habilitada en la entrada del parque — y combina la visita con una vuelta por la ruta de Steglitz, que atraviesa las secciones de jardín más formales del parque antes de dirigirse hacia el Schloßpark Lichterfelde.',
    },
    tags: {
      DE: ['Markt', 'Steglitz', 'Kunsthandwerk'],
      EN: ['Market', 'Steglitz', 'Artisan'],
      ES: ['Mercado', 'Steglitz', 'Artesanía'],
    },
  },
  {
    id: 5,
    slug: 'museo-historia-natural',
    image:
      '/assets/img/events/Eventos_Tempelhof_Berlin_Fahrrad_Route.jpg',
    author: 'Tomás García',
    title: {
      DE: 'Naturkundemuseum',
      EN: 'Natural History Museum',
      ES: 'Museo de Historia Natural',
    },
    date: {
      DE: '29. April 2024',
      EN: '29 April 2024',
      ES: '29 de abril de 2024',
    },
    readTime: { DE: '4 Min. Lesezeit', EN: '4 min read', ES: '4 min de lectura' },
    excerpt: {
      DE: 'Das Naturkundemuseum ist eine der am meisten unterschätzten Institutionen Berlins — und am besten mit dem Fahrrad zu erreichen.',
      EN: "The Natural History Museum is one of Berlin's most underrated institutions — and it's best reached by bike.",
      ES: 'El Museo de Historia Natural es una de las instituciones más infravaloradas de Berlín — y se llega mejor en bicicleta.',
    },
    body: {
      DE: 'Das Museum für Naturkunde steht an der Invalidenstraße in einem Backsteingebäude, das von außen aussieht, als beherberge es Verwaltungsbüros. Drinnen befindet sich eine der außergewöhnlichsten naturkundlichen Sammlungen der Welt — darunter das größte montierte Dinosaurierskelett der Welt, ein 150 Millionen Jahre alter Brachiosaurus von 13,27 Metern Höhe.\n\nFür Radfahrer ist die Anfahrt über die Invalidenstraße sowohl von Mitte als auch von Wedding angenehm und direkt. Das Museum hat Fahrradständer vor dem Haupteingang, und die umliegenden Straßen sind ruhig genug für eine entspannte Fahrt.\n\nDie Sammlung ist in Paläontologie und Meteoriten am stärksten, doch der Saal der Biodiversität — eine deckenhohe Glasvitrine mit Präparaten aus aller Welt — ist auf eine Weise wahrhaft bewegend, die sich kaum beschreiben lässt, ohne sie gesehen zu haben.\n\nDer Eintritt kostet 8 €, Ermäßigungen sind möglich. Montags geschlossen. Für die geringsten Menschenmengen empfehlen wir einen Besuch am Dienstag oder Mittwoch.',
      EN: "The Museum für Naturkunde sits on Invalidenstraße in a red-brick building that looks, from the outside, like it might contain administrative offices. Inside is one of the most extraordinary natural history collections in the world — including the world's largest mounted dinosaur skeleton, a 150-million-year-old Brachiosaurus at 13.27 metres tall.\n\nFor cyclists, the approach via Invalidenstraße is pleasant and direct from both Mitte and Wedding. The museum has bike stands outside the main entrance, and the surrounding streets are quiet enough for a relaxed ride.\n\nThe collection is strongest in palaeontology and meteorites, but the hall of biodiversity — a floor-to-ceiling glass cabinet of taxidermy from around the world — is genuinely moving in a way that is difficult to articulate without seeing it.\n\nAdmission is €8, concessions available. Closed Mondays. We recommend a Tuesday or Wednesday visit for the smallest crowds.",
      ES: 'El Museum für Naturkunde se encuentra en la Invalidenstraße, en un edificio de ladrillo rojo que, por fuera, parece albergar oficinas administrativas. Dentro hay una de las colecciones de historia natural más extraordinarias del mundo — incluido el mayor esqueleto de dinosaurio montado del mundo, un Brachiosaurus de 150 millones de años y 13,27 metros de altura.\n\nPara los ciclistas, la llegada por la Invalidenstraße es agradable y directa tanto desde Mitte como desde Wedding. El museo tiene soportes para bicicletas frente a la entrada principal y las calles de alrededor son lo bastante tranquilas para un paseo relajado.\n\nLa colección destaca sobre todo en paleontología y meteoritos, pero la sala de la biodiversidad — una vitrina de cristal del suelo al techo con taxidermia de todo el mundo — resulta genuinamente conmovedora de un modo difícil de expresar sin haberla visto.\n\nLa entrada cuesta 8 €, con descuentos disponibles. Cierra los lunes. Recomendamos visitarlo un martes o miércoles para encontrar menos gente.',
    },
    tags: {
      DE: ['Museum', 'Mitte', 'Geschichte'],
      EN: ['Museum', 'Mitte', 'History'],
      ES: ['Museo', 'Mitte', 'Historia'],
    },
  },
  {
    id: 6,
    slug: 'restaurante-ecologico',
    image: '/assets/img/events/Eventos_Tiergarten_Fahrrad_Route.jpg',
    author: 'Anna Schulz',
    title: { DE: 'Öko-Restaurant', EN: 'Eco Restaurant', ES: 'Restaurante Ecológico' },
    date: {
      DE: '15. April 2024',
      EN: '15 April 2024',
      ES: '15 de abril de 2024',
    },
    readTime: { DE: '3 Min. Lesezeit', EN: '3 min read', ES: '3 min de lectura' },
    excerpt: {
      DE: 'Ein Zero-Waste-Restaurant in Mitte, das alles im Umkreis von 80 km der Stadt bezieht.',
      EN: 'A zero-waste restaurant in Mitte that sources everything within 80km of the city.',
      ES: 'Un restaurante de residuo cero en Mitte que obtiene todo en un radio de 80 km de la ciudad.',
    },
    body: {
      DE: 'Wenn auf der Karte „regional" steht, ist das auch so gemeint. Jede Zutat in der Küche des Ernte stammt aus einem Umkreis von 80 Kilometern um die Berliner Innenstadt — Getreide von Brandenburger Höfen, Milchprodukte von einer kleinen Kooperative im Havelland, Gemüse aus Gärtnereien im Spreewald.\n\nDie Karte wechselt wöchentlich, manchmal täglich, und wird auf Papier geschrieben statt gedruckt — eine bewusste Entscheidung, um Abfall durch Nachdrucke zu vermeiden. Die Weinkarte führt ausschließlich deutsche und österreichische biodynamische Erzeuger. Das Brot kommt von einem Sauerteigbäcker in Friedrichshain, der per Lastenrad liefert.\n\nEs gibt nur 28 Plätze. Für das Abendessen ist eine Reservierung unerlässlich; mittags gilt nur Walk-in, bis alles voll ist (meist gegen 12:30). Das Restaurant ist ein natürlicher Endpunkt der Radroute Berlin Mitte — es liegt zwei Minuten vom Tiergarten entfernt, und das Personal empfiehlt gern weitere lokale Stopps, wenn du nach dem Essen weiter erkunden möchtest.',
      EN: 'When the menu says local, it means it. Every ingredient in the kitchen at Ernte comes from within 80 kilometres of Berlin city centre — grains from Brandenburg farms, dairy from a small cooperative in Havelland, vegetables from market gardens in the Spreewald.\n\nThe menu changes weekly, sometimes daily, and is written on paper rather than printed — a deliberate choice to avoid waste from reprinting. The wine list is exclusively German and Austrian biodynamic producers. The bread comes from a sourdough baker in Friedrichshain who delivers by cargo bike.\n\nSeating is limited to 28 covers. Bookings are essential for dinner; lunch is walk-in only until they\'re full (usually by 12:30). The restaurant is a natural endpoint to the Berlin Mitte cycling route — it sits two minutes from the Tiergarten, and the staff will recommend other local stops if you want to keep exploring after eating.',
      ES: 'Cuando la carta dice «local», lo dice en serio. Cada ingrediente de la cocina de Ernte procede de un radio de 80 kilómetros del centro de Berlín — cereales de granjas de Brandeburgo, lácteos de una pequeña cooperativa de Havelland, verduras de huertas del Spreewald.\n\nLa carta cambia cada semana, a veces cada día, y se escribe a mano en papel en lugar de imprimirse — una decisión deliberada para evitar el desperdicio de reimprimir. La carta de vinos es exclusivamente de productores biodinámicos alemanes y austriacos. El pan viene de un panadero de masa madre de Friedrichshain que lo entrega en bicicleta de carga.\n\nSolo hay 28 cubiertos. Para la cena es imprescindible reservar; al mediodía solo se admite entrada sin reserva hasta completar el aforo (normalmente hacia las 12:30). El restaurante es un final natural para la ruta ciclista de Berlin Mitte — está a dos minutos del Tiergarten, y el personal te recomendará otras paradas locales si quieres seguir explorando después de comer.',
    },
    tags: {
      DE: ['Essen', 'Nachhaltigkeit', 'Mitte'],
      EN: ['Food', 'Sustainability', 'Mitte'],
      ES: ['Gastronomía', 'Sostenibilidad', 'Mitte'],
    },
  },
  {
    id: 7,
    slug: 'centro-cultural',
    image: '/assets/img/events/Eventos_Zehlendorf_Fahrrad_Route.jpg',
    author: 'Laura Méndez',
    title: { DE: 'Kulturzentrum', EN: 'Cultural Centre', ES: 'Centro Cultural' },
    date: {
      DE: '1. April 2024',
      EN: '1 April 2024',
      ES: '1 de abril de 2024',
    },
    readTime: { DE: '4 Min. Lesezeit', EN: '4 min read', ES: '4 min de lectura' },
    excerpt: {
      DE: 'Ein ehemaliges Umspannwerk in Zehlendorf, verwandelt in einen der ambitioniertesten Gemeinschafts-Kunsträume der Stadt.',
      EN: "A former power station in Zehlendorf turned into one of the city's most ambitious community arts spaces.",
      ES: 'Una antigua central eléctrica en Zehlendorf convertida en uno de los espacios artísticos comunitarios más ambiciosos de la ciudad.',
    },
    body: {
      DE: 'Das Kulturwerk Zehlendorf ist erst seit gut zwei Jahren geöffnet, fühlt sich aber an, als wäre es schon immer hier gewesen — die Art Ort, die ein Viertel braucht, ohne es zu wissen, bis es ihn gibt.\n\nDas Gebäude ist ein ehemaliges Umspannwerk von 1912, dessen dicke Backsteinmauern und hohe Fenster sich perfekt für den Galerieraum eignen, der daraus geworden ist. Das Programm reicht von Ausstellungen zeitgenössischer Kunst über Filmvorführungen, Keramikworkshops und Sprachtandems bis zu einem monatlichen Vinyl-Hörabend, der Sammler aus der ganzen Stadt anzieht.\n\nDas Zentrum wird von einer Stiftung mit einem vielfältigen Vorstand aus Anwohnern, Unternehmen und Künstlern geführt — das zeigt sich im Programm. Es gibt das ehrliche Bemühen, die verschiedenen Communities des Viertels widerzuspiegeln, statt nur eine Zielgruppe zu bedienen.\n\nMit dem Rad braucht man vom Berliner Zentrum etwa 45 Minuten zum Kulturwerk, über die Waldwege des Grunewalds. Es lohnt sich, einen ganzen Nachmittag drumherum zu planen: durch die Bäume hinausradeln, zwei Stunden im Zentrum verbringen und zurückfahren, während sich das Licht wandelt.',
      EN: "The Kulturwerk Zehlendorf has been open for just over two years, but it feels like it has always been here — the kind of place that a neighbourhood needs without quite knowing it until it arrives.\n\nThe building is a former electrical substation, built in 1912, its thick brick walls and tall windows perfectly suited to the gallery space it has become. The programme runs from contemporary art exhibitions to film screenings, ceramics workshops, language exchanges, and a monthly vinyl listening night that draws collectors from across the city.\n\nThe centre is run by a foundation with a diverse board of local residents, businesses, and artists — which shows in the programming. There's a genuine effort to reflect the neighbourhood's different communities rather than serve a single demographic.\n\nCycling to the Kulturwerk from central Berlin takes about 45 minutes via the forest paths of the Grunewald. It's worth building an afternoon around: ride out through the trees, spend two hours at the centre, and ride back as the light changes.",
      ES: 'El Kulturwerk Zehlendorf lleva abierto poco más de dos años, pero parece que siempre ha estado aquí — esa clase de lugar que un barrio necesita sin saberlo del todo hasta que llega.\n\nEl edificio es una antigua subestación eléctrica, construida en 1912, cuyos gruesos muros de ladrillo y altos ventanales encajan a la perfección con el espacio de galería en que se ha convertido. La programación va desde exposiciones de arte contemporáneo hasta proyecciones de cine, talleres de cerámica, intercambios de idiomas y una noche mensual de escucha de vinilos que atrae a coleccionistas de toda la ciudad.\n\nEl centro lo gestiona una fundación con un patronato diverso de vecinos, negocios y artistas — algo que se nota en la programación. Hay un esfuerzo genuino por reflejar las distintas comunidades del barrio en lugar de servir a un único perfil.\n\nIr en bici al Kulturwerk desde el centro de Berlín lleva unos 45 minutos por los senderos forestales del Grunewald. Merece la pena organizar una tarde en torno a ello: pedalear entre los árboles, pasar dos horas en el centro y volver mientras cambia la luz.',
    },
    tags: {
      DE: ['Kultur', 'Zehlendorf', 'Kunst'],
      EN: ['Culture', 'Zehlendorf', 'Arts'],
      ES: ['Cultura', 'Zehlendorf', 'Arte'],
    },
  },
  {
    id: 8,
    slug: 'parque-acuatico',
    image: '/assets/img/events/Eventos_Mitte_Berlin_Fahrrad_Route.jpg',
    author: 'Tomás García',
    title: { DE: 'Wasserpark', EN: 'Water Park', ES: 'Parque Acuático' },
    date: {
      DE: '18. März 2024',
      EN: '18 March 2024',
      ES: '18 de marzo de 2024',
    },
    readTime: { DE: '3 Min. Lesezeit', EN: '3 min read', ES: '3 min de lectura' },
    excerpt: {
      DE: 'Berlins Freibadsaison beginnt früher als du denkst — hier erfährst du, wohin und wie du hinkommst.',
      EN: "Berlin's open-air swimming season starts earlier than you think — here's where to go and how to get there.",
      ES: 'La temporada de baño al aire libre de Berlín empieza antes de lo que crees — aquí te contamos adónde ir y cómo llegar.',
    },
    body: {
      DE: 'Berliner nehmen das Freibaden ernst. Die Stadt hat 59 Freibadebereiche — Seen, Flüsse, Strandbäder — und die Saison beginnt offiziell Ende Mai, auch wenn Stammgäste schon Wochen früher im Wasser sind.\n\nFür Radfahrer ist die zugänglichste Kombination das Strandbad Wannsee in Zehlendorf, 35 Minuten vom Stadtzentrum durch den Grunewald. Es ist derselbe Strand, an dem seit 1907 Generationen von Berlinern baden, und er bleibt einer der schönsten Stadtstrände Europas — eine lange Sandsichel an einem Gletschersee, gesäumt von Kiefern.\n\nDer Orankesee in Lichtenberg ist kleiner, ruhiger und völlig abseits des Touristenkreislaufs — 20 Minuten mit dem Rad von Friedrichshain durch Wohnstraßen. Es gibt eine Liegewiese, eine kleine Sprungplattform und einen Kiosk, der genau drei Dinge verkauft: Eis, Radler und Bratwurst.\n\nJedes Frühjahr veröffentlichen wir einen vollständigen Guide zu Berlins mit dem Rad erreichbaren Badestellen. Abonniere den Newsletter, um ihn zu erhalten, sobald er fertig ist.',
      EN: "Berliners are serious about open-air swimming. The city has 59 outdoor swimming areas — lakes, rivers, lidos — and the season officially opens in late May, though regulars are in the water weeks before.\n\nFor cyclists, the most accessible combination is the Wannsee bathing beach in Zehlendorf, a 35-minute ride from the city centre through the Grunewald forest. It's the same beach where generations of Berliners have swum since 1907, and it remains one of the finest urban beaches in Europe — a long crescent of sand on a glacial lake, backed by pine trees.\n\nThe Orankesee in Lichtenberg is smaller, quieter, and completely off the tourist circuit — a 20-minute cycle from Friedrichshain through residential streets. It has a lawn, a small dive platform, and a kiosk that sells exactly three things: ice cream, radler, and bratwurst.\n\nWe publish a full guide to Berlin's cycling-accessible swimming spots each spring. Sign up for the newsletter to receive it when it's ready.",
      ES: 'Los berlineses se toman en serio el baño al aire libre. La ciudad cuenta con 59 zonas de baño exteriores — lagos, ríos, balnearios — y la temporada abre oficialmente a finales de mayo, aunque los habituales se meten al agua semanas antes.\n\nPara los ciclistas, la combinación más accesible es la playa de baño del Wannsee, en Zehlendorf, a 35 minutos del centro a través del bosque de Grunewald. Es la misma playa donde generaciones de berlineses se han bañado desde 1907, y sigue siendo una de las mejores playas urbanas de Europa — una larga media luna de arena en un lago glaciar, rodeada de pinos.\n\nEl Orankesee, en Lichtenberg, es más pequeño, más tranquilo y está completamente fuera del circuito turístico — a 20 minutos en bici desde Friedrichshain por calles residenciales. Tiene césped, una pequeña plataforma de salto y un quiosco que vende exactamente tres cosas: helado, radler y bratwurst.\n\nCada primavera publicamos una guía completa de las zonas de baño de Berlín accesibles en bici. Suscríbete al boletín para recibirla en cuanto esté lista.',
    },
    tags: {
      DE: ['Schwimmen', 'Sommer', 'Seen'],
      EN: ['Swimming', 'Summer', 'Lakes'],
      ES: ['Natación', 'Verano', 'Lagos'],
    },
  },
  {
    id: 9,
    slug: 'parque-aventuras-medieval',
    image: '/assets/img/news/Eventos_spandau_Berlin_Fahrrad_Route.jpg',
    author: 'Anna Schulz',
    title: {
      DE: 'Mittelalterlicher Abenteuerpark',
      EN: 'Medieval Adventure Park',
      ES: 'Parque de Aventuras Medieval',
    },
    date: {
      DE: '5. März 2024',
      EN: '5 March 2024',
      ES: '5 de marzo de 2024',
    },
    readTime: { DE: '5 Min. Lesezeit', EN: '5 min read', ES: '5 min de lectura' },
    excerpt: {
      DE: 'Das jährliche Mittelalterfest der Spandauer Zitadelle ist eines der spektakulärsten Wochenenden Berlins — und Radfahrer haben die beste Anfahrt.',
      EN: "The Spandau Citadel's annual medieval festival is one of Berlin's most spectacular weekends — and cyclists get the best approach.",
      ES: 'El festival medieval anual de la Ciudadela de Spandau es uno de los fines de semana más espectaculares de Berlín — y los ciclistas tienen la mejor llegada.',
    },
    body: {
      DE: 'Jeden Juni wird die Spandauer Zitadelle — eine Renaissancefestung, die seit 1559 am Zusammenfluss von Havel und Spree steht — von einem der größten Mittelalterfeste Deutschlands eingenommen. Ritter, Falkner, Waffenschmiede, Feuerjongleure und Markthändler füllen drei Tage lang die Höfe und ziehen über das Wochenende rund 80.000 Besucher an.\n\nFür Radfahrer ist die Anfahrt eine der großen Berliner Touren: westwärts entlang der Spree, durch die Wälder Spandaus und über die Zugbrücke in die Festung selbst. Die Route umgeht die Staus, die die Anfahrt mit dem Auto zur Qual machen. Mehrere Hundert Radfahrer kommen jedes Jahr auf diese Weise.\n\nDas Fest läuft von Freitagabend bis Sonntag, das Ritterturnier ist für Samstag- und Sonntagnachmittag angesetzt. Zum Abendprogramm gehören Feuershows und ein mittelalterliches Bankett (separat buchbar). Tickets: 14 € / 9 € ermäßigt / Kinder unter 12 frei.\n\nPlane an, bis 10 Uhr da zu sein, um die Handwerkswerkstätten in vollem Gange zu erleben. Gegen Mittag sind die Höfe ausgelastet, und die Atmosphäre — diese besondere Mischung aus Spektakel und echtem Handwerk — verdient deine volle Aufmerksamkeit.',
      EN: "Every June, the Spandau Citadel — a Renaissance fortress that has stood at the confluence of the Havel and Spree rivers since 1559 — is taken over by one of Germany's largest medieval festivals. Knights, falconers, armourers, fire jugglers, and market traders fill the courtyards for three days, drawing around 80,000 visitors over the weekend.\n\nFor cyclists, the approach is one of the great Berlin rides: west along the Spree, through the forests of Spandau, and across the drawbridge into the fortress itself. The route avoids the traffic congestion that makes driving to the festival a misery. Several hundred cyclists arrive this way each year.\n\nThe festival runs Friday evening to Sunday, with the jousting tournament scheduled for both Saturday and Sunday afternoons. Evening programmes include fire shows and a medieval banquet (bookable separately). Tickets: €14 / €9 concession / children under 12 free.\n\nPlan to arrive by 10am to see the artisan workshops in full swing. By midday the courtyards are at capacity, and the atmosphere — that particular mix of spectacle and genuine craft — is something worth giving your full attention.",
      ES: 'Cada junio, la Ciudadela de Spandau — una fortaleza renacentista que se alza en la confluencia de los ríos Havel y Spree desde 1559 — es tomada por uno de los mayores festivales medievales de Alemania. Caballeros, cetreros, armeros, malabaristas de fuego y comerciantes llenan los patios durante tres días, atrayendo a unos 80.000 visitantes a lo largo del fin de semana.\n\nPara los ciclistas, la llegada es uno de los grandes recorridos de Berlín: hacia el oeste siguiendo el Spree, a través de los bosques de Spandau y cruzando el puente levadizo hasta la fortaleza misma. La ruta evita los atascos que hacen de ir en coche al festival una tortura. Cada año llegan así varios cientos de ciclistas.\n\nEl festival va del viernes por la tarde al domingo, con el torneo de justas programado para las tardes del sábado y del domingo. El programa nocturno incluye espectáculos de fuego y un banquete medieval (reservable aparte). Entradas: 14 € / 9 € reducida / niños menores de 12 años gratis.\n\nPlanea llegar hacia las 10 de la mañana para ver los talleres artesanales en plena actividad. Hacia el mediodía los patios alcanzan su aforo, y el ambiente — esa mezcla particular de espectáculo y artesanía auténtica — merece toda tu atención.',
    },
    tags: {
      DE: ['Festival', 'Spandau', 'Geschichte'],
      EN: ['Festival', 'Spandau', 'History'],
      ES: ['Festival', 'Spandau', 'Historia'],
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
