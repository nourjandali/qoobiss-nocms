import { Certification } from "@/components/Certification";
import { Cta } from "@/components/Cta";
import { Faq } from "@/components/Faq";
import { Feature } from "@/components/Feature";
import { Feature2 } from "@/components/Feature2";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main>
      <div className="bg-dark-background">
        <Header />
        {/* <img
          src="/ellipse-features-right.svg"
          alt="ellipse"
          className="absolute -z-[10] size-full opacity-50"
        /> */}
        <Cta />
        <Feature className="relative" />
      </div>
      <Feature2 />
      <Faq />
      <Certification />
      <Footer />

      {/* <img
          src="/ellipse-features-left.svg"
          alt="ellipse"
          className="absolute -z-[10] "
        /> */}
    </main>
  );
}
