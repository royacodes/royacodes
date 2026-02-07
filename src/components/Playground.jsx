import { ArrowUpRight, Sparkles } from "lucide-react";
import { PLAYGROUND_ITEMS, SECTIONS } from "../data/constants";
import ScrollReveal from "./ScrollReveal";
import useLocale from "../hooks/useLocale";
import { pickLocale } from "../utils/locale";

export default function Playground() {
  const { locale, isRTL } = useLocale();

  const kicker = pickLocale(SECTIONS.playground.kicker, locale);
  const title = pickLocale(SECTIONS.playground.title, locale);
  const description = pickLocale(SECTIONS.playground.description, locale);

  return (
    <section id="playground" className="py-24 md:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <Sparkles size={18} className="text-accent" />
            <p className="text-accent font-medium text-sm tracking-wider uppercase">
              {kicker}
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            {title}
          </h2>
          <p
            className={`mt-4 text-text-secondary max-w-xl text-lg ${isRTL ? "text-right" : ""}`}
          >
            {description}
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-5 mt-14">
          {PLAYGROUND_ITEMS.map((item, i) => {
            const itemTitle = pickLocale(item.title, locale);
            const itemDescription = pickLocale(item.description, locale);
            return (
              <ScrollReveal key={item.id} delay={i * 0.1}>
                <a
                  href="#"
                  className="group relative block p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 overflow-hidden"
                >
                  {/* Gradient blob */}
                  <div
                    className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${item.color} rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2`}
                  />

                  <div className="relative">
                    <span className="text-4xl mb-4 block">{item.emoji}</span>

                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">
                        {itemTitle}
                      </h3>
                      <ArrowUpRight
                        size={16}
                        className="text-muted group-hover:text-accent transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4">
                      {itemDescription}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full border border-border text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
