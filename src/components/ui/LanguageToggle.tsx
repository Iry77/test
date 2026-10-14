import { useTranslation } from '@/i18n/useTranslation';
import { cn } from '@/lib/cn';

/** EN / FR switch. Each language name is tagged with its own `lang` for screen readers. */
export function LanguageToggle({ withLabel = false, className }: { withLabel?: boolean; className?: string }) {
  const { locale, toggleLocale, t } = useTranslation();
  const other = locale === 'en' ? 'fr' : 'en';

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t.ui.language.switchTo}
      lang={other}
      title={t.ui.language.switchTo}
      className={cn(withLabel ? 'btn-ghost w-full justify-start' : 'icon-btn', className)}
    >
      <span className="font-display text-xs font-bold tracking-wide" aria-hidden="true">
        <span className={locale === 'en' ? 'text-accent' : undefined}>EN</span>
        <span className="mx-0.5 text-muted">/</span>
        <span className={locale === 'fr' ? 'text-accent' : undefined}>FR</span>
      </span>
      {withLabel ? <span aria-hidden="true">{t.ui.language.label}</span> : null}
    </button>
  );
}
