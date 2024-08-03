import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { GetInTouch } from "@/components/GetInTouch";
import { Hero } from "@/components/UseCases/Hero";
import { Tabs } from "@/components/UseCases/Tabs";

export default function Home() {
  return (
    <main>
      <Banner
        title="Use cases"
        className="bg-[url('/use-cases-banner-mobile.png')] lg:bg-[url('/use-cases-banner.svg')]"
      />
      <Hero />
      <Tabs />
      <GetInTouch className="lg:pt-40" />
      <Footer />
    </main>
  );
}
