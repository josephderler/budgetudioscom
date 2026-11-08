import { motion } from "framer-motion";
import { SealCheck, Check } from "@phosphor-icons/react";
import { useI18n } from "@/i18n/LanguageContext";

export default function TeacherApproved() {
  const { t } = useI18n();
  const points = [t("teacher.point1"), t("teacher.point2"), t("teacher.point3")];

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-dora-sky/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-dora-violet/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Badge art */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="relative rounded-[2.5rem] bg-gradient-to-br from-dora-sky/15 to-dora-violet/15 p-10 ring-1 ring-dora-violet/10">
              <div className="pointer-events-none absolute -inset-2 -z-10 rounded-[2.75rem] bg-white/40 blur-2xl" />
              <img
                src="/teacher.png"
                alt={t("teacher.badge")}
                width={280}
                height={280}
                loading="lazy"
                className="animate-float-slow mx-auto h-auto w-full max-w-[260px] drop-shadow-xl"
              />
              <span className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-4 py-1.5 font-display text-xs font-extrabold uppercase tracking-widest text-dora-blue shadow-lg ring-1 ring-dora-sky/20">
                {t("teacher.badge")}
              </span>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-dora-sky/10 px-4 py-1.5 font-display text-xs font-extrabold uppercase tracking-widest text-dora-blue ring-1 ring-dora-sky/20">
              <SealCheck className="h-3.5 w-3.5" weight="fill" />
              {t("teacher.eyebrow")}
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-dora-purple-deep sm:text-4xl">
              {t("teacher.title")}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-dora-purple-deep/75">
              {t("teacher.body")}
            </p>
            <ul className="mt-6 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-dora-purple-deep/80">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-dora-sky to-dora-blue text-white">
                    <Check className="h-3.5 w-3.5" weight="bold" />
                  </span>
                  <span className="font-semibold">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
