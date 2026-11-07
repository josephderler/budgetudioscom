import type { ReactNode } from "react";
import { company } from "@/data/site";

/** Section wrapper that registers an anchor id for the table of contents. */
export function LegalSection({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-dora-violet/10 pt-8 first:border-t-0 first:pt-0">
      <h2 className="flex items-center gap-3 font-display text-xl font-extrabold text-dora-purple-deep">
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-dora-violet/10 text-xs font-extrabold text-dora-violet">
          {String(index).padStart(2, "0")}
        </span>
        {title}
      </h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p>{children}</p>;
}

export function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2">
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dora-pink" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

/** Reusable company contact block shown at the end of each legal page. */
export function ContactCard() {
  return (
    <div className="mt-2 rounded-2xl bg-gradient-to-br from-dora-cream to-white p-6 ring-1 ring-dora-violet/10">
      <p className="font-display font-extrabold text-dora-purple-deep">{company.name}</p>
      <p className="mt-1 text-sm">Company No. {company.number}</p>
      <p className="text-sm">{company.address}</p>
      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm">
        <a className="font-semibold text-dora-pink hover:underline" href={`mailto:${company.email}`}>
          {company.email}
        </a>
        <a className="font-semibold text-dora-pink hover:underline" href={`tel:${company.phoneHref}`}>
          {company.phone}
        </a>
      </div>
    </div>
  );
}
