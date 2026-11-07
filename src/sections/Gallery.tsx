import { motion } from "framer-motion";
import { shots } from "@/data/site";
import PhoneMockup from "@/components/PhoneMockup";

export default function Gallery() {
  return (
    <section id="gameplay" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-dora-cream to-white" />
      <div className="pointer-events-none absolute left-1/2 top-16 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-dora-sky/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 font-display text-xs font-extrabold uppercase tracking-widest text-dora-sky shadow-sm ring-1 ring-dora-sky/15">
            📱 A peek inside
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-dora-purple-deep sm:text-4xl lg:text-[2.75rem]">
            See the adventure in action
          </h2>
          <p className="mt-4 text-lg text-dora-purple-deep/70">
            Bright, friendly worlds designed for small hands and big imaginations.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shots.map((s, i) => (
            <motion.figure
              key={s.src + i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-[1.75rem] bg-white p-5 shadow-[0_12px_45px_-18px_rgba(109,40,217,0.35)] ring-1 ring-dora-violet/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_55px_-18px_rgba(109,40,217,0.45)]"
            >
              {/* top gradient wash */}
              <span
                className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${s.accent} opacity-10 transition-opacity duration-300 group-hover:opacity-20`}
              />

              {/* category tag */}
              <span
                className={`relative z-10 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${s.accent} px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-white shadow-sm`}
              >
                {s.tag}
              </span>

              <div className="relative z-10 mt-4">
                <PhoneMockup
                  src={s.src}
                  alt={`Dora: Explore and Play! — ${s.caption}`}
                  className="transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>

              <figcaption className="relative z-10 mt-5 flex items-center justify-between">
                <span className="font-display text-base font-extrabold text-dora-purple-deep">
                  {s.caption}
                </span>
                <span
                  className={`grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br ${s.accent} text-xs font-bold text-white opacity-0 transition-all duration-300 group-hover:opacity-100`}
                  aria-hidden="true"
                >
                  →
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
