import { motion } from 'framer-motion';
import { Building2, CalendarDays, MapPin } from 'lucide-react';
import { usePortfolio } from '@/hooks/usePortfolio';
import { formatRange, toDateTime } from '@/lib/dates';
import { revealViewport } from '@/lib/motion';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SmartImage } from '@/components/ui/SmartImage';
import { TechBadge } from '@/components/ui/TechBadge';

export function Experience() {
  const { data, content, ui, intlLocale } = usePortfolio();

  return (
    <Section id="experience" eyebrow={ui.experience.eyebrow} title={ui.experience.title}>
      <ol className="relative space-y-10 pl-8 sm:pl-12">
        {/* Timeline spine draws itself as it scrolls into view. */}
        <motion.span
          aria-hidden="true"
          className="absolute bottom-2 left-[11px] top-2 w-0.5 origin-top rounded-full bg-gradient-to-b from-brand via-brand/60 to-transparent sm:left-[19px]"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={revealViewport}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        {data.experience.map((entry) => {
          const text = content.experience[entry.id];
          return (
            <li key={entry.id} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-8 top-7 grid h-6 w-6 place-items-center rounded-full border-4 border-bg bg-brand sm:-left-12 sm:h-10 sm:w-10 sm:border-[6px]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-on-brand sm:h-2 sm:w-2" />
              </span>

              <Reveal className="card group p-6 transition-shadow duration-300 hover:shadow-lift sm:p-8">
                <article aria-labelledby={`${entry.id}-title`}>
                  <header className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <SmartImage
                      src={entry.logo}
                      alt=""
                      width={56}
                      height={56}
                      className="h-14 w-14 shrink-0 rounded-xl border border-border bg-white object-contain p-1.5"
                      fallback={
                        <span
                          aria-hidden="true"
                          className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-brand/25 font-display text-sm font-bold text-accent"
                        >
                          {entry.company.slice(0, 4)}
                        </span>
                      }
                    />
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 id={`${entry.id}-title`} className="font-display text-xl font-semibold">
                          {text.role}
                        </h3>
                        <span className="rounded-full bg-brand/25 px-2.5 py-0.5 text-xs font-semibold text-accent">
                          {ui.experience.internship}
                        </span>
                      </div>
                      <p className="mt-1 flex items-center gap-1.5 font-medium text-fg">
                        <Building2 className="h-4 w-4 text-muted" aria-hidden="true" />
                        {text.companyFull}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays className="h-4 w-4" aria-hidden="true" />
                          <time dateTime={toDateTime(entry.period.start)}>
                            {formatRange(entry.period, intlLocale, ui.dates.to)}
                          </time>
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" aria-hidden="true" />
                          {entry.location}
                        </span>
                      </div>
                    </div>
                  </header>

                  <ul className="mt-6 space-y-3">
                    {text.missions.map((mission) => (
                      <li key={mission.title} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <p className="leading-relaxed text-muted">
                          <strong className="font-semibold text-fg">{mission.title}</strong> — {mission.detail}
                        </p>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 border-t border-border pt-5">
                    <h4 className="sr-only">{ui.experience.stack}</h4>
                    <ul className="flex flex-wrap gap-2" aria-label={ui.experience.stack}>
                      {entry.stack.map((id) => (
                        <TechBadge key={id} id={id} />
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
