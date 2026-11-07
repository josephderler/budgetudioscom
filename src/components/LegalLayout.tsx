import { useEffect, type ReactNode } from "react";

type Props = {
  title: string;
  updated: string;
  children: ReactNode;
};

export default function LegalLayout({ title, updated, children }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative pt-28 pb-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-dora-cream to-white" />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-dora-purple-deep">
          {title}
        </h1>
        <p className="mt-2 text-sm font-semibold text-dora-purple-deep/60">
          Last updated: {updated}
        </p>
        <div className="legal mt-8 text-[15px] leading-relaxed text-dora-purple-deep/80">
          {children}
        </div>
      </div>
    </main>
  );
}
