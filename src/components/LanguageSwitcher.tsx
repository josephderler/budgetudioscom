import { useEffect, useRef, useState } from "react";
import { Globe, CaretDown, Check } from "@phosphor-icons/react";
import { useI18n } from "@/i18n/LanguageContext";
import { LOCALES, localeNames } from "@/i18n/translations";
import { localeFlags } from "@/components/flags";

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-2 text-sm font-bold text-dora-purple-deep ring-1 ring-dora-violet/15 transition-colors hover:bg-white"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("lang.switchAria")}
      >
        <Globe className="h-4 w-4" weight="duotone" />
        {(() => {
          const Flag = localeFlags[locale];
          return <Flag className="h-[18px] w-[18px]" />;
        })()}
        <span className="uppercase">{locale}</span>
        <CaretDown className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} weight="bold" />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-2xl bg-white p-1.5 shadow-xl shadow-dora-purple/15 ring-1 ring-dora-violet/10"
        >
          {LOCALES.map((l) => {
            const Flag = localeFlags[l];
            return (
              <li key={l}>
                <button
                  type="button"
                  role="option"
                  aria-selected={l === locale}
                  onClick={() => {
                    setLocale(l);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${
                    l === locale
                      ? "bg-dora-violet/10 text-dora-purple-deep"
                      : "text-dora-purple-deep/70 hover:bg-dora-cream"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Flag className="h-[18px] w-[18px]" />
                    {localeNames[l]}
                  </span>
                  {l === locale && <Check className="h-4 w-4 text-dora-pink" weight="bold" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
