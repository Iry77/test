import { BookOpenText, Crown, Gamepad2, Music, Trophy, type LucideIcon } from 'lucide-react';
import type { InterestIcon } from '@/types/portfolio';
import { usePortfolio } from '@/hooks/usePortfolio';
import { Reveal, RevealItem } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SmartImage } from '@/components/ui/SmartImage';

const ICONS: Record<InterestIcon, LucideIcon> = {
  music: Music,
  sports: Trophy,
  chess: Crown,
  anime: BookOpenText,
  gaming: Gamepad2,
};

export function Interests() {
  const { data, content, ui } = usePortfolio();

  return (
    <Section id="interests" eyebrow={ui.interests.eyebrow} title={ui.interests.title}>
      <Reveal group className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {data.interests.map((interest) => {
          const text = content.interests[interest.id];
          const Icon = ICONS[interest.icon];
          return (
            <RevealItem key={interest.id}>
              <div className="card group relative flex h-full flex-col overflow-hidden p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                {/* Optional photo strip: renders only for images that exist in /public. */}
                <div className="absolute inset-0 -z-0 flex opacity-0 transition-opacity duration-500 group-hover:opacity-15" aria-hidden="true">
                  {interest.images.map((src) => (
                    <SmartImage key={src} src={src} alt="" className="h-full min-w-0 flex-1 object-cover" fallback={null} />
                  ))}
                </div>
                <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-brand/25 text-accent transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="relative mt-4 font-display text-base font-semibold">{text.title}</h3>
                {text.subtitle ? <p className="relative mt-1 text-sm text-muted">{text.subtitle}</p> : null}
              </div>
            </RevealItem>
          );
        })}
      </Reveal>
    </Section>
  );
}
