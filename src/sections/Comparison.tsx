import { motion } from "framer-motion";
import { Check, Minus, Crown } from "@phosphor-icons/react";
import { planComparison } from "@/data/site";
import StoreButtons from "@/components/StoreButtons";
import { useI18n } from "@/i18n/LanguageContext";

function Cell({ value, label }: { value: boolean | string; label: string }) {
  if (value === true)
    return (
      <span className="mx-auto grid h-6 w-6 place-items-center rounded-full bg-dora-green/15 text-dora-green">
        <Check className="h-3.5 w-3.5" weight="bold" />
      </span>
    );
  if (value === false || value === "—")
    return (
      <span className="mx-auto grid h-6 w-6 place-items-center rounded-full bg-slate-100 text-slate-400">
        <Minus className="h-3.5 w-3.5" weight="bold" />
      </span>
    );
  return <span className="text-sm font-bold text-dora-purple-deep/80">{label}</span>;
}

export default function Comparison() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-dora-violet/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-dora-cream px-4 py-1.5 font-display text-xs font-extrabold uppercase tracking-widest text-dora-violet ring-1 ring-dora-violet/15">
            <Crown className="h-3.5 w-3.5" weight="fill" />
            {t("cmp.eyebrow")}
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-dora-purple-deep sm:text-4xl">
            {t("cmp.title")}
          </h2>
          <p className="mt-4 text-lg text-dora-purple-deep/70">
            {t("cmp.subtitle")}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="mt-12 overflow-hidden rounded-3xl bg-white shadow-[0_18px_55px_-24px_rgba(109,40,217,0.4)] ring-1 ring-dora-violet/10"
        >
          {/* header row */}
          <div className="grid grid-cols-[1.6fr_1fr_1fr] items-center gap-2 bg-gradient-to-r from-dora-violet to-dora-purple px-5 py-4 text-white sm:px-7">
            <span className="font-display text-sm font-extrabold uppercase tracking-wide">
              {t("cmp.col.feature")}
            </span>
            <span className="text-center font-display text-sm font-extrabold uppercase tracking-wide">
              {t("cmp.col.free")}
            </span>
            <span className="flex items-center justify-center gap-1.5 font-display text-sm font-extrabold uppercase tracking-wide">
              <Crown className="h-4 w-4" weight="fill" /> {t("cmp.col.premium")}
            </span>
          </div>

          {/* rows */}
          <div className="divide-y divide-dora-violet/10">
            {planComparison.map((row) => (
              <div
                key={row.featureKey}
                className="grid grid-cols-[1.6fr_1fr_1fr] items-center gap-2 px-5 py-3.5 sm:px-7"
              >
                <span className="text-sm font-semibold text-dora-purple-deep">
                  {t(row.featureKey)}
                </span>
                <div className="text-center">
                  <Cell value={row.free} label={typeof row.free === "string" ? t(row.free) : ""} />
                </div>
                <div className="text-center">
                  <Cell value={row.premium} label={typeof row.premium === "string" ? t(row.premium) : ""} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <StoreButtons location="comparison" />
          <p className="text-xs font-semibold text-dora-purple-deep/50">
            {t("cmp.footnote")}
          </p>
        </div>
      </div>
    </section>
  );
}
