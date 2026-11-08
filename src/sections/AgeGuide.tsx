import { motion } from "framer-motion";
import { Check, Baby } from "@phosphor-icons/react";
import { ageStages } from "@/data/site";
import { useI18n } from "@/i18n/LanguageContext";

export default function AgeGuide() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-dora-cream py-20 md:py-28">
      <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-dora-pink/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 font-display text-xs font-extrabold uppercase tracking-widest text-dora-pink shadow-sm ring-1 ring-dora-pink/15">
            <Baby className="h-3.5 w-3.5" weight="fill" />
            {t("age.eyebrow")}
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-dora-purple-deep sm:text-4xl">
            {t("age.title")}
          </h2>
          <p className="mt-4 text-lg text-dora-purple-deep/70">
            {t("age.subtitle")}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ageStages.map((s, i) => (
            <motion.article
              key={s.rangeKey}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl bg-white p-7 shadow-[0_12px_45px_-20px_rgba(109,40,217,0.3)] ring-1 ring-dora-violet/10 transition-transform duration-300 hover:-translate-y-2"
            >
              <span
                className={`inline-flex rounded-full bg-gradient-to-r ${s.accent} px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-white shadow-sm`}
              >
                {t(s.rangeKey)}
              </span>
              <h3 className="mt-4 font-display text-xl font-extrabold text-dora-purple-deep">
                {t(s.titleKey)}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {s.pointKeys.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[15px] text-dora-purple-deep/75">
                    <span
                      className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-to-br ${s.accent} text-white`}
                    >
                      <Check className="h-3 w-3" weight="bold" />
                    </span>
                    <span className="font-medium">{t(p)}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
