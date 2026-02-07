import {
  Download,
  FileCheck,
  BookOpen,
  Layout,
  ArrowUpRight,
} from "lucide-react";
import { RESOURCES, SECTIONS } from "../data/constants";
import ScrollReveal from "./ScrollReveal";
import useLocale from "../hooks/useLocale";
import { pickLocale } from "../utils/locale";

const iconMap = { FileCheck, BookOpen, Layout };

export default function Resources() {
  const { locale, isRTL } = useLocale();

  const kicker = pickLocale(SECTIONS.resources.kicker, locale);
  const title = pickLocale(SECTIONS.resources.title, locale);
  const description = pickLocale(SECTIONS.resources.description, locale);
  const downloadFree = pickLocale(SECTIONS.resources.downloadFree, locale);

  return (
    <section className="py-24 md:py-32">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {RESOURCES.map((res, i) => {
            const Icon = iconMap[res.icon];
            const resTitle = pickLocale(res.title, locale);
            const resDescription = pickLocale(res.description, locale);
            return (
              <ScrollReveal key={res.id} delay={i * 0.1}>
                <div className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center">
                      {Icon && <Icon size={22} className="text-accent" />}
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full border border-border text-muted">
                      {res.format}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {resTitle}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed flex-1">
                    {resDescription}
                  </p>

                  <a
                    href={res.downloadLink}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors group/link"
                  >
                    <Download size={14} />
                    {downloadFree}
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                  </a>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
