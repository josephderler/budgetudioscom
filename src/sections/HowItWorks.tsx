import { motion } from "framer-motion";
import { DownloadSimple, GameController, Plant } from "@phosphor-icons/react";
import { useI18n } from "@/i18n/LanguageContext";

const steps = [
  {
    Icon: DownloadSimple,
    titleKey: "how.step1.title",
    descriptionKey: "how.step1.desc",
    accent: "from-dora-violet to-dora-purple",
  },
  {
    Icon: GameController,
    titleKey: "how.step2.title",
    descriptionKey: "how.step2.desc",
    accent: "from-dora-sky to-dora-blue",
  },
  {
    Icon: Plant,
    titleKey: "how.step3.title",
    descriptionKey: "how.step3.desc",
    accent: "from-dora-pink to-dora-magenta",
  },
];

export default function HowItWorks() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-dora-cream px-4 py-1.5 font-display text-xs font-extrabold uppercase tracking-widest text-dora-violet ring-1 ring-dora-violet/15">
            {t("how.eyebrow")}
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-dora-purple-deep sm:text-4xl">
            {t("how.title")}
          </h2>
          <p className="mt-4 text-lg text-dora-purple-deep/70">
            {t("how.subtitle")}
          </p>
        </div>

        <div className="relative mt-16">
          {/* connecting line (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-dora-violet/25 to-transparent md:block" />

          <div className="grid gap-10 md:grid-cols-3">
            {steps.map((s, i) => (
              <motion.div
                key={s.titleKey}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-center text-center"
              >
                {/* numbered node */}
                <div className="relative">
                  <span
                    className={`grid h-[4.5rem] w-[4.5rem] place-items-center rounded-2xl bg-gradient-to-br ${s.accent} text-white shadow-xl shadow-dora-purple/20`}
                  >
                    <s.Icon className="h-8 w-8" weight="duotone" />
                  </span>
                  <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-white font-display text-sm font-extrabold text-dora-purple-deep shadow-md ring-1 ring-dora-violet/10">
                    {i + 1}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl font-extrabold text-dora-purple-deep">
                  {t(s.titleKey)}
                </h3>
                <p className="mt-2.5 max-w-xs text-[15px] leading-relaxed text-dora-purple-deep/70">
                  {t(s.descriptionKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
