import { motion } from "framer-motion";
import { ShieldCheck, Baby, Translate, GraduationCap } from "@phosphor-icons/react";
import { useI18n } from "@/i18n/LanguageContext";

const badges = [
  { Icon: ShieldCheck, labelKey: "trust.badge1" },
  { Icon: Baby, labelKey: "trust.badge2" },
  { Icon: Translate, labelKey: "trust.badge3" },
  { Icon: GraduationCap, labelKey: "trust.badge4" },
];

export default function TrustBar() {
  const { t } = useI18n();
  return (
    <section className="relative -mt-2 border-y border-dora-violet/10 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-4 py-6 sm:grid-cols-4"
        >
          {badges.map((b) => (
            <li
              key={b.labelKey}
              className="flex items-center justify-center gap-2.5 text-center"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-dora-violet/10 text-dora-violet">
                <b.Icon className="h-5 w-5" weight="duotone" />
              </span>
              <span className="font-display text-sm font-extrabold text-dora-purple-deep/80">
                {t(b.labelKey)}
              </span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
