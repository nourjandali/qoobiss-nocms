import { Banner } from "@/components/Banner";
import { GetInTouch } from "@/components/GetInTouch";
import { Hero } from "@/components/news/Hero";
import { Tabs } from "@/components/news/Tabs";

export default function Home() {
  return (
    <main>
      <Banner
        title="News"
        className="bg-[url('/use-cases-banner-mobile.png')] bg-cover lg:bg-[url('/use-cases-banner.svg')]"
      />
      <Hero />
      <Tabs />
      <GetInTouch className="lg:pt-40" />
    </main>
  );
}
