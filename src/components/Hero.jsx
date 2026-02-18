import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { HERO, SECTIONS } from "../data/constants";
import ScrollReveal from "./ScrollReveal";
import me from "../assets/me.jpg";
import useLocale from "../hooks/useLocale";
import { pickLocale, toPersianDigits } from "../utils/locale";
export default function Hero() {
  const { locale, isRTL } = useLocale();

  const greeting = pickLocale(HERO.greeting, locale);
  const headline = pickLocale(HERO.headline, locale);
  const subtext = pickLocale(HERO.subtext, locale);
  const cta = pickLocale(HERO.cta, locale);
  const ctaSecondary = pickLocale(HERO.ctaSecondary, locale);
  const scrollText = pickLocale(SECTIONS.hero.scroll, locale);
  const portraitAlt = pickLocale(SECTIONS.hero.portraitAlt, locale);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full py-20 md:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div className="order-2 lg:order-1">
            <ScrollReveal>
              <p
                className={`text-accent font-medium text-sm tracking-wider uppercase mb-4 ${isRTL ? "text-right" : ""}`}
              >
                {greeting} {HERO.name}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight text-balance ${isRTL ? "text-right" : ""}`}
              >
                {headline.split("\n").map((line, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p
                className={`mt-6 text-text-secondary text-lg leading-relaxed max-w-lg ${isRTL ? "text-right" : ""}`}
              >
                {subtext}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full bg-accent text-primary hover:bg-accent-hover transition-all duration-200 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-0.5"
                >
                  {cta}
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full border border-border text-text-primary hover:bg-card hover:border-accent/30 transition-all duration-200 hover:-translate-y-0.5"
                >
                  {ctaSecondary}
                </a>
              </div>
            </ScrollReveal>

            {/* Stats */}
            {/* <ScrollReveal delay={0.4}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 pt-8 border-t border-border">
                {HERO.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl md:text-3xl font-bold text-accent">
                      {locale === "fa"
                        ? toPersianDigits(stat.value)
                        : stat.value}
                    </p>
                    <p className="text-xs text-text-secondary mt-1">
                      {pickLocale(stat.label, locale)}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal> */}
          </div>

          {/* Right — Photo placeholder */}
          <ScrollReveal
            delay={0.2}
            direction="right"
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-3xl bg-gradient-to-br from-card to-secondary border border-border overflow-hidden">
                <img
                  src={me}
                  alt={portraitAlt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-3xl border border-accent/10 -z-10" />
              <div className="absolute -inset-8 rounded-3xl border border-accent/5 -z-10" />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs text-muted">{scrollText}</span>
        <ArrowDown size={14} className="text-muted" />
      </motion.div>
    </section>
  );
}
