import { CheckCircle } from 'lucide-react';
import { useLocale } from '@/lib/i18n/LanguageProvider';
import { t } from '@/lib/i18n/translations';

const stats = [
  { value: '500+', key: 'about.stat1' as const },
  { value: '4.9', key: 'about.stat2' as const },
  { value: '50+', key: 'about.stat3' as const },
  { value: '98%', key: 'about.stat4' as const },
];

const highlightKeys = [
  'about.highlight1', 'about.highlight2', 'about.highlight3',
  'about.highlight4', 'about.highlight5', 'about.highlight6',
] as const;

interface AboutSectionProps {
  businessName: string;
}

export function AboutSection({ businessName }: AboutSectionProps) {
  const { locale } = useLocale();

  return (
    <section id="about" className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-[1px] bg-gradient-to-b from-transparent via-amber-500/15 to-transparent md:block" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-14">
          <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl text-balance">
            {t('about.heading', locale)}
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-5 md:gap-16">
          {/* Left: Narrative */}
          <div className="md:col-span-3">
            <p className="text-lg leading-relaxed tracking-wide text-white/80">
              {t('about.para1', locale, { name: businessName })}
            </p>
            <p className="mt-5 text-base leading-relaxed tracking-wide text-white/50">
              {t('about.para2', locale)}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlightKeys.map((key) => (
                <div key={key} className="flex items-center gap-2.5 text-sm text-white/60">
                  <CheckCircle className="h-4 w-4 shrink-0 text-amber-400/70" />
                  <span>{t(key, locale)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.key}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 text-center"
                >
                  <p className="text-3xl font-bold text-amber-400 md:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-sm text-white/40">{t(stat.key, locale)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
