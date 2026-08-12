import { useEffect, type ReactNode } from 'react';

const STAND_DATE = new Intl.DateTimeFormat('de-DE', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
}).format(new Date());

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold text-stone-800">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-stone-600">
        {children}
      </div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-1">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-400/80" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * The Impressum is a German legal requirement (§ 5 DDG) and must always be
 * shown in German, regardless of the site's currently selected language.
 * The "Stand" date reflects the date the visitor opened the page.
 */
export function ImpressumPage() {
  useEffect(() => {
    document.title = 'Impressum · RouteCanela';
  }, []);

  return (
    <div className="px-6 pb-24 pt-32 md:px-12 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <h1
          className="text-4xl font-normal tracking-[-0.03em] text-stone-800 md:text-5xl"
        >
          Impressum
        </h1>
        <p className="mt-4 text-sm text-stone-500">Stand: {STAND_DATE}</p>

        <Section title="1. Anbieterkennung">
          <p>Angaben gemäß § 5 des Digitale-Dienste-Gesetzes (DDG):</p>
          <p>
            routecanela UG
            <br />
            RembrandStraße
            <br />
            12157 Berlin
            <br />
            Deutschland
          </p>
        </Section>

        <Section title="2. Kontakt">
          <p>Telefon: [+49 176 29788978]</p>
          <p>E-Mail: routecanela@gmail.com</p>
        </Section>

        <Section title="3. Vertreten durch">
          <p>Gustavo Guevara Urregio CEO</p>
        </Section>

        <Section title="4. Registereintrag">
          <p>Handelsregister: Amtsgericht Charlottenburg, HRB [ in Arbeit ]</p>
        </Section>

        <Section title="5. Umsatzsteuer-ID">
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
          </p>
          <p>DE [in Arbeit ]</p>
        </Section>

        <Section title="6. Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
          <p>[Name des Geschäftsführers oder Content-Verantwortlichen]</p>
          <p>rembrandStraße , 12157 Berlin</p>
        </Section>

        <h2 className="mt-16 text-2xl font-normal tracking-[-0.02em] text-stone-800">
          Haftungsausschluss (Disclaimer)
        </h2>

        <Section title="1. Haftung für eigene Inhalte">
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
            Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine
            Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene
            Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
            bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte
            oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
            forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </Section>

        <Section title="2. Haftung für Inhalte Dritter">
          <p>
            Wir übernehmen keinerlei Verantwortung oder Haftung für Inhalte, die von Dritten
            (z. B. Nutzer, Veranstalter, Partner-Locations) auf unserer Plattform
            bereitgestellt oder eingestellt werden. Die Verantwortung für die Richtigkeit,
            Vollständigkeit und Rechtmäßigkeit dieser Inhalte liegt ausschließlich beim
            jeweiligen Dritten.
          </p>
        </Section>

        <Section title="3. Verantwortung des Nutzers und Nutzung der App">
          <p>
            Die Nutzung unserer Applikation und der darauf angebotenen Funktionen erfolgt auf
            eigene Gefahr des Nutzers. Wir übernehmen keine Haftung für:
          </p>
          <List
            items={[
              'Fehler oder Schäden, die durch die Nutzung der Applikation durch den Nutzer entstehen',
              'Unfälle oder Zwischenfälle, die im Zusammenhang mit der Nutzung der Applikation oder der Teilnahme an über die App vermittelten Aktivitäten stehen',
              'Entscheidungen und Handlungen, die der Nutzer auf Grundlage der in der App bereitgestellten Informationen trifft',
            ]}
          />
          <p>
            Alle Handlungen und Entscheidungen liegen in der ausschließlichen Verantwortung
            und im Ermessen des Nutzers.
          </p>
        </Section>

        <Section title="4. Haftung für Veranstaltungen und Termine Dritter">
          <p>
            Wir informieren auf unserer Plattform über mögliche Aktivitäten, Events und
            geplante Ausflüge in Zusammenarbeit mit Partnern (z. B. Locations, Veranstalter,
            Gastronomiebetriebe).
          </p>
          <p>
            Für von Dritten organisierte oder angebotene Veranstaltungen übernehmen wir
            keinerlei Haftung. Dies umfasst insbesondere:
          </p>
          <List
            items={[
              'Absagen, Verschiebungen oder Änderungen von Veranstaltungen durch den jeweiligen Veranstalter',
              'Fehlerhafte, unvollständige oder irreführende Informationen zu Veranstaltungen Dritter',
              'Schäden oder Verluste, die im Zusammenhang mit der Teilnahme an einer Veranstaltung Dritter entstehen',
            ]}
          />
          <p>
            Bei allen genannten Terminen, Uhrzeiten und Orten handelt es sich um
            unverbindliche Informationen, die von den tatsächlichen Gegebenheiten der
            jeweiligen Partner oder Veranstalter abweichen können.
          </p>
        </Section>

        <Section title="5. Eigene Veranstaltungen der Star Tap GmbH">
          <p>
            Die Haftungsbeschränkungen der vorstehenden Ziffern gelten nicht für
            Veranstaltungen, die von der Star Tap GmbH selbst organisiert und durchgeführt
            werden. Für diese eigenen Veranstaltungen übernehmen wir die gesetzliche
            Verantwortung im Rahmen der geltenden Vorschriften.
          </p>
        </Section>

        <Section title="6. Haftung für externe Links">
          <p>
            Unsere Website enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir
            keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
            Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
            Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
        </Section>

        <Section title="7. Urheberrecht">
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
            unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
            Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
            bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </Section>
      </div>
    </div>
  );
}
