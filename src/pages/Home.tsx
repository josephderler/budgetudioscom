import Hero from "@/sections/Hero";
import TrustBar from "@/sections/TrustBar";
import HowItWorks from "@/sections/HowItWorks";
import Features from "@/sections/Features";
import Characters from "@/sections/Characters";
import AgeGuide from "@/sections/AgeGuide";
import Gallery from "@/sections/Gallery";
import VideoSection from "@/sections/VideoSection";
import About from "@/sections/About";
import TeacherApproved from "@/sections/TeacherApproved";
import Comparison from "@/sections/Comparison";
import Testimonials from "@/sections/Testimonials";
import Faq from "@/sections/Faq";
import CtaBanner from "@/sections/CtaBanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Features />
      <Characters />
      <AgeGuide />
      <Gallery />
      <VideoSection />
      <About />
      <TeacherApproved />
      <Comparison />
      <Testimonials />
      <Faq />
      <CtaBanner />
    </main>
  );
}
