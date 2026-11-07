import { motion } from "framer-motion";
import StoreButtons from "@/components/StoreButtons";

export default function CtaBanner() {
  return (
    <section className="relative px-4 py-16 sm:px-6 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-dora-violet via-dora-purple to-dora-pink px-6 py-14 text-center shadow-2xl shadow-dora-purple/30 sm:px-12"
      >
        <span className="animate-float-slow absolute -left-6 top-6 text-5xl opacity-80">🌟</span>
        <span className="animate-float-slower absolute right-8 top-10 text-5xl opacity-80">🎒</span>
        <span className="animate-float-slow absolute bottom-6 left-1/4 text-5xl opacity-70">🗺️</span>

        <h2 className="relative font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Ready for an adventure?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/85">
          Download Dora: Explore and Play! today and let the learning fun begin — free on
          the App Store and Google Play.
        </p>
        <div className="relative mt-8 flex justify-center">
          <StoreButtons />
        </div>
      </motion.div>
    </section>
  );
}
