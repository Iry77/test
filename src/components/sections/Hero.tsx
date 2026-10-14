import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronDown, Mail } from 'lucide-react';
import { usePortfolio } from '@/hooks/usePortfolio';
import { easeOut } from '@/lib/motion';
import { socialIcons } from '@/components/ui/BrandIcons';

export function Hero() {
  const { data, content, ui } = usePortfolio();
  const reduce = useReducedMotion() ?? false;
  const { identity, contact } = data;

  // The punchline lands after a beat — the whole point of the tagline.
  const punchlineDelay = reduce ? 0 : 0.9;
  const enter = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: easeOut, delay: reduce ? 0 : delay },
  });

  return (
    <section id="home" aria-labelledby="home-heading" className="relative isolate overflow-hidden">
      {/* Decorative backdrop */}
      <div
        aria-hidden="true"
        className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 right-[-10%] -z-10 h-[32rem] w-[32rem] rounded-full bg-brand/30 blur-3xl dark:bg-brand/15"
      />

      <div className="container-content grid min-h-[100svh] items-center gap-12 pb-20 pt-28 md:grid-cols-[1.25fr_1fr] md:gap-10 md:pt-24">
        <div>
          <motion.p {...enter(0)} className="font-medium text-muted">
            {ui.hero.greeting}{' '}
            <span className="font-display font-bold text-fg">
              {identity.firstName} {identity.lastName}
            </span>
          </motion.p>

          <h1
            id="home-heading"
            className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-fg sm:text-5xl lg:text-6xl"
          >
            <motion.span {...enter(0.1)} className="block">
              {content.hero.title}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: reduce ? 0 : 12, filter: reduce ? 'none' : 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, ease: easeOut, delay: punchlineDelay }}
              className="relative mt-1 inline-block text-accent"
            >
              {content.hero.titleHighlight}
              <svg
                aria-hidden="true"
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3 w-full text-brand"
              >
                <motion.path
                  d="M2 9 C 60 2, 120 2, 180 6 S 270 11, 298 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  initial={{ pathLength: reduce ? 1 : 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, ease: easeOut, delay: punchlineDelay + 0.35 }}
                />
              </svg>
            </motion.span>
          </h1>

          <motion.p {...enter(0.25)} className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            {ui.hero.role}
          </motion.p>

          <motion.p {...enter(0.35)} className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
            {content.hero.description}
          </motion.p>

          <motion.div {...enter(0.45)} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#experience" className="btn-primary group">
              {ui.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-ghost">
              <Mail className="h-4 w-4" aria-hidden="true" />
              {ui.hero.ctaSecondary}
            </a>
            <ul className="ml-1 flex items-center gap-1">
              {contact.socials.map((social) => {
                const Icon = socialIcons[social.id];
                return (
                  <li key={social.id}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer me"
                      aria-label={`${ui.contact.social[social.id]} — ${social.handle}`}
                      className="icon-btn hover:text-accent"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: reduce ? 1 : 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: easeOut, delay: reduce ? 0 : 0.15 }}
          className="relative mx-auto w-full max-w-sm md:max-w-none"
        >
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2.5rem] bg-brand" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-surface shadow-lift">
            <picture>
              <source srcSet={identity.photo.webp} type="image/webp" />
              <img
                src={identity.photo.fallback}
                alt={ui.hero.photoAlt}
                width={identity.photo.width}
                height={identity.photo.height}
                fetchPriority="high"
                className="aspect-[12/13] w-full object-cover"
              />
            </picture>
          </div>
          <motion.img
            src={identity.logo}
            alt=""
            width={80}
            height={80}
            className="absolute -left-4 -top-4 h-16 w-16 drop-shadow-lg sm:h-20 sm:w-20"
            animate={reduce ? {} : { rotate: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs font-medium text-muted hover:text-fg md:flex"
      >
        <span>{ui.hero.scrollHint}</span>
        <motion.span
          animate={reduce ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-5 w-5" aria-hidden="true" />
        </motion.span>
      </a>
    </section>
  );
}
