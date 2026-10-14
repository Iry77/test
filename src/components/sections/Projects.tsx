import { Gamepad2, Medal, Vote, type LucideIcon } from 'lucide-react';
import type { ProjectId } from '@/types/portfolio';
import { usePortfolio } from '@/hooks/usePortfolio';
import { Reveal, RevealItem } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SmartImage } from '@/components/ui/SmartImage';
import { TechBadge } from '@/components/ui/TechBadge';

const PROJECT_ICONS: Record<ProjectId, LucideIcon> = {
  'democracy-platform': Vote,
  'math-shooter': Gamepad2,
  'olympics-tracker': Medal,
};

export function Projects() {
  const { data, content, ui } = usePortfolio();

  return (
    <Section id="projects" eyebrow={ui.projects.eyebrow} title={ui.projects.title} intro={ui.projects.subtitle}>
      <Reveal group className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.projects.map((project, index) => {
          const text = content.projects[project.id];
          const Icon = PROJECT_ICONS[project.id];
          return (
            <RevealItem key={project.id} className="h-full">
              <article
                aria-labelledby={`${project.id}-title`}
                className="card group relative flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-lift"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface-2">
                  <SmartImage
                    src={project.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    fallback={
                      <div className="bg-grid relative grid h-full w-full place-items-center bg-gradient-to-br from-brand/45 to-surface-2">
                        <span className="grid h-16 w-16 place-items-center rounded-2xl bg-surface shadow-lift transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                          <Icon className="h-8 w-8 text-accent" aria-hidden="true" />
                        </span>
                      </div>
                    }
                  />
                  <span
                    aria-hidden="true"
                    className="absolute right-4 top-4 font-display text-sm font-bold text-fg/70"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{ui.projects.academic}</p>
                  <h3 id={`${project.id}-title`} className="mt-2 font-display text-lg font-semibold leading-snug">
                    {text.name}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted">{text.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label={ui.experience.stack}>
                    {project.stack.map((id) => (
                      <TechBadge key={id} id={id} />
                    ))}
                  </ul>
                </div>
              </article>
            </RevealItem>
          );
        })}
      </Reveal>
    </Section>
  );
}
