import { motion } from "framer-motion";
import { Sparkle, Backpack, MapTrifold } from "@phosphor-icons/react";
import StoreButtons from "@/components/StoreButtons";
import { useI18n } from "@/i18n/LanguageContext";

export default function CtaBanner() {
  const { t } = useI18n();
  return (
    <section id="download" className="relative scroll-mt-24 px-4 py-16 sm:px-6 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-dora-violet via-dora-purple to-dora-pink px-6 py-14 text-center shadow-2xl shadow-dora-purple/30 sm:px-12"
      >
        <Sparkle className="animate-float-slow pointer-events-none absolute -left-4 top-8 h-12 w-12 text-white/25" weight="duotone" />
        <Backpack className="animate-float-slower pointer-events-none absolute right-8 top-10 h-12 w-12 text-white/25" weight="duotone" />
        <MapTrifold className="animate-float-slow pointer-events-none absolute bottom-6 left-1/4 h-12 w-12 text-white/20" weight="duotone" />

        <h2 className="relative font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {t("cta.title")}
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/85">
          {t("cta.subtitle")}
        </p>
        <div className="relative mt-8 flex justify-center">
          <StoreButtons location="cta_banner" />
        </div>
      </motion.div>
    </section>
  );
}
