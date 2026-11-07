import { useRef } from "react";
import { motion } from "framer-motion";
import { features, type Feature } from "@/data/site";

function FeatureCard({ f, index }: { f: Feature; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-[1.75rem] bg-white p-px shadow-[0_10px_40px_-15px_rgba(109,40,217,0.25)] transition-transform duration-300 hover:-translate-y-2"
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

        {/* Icon tile */}
        <div
          className={`relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${f.accent} text-white shadow-lg transition-transform duration-300 group-hover:scale-105`}
        >
          <f.Icon className="h-7 w-7" />
          <span className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <h3 className="mt-6 font-display text-xl font-extrabold text-dora-purple-deep">
          {f.title}
        </h3>
        <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-dora-purple-deep/70">
          {f.description}
        </p>

        {/* Animated underline accent */}
        <span
          className={`mt-5 h-1 w-10 rounded-full bg-gradient-to-r ${f.accent} transition-all duration-300 group-hover:w-20`}
        />
      </div>
    </motion.article>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-dora-cream py-20 md:py-28">
      {/* soft decorative glow */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-dora-violet/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-dora-pink/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 font-display text-xs font-extrabold uppercase tracking-widest text-dora-pink shadow-sm ring-1 ring-dora-pink/15">
            ✨ Why kids &amp; parents love it
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-dora-purple-deep sm:text-4xl lg:text-[2.75rem]">
            Big adventures, little learners
          </h2>
          <p className="mt-4 text-lg text-dora-purple-deep/70">
            Every tap is a chance to explore, learn and grow — wrapped in the colorful,
            friendly world of Dora.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FeatureCard key={f.title} f={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
