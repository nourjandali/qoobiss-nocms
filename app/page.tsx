import { Cta } from "@/components/home/Cta";
import { Faq } from "@/components/home/Faq";
import { DarkFeature } from "@/components/home/DarkFeature";
import { LightFeature } from "@/components/home/LightFeature";
import { Header } from "@/components/home/Header";
import { GetInTouch } from "@/components/GetInTouch";

export default function Home() {
  return (
    <main>
      <Header />
      <Cta />
      <DarkFeature />
      <LightFeature />
      <Faq />
      <GetInTouch />
    </main>
  );
}
