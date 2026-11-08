import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, type Icon as PhosphorIcon } from "@phosphor-icons/react";
import { useI18n } from "@/i18n/LanguageContext";

export type Section = { id: string; title: string };

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  Icon: PhosphorIcon;
  accent: string; // gradient classes for the hero + icon
  sections: Section[];
  children: ReactNode;
};

export default function LegalLayout({
  eyebrow,
  title,
  intro,
  updated,
  Icon,
  accent,
  sections,
  children,
}: Props) {
  const { t } = useI18n();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pb-24">
      {/* Hero header */}
      <header className={`relative overflow-hidden bg-gradient-to-br ${accent} pt-28 pb-16`}>
        <div className="pointer-events-none absolute -left-16 -top-10 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-black/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/25"
          >
            <ArrowLeft className="h-4 w-4" weight="bold" />
            {t("legal.backHome")}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex items-start gap-5"
          >
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white/20 text-white shadow-lg ring-1 ring-white/30 backdrop-blur">
              <Icon className="h-8 w-8" weight="duotone" />
            </span>
            <div>
              <span className="font-display text-xs font-extrabold uppercase tracking-widest text-white/80">
                {eyebrow}
              </span>
              <h1 className="mt-1 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                {title}
              </h1>
            </div>
          </motion.div>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">{intro}</p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur">
            {t("legal.lastUpdated")} {updated}
          </p>
        </div>
      </header>

      {/* Body: sticky TOC + content */}
      <div className="mx-auto mt-12 max-w-5xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
          {/* Table of contents */}
          <aside className="hidden lg:block">
            <nav className="sticky top-24">
              <p className="mb-3 font-display text-xs font-extrabold uppercase tracking-widest text-dora-purple-deep/50">
                {t("legal.onThisPage")}
              </p>
              <ul className="space-y-1 border-l-2 border-dora-violet/15">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="-ml-0.5 block border-l-2 border-transparent py-1.5 pl-4 text-sm font-semibold text-dora-purple-deep/60 transition-colors hover:border-dora-pink hover:text-dora-pink"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content card */}
          <article className="legal rounded-3xl bg-white p-7 text-[15px] leading-relaxed text-dora-purple-deep/80 shadow-[0_15px_50px_-25px_rgba(109,40,217,0.35)] ring-1 ring-dora-violet/10 sm:p-10">
            {children}
          </article>
        </div>
      </div>
    </main>
  );
}
