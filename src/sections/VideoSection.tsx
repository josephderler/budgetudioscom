import { useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/data/site";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${site.youtubeId}/maxresdefault.jpg`;

  return (
    <section id="video" className="relative overflow-hidden bg-dora-purple-deep py-20 md:py-28">
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-dora-violet/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-dora-pink/30 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
        <span className="font-display text-sm font-extrabold uppercase tracking-widest text-dora-yellow">
          Watch the trailer
        </span>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Press play and meet Dora
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
          Get a sneak peek of the songs, friends and mini-games waiting inside the app.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 overflow-hidden rounded-[2rem] bg-black shadow-2xl shadow-black/40 ring-1 ring-white/10"
        >
          <div className="relative aspect-video w-full">
            {playing ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${site.youtubeId}?autoplay=1&rel=0`}
                title="Dora: Explore and Play! official trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="group absolute inset-0 h-full w-full"
                aria-label="Play trailer"
              >
                <img
                  src={thumb}
                  alt="Dora: Explore and Play! trailer thumbnail"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    // maxresdefault not always available — fall back to hqdefault
                    const img = e.currentTarget;
                    if (!img.dataset.fallback) {
                      img.dataset.fallback = "1";
                      img.src = `https://i.ytimg.com/vi/${site.youtubeId}/hqdefault.jpg`;
                    }
                  }}
                />
                <span className="absolute inset-0 bg-dora-purple-deep/30 transition-colors group-hover:bg-dora-purple-deep/10" />
                <span className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 shadow-xl transition-transform duration-300 group-hover:scale-110">
                  <svg viewBox="0 0 24 24" className="ml-1 h-9 w-9 fill-dora-pink">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
