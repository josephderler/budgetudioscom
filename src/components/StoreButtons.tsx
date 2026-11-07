import { site } from "@/data/site";

type Props = {
  className?: string;
  size?: "md" | "lg";
};

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 shrink-0 fill-current">
      <path d="M16.365 1.43c0 1.14-.42 2.2-1.12 3-.76.88-2 .97-2.52.93-.08-1.1.44-2.22 1.09-2.93.73-.8 1.97-1.37 2.55-1.4.01.14.01.28 0 .4zM20.5 17.1c-.37.86-.55 1.24-1.03 2-.67 1.06-1.62 2.38-2.79 2.39-1.04.01-1.31-.68-2.72-.67-1.41.01-1.7.68-2.75.67-1.17-.01-2.06-1.2-2.73-2.26-1.88-2.95-2.08-6.41-.92-8.25.82-1.31 2.12-2.08 3.34-2.08 1.24 0 2.02.68 3.05.68.99 0 1.6-.68 3.04-.68 1.09 0 2.24.59 3.06 1.62-2.69 1.47-2.25 5.31.17 6.56z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 shrink-0">
      <path d="M3.6 2.1c-.3.3-.5.7-.5 1.3v17.2c0 .6.2 1 .5 1.3l.1.1 9.6-9.6v-.2L3.6 2.1z" fill="#00D2FF" />
      <path d="M17 15.3l-3.2-3.2v-.2L17 8.7l.1.1 3.8 2.2c1.1.6 1.1 1.7 0 2.3l-3.9 2z" fill="#FFCE00" />
      <path d="M17.1 15.2L13.8 12 3.6 22.1c.4.4 1 .4 1.7.1l11.8-7z" fill="#FF3D47" />
      <path d="M17.1 8.8L5.3 2C4.6 1.5 4 1.6 3.6 2l10.2 10.1 3.3-3.3z" fill="#00F076" />
    </svg>
  );
}

export default function StoreButtons({ className = "", size = "lg" }: Props) {
  const pad = size === "lg" ? "px-6 py-3.5" : "px-5 py-3";
  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      <a
        href={site.stores.appStore}
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex items-center gap-3 rounded-2xl bg-slate-900 ${pad} text-white shadow-lg shadow-slate-900/20 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dora-violet`}
        aria-label="Download on the App Store"
      >
        <AppleIcon />
        <span className="text-left leading-tight">
          <span className="block text-[11px] font-semibold uppercase tracking-wide text-white/70">
            Download on the
          </span>
          <span className="block font-display text-lg font-bold">App Store</span>
        </span>
      </a>

      <a
        href={site.stores.googlePlay}
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex items-center gap-3 rounded-2xl bg-slate-900 ${pad} text-white shadow-lg shadow-slate-900/20 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dora-violet`}
        aria-label="Get it on Google Play"
      >
        <GooglePlayIcon />
        <span className="text-left leading-tight">
          <span className="block text-[11px] font-semibold uppercase tracking-wide text-white/70">
            Get it on
          </span>
          <span className="block font-display text-lg font-bold">Google Play</span>
        </span>
      </a>
    </div>
  );
}
