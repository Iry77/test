import { useTranslation } from '@/i18n/useTranslation';

export function SkipLink() {
  const { t } = useTranslation();
  return (
    <a
      href="#main"
      className="sr-only rounded-full bg-brand px-4 py-2 text-sm font-semibold text-on-brand shadow-lift focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60]"
    >
      {t.ui.skipToContent}
    </a>
  );
}
