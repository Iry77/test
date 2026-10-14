import { GraduationCap, Languages, MapPin } from 'lucide-react';
import { usePortfolio } from '@/hooks/usePortfolio';
import { Reveal, RevealItem } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';

const LEVEL_WIDTH: Record<string, string> = {
  A1: '16%',
  A2: '33%',
  B1: '50%',
  B2: '66%',
  C1: '83%',
  C2: '100%',
  Native: '100%',
};

export function About() {
  const { data, content, ui } = usePortfolio();
  const currentSchool = data.education[0];

  return (
    <Section id="about" eyebrow={ui.about.eyebrow} title={ui.about.title}>
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="card p-6 sm:p-8">
          <p className="text-lg leading-relaxed text-fg sm:text-xl sm:leading-relaxed">{content.about.text}</p>
        </Reveal>

        <Reveal group className="grid gap-4">
          {currentSchool ? (
            <RevealItem className="card flex items-center gap-4 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/25 text-accent">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm text-muted">{ui.about.studying}</p>
                <p className="font-semibold">{content.education[currentSchool.id].institution}</p>
              </div>
            </RevealItem>
          ) : null}

          <RevealItem className="card flex items-center gap-4 p-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/25 text-accent">
              <MapPin className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm text-muted">{ui.about.basedIn}</p>
              <p className="font-semibold">{data.contact.city}</p>
            </div>
          </RevealItem>

          <RevealItem className="card p-5">
            <div className="mb-4 flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/25 text-accent">
                <Languages className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="font-semibold">{ui.about.languagesTitle}</h3>
            </div>
            <ul className="space-y-3">
              {data.languages.map((language) => (
                <li key={language.id}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="font-medium">{content.languages[language.id]}</span>
                    <span className="rounded-md bg-surface-2 px-2 py-0.5 font-display text-xs font-bold text-accent">
                      {language.level}
                    </span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-surface-2" aria-hidden="true">
                    <div className="h-full rounded-full bg-brand" style={{ width: LEVEL_WIDTH[language.level] }} />
                  </div>
                </li>
              ))}
            </ul>
          </RevealItem>
        </Reveal>
      </div>
    </Section>
  );
}
