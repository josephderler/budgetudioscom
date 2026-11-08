import { useRef } from "react";
import { motion } from "framer-motion";
import { Sparkle } from "@phosphor-icons/react";
import { features, type Feature } from "@/data/site";
import AnimatedIcon from "@/components/AnimatedIcon";
import { useI18n } from "@/i18n/LanguageContext";

function FeatureCard({ f, index }: { f: Feature; index: number }) {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Inner motion element owns the hover state so the icon can inherit it */}
      <motion.article
        ref={ref}
        onMouseMove={onMove}
        initial="rest"
        whileHover="active"
        animate="rest"
        whileTap="active"
        className="group relative h-full overflow-hidden rounded-[1.75rem] bg-white p-px shadow-[0_10px_40px_-15px_rgba(109,40,217,0.25)] transition-transform duration-300 hover:-translate-y-2"
      >
        {/* Gradient border that brightens on hover */}
        <span
          className={`pointer-events-none absolute inset-0 rounded-[1.75rem] bg-gradient-to-br ${f.accent} opacity-15 transition-opacity duration-300 group-hover:opacity-100`}
        />

        {/* Spotlight that follows the cursor */}
        <span
          className="pointer-events-none absolute inset-px rounded-[1.65rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(260px circle at var(--mx,50%) var(--my,0%), rgba(255,255,255,0.9), transparent 65%)",
          }}
        />

        {/* Inner surface */}
        <div className="relative z-10 flex h-full flex-col rounded-[1.7rem] bg-white p-7">
          {/* Number badge */}
          <span className="absolute right-6 top-6 font-display text-5xl font-extrabold leading-none text-dora-purple/5 transition-colors duration-300 group-hover:text-dora-purple/10">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Icon tile with animated Phosphor icon */}
          <div
            className={`relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${f.accent} text-white shadow-lg transition-transform duration-300 group-hover:scale-105`}
          >
            <AnimatedIcon icon={f.Icon} motionType={f.motion} className="h-7 w-7" />
          </div>

          <h3 className="mt-6 font-display text-xl font-extrabold text-dora-purple-deep">
            {t(f.titleKey)}
          </h3>
          <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-dora-purple-deep/70">
            {t(f.descriptionKey)}
          </p>

          {/* Animated underline accent */}
          <span
            className={`mt-5 h-1 w-10 rounded-full bg-gradient-to-r ${f.accent} transition-all duration-300 group-hover:w-20`}
          />
        </div>
      </motion.article>
    </motion.div>
  );
}

export default function Features() {
  const { t } = useI18n();
  return (
    <section id="features" className="relative overflow-hidden bg-dora-cream py-20 md:py-28">
      {/* soft decorative glow */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-dora-violet/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-dora-pink/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 font-display text-xs font-extrabold uppercase tracking-widest text-dora-pink shadow-sm ring-1 ring-dora-pink/15">
            <Sparkle className="h-3.5 w-3.5" weight="fill" />
            {t("feat.eyebrow")}
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-dora-purple-deep sm:text-4xl lg:text-[2.75rem]">
            {t("feat.title")}
          </h2>
          <p className="mt-4 text-lg text-dora-purple-deep/70">
            {t("feat.subtitle")}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FeatureCard key={f.titleKey} f={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
