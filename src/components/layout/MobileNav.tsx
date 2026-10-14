import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import type { SectionId } from '@/types/portfolio';
import { cn } from '@/lib/cn';
import { portfolioData } from '@/data/portfolioData';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { NAV_ICONS, NAV_SECTIONS } from './navItems';

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/** Mobile / tablet: floating action button opening a right-hand slide-over drawer (modal dialog). */
export function MobileNav({ active }: { active: SectionId }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Escape to close, focus trap, scroll lock, focus restore.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const trigger = triggerRef.current;
    panelRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (event.key !== 'Tab' || !panelRef.current) return;
      const nodes = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [open]);

  // Close if the viewport grows into desktop layout.
  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)');
    const onChange = (event: MediaQueryListEvent) => event.matches && setOpen(false);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return (
    <div className="lg:hidden">
      <motion.button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t.ui.nav.open}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-brand text-on-brand shadow-lift ring-1 ring-black/10"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </motion.button>

      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              key="panel"
              ref={panelRef}
              id="mobile-nav-panel"
              role="dialog"
              aria-modal="true"
              aria-label={t.ui.nav.label}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 380, damping: 38 }}
              className="fixed inset-y-0 right-0 z-50 flex w-[min(20rem,86vw)] flex-col border-l border-border bg-surface p-5 shadow-lift"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img src={portfolioData.identity.logo} alt="" width={32} height={32} className="h-8 w-8" />
                  <span className="font-display font-bold">
                    {portfolioData.identity.firstName} {portfolioData.identity.lastName}
                  </span>
                </div>
                <button type="button" onClick={() => setOpen(false)} aria-label={t.ui.nav.close} className="icon-btn">
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <nav aria-label={t.ui.nav.label} className="flex-1 overflow-y-auto">
                <ul className="flex flex-col gap-1">
                  {NAV_SECTIONS.map((id, index) => {
                    const Icon = NAV_ICONS[id];
                    const isActive = id === active;
                    return (
                      <motion.li
                        key={id}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.04 * index + 0.08 }}
                      >
                        <a
                          href={`#${id}`}
                          onClick={() => setOpen(false)}
                          aria-current={isActive ? 'true' : undefined}
                          className={cn(
                            'flex min-h-12 items-center gap-3 rounded-xl px-3 text-base font-medium transition-colors',
                            isActive ? 'bg-brand text-on-brand' : 'text-fg hover:bg-surface-2',
                          )}
                        >
                          <Icon className="h-5 w-5" aria-hidden="true" />
                          {t.ui.nav[id]}
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
                <LanguageToggle withLabel />
                <ThemeToggle withLabel />
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
