import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SECTIONS } from "../data/constants";
import useLocale from "../hooks/useLocale";
import { pickLocale } from "../utils/locale";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { locale, toggleLocale } = useLocale();

  const cta = pickLocale(SECTIONS.header.cta, locale);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/80 backdrop-blur-xl border-b border-border shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="relative z-50">
          <span className="text-xl font-bold tracking-tight text-text-primary">
            Roya
            <span className="text-accent">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 relative group"
              >
                {pickLocale(link.label, locale)}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={toggleLocale}
            className="hidden md:inline-flex items-center justify-center px-3 py-2 rounded-full border border-border bg-card/40 text-text-secondary hover:text-text-primary hover:border-accent/30 transition-all"
            aria-label={pickLocale(SECTIONS.header.toggleAriaLabel, locale)}
          >
            {locale === "fa" ? "EN" : "FA"}
          </button>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full bg-accent text-primary hover:bg-accent-hover transition-all duration-200 hover:shadow-lg hover:shadow-accent/20"
          >
            {cta}
            <ArrowUpRight size={14} />
          </a>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden relative z-50 text-text-primary p-1"
            aria-label={pickLocale(SECTIONS.header.menuAriaLabel, locale)}
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-primary/98 backdrop-blur-xl z-40 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              <motion.button
                type="button"
                onClick={() => {
                  toggleLocale();
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="text-base font-semibold rounded-full border border-border px-6 py-3 text-text-primary hover:border-accent/30 hover:text-accent transition-colors"
              >
                {locale === "fa" ? "English" : "فارسی"}
              </motion.button>
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + i * 0.05 }}
                  className="text-2xl font-medium text-text-primary hover:text-accent transition-colors"
                >
                  {pickLocale(link.label, locale)}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 inline-flex items-center gap-2 px-8 py-3 text-base font-medium rounded-full bg-accent text-primary hover:bg-accent-hover transition-all"
              >
                {cta}
                <ArrowUpRight size={16} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
