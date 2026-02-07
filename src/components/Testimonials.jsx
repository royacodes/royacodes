import { Quote } from "lucide-react";
import { SECTIONS, TESTIMONIALS } from "../data/constants";
import ScrollReveal from "./ScrollReveal";
import useLocale from "../hooks/useLocale";
import { pickLocale } from "../utils/locale";

function TestimonialCard({ t }) {
  const { locale, isRTL } = useLocale();

  const text = pickLocale(t.text, locale);
  const role = pickLocale(t.role, locale);

  return (
    <div className="flex-shrink-0 w-[350px] md:w-[420px] p-6 rounded-2xl bg-card border border-border mx-2.5">
      <Quote size={20} className="text-accent/40 mb-4" />
      <p
        className={`text-sm text-text-secondary leading-relaxed mb-6 ${isRTL ? "text-right" : ""}`}
      >
        "{text}"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-accent-muted flex items-center justify-center text-accent text-sm font-bold">
          {t.avatar}
        </div>
        <div>
          <p className="text-sm font-medium text-text-primary">{t.name}</p>
          <p className="text-xs text-muted">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { locale, isRTL } = useLocale();
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  const kicker = pickLocale(SECTIONS.testimonials.kicker, locale);
  const title = pickLocale(SECTIONS.testimonials.title, locale);
  const description = pickLocale(SECTIONS.testimonials.description, locale);

  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-14">
        <ScrollReveal>
          <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3">
            {kicker}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            {title}
          </h2>
          <p
            className={`mt-4 text-text-secondary max-w-xl text-lg ${isRTL ? "text-right" : ""}`}
          >
            {description}
          </p>
        </ScrollReveal>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative">
        <div className="flex animate-marquee">
          {doubled.map((t, i) => (
            <TestimonialCard key={`a-${i}`} t={t} />
          ))}
        </div>
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-primary to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-primary to-transparent pointer-events-none z-10" />
      </div>

      {/* Marquee Row 2 (reverse) */}
      <div className="relative mt-5">
        <div className="flex animate-marquee-reverse">
          {[...doubled].reverse().map((t, i) => (
            <TestimonialCard key={`b-${i}`} t={t} />
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-primary to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-primary to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
