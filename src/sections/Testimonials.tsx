import { motion } from "framer-motion";
import { Star, Quotes } from "@phosphor-icons/react";
import { testimonials } from "@/data/site";
import { useI18n } from "@/i18n/LanguageContext";

function Stars({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex gap-0.5" aria-label={label}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          weight="fill"
          className={`h-4 w-4 ${i < value ? "text-dora-yellow" : "text-slate-200"}`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-dora-violet/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-dora-pink/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-dora-cream px-4 py-1.5 font-display text-xs font-extrabold uppercase tracking-widest text-dora-pink ring-1 ring-dora-pink/15">
            {t("tst.eyebrow")}
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-dora-purple-deep sm:text-4xl">
            {t("tst.title")}
          </h2>
          <p className="mt-4 text-lg text-dora-purple-deep/70">
            {t("tst.subtitle")}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item, i) => (
            <motion.figure
              key={item.author}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col rounded-3xl bg-white p-6 shadow-[0_12px_45px_-20px_rgba(109,40,217,0.3)] ring-1 ring-dora-violet/10"
            >
              <Quotes className="h-8 w-8 text-dora-violet/20" weight="fill" />
              <Stars value={item.stars} label={t("tst.starsAria").replace("{value}", String(item.stars))} />
              <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-dora-purple-deep/80">
                "{t(item.quoteKey)}"
              </blockquote>
              <figcaption className="mt-5 border-t border-dora-violet/10 pt-4">
                <p className="font-display font-extrabold text-dora-purple-deep">{item.author}</p>
                <p className="text-xs font-semibold text-dora-purple-deep/50">{t(item.roleKey)}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
