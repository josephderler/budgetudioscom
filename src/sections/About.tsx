import { motion } from "framer-motion";

const highlights = [
  { stat: "25+", label: "years of Dora adventures loved worldwide" },
  { stat: "150+", label: "countries where Dora is seen" },
  { stat: "32", label: "languages across the Dora universe" },
  { stat: "4+", label: "age rating, built for preschool milestones" },
];

export default function About() {
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
              Bringing the show to life
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-dora-purple-deep sm:text-4xl">
              More than a game — a real Dora experience
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-dora-purple-deep/75">
              We captured the heart of the show: interactivity, bilingual education and
              an adventurous spirit. It's like stepping right inside an episode, where
              every discovery builds curiosity, confidence and kindness.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Designed for toddlers, preschool and younger kids",
                "Frustration-free gameplay made for small hands",
                "ESRB Privacy Certified Kids' Privacy Seal",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-dora-purple-deep/80">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-dora-green/20 text-sm text-dora-green">
                    ✓
                  </span>
                  <span className="font-semibold">{t}</span>
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
            {highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-3xl bg-gradient-to-br from-white to-dora-cream p-6 text-center shadow-lg shadow-dora-purple/5 ring-1 ring-dora-violet/10"
              >
                <div className="font-display text-4xl font-extrabold text-dora-pink">
                  {h.stat}
                </div>
                <p className="mt-2 text-sm font-semibold leading-snug text-dora-purple-deep/70">
                  {h.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
