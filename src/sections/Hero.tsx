import { motion } from "framer-motion";
import { Sparkle, Star } from "@phosphor-icons/react";
import { heroShot, site } from "@/data/site";
import StoreButtons from "@/components/StoreButtons";
import PhoneMockup from "@/components/PhoneMockup";
import { useI18n } from "@/i18n/LanguageContext";

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
            <Star weight="fill" className="absolute inset-0 h-4 w-4 text-slate-200" />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star weight="fill" className="h-4 w-4 text-dora-yellow" />
            </span>
          </span>
        );
      })}
    </div>
  );
}

export default function Hero() {
  const { t } = useI18n();
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
            <Sparkle className="h-4 w-4" weight="fill" />
            {t("hero.badge")}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-dora-purple-deep sm:text-5xl lg:text-6xl"
          >
            {t("hero.title1")}
            <br />
            <span className="bg-gradient-to-r from-dora-pink via-dora-magenta to-dora-violet bg-clip-text text-transparent">
              {t("hero.title2")}
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-dora-purple-deep/75 lg:mx-0"
          >
            {t("hero.shortPitch")}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex justify-center lg:justify-start">
            <StoreButtons location="hero" />
          </motion.div>

          <motion.div
            variants={item}
            className="mt-6 flex items-center justify-center gap-3 lg:justify-start"
          >
            <Stars value={site.rating.stars} />
            <span className="text-sm font-bold text-dora-purple-deep/80">
              {t("hero.ratingLine")
                .replace("{stars}", String(site.rating.stars))
                .replace("{count}", site.rating.count)
                .replace("{source}", site.rating.source)}
            </span>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-5 flex flex-wrap items-center justify-center gap-2 lg:justify-start"
          >
            <span className="text-xs font-bold uppercase tracking-wide text-dora-purple-deep/50">
              {t("hero.availableIn")}
            </span>
            {site.languages.map((l) => (
              <span
                key={l}
                className="rounded-md bg-white/70 px-2 py-1 text-xs font-extrabold text-dora-purple-deep/70 ring-1 ring-dora-violet/10"
              >
                {l}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Device composition */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-white/40 blur-2xl" />

          {/* Back layer: second screen peeking behind */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40, rotate: 4 }}
            animate={{ opacity: 1, scale: 0.9, y: 0, rotate: 6 }}
            transition={{ duration: 1, delay: 0.45, ease: "easeOut" }}
            className="absolute inset-0 -z-10 translate-x-10 translate-y-6 opacity-70"
            aria-hidden="true"
          >
            <PhoneMockup src="/shots/4.webp" alt="" />
          </motion.div>

          {/* Front layer: main screen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: -2 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <PhoneMockup
              src={heroShot}
              alt="Dora: Explore and Play! gameplay — explore the jungle with Dora and friends"
              priority
            />
          </motion.div>

          {/* Floating rating chip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="animate-float-slow absolute -left-4 top-6 flex items-center gap-2 rounded-2xl bg-white/95 px-3.5 py-2.5 shadow-xl shadow-dora-purple/20 ring-1 ring-dora-violet/10 backdrop-blur"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-dora-yellow to-dora-orange text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.1l1-5.8L3.5 9.2l5.9-.9L12 3Z" />
              </svg>
            </span>
            <div className="leading-tight">
              <p className="font-display text-sm font-extrabold text-dora-purple-deep">
                {t("hero.ratingChip").replace("{stars}", String(site.rating.stars))}
              </p>
              <p className="text-[11px] font-semibold text-dora-purple-deep/50">
                {t("hero.ratingChipSub").replace("{count}", site.rating.count)}
              </p>
            </div>
          </motion.div>

          {/* Floating "free" chip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="animate-float-slower absolute -bottom-3 right-2 flex items-center gap-2 rounded-2xl bg-white/95 px-3.5 py-2.5 shadow-xl shadow-dora-purple/20 ring-1 ring-dora-violet/10 backdrop-blur"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-dora-green to-dora-sky text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[2.5]">
                <path d="m5 12 4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div className="leading-tight">
              <p className="font-display text-sm font-extrabold text-dora-purple-deep">
                {t("hero.freeChip")}
              </p>
              <p className="text-[11px] font-semibold text-dora-purple-deep/50">
                {t("hero.freeChipSub")}
              </p>
            </div>
          </motion.div>

          {/* Floating teacher-approved chip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="animate-float-slow absolute -bottom-6 left-0 flex items-center gap-2 rounded-2xl bg-white/95 px-3.5 py-2.5 shadow-xl shadow-dora-purple/20 ring-1 ring-dora-violet/10 backdrop-blur sm:-left-4"
          >
            <img
              src="/teacher.png"
              alt={t("teacher.badge")}
              width={36}
              height={36}
              className="h-9 w-9 shrink-0"
            />
            <div className="leading-tight">
              <p className="font-display text-sm font-extrabold text-dora-purple-deep">
                {t("hero.teacherChip")}
              </p>
              <p className="text-[11px] font-semibold text-dora-purple-deep/50">
                {t("hero.teacherChipSub")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
