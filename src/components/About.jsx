import { ABOUT, SECTIONS } from "../data/constants";
import ScrollReveal from "./ScrollReveal";
import useLocale from "../hooks/useLocale";
import { pickLocale, pickLocaleArray } from "../utils/locale";

export default function About() {
  const { locale, isRTL } = useLocale();

  const subtitle = pickLocale(ABOUT.subtitle, locale);
  const title = pickLocale(ABOUT.title, locale);
  const bio = pickLocaleArray(ABOUT.bio, locale);
  const nowTitle = pickLocale(ABOUT.now.title, locale);
  const techStackTitle = pickLocale(SECTIONS.about.techStackTitle, locale);

  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — Story */}
          <div>
            <ScrollReveal>
              <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3">
                {subtitle}
              </p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                {title}
              </h2>
            </ScrollReveal>

            <div className="mt-8 space-y-4">
              {bio.map((paragraph, i) => (
                <ScrollReveal key={i} delay={0.1 + i * 0.05}>
                  <p
                    className={`text-text-secondary leading-relaxed ${isRTL ? "text-right" : ""}`}
                  >
                    {paragraph}
                  </p>
                </ScrollReveal>
              ))}
            </div>

            {/* Tech Stack */}
            <ScrollReveal delay={0.3}>
              <div className="mt-10">
                <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
                  {techStackTitle}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {ABOUT.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-4 py-2 rounded-full bg-card border border-border text-text-secondary hover:border-accent/30 hover:text-accent transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Now Section */}
          <div>
            <ScrollReveal delay={0.15}>
              <div className="rounded-2xl bg-card border border-border p-8 sticky top-24">
                <div className="flex items-center gap-3 mb-6">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent/60" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
                  </span>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {nowTitle}
                  </h3>
                </div>

                <div className="space-y-4">
                  {ABOUT.now.items.map((item, i) =>
                    (() => {
                      const itemText = pickLocale(item.text, locale);
                      return (
                        <div
                          key={i}
                          className="flex items-start gap-4 p-4 rounded-xl bg-secondary/80 border border-border hover:border-accent/20 transition-colors"
                        >
                          <span className="text-2xl">{item.emoji}</span>
                          <p
                            className={`text-sm text-text-secondary leading-relaxed ${isRTL ? "text-right" : ""}`}
                          >
                            {itemText}
                          </p>
                        </div>
                      );
                    })(),
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
