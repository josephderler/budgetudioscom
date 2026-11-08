import { Link } from "react-router-dom";
import { company, site } from "@/data/site";
import StoreButtons from "@/components/StoreButtons";
import { EnvelopeSimple, Phone, MapPin } from "@phosphor-icons/react";
import { useI18n } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-dora-purple-deep text-white">
      <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-dora-violet/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-dora-pink/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand + stores */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2">
              <img
                src="/app-icon.jpg"
                alt="Dora: Explore and Play! app icon"
                width={44}
                height={44}
                className="h-11 w-11 rounded-2xl shadow-md ring-1 ring-white/10"
              />
              <span className="font-display text-xl font-extrabold">{site.appName}</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
              {t("footer.tagline")}
            </p>
            <div className="mt-6">
              <StoreButtons size="md" location="footer" />
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-extrabold uppercase tracking-wide text-white/80">
              {t("footer.explore")}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li><a className="transition-colors hover:text-white" href="/#features">{t("footer.link.features")}</a></li>
              <li><a className="transition-colors hover:text-white" href="/#gameplay">{t("footer.link.gameplay")}</a></li>
              <li><a className="transition-colors hover:text-white" href="/#video">{t("footer.link.trailer")}</a></li>
              <li><a className="transition-colors hover:text-white" href="/#faq">{t("footer.link.faq")}</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-extrabold uppercase tracking-wide text-white/80">
              {t("footer.legal")}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li><Link className="transition-colors hover:text-white" to="/contact">{t("footer.link.contact")}</Link></li>
              <li><Link className="transition-colors hover:text-white" to="/privacy">{t("footer.link.privacy")}</Link></li>
              <li><Link className="transition-colors hover:text-white" to="/terms">{t("footer.link.terms")}</Link></li>
            </ul>
          </div>

          {/* Company / contact */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-extrabold uppercase tracking-wide text-white/80">
              {company.name}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-dora-pink" weight="duotone" />
                <span className="leading-relaxed">{company.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <EnvelopeSimple className="h-4 w-4 shrink-0 text-dora-pink" weight="duotone" />
                <a className="transition-colors hover:text-white" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-dora-pink" weight="duotone" />
                <a className="transition-colors hover:text-white" href={`tel:${company.phoneHref}`}>
                  {company.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row">
          <p>
            {t("footer.copyright")
              .replace("{year}", String(year))
              .replace("{company}", company.name)
              .replace("{number}", company.number)}
          </p>
          <p className="max-w-md text-center sm:text-right">
            {t("footer.trademark")}
          </p>
        </div>
      </div>
    </footer>
  );
}
