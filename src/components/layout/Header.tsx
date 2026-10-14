import { portfolioData } from '@/data/portfolioData';

/** Minimal brand mark, top-left. Navigation lives in the right rail / drawer. */
export function Header() {
  const { identity } = portfolioData;
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="container-content flex h-20 items-center">
        <a href="#home" className="group flex items-center gap-2.5 rounded-full">
          <img
            src={identity.logo}
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 transition-transform duration-500 group-hover:rotate-[360deg]"
          />
          <span className="font-display text-base font-bold tracking-tight">
            {identity.firstName}
            <span className="text-accent">.</span>
          </span>
        </a>
      </div>
    </header>
  );
}
