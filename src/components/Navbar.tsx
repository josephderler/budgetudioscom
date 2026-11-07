import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { site } from "@/data/site";

const links = [
  { label: "Features", href: "/#features" },
  { label: "Gameplay", href: "/#gameplay" },
  { label: "Video", href: "/#video" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 shadow-sm shadow-dora-purple/10 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2" aria-label="Home">
          <img
            src="/app-icon.jpg"
            alt="Dora: Explore and Play! app icon"
            width={40}
            height={40}
            className="h-10 w-10 rounded-2xl shadow-md ring-1 ring-black/5"
          />
          <span className="font-display text-lg font-extrabold leading-none text-dora-purple-deep">
            Dora: Explore<span className="hidden sm:inline"> and Play!</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) =>
            l.href.includes("#") ? (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-bold text-dora-purple-deep/70 transition-colors hover:text-dora-pink"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.label}
                to={l.href}
                className="text-sm font-bold text-dora-purple-deep/70 transition-colors hover:text-dora-pink"
              >
                {l.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden md:block">
          <a
            href={site.stores.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-dora-violet to-dora-pink px-5 py-2.5 text-sm font-extrabold text-white shadow-lg shadow-dora-pink/30 transition-transform hover:-translate-y-0.5"
          >
            Play Free
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl bg-white/70 text-dora-purple-deep shadow-sm md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-4 mb-3 rounded-2xl bg-white/95 p-4 shadow-xl shadow-dora-purple/10 backdrop-blur md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) =>
              l.href.includes("#") ? (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-bold text-dora-purple-deep/80 hover:bg-dora-cream"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.label}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-bold text-dora-purple-deep/80 hover:bg-dora-cream"
                >
                  {l.label}
                </Link>
              )
            )}
            <a
              href={site.stores.appStore}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl bg-gradient-to-r from-dora-violet to-dora-pink px-3 py-2.5 text-center text-sm font-extrabold text-white"
            >
              Play Free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
