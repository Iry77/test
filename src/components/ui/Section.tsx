import type { ReactNode } from 'react';
import type { SectionId } from '@/types/portfolio';
import { cn } from '@/lib/cn';
import { Reveal } from './Reveal';

interface SectionProps {
  id: SectionId;
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, intro, children, className }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className={cn('scroll-mt-8 py-20 sm:py-28', className)}>
      <div className="container-content">
        <Reveal className="mb-12 max-w-2xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={headingId} className="mt-3 font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            {title}
          </h2>
          {intro ? <div className="mt-4 text-lg leading-relaxed text-muted">{intro}</div> : null}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
