import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { PROJECTS, PORTFOLIO_FILTERS, SECTIONS } from "../data/constants";
import ScrollReveal from "./ScrollReveal";
import useLocale from "../hooks/useLocale";
import { pickLocale } from "../utils/locale";

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const { locale, isRTL } = useLocale();

  const kicker = pickLocale(SECTIONS.portfolio.kicker, locale);
  const title = pickLocale(SECTIONS.portfolio.title, locale);
  const description = pickLocale(SECTIONS.portfolio.description, locale);
  const viewProject = pickLocale(SECTIONS.portfolio.viewProject, locale);

  const filtered =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.categories.includes(active));

  return (
    <section id="work" className="py-24 md:py-32 bg-secondary/50">
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

        {/* Filters */}
        <ScrollReveal delay={0.15}>
          <div className="flex flex-wrap gap-2 mt-10">
            {PORTFOLIO_FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`px-5 py-2 text-sm font-medium rounded-full border transition-all duration-200 ${
                  active === f.value
                    ? "bg-accent text-primary border-accent"
                    : "border-border text-text-secondary hover:border-accent/40 hover:text-text-primary"
                }`}
              >
                {pickLocale(f.label, locale)}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                {(() => {
                  const projectTitle = pickLocale(project.title, locale);
                  const projectDescription = pickLocale(
                    project.description,
                    locale,
                  );
                  return (
                    <a
                      href={project.link}
                      className="group block rounded-2xl overflow-hidden bg-card border border-border hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5"
                    >
                      {/* Image */}
                      <div className="relative aspect-[3/2] overflow-hidden bg-secondary">
                        <img
                          src={project.image}
                          alt={projectTitle}
                          loading="lazy"
                          className="w-full h-full object-contain p-4"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                          <div className="flex items-center gap-2 text-sm font-medium text-text-primary">
                            {viewProject}
                            <ExternalLink size={14} />
                          </div>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-5">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-text-primary group-hover:text-accent transition-colors">
                            {projectTitle}
                          </h3>
                          <ArrowUpRight
                            size={16}
                            className="text-muted group-hover:text-accent transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </div>
                        <p className="text-sm text-text-secondary line-clamp-2 mb-3">
                          {projectDescription}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2.5 py-1 rounded-full bg-accent-muted text-accent font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </a>
                  );
                })()}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
