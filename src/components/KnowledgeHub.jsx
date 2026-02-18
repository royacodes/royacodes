import { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, Calendar, ArrowUpRight } from "lucide-react";
import { ARTICLES, TUTORIALS, SECTIONS } from "../data/constants";
import ScrollReveal from "./ScrollReveal";
import useLocale from "../hooks/useLocale";
import { pickLocale } from "../utils/locale";

const CATEGORY_LABELS = {
  Article: { en: "Article", fa: "مقاله" },
  Tutorial: { en: "Tutorial", fa: "آموزش" },
  "Case Study": { en: "Case Study", fa: "مطالعه\u200c موردی" },
};

function WritingCard({ item, index, type }) {
  const { locale, isRTL } = useLocale();

  const title =
    typeof item.title === "string"
      ? item.title
      : item.title?.[locale] || item.title?.en;
  const excerpt =
    typeof item.excerpt === "string"
      ? item.excerpt
      : item.excerpt?.[locale] || item.excerpt?.en;

  const categoryLabel = pickLocale(
    CATEGORY_LABELS[item.category] || item.category,
    locale,
  );

  return (
    <ScrollReveal delay={index * 0.1}>
      <Link
        to={`/writings/${type}/${item.slug ?? item.id}`}
        className="group block p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5"
      >
        {item.image && (
          <div className="mb-4 overflow-hidden rounded-xl border border-border">
            <img
              src={item.image}
              alt={title}
              className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
        )}

        <div className="flex items-center gap-3 mb-4">
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${
              item.category === "Tutorial"
                ? "bg-blue-500/10 text-blue-400"
                : item.category === "Case Study"
                  ? "bg-purple-500/10 text-purple-400"
                  : "bg-accent-muted text-accent"
            }`}
          >
            {categoryLabel}
          </span>
          <div className="flex items-center gap-1 text-xs text-muted">
            <Clock size={12} />
            {item.readTime}
          </div>
        </div>

        <h3
          className={`text-lg font-semibold text-text-primary group-hover:text-accent transition-colors leading-snug mb-2 ${
            isRTL ? "text-right" : ""
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-sm text-text-secondary leading-relaxed mb-4 line-clamp-3 ${isRTL ? "text-right" : ""}`}
        >
          {excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-muted">
            <Calendar size={12} />
            {item.date}
          </div>
          <ArrowUpRight
            size={16}
            className="text-muted group-hover:text-accent transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
      </Link>
    </ScrollReveal>
  );
}

export default function KnowledgeHub() {
  const [activeTab, setActiveTab] = useState("articles");
  const { locale, isRTL } = useLocale();

  const kicker = pickLocale(SECTIONS.knowledge.kicker, locale);
  const title = pickLocale(SECTIONS.knowledge.title, locale);
  const description = pickLocale(SECTIONS.knowledge.description, locale);

  const tabs = [
    {
      key: "articles",
      label: pickLocale(SECTIONS.knowledge.tabs.articles, locale),
    },
    {
      key: "tutorials",
      label: pickLocale(SECTIONS.knowledge.tabs.tutorials, locale),
    },
  ];

  const items = activeTab === "articles" ? ARTICLES : TUTORIALS;

  return (
    <section id="writings" className="py-24 md:py-32">
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

        {/* Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="mt-10 inline-flex rounded-full bg-secondary border border-border p-1">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-200 ${
                  activeTab === tab.key
                    ? "bg-accent text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {items.map((item, i) => (
            <WritingCard key={item.id} item={item} index={i} type={activeTab} />
          ))}
        </div>
      </div>
    </section>
  );
}
