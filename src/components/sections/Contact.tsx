import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Check, Copy, MapPin, Phone, Send } from 'lucide-react';
import { usePortfolio } from '@/hooks/usePortfolio';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { Reveal, RevealItem } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { socialIcons } from '@/components/ui/BrandIcons';

export function Contact() {
  const { data, content, ui } = usePortfolio();
  const { copied, copy } = useCopyToClipboard();
  const { contact } = data;

  return (
    <Section id="contact" eyebrow={ui.contact.eyebrow} title={ui.contact.title} intro={ui.contact.subtitle}>
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="card relative overflow-hidden p-6 sm:p-8">
          <div aria-hidden="true" className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/30 blur-3xl" />
          <div className="relative">
            <p className="text-sm font-medium text-muted">{ui.contact.email}</p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <a
                href={`mailto:${contact.email}`}
                className="break-all font-display text-2xl font-bold tracking-tight text-fg hover:text-accent sm:text-3xl"
              >
                {contact.email}
              </a>
              <button
                type="button"
                onClick={() => void copy(contact.email)}
                className="icon-btn relative"
                aria-label={ui.contact.copy}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={copied ? 'check' : 'copy'}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.15 }}
                  >
                    {copied ? (
                      <Check className="h-5 w-5 text-accent" aria-hidden="true" />
                    ) : (
                      <Copy className="h-5 w-5" aria-hidden="true" />
                    )}
                  </motion.span>
                </AnimatePresence>
              </button>
              <span role="status" aria-live="polite" className="text-sm font-medium text-accent">
                {copied ? ui.contact.copied : ''}
              </span>
            </div>

            <a href={`mailto:${contact.email}`} className="btn-primary group mt-8">
              <Send className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              {ui.contact.sendEmail}
            </a>
          </div>
        </Reveal>

        <Reveal group className="grid gap-4">
          <RevealItem>
            <a href={`tel:${contact.phoneHref}`} className="card group flex items-center gap-4 p-5 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-lift">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/25 text-accent">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-muted">{ui.contact.phone}</span>
                <span className="block font-semibold">{contact.phone}</span>
              </span>
            </a>
          </RevealItem>

          <RevealItem>
            <div className="card flex items-center gap-4 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/25 text-accent">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-muted">{ui.contact.address}</span>
                <address className="not-italic font-semibold">{content.contact.address}</address>
              </span>
            </div>
          </RevealItem>

          <RevealItem className="grid grid-cols-2 gap-4">
            {contact.socials.map((social) => {
              const Icon = socialIcons[social.id];
              return (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="card group flex flex-col gap-3 p-5 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-lift"
                >
                  <span className="flex items-center justify-between">
                    <Icon className="h-6 w-6 text-fg" />
                    <ArrowUpRight
                      className="h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </span>
                  <span>
                    <span className="block text-sm text-muted">{ui.contact.social[social.id]}</span>
                    <span className="block truncate font-semibold">{social.handle}</span>
                  </span>
                </a>
              );
            })}
          </RevealItem>
        </Reveal>
      </div>
    </Section>
  );
}
