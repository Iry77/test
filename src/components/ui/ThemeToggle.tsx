import { AnimatePresence, motion } from 'framer-motion';
import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/theme/useTheme';
import { useTranslation } from '@/i18n/useTranslation';
import { cn } from '@/lib/cn';

const ICONS = { system: Monitor, light: Sun, dark: Moon } as const;

/** Cycles system → light → dark. The label always announces the *next* state. */
export function ThemeToggle({ withLabel = false, className }: { withLabel?: boolean; className?: string }) {
  const { preference, cycle } = useTheme();
  const { t } = useTranslation();
  const Icon = ICONS[preference];
  const next = { system: t.ui.theme.toLight, light: t.ui.theme.toDark, dark: t.ui.theme.toSystem }[preference];

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={`${t.ui.theme.label}: ${t.ui.theme[preference]}. ${next}`}
      title={next}
      className={cn(withLabel ? 'btn-ghost w-full justify-start' : 'icon-btn', className)}
    >
      <span className="relative grid h-5 w-5 place-items-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={preference}
            initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </motion.span>
        </AnimatePresence>
      </span>
      {withLabel ? (
        <span>
          {t.ui.theme.label} · {t.ui.theme[preference]}
        </span>
      ) : null}
    </button>
  );
}
