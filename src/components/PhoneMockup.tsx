import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  /** When true, load eagerly with high priority (use for above-the-fold hero). */
  priority?: boolean;
};

/**
 * Landscape phone mockup. The device frame is drawn as a horizontally-held
 * smartphone so wide (16:9) gameplay screenshots sit naturally inside it.
 * Adapted from a 21st.dev iPhone frame, rotated and simplified for landscape.
 */
export default function PhoneMockup({ src, alt, className, priority }: Props) {
  return (
    <div className={cn("relative select-none", className)}>
      {/* Device body */}
      <div className="relative rounded-[2.2rem] bg-slate-900 p-3 shadow-2xl shadow-dora-purple-deep/40 ring-1 ring-black/10">
        {/* Side buttons (top edge when landscape) */}
        <span className="absolute -top-[3px] left-[22%] h-[3px] w-20 rounded-full bg-slate-800" />
        <span className="absolute -top-[3px] left-[46%] h-[3px] w-12 rounded-full bg-slate-800" />
        <span className="absolute -bottom-[3px] right-[26%] h-[3px] w-16 rounded-full bg-slate-800" />

        {/* Screen */}
        <div className="relative overflow-hidden rounded-[1.6rem] bg-black">
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
            className="block aspect-[526/296] w-full object-cover"
          />

          {/* Dynamic-island / camera pill on the left short edge (landscape) */}
          <span className="pointer-events-none absolute left-1.5 top-1/2 h-14 w-2.5 -translate-y-1/2 rounded-full bg-black/80" />

          {/* subtle screen glare */}
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10" />
        </div>
      </div>
    </div>
  );
}
