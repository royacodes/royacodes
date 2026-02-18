import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { ARTICLES, TUTORIALS, SECTIONS } from "../data/constants";
import useLocale from "../hooks/useLocale";
import { pickLocale } from "../utils/locale";
import Markdown from "../components/Markdown";

const CATEGORY_LABELS = {
  Article: { en: "Article", fa: "مقاله" },
  Tutorial: { en: "Tutorial", fa: "آموزش" },
  "Case Study": { en: "Case Study", fa: "مطالعه\u200c موردی" },
};

function findPost(type, slugOrId) {
  const list = type === "tutorials" ? TUTORIALS : ARTICLES;

  return (
    list.find((p) => p.slug === slugOrId) ||
    list.find((p) => String(p.id) === String(slugOrId)) ||
    null
  );
}

export default function WritingDetail() {
  const { type, slug } = useParams();
  const { locale, isRTL } = useLocale();

  const nfKicker = pickLocale(SECTIONS.writingDetail.notFoundKicker, locale);
  const nfTitle = pickLocale(SECTIONS.writingDetail.notFoundTitle, locale);
  const nfDesc = pickLocale(SECTIONS.writingDetail.notFoundDescription, locale);
  const backToWritings = pickLocale(
    SECTIONS.writingDetail.backToWritings,
    locale,
  );
  const back = pickLocale(SECTIONS.writingDetail.back, locale);
  const emptyContentPlaceholder = pickLocale(
    SECTIONS.writingDetail.emptyContentPlaceholder,
    locale,
  );

  const normalizedType = type === "tutorials" ? "tutorials" : "articles";
  const post = findPost(normalizedType, slug);

  if (!post) {
    return (
      <div
        className={`max-w-3xl mx-auto px-6 pt-28 pb-24 ${isRTL ? "text-right" : ""}`}
      >
        <p className="text-sm text-muted mb-3">{nfKicker}</p>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          {nfTitle}
        </h1>
        <p className="mt-4 text-text-secondary">{nfDesc}</p>
        <Link
          to="/#writings"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold rounded-full border border-border px-6 py-3 text-text-primary hover:bg-card hover:border-accent/30 transition-all"
        >
          <ArrowLeft size={16} />
          {backToWritings}
        </Link>
      </div>
    );
  }

  const title =
    typeof post.title === "string"
      ? post.title
      : post.title?.[locale] || post.title?.en;
  const excerpt =
    typeof post.excerpt === "string"
      ? post.excerpt
      : post.excerpt?.[locale] || post.excerpt?.en;
  const content = Array.isArray(post.content)
    ? post.content
    : post.content?.[locale] || post.content?.en || "";

  const categoryLabel = pickLocale(
    CATEGORY_LABELS[post.category] || post.category,
    locale,
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className={`max-w-3xl mx-auto px-6 pt-28 pb-24 ${isRTL ? "text-right" : ""}`}
    >
      <Link
        to="/#writings"
        className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
      >
        <ArrowLeft size={16} />
        {back}
      </Link>

      <div className="mt-6">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${
              post.category === "Tutorial"
                ? "bg-blue-500/10 text-blue-400"
                : post.category === "Case Study"
                  ? "bg-purple-500/10 text-purple-400"
                  : "bg-accent-muted text-accent"
            }`}
          >
            {categoryLabel}
          </span>

          <span className="text-xs text-muted inline-flex items-center gap-1">
            <Clock size={12} />
            {post.readTime}
          </span>
          <span className="text-xs text-muted inline-flex items-center gap-1">
            <Calendar size={12} />
            {post.date}
          </span>
        </div>

        <h1 className="mt-5 text-3xl md:text-5xl font-bold tracking-tight leading-tight text-balance">
          {title}
        </h1>
        <p className="mt-4 text-lg text-text-secondary leading-relaxed">
          {excerpt}
        </p>

        {post.image && (
          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <img
              src={post.image}
              alt={title}
              className="h-64 w-full object-cover md:h-80"
              loading="lazy"
            />
          </div>
        )}

        {Array.isArray(post.tags) && post.tags.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full border border-border text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-10 pt-10 border-t border-border">
          {typeof content === "string" ? (
            content.trim() ? (
              <div className="space-y-5">
                <Markdown content={content} />
              </div>
            ) : (
              <p className="text-text-secondary leading-relaxed">
                {emptyContentPlaceholder}
              </p>
            )
          ) : (
            <div className="space-y-5">
              {(content.length ? content : [emptyContentPlaceholder]).map(
                (p, i) => (
                  <p key={i} className="text-text-secondary leading-relaxed">
                    {p}
                  </p>
                ),
              )}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
