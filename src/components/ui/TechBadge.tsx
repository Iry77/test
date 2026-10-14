import { ExternalLink } from 'lucide-react';
import type { TechId, Technology } from '@/types/portfolio';
import { portfolioData } from '@/data/portfolioData';
import { useTranslation } from '@/i18n/useTranslation';
import { cn } from '@/lib/cn';
import { SmartImage } from './SmartImage';

const monogram = ({ name, monogram: override }: Technology) =>
  override ??
  name
    .replace(/[^A-Za-z0-9 ]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

function TechIcon({ id, size }: { id: TechId; size: 'sm' | 'md' }) {
  const tech = portfolioData.technologies[id];
  const box = size === 'sm' ? 'h-5 w-5 rounded-md' : 'h-8 w-8 rounded-lg';
  return (
    <span className={cn('grid shrink-0 place-items-center bg-white p-0.5 ring-1 ring-black/5', box)} aria-hidden="true">
      <SmartImage
        src={tech.icon}
        width={size === 'sm' ? 16 : 26}
        height={size === 'sm' ? 16 : 26}
        className="h-full w-full object-contain"
        fallback={
          <span className={cn('font-display font-bold text-[#2f40c4]', size === 'sm' ? 'text-[9px]' : 'text-[11px]')}>
            {monogram(tech)}
          </span>
        }
      />
    </span>
  );
}

interface TechBadgeProps {
  id: TechId;
  /** `md` = linked tile for the skills grid; `sm` = compact inline chip. */
  size?: 'sm' | 'md';
}

export function TechBadge({ id, size = 'sm' }: TechBadgeProps) {
  const { t } = useTranslation();
  const tech = portfolioData.technologies[id];

  if (size === 'sm') {
    return (
      <li className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2 py-1 pl-1 pr-3 text-xs font-medium text-fg">
        <TechIcon id={id} size="sm" />
        {tech.name}
      </li>
    );
  }

  return (
    <li>
      <a
        href={tech.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-xl border border-border bg-surface px-3 py-2.5 text-sm font-medium text-fg transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-soft"
      >
        <TechIcon id={id} size="md" />
        <span className="flex-1">{tech.name}</span>
        <ExternalLink
          className="h-3.5 w-3.5 text-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
          aria-hidden="true"
        />
        <span className="sr-only">({t.ui.skills.opensInNewTab})</span>
      </a>
    </li>
  );
}
