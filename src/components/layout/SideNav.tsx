import { motion } from 'framer-motion';
import { useTranslation } from '@/i18n/useTranslation';
import type { SectionId } from '@/types/portfolio';
import { cn } from '@/lib/cn';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { NAV_ICONS, NAV_SECTIONS } from './navItems';

/** Desktop: floating vertical pill pinned to the right edge, with hover/focus labels. */
export function SideNav({ active }: { active: SectionId }) {
  const { t } = useTranslation();

  return (
    <nav aria-label={t.ui.nav.label} className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col items-center gap-1 rounded-full border border-border bg-surface/80 p-1.5 shadow-lift backdrop-blur-xl"
      >
        <ul className="flex flex-col items-center gap-1">
          {NAV_SECTIONS.map((id) => {
            const Icon = NAV_ICONS[id];
            const isActive = id === active;
            return (
              <li key={id} className="group relative">
                <a
                  href={`#${id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'relative grid h-11 w-11 place-items-center rounded-full transition-colors duration-200',
                    isActive ? 'text-on-brand' : 'text-muted hover:bg-surface-2 hover:text-fg',
                  )}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="sidenav-active"
                      className="absolute inset-0 rounded-full bg-brand"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      aria-hidden="true"
                    />
                  ) : null}
                  <Icon className="relative h-5 w-5" aria-hidden="true" strokeWidth={isActive ? 2.25 : 2} />
                  <span className="sr-only">{t.ui.nav[id]}</span>
                </a>
                {/* Visual tooltip — the link already has an accessible name via sr-only text. */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 translate-x-1 whitespace-nowrap rounded-lg bg-fg px-2.5 py-1 text-xs font-semibold text-bg opacity-0 shadow-soft transition-all duration-200 group-focus-within:translate-x-0 group-focus-within:opacity-100 group-hover:translate-x-0 group-hover:opacity-100"
                >
                  {t.ui.nav[id]}
                </span>
              </li>
            );
          })}
        </ul>
        <div className="my-1 h-px w-6 bg-border" aria-hidden="true" />
        <LanguageToggle />
        <ThemeToggle />
      </motion.div>
    </nav>
  );
}
