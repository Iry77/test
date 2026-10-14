import { portfolioData } from '@/data/portfolioData';
import { useTranslation } from '@/i18n/useTranslation';

/** Language-agnostic data + the active locale's content and UI strings in one call. */
export function usePortfolio() {
  const { t, locale } = useTranslation();
  return { data: portfolioData, content: t.content, ui: t.ui, intlLocale: t.intlLocale, locale };
}
