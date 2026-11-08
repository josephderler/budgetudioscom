import { motion } from "framer-motion";
import { Sparkle, Globe, Translate, Baby, Check } from "@phosphor-icons/react";
import CountUp from "@/components/CountUp";
import { useI18n } from "@/i18n/LanguageContext";

const highlights = [
  { stat: "25+", labelKey: "about.stat1.label", Icon: Sparkle, accent: "from-dora-violet to-dora-purple" },
  { stat: "150+", labelKey: "about.stat2.label", Icon: Globe, accent: "from-dora-sky to-dora-blue" },
  { stat: "32", labelKey: "about.stat3.label", Icon: Translate, accent: "from-dora-pink to-dora-magenta" },
  { stat: "4+", labelKey: "about.stat4.label", Icon: Baby, accent: "from-dora-green to-dora-sky" },
];

export default function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-display text-sm font-extrabold uppercase tracking-widest text-dora-violet">
              {t("about.eyebrow")}
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-dora-purple-deep sm:text-4xl">
              {t("about.title")}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-dora-purple-deep/75">
              {t("about.body")}
            </p>
            <ul className="mt-6 space-y-3">
              {["about.check1", "about.check2", "about.check3"].map((key) => (
                <li key={key} className="flex items-start gap-3 text-dora-purple-deep/80">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-dora-green/15 text-dora-green">
                    <Check className="h-3.5 w-3.5" weight="bold" />
                  </span>
                  <span className="font-semibold">{t(key)}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-5"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.labelKey}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-[0_12px_40px_-18px_rgba(109,40,217,0.3)] ring-1 ring-dora-violet/10 transition-transform duration-300 hover:-translate-y-1.5"
              >
                {/* corner glow */}
                <span
                  className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${h.accent} opacity-10 blur-xl transition-opacity duration-300 group-hover:opacity-30`}
                />

                <div
                  className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${h.accent} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                >
                  <h.Icon className="h-5 w-5" weight="duotone" />
                </div>

                <CountUp
                  value={h.stat}
                  className={`mt-4 block bg-gradient-to-r ${h.accent} bg-clip-text font-display text-4xl font-extrabold leading-none text-transparent`}
                />
                <p className="mt-2 text-sm font-semibold leading-snug text-dora-purple-deep/70">
                  {t(h.labelKey)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
