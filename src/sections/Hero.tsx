import { motion } from "framer-motion";
import { heroShot, site } from "@/data/site";
import StoreButtons from "@/components/StoreButtons";
import PhoneMockup from "@/components/PhoneMockup";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring" as const, bounce: 0.25, duration: 0.9 },
  },
};

function Stars({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <span key={i} className="relative inline-block h-4 w-4">
            <span className="absolute inset-0 text-slate-300">★</span>
            <span
              className="absolute inset-0 overflow-hidden text-dora-yellow"
              style={{ width: `${fill * 100}%` }}
            >
              ★
            </span>
          </span>
        );
      })}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-28 sm:pt-32 md:pb-28 md:pt-36">
      {/* Playful gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(130%_120%_at_50%_0%,#fdf4ff_35%,#c4b5fd_75%,#8b5cf6_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-full">
        <div className="animate-float-slow absolute left-[6%] top-[18%] h-24 w-24 rounded-full bg-dora-pink/30 blur-2xl" />
        <div className="animate-float-slower absolute right-[8%] top-[30%] h-32 w-32 rounded-full bg-dora-sky/40 blur-2xl" />
        <div className="animate-float-slow absolute bottom-[12%] left-[20%] h-20 w-20 rounded-full bg-dora-yellow/40 blur-2xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8">
        {/* Copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-sm font-bold text-dora-purple shadow-sm ring-1 ring-dora-violet/20 backdrop-blur"
          >
            🌟 Ages 4+ · Education · Free to play
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-dora-purple-deep sm:text-5xl lg:text-6xl"
          >
            Explore, Learn &amp; Play
            <br />
            <span className="bg-gradient-to-r from-dora-pink via-dora-magenta to-dora-violet bg-clip-text text-transparent">
              with Dora!
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-dora-purple-deep/75 lg:mx-0"
          >
            {site.shortPitch}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex justify-center lg:justify-start">
            <StoreButtons />
          </motion.div>

          <motion.div
            variants={item}
            className="mt-6 flex items-center justify-center gap-3 lg:justify-start"
          >
            <Stars value={site.rating.stars} />
            <span className="text-sm font-bold text-dora-purple-deep/80">
              {site.rating.stars} · {site.rating.count} ratings on the {site.rating.source}
            </span>
          </motion.div>
        </motion.div>

        {/* Device */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotate: -2 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-white/40 blur-2xl" />
          <PhoneMockup
            src={heroShot}
            alt="Dora: Explore and Play! gameplay — explore the jungle with Dora and friends"
          />
          {/* floating emoji accents */}
          <span className="animate-float-slow absolute -left-4 -top-4 text-4xl drop-shadow">⭐</span>
          <span className="animate-float-slower absolute -right-3 top-1/3 text-4xl drop-shadow">🎵</span>
          <span className="animate-float-slow absolute -bottom-5 left-10 text-4xl drop-shadow">🗺️</span>
        </motion.div>
      </div>
    </section>
  );
}
