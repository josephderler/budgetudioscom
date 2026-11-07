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
          <span className="font-display text-sm font-extrabold uppercase tracking-widest text-dora-sky">
            A peek inside
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-dora-purple-deep sm:text-4xl">
            See the adventure in action
          </h2>
          <p className="mt-4 text-lg text-dora-purple-deep/70">
            Bright, friendly worlds designed for small hands and big imaginations.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {shots.map((s, i) => (
            <motion.figure
              key={s.src}
              initial={{ opacity: 0, y: 30, rotate: i % 2 ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1.5 : -1.5 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
              className="group"
            >
              <PhoneMockup
                src={s.src}
                alt={`Dora: Explore and Play! — ${s.caption}`}
                className="transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1.03]"
              />
              <figcaption className="mt-4 text-center font-display text-base font-extrabold text-dora-purple-deep/80">
                {s.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
