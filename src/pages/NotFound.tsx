import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Compass, ArrowLeft } from "@phosphor-icons/react";
import { useI18n } from "@/i18n/LanguageContext";

export default function NotFound() {
  const { t } = useI18n();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden px-4 py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(130%_120%_at_50%_0%,#fdf4ff_35%,#c4b5fd_80%,#8b5cf6_100%)]" />
      <div className="animate-float-slow pointer-events-none absolute left-[12%] top-[22%] h-24 w-24 rounded-full bg-dora-pink/30 blur-2xl" />
      <div className="animate-float-slower pointer-events-none absolute right-[14%] top-[32%] h-32 w-32 rounded-full bg-dora-sky/40 blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <span className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br from-dora-violet to-dora-pink text-white shadow-xl shadow-dora-purple/20">
          <Compass className="h-10 w-10" weight="duotone" />
        </span>

        <h1 className="mt-8 font-display text-7xl font-extrabold leading-none text-dora-purple-deep sm:text-8xl">
          404
        </h1>
        <p className="mt-4 font-display text-2xl font-extrabold text-dora-purple-deep">
          {t("notFound.title")}
        </p>
        <p className="mx-auto mt-3 max-w-md text-dora-purple-deep/70">
          {t("notFound.body")}
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-dora-violet to-dora-pink px-6 py-3.5 font-display font-extrabold text-white shadow-lg shadow-dora-pink/30 transition-transform hover:-translate-y-0.5"
          >
            <ArrowLeft className="h-5 w-5" weight="bold" />
            {t("notFound.backHome")}
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
