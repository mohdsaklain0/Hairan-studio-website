import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Clients from "@/components/sections/Clients";
import Process from "@/components/sections/Process";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import PageLoader from "@/components/effects/PageLoader";
import CustomCursor from "@/components/effects/CustomCursor";
import SmoothScroll from "@/components/effects/SmoothScroll";
import WhatsAppButton from "@/components/effects/WhatsAppButton";
import AudioPlayer from "@/components/effects/AudioPlayer";
import BackToTop from "@/components/effects/BackToTop";

export default function Home() {
  return (
    <>
      <PageLoader />
      <CustomCursor />
      <SmoothScroll>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Clients />
          <Process />
          <Team />
          <Contact />
        </main>
        <Footer />
      </SmoothScroll>
      <AudioPlayer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
