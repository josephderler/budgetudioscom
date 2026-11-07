import { motion } from "framer-motion";
import { features } from "@/data/site";

export default function Features() {
  return (
    <section id="features" className="relative bg-dora-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-display text-sm font-extrabold uppercase tracking-widest text-dora-pink">
            Why kids &amp; parents love it
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-dora-purple-deep sm:text-4xl">
            Big adventures, little learners
          </h2>
          <p className="mt-4 text-lg text-dora-purple-deep/70">
            Every tap is a chance to explore, learn and grow — wrapped in the colorful,
            friendly world of Dora.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-3xl bg-white p-7 shadow-lg shadow-dora-purple/5 ring-1 ring-dora-violet/10 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div
                className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${f.accent} text-3xl shadow-md transition-transform duration-300 group-hover:scale-110`}
              >
                {f.emoji}
              </div>
              <h3 className="mt-5 font-display text-xl font-extrabold text-dora-purple-deep">
                {f.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-dora-purple-deep/70">
                {f.description}
              </p>
              <span
                className={`pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-gradient-to-br ${f.accent} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20`}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
