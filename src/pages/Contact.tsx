import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { company, site } from "@/data/site";
import { useI18n } from "@/i18n/LanguageContext";
import {
  ArrowLeft,
  EnvelopeSimple,
  Phone,
  MapPin,
  Buildings,
  Clock,
  Headset,
  PaperPlaneTilt,
} from "@phosphor-icons/react";

export default function Contact() {
  const { t } = useI18n();

  const contactCards = [
    {
      Icon: EnvelopeSimple,
      label: t("contact.card.email.label"),
      value: company.email,
      href: `mailto:${company.email}`,
      note: t("contact.card.email.note"),
      accent: "from-dora-violet to-dora-purple",
    },
    {
      Icon: Phone,
      label: t("contact.card.call.label"),
      value: company.phone,
      href: `tel:${company.phoneHref}`,
      note: t("contact.card.call.note"),
      accent: "from-dora-sky to-dora-blue",
    },
    {
      Icon: MapPin,
      label: t("contact.card.visit.label"),
      value: company.address,
      href: undefined,
      note: `${company.name} · ${t("contact.company.number")} ${company.number}`,
      accent: "from-dora-pink to-dora-magenta",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || t("contact.form.defaultSubject"));
    const body = encodeURIComponent(
      `${t("contact.mail.name")}: ${form.name}\n${t("contact.mail.email")}: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "mt-1.5 w-full rounded-xl border border-dora-violet/15 bg-white px-4 py-3 text-[15px] text-dora-purple-deep shadow-sm outline-none transition-colors placeholder:text-dora-purple-deep/30 focus:border-dora-violet focus:ring-2 focus:ring-dora-violet/20";
  const label = "font-display text-sm font-bold text-dora-purple-deep";

  return (
    <main className="pb-24">
      {/* Hero */}
      <header className="relative overflow-hidden bg-gradient-to-br from-dora-blue via-dora-violet to-dora-pink pt-28 pb-16">
        <div className="pointer-events-none absolute -left-16 -top-10 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-black/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/25"
          >
            <ArrowLeft className="h-4 w-4" weight="bold" />
            {t("legal.backHome")}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex items-start gap-5"
          >
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white/20 text-white shadow-lg ring-1 ring-white/30 backdrop-blur">
              <Headset className="h-8 w-8" weight="duotone" />
            </span>
            <div>
              <span className="font-display text-xs font-extrabold uppercase tracking-widest text-white/80">
                {t("contact.eyebrow")}
              </span>
              <h1 className="mt-1 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                {t("contact.title")}
              </h1>
            </div>
          </motion.div>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            {t("contact.intro").replace("{app}", site.appName)}
          </p>
        </div>
      </header>

      {/* Contact cards */}
      <section className="relative z-10 mx-auto -mt-10 max-w-5xl px-4 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-3">
          {contactCards.map((c, i) => {
            const inner = (
              <>
                <div
                  className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${c.accent} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                >
                  <c.Icon className="h-6 w-6" weight="duotone" />
                </div>
                <p className="mt-4 font-display text-xs font-extrabold uppercase tracking-widest text-dora-purple-deep/50">
                  {c.label}
                </p>
                <p className="mt-1 font-display font-extrabold leading-snug text-dora-purple-deep">
                  {c.value}
                </p>
                <p className="mt-2 text-sm text-dora-purple-deep/60">{c.note}</p>
              </>
            );
            const cls =
              "group block rounded-3xl bg-white p-6 shadow-[0_12px_45px_-20px_rgba(109,40,217,0.35)] ring-1 ring-dora-violet/10 transition-transform duration-300 hover:-translate-y-1.5";
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              >
                {c.href ? (
                  <a href={c.href} className={cls}>
                    {inner}
                  </a>
                ) : (
                  <div className={cls}>{inner}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Form + company panel */}
      <section className="mx-auto mt-12 max-w-5xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Form */}
          <div className="rounded-3xl bg-white p-7 shadow-[0_15px_50px_-25px_rgba(109,40,217,0.35)] ring-1 ring-dora-violet/10 sm:p-9">
            <h2 className="font-display text-2xl font-extrabold text-dora-purple-deep">
              {t("contact.form.title")}
            </h2>
            <p className="mt-2 text-sm text-dora-purple-deep/60">
              {t("contact.form.intro")}
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={label} htmlFor="name">
                    {t("contact.form.name")}
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={field}
                    placeholder={t("contact.form.name.ph")}
                  />
                </div>
                <div>
                  <label className={label} htmlFor="email">
                    {t("contact.form.email")}
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={field}
                    placeholder={t("contact.form.email.ph")}
                  />
                </div>
              </div>
              <div>
                <label className={label} htmlFor="subject">
                  {t("contact.form.subject")}
                </label>
                <input
                  id="subject"
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={field}
                  placeholder={t("contact.form.subject.ph")}
                />
              </div>
              <div>
                <label className={label} htmlFor="message">
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${field} resize-none`}
                  placeholder={t("contact.form.message.ph")}
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-dora-violet to-dora-pink px-6 py-3.5 font-display font-extrabold text-white shadow-lg shadow-dora-pink/30 transition-transform hover:-translate-y-0.5"
              >
                <PaperPlaneTilt className="h-5 w-5" weight="fill" />
                {t("contact.form.send")}
              </button>
            </form>
          </div>

          {/* Company panel */}
          <aside className="flex flex-col gap-5">
            <div className="rounded-3xl bg-gradient-to-br from-dora-purple-deep to-dora-purple p-7 text-white shadow-lg">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/15 text-white ring-1 ring-white/20">
                <Buildings className="h-6 w-6" weight="duotone" />
              </span>
              <h3 className="mt-4 font-display text-lg font-extrabold">{company.name}</h3>
              <dl className="mt-4 space-y-2.5 text-sm text-white/80">
                <div className="flex justify-between gap-4">
                  <dt className="text-white/60">{t("contact.company.number")}</dt>
                  <dd className="font-semibold">{company.number}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-white/60">{t("contact.company.status")}</dt>
                  <dd className="font-semibold text-dora-green">{company.status}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-white/60">{t("contact.company.founded")}</dt>
                  <dd className="font-semibold">{company.founded}</dd>
                </div>
              </dl>
              <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-relaxed text-white/70">
                {company.address}
              </p>
            </div>

            <div className="flex items-start gap-3 rounded-3xl bg-white p-6 ring-1 ring-dora-violet/10">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-dora-green/15 text-dora-green">
                <Clock className="h-5 w-5" weight="duotone" />
              </span>
              <div>
                <p className="font-display font-extrabold text-dora-purple-deep">
                  {t("contact.hours.title")}
                </p>
                <p className="mt-1 text-sm text-dora-purple-deep/60">
                  {t("contact.hours.body")}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
