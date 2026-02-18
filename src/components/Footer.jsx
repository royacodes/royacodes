import { useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Twitter,
  Heart,
  Send,
} from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SOCIAL_LINKS, FOOTER_LINKS, HERO, SECTIONS } from "../data/constants";
import ScrollReveal from "./ScrollReveal";
import useLocale from "../hooks/useLocale";
import { pickLocale } from "../utils/locale";
import cv from "../assets/cv.pdf";

const socialIconMap = { Github, Linkedin, Twitter, Telegram: FaTelegramPlane };

export default function Footer() {
  const [email, setEmail] = useState("");
  const { locale, isRTL } = useLocale();

  const ctaKicker = pickLocale(SECTIONS.footer.ctaKicker, locale);
  const ctaTitle = pickLocale(SECTIONS.footer.ctaTitle, locale);
  const ctaDescription = pickLocale(SECTIONS.footer.ctaDescription, locale);
  const startConversation = pickLocale(
    SECTIONS.footer.startConversation,
    locale,
  );
  const downloadCv = pickLocale(SECTIONS.footer.downloadCv, locale);
  const brandDescription = pickLocale(SECTIONS.footer.brandDescription, locale);
  const linksTitle = pickLocale(SECTIONS.footer.linksTitle, locale);
  const connectTitle = pickLocale(SECTIONS.footer.connectTitle, locale);
  const newsletterTitle = pickLocale(SECTIONS.footer.newsletterTitle, locale);
  const newsletterDescription = pickLocale(
    SECTIONS.footer.newsletterDescription,
    locale,
  );
  const newsletterPlaceholder = pickLocale(
    SECTIONS.footer.newsletterPlaceholder,
    locale,
  );
  const subscribeAriaLabel = pickLocale(
    SECTIONS.footer.subscribeAriaLabel,
    locale,
  );
  const newsletterThanks = pickLocale(SECTIONS.footer.newsletterThanks, locale);
  const copyrightTail = pickLocale(SECTIONS.footer.copyright, locale);
  const builtWith = pickLocale(SECTIONS.footer.builtWith, locale);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire up newsletter signup here
    setEmail("");
    alert(newsletterThanks);
  };

  const toHomeHash = (hash) => {
    if (!hash?.startsWith("#")) {
      return hash;
    }

    return `/${hash}`;
  };

  return (
    <footer id="contact" className="border-t border-border bg-secondary/30">
      {/* Contact CTA Band */}
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3">
              {ctaKicker}
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              {ctaTitle}
            </h2>
            <p className="mt-4 text-text-secondary text-lg max-w-lg mx-auto">
              {ctaDescription}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <a
                href="mailto:roya.raastgar@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-full bg-accent text-primary hover:bg-accent-hover transition-all duration-200 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-0.5"
              >
                {startConversation}
                <ArrowUpRight size={16} />
              </a>
              {/* <a
                href={cv}
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-full border border-border text-text-primary hover:bg-card hover:border-accent/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                {downloadCv}
              </a> */}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <span className="text-xl font-bold tracking-tight text-text-primary">
                {HERO.name}
                <span className="text-accent">.</span>
              </span>
              <p
                className={`mt-3 text-sm text-text-secondary leading-relaxed ${isRTL ? "text-right" : ""}`}
              >
                {brandDescription}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
                {linksTitle}
              </h4>
              <ul className="space-y-2.5">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={toHomeHash(link.href)}
                      className="text-sm text-text-secondary hover:text-accent transition-colors"
                    >
                      {pickLocale(link.label, locale)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
                {connectTitle}
              </h4>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = socialIconMap[link.icon] || Github;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-200 hover:-translate-y-0.5"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
                {newsletterTitle}
              </h4>
              <p
                className={`text-sm text-text-secondary mb-3 ${isRTL ? "text-right" : ""}`}
              >
                {newsletterDescription}
              </p>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={newsletterPlaceholder}
                  required
                  className="flex-1 px-4 py-2.5 text-sm bg-card border border-border rounded-xl text-text-primary placeholder:text-muted focus:outline-none focus:border-accent/50 transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-accent text-primary hover:bg-accent-hover transition-colors"
                  aria-label={subscribeAriaLabel}
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted">
              © {new Date().getFullYear()} {HERO.name}. {copyrightTail}
            </p>
            <p className="text-xs text-muted flex items-center gap-1">
              {builtWith} <Heart size={12} className="text-accent" />{" "}
              {locale === "fa" ? "و React" : "and React"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
