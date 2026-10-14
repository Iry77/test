import { ArrowUpRight, Award, CalendarDays, GraduationCap } from 'lucide-react';
import { usePortfolio } from '@/hooks/usePortfolio';
import { formatRange, getRangeStatus, toDateTime, type RangeStatus } from '@/lib/dates';
import { cn } from '@/lib/cn';
import { Reveal, RevealItem } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SmartImage } from '@/components/ui/SmartImage';

const STATUS_STYLE: Record<RangeStatus, string> = {
  ongoing: 'bg-brand text-on-brand',
  upcoming: 'bg-surface-2 text-fg',
  completed: 'bg-surface-2 text-muted',
};

export function Education() {
  const { data, content, ui, intlLocale } = usePortfolio();

  return (
    <Section id="education" eyebrow={ui.education.eyebrow} title={ui.education.title}>
      <Reveal group className="grid gap-6 md:grid-cols-3">
        {data.education.map((entry) => {
          const text = content.education[entry.id];
          const status = getRangeStatus(entry.period);
          return (
            <RevealItem key={entry.id} className="h-full">
              <article className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="relative h-32 overflow-hidden bg-gradient-to-br from-brand/50 via-brand/20 to-surface-2">
                  <SmartImage
                    src={entry.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    fallback={
                      <GraduationCap
                        aria-hidden="true"
                        className="absolute bottom-3 right-4 h-16 w-16 text-accent/40 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
                      />
                    }
                  />
                  <span
                    className={cn(
                      'absolute left-4 top-4 rounded-full px-2.5 py-0.5 text-xs font-semibold shadow-soft',
                      STATUS_STYLE[status],
                    )}
                  >
                    {ui.education[status]}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold leading-snug">{text.degree}</h3>
                  {text.specialty ? <p className="mt-1 text-sm font-medium text-accent">{text.specialty}</p> : null}
                  <p className="mt-3 text-sm text-muted">{text.institution}</p>

                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-4 w-4" aria-hidden="true" />
                      <time dateTime={toDateTime(entry.period.start)}>
                        {formatRange(entry.period, intlLocale, ui.dates.to)}
                      </time>
                    </span>
                    {text.honors ? (
                      <span className="inline-flex items-center gap-1.5">
                        <Award className="h-4 w-4" aria-hidden="true" />
                        {ui.education.honors} {text.honors}
                      </span>
                    ) : null}
                  </div>

                  <a
                    href={entry.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1 self-start pt-5 text-sm font-semibold text-accent hover:underline"
                  >
                    {ui.education.visit}
                    <span className="sr-only"> — {entry.institution}</span>
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </article>
            </RevealItem>
          );
        })}
      </Reveal>
    </Section>
  );
}
