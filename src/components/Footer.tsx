import { Link } from "react-router-dom";
import { company, site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-dora-purple-deep text-white">
      <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-dora-violet/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-dora-pink/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
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
              A joyful, bilingual learning adventure for toddlers and preschoolers.
              Explore, learn and play with Dora and her friends.
            </p>
            <p className="mt-4 text-xs text-white/50">
              © {year} {company.name}. All rights reserved. Dora and all related titles,
              logos and characters are trademarks of their respective owners. This is an
              app promotion page.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display text-sm font-extrabold uppercase tracking-wide text-white/80">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li><a className="hover:text-white" href="/#features">Features</a></li>
              <li><a className="hover:text-white" href="/#gameplay">Gameplay</a></li>
              <li><a className="hover:text-white" href="/#video">Trailer</a></li>
              <li>
                <a className="hover:text-white" href={site.stores.appStore} target="_blank" rel="noopener noreferrer">
                  App Store
                </a>
              </li>
              <li>
                <a className="hover:text-white" href={site.stores.googlePlay} target="_blank" rel="noopener noreferrer">
                  Google Play
                </a>
              </li>
            </ul>
          </div>

          {/* Company / contact */}
          <div>
            <h3 className="font-display text-sm font-extrabold uppercase tracking-wide text-white/80">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li className="font-semibold text-white/90">{company.name}</li>
              <li>Company No. {company.number}</li>
              <li className="leading-relaxed">{company.address}</li>
              <li>
                <a className="hover:text-white" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </li>
              <li>
                <a className="hover:text-white" href={`tel:${company.phoneHref}`}>
                  {company.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row">
          <p>
            Made with 💜 for little explorers everywhere.
          </p>
          <div className="flex items-center gap-5">
            <Link className="hover:text-white" to="/contact">
              Contact
            </Link>
            <Link className="hover:text-white" to="/privacy">
              Privacy Policy
            </Link>
            <Link className="hover:text-white" to="/terms">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
