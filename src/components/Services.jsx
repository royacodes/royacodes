import {
  ArrowUpRight,
  Palette,
  Code2,
  Smartphone,
  MessageSquare,
} from "lucide-react";
import { SECTIONS, SERVICES } from "../data/constants";
import ScrollReveal from "./ScrollReveal";
import useLocale from "../hooks/useLocale";
import { pickLocale, pickLocaleArray } from "../utils/locale";

const iconMap = {
  Palette,
  Code2,
  Smartphone,
  MessageSquare,
};

export default function Services() {
  const { locale, isRTL } = useLocale();

  const kicker = pickLocale(SECTIONS.services.kicker, locale);
  const title = pickLocale(SECTIONS.services.title, locale);
  const description = pickLocale(SECTIONS.services.description, locale);

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
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

        {/* Bento Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            const serviceTitle = pickLocale(service.title, locale);
            const serviceDescription = pickLocale(service.description, locale);
            const servicePrice = pickLocale(service.price, locale);
            const features = pickLocaleArray(service.features, locale);
            return (
              <ScrollReveal key={service.id} delay={i * 0.1}>
                <div className="group h-full p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center mb-5">
                    {Icon && <Icon size={22} className="text-accent" />}
                  </div>

                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {serviceTitle}
                  </h3>
                  <p
                    className={`text-sm text-text-secondary leading-relaxed flex-1 ${isRTL ? "text-right" : ""}`}
                  >
                    {serviceDescription}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {features.map((f) => (
                      <li
                        key={f}
                        className="text-xs text-muted flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-sm font-semibold text-accent">
                      {servicePrice}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-muted group-hover:text-accent transition-colors"
                    />
                  </div> */}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
