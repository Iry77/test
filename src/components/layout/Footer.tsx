import { ArrowUp } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { useTranslation } from '@/i18n/useTranslation';

export function Footer() {
  const { t } = useTranslation();
  const { identity } = portfolioData;
  return (
    <footer className="border-t border-border py-8">
      <div className="container-content flex flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {identity.firstName} {identity.lastName}. {t.ui.footer.rights}{' '}
          <span className="hidden md:inline">{t.ui.footer.builtWith}</span>
        </p>
        <a href="#home" className="inline-flex items-center gap-1.5 rounded-full px-2 py-1 font-medium hover:text-fg">
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
          {t.ui.footer.backToTop}
        </a>
      </div>
    </footer>
  );
}
