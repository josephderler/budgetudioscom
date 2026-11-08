import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DeviceMobile, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { shots } from "@/data/site";
import PhoneMockup from "@/components/PhoneMockup";
import { useI18n } from "@/i18n/LanguageContext";

const AUTOPLAY_MS = 4000;

export default function Gallery() {
  const { t } = useI18n();
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const count = shots.length;

  const go = useCallback(
    (next: number, direction: number) => {
      setDir(direction);
      setIndex((next + count) % count);
    },
    [count]
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(index + 1, 1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [index, paused, go]);

  const current = shots[index];

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60, scale: 0.96 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60, scale: 0.96 }),
  };

  return (
    <section id="gameplay" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-dora-cream to-white" />
      <div className="pointer-events-none absolute left-1/2 top-16 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-dora-sky/20 blur-3xl" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 font-display text-xs font-extrabold uppercase tracking-widest text-dora-sky shadow-sm ring-1 ring-dora-sky/15">
            <DeviceMobile className="h-3.5 w-3.5" weight="fill" />
            {t("gallery.eyebrow")}
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-dora-purple-deep sm:text-4xl lg:text-[2.75rem]">
            {t("gallery.title")}
          </h2>
          <p className="mt-4 text-lg text-dora-purple-deep/70">
            {t("gallery.subtitle")}
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="mx-auto max-w-2xl">
            <div className="relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-[0_18px_55px_-22px_rgba(109,40,217,0.4)] ring-1 ring-dora-violet/10 sm:p-8">
              {/* category tag */}
              <div className="mb-4 flex justify-center">
                <span
                  className={`inline-flex items-center rounded-full bg-gradient-to-r ${current.accent} px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-white shadow-sm`}
                >
                  {t(current.tagKey)}
                </span>
              </div>

              <div className="relative">
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.div
                    key={index}
                    custom={dir}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <PhoneMockup
                      src={current.src}
                      alt={`Dora: Explore and Play! — ${t(current.captionKey)}`}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <p className="mt-5 text-center font-display text-lg font-extrabold text-dora-purple-deep">
                {t(current.captionKey)}
              </p>
            </div>
          </div>

          {/* Arrows */}
          <button
            type="button"
            onClick={() => go(index - 1, -1)}
            aria-label={t("gallery.prevAria")}
            className="absolute left-0 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-dora-purple-deep shadow-lg ring-1 ring-dora-violet/10 transition-transform hover:scale-110 sm:-left-4"
          >
            <CaretLeft className="h-5 w-5" weight="bold" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1, 1)}
            aria-label={t("gallery.nextAria")}
            className="absolute right-0 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-dora-purple-deep shadow-lg ring-1 ring-dora-violet/10 transition-transform hover:scale-110 sm:-right-4"
          >
            <CaretRight className="h-5 w-5" weight="bold" />
          </button>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {shots.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i, i > index ? 1 : -1)}
                aria-label={t("gallery.goToAria").replace("{n}", String(i + 1))}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-7 bg-dora-pink" : "w-2 bg-dora-violet/25 hover:bg-dora-violet/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
