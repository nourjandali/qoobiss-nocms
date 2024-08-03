import { FeatureOne } from "@/components/AboutUs/FeatureOne";
import { FeatureTwo } from "@/components/AboutUs/FeatureTwo";
import { Hero } from "@/components/AboutUs/Hero";
import { Team } from "@/components/AboutUs/Team";
import { Banner } from "@/components/Banner";
import { Certification } from "@/components/Certification";
import { Footer } from "@/components/Footer";
import { GetInTouch } from "@/components/GetInTouch";

export default function Home() {
  return (
    <main>
      <Banner title="About us" />
      <Hero />
      <FeatureOne />
      <FeatureTwo />
      <Team />
      <Certification />
      <GetInTouch />
      <Footer />
    </main>
  );
}
