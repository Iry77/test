import { Code2, Database, Layers, Wrench, type LucideIcon } from 'lucide-react';
import type { SkillCategoryId } from '@/types/portfolio';
import { usePortfolio } from '@/hooks/usePortfolio';
import { Reveal, RevealItem } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { TechBadge } from '@/components/ui/TechBadge';

const CATEGORY_ICONS: Record<SkillCategoryId, LucideIcon> = {
  languages: Code2,
  frameworks: Layers,
  data: Database,
  tooling: Wrench,
};

export function Skills() {
  const { data, content, ui } = usePortfolio();

  return (
    <Section id="skills" eyebrow={ui.skills.eyebrow} title={ui.skills.title} intro={content.skills.description}>
      <Reveal group className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.skillCategories.map((category) => {
          const Icon = CATEGORY_ICONS[category.id];
          const headingId = `skills-${category.id}`;
          return (
            <RevealItem
              key={category.id}
              className={`card p-6 ${category.id === 'languages' ? 'md:col-span-2 lg:col-span-3' : ''}`}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand/25 text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 id={headingId} className="font-display text-lg font-semibold">
                  {content.skills.categories[category.id]}
                </h3>
                <span className="ml-auto rounded-full bg-surface-2 px-2.5 py-0.5 text-xs font-semibold text-muted">
                  {category.items.length}
                </span>
              </div>
              <ul
                aria-labelledby={headingId}
                className={`grid grid-cols-2 gap-2.5 ${category.id === 'languages' ? 'sm:grid-cols-3 lg:grid-cols-5' : ''}`}
              >
                {category.items.map((id) => (
                  <TechBadge key={id} id={id} size="md" />
                ))}
              </ul>
            </RevealItem>
          );
        })}
      </Reveal>
    </Section>
  );
}
