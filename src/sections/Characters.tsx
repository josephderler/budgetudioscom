import { motion } from "framer-motion";
import { characters } from "@/data/site";
import { useI18n } from "@/i18n/LanguageContext";

export default function Characters() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-dora-cream py-20 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-dora-sky/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 font-display text-xs font-extrabold uppercase tracking-widest text-dora-violet shadow-sm ring-1 ring-dora-violet/15">
            {t("char.eyebrow")}
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-dora-purple-deep sm:text-4xl">
            {t("char.title")}
          </h2>
          <p className="mt-4 text-lg text-dora-purple-deep/70">
            {t("char.subtitle")}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {characters.map((c, i) => (
            <motion.article
              key={c.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl bg-white p-6 text-center shadow-[0_12px_45px_-20px_rgba(109,40,217,0.3)] ring-1 ring-dora-violet/10 transition-transform duration-300 hover:-translate-y-2"
            >
              <span
                className={`pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b ${c.accent} opacity-10 transition-opacity duration-300 group-hover:opacity-20`}
              />

              {/* initial medallion */}
              <div
                className={`relative mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br ${c.accent} font-display text-3xl font-extrabold text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
              >
                {c.name.charAt(0)}
                <span className="absolute inset-0 rounded-full ring-4 ring-white/30" />
              </div>

              <h3 className="relative mt-4 font-display text-lg font-extrabold text-dora-purple-deep">
                {c.name}
              </h3>
              <p
                className={`relative mt-0.5 bg-gradient-to-r ${c.accent} bg-clip-text text-xs font-extrabold uppercase tracking-wide text-transparent`}
              >
                {t(c.roleKey)}
              </p>
              <p className="relative mt-3 text-sm leading-relaxed text-dora-purple-deep/70">
                {t(c.blurbKey)}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
