import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "@phosphor-icons/react";
import { useI18n } from "@/i18n/LanguageContext";

const KEY = "dora-consent-v1";

export default function ConsentBanner() {
  const { t } = useI18n();
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      // storage blocked — show once, non-persisted
      setShow(true);
    }
  }, []);

  const decide = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setShow(false);
    window.dispatchEvent(new CustomEvent("site:consent", { detail: value }));
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-label={t("consent.aria")}
          className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-2xl rounded-2xl bg-white/95 p-5 shadow-2xl shadow-dora-purple/20 ring-1 ring-dora-violet/15 backdrop-blur sm:inset-x-6 sm:bottom-6"
        >
          <div className="flex items-start gap-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-dora-violet/10 text-dora-violet">
              <Cookie className="h-6 w-6" weight="duotone" />
            </span>
            <div className="flex-1">
              <p className="font-display text-sm font-extrabold text-dora-purple-deep">
                {t("consent.title")}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-dora-purple-deep/70">
                {t("consent.body")}{" "}
                <Link to="/privacy" className="font-semibold text-dora-pink hover:underline">
                  {t("consent.privacyLink")}
                </Link>
                .
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => decide("accepted")}
                  className="rounded-xl bg-gradient-to-r from-dora-violet to-dora-pink px-5 py-2.5 text-sm font-extrabold text-white shadow-md transition-transform hover:-translate-y-0.5"
                >
                  {t("consent.accept")}
                </button>
                <button
                  type="button"
                  onClick={() => decide("declined")}
                  className="rounded-xl bg-dora-cream px-5 py-2.5 text-sm font-extrabold text-dora-purple-deep transition-colors hover:bg-dora-violet/10"
                >
                  {t("consent.decline")}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
