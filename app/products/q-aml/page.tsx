import { Hero } from "@/components/products/q-aml/Hero";
import { Banner } from "@/components/products/q-aml/Banner";
import { OurSolution } from "@/components/products/q-aml/OurSolution";
import { DarkFeature } from "@/components/products/q-aml/DarkFeature";
import { LightFeature } from "@/components/products/q-aml/LightFeature";
import { AboutUs } from "@/components/products/AboutUs";
import { Certification } from "@/components/Certification";
import { GetInTouch } from "@/components/GetInTouch";

export default function Home() {
  return (
    <main>
      <Banner
        title="Q-AML"
        unColoredHeadingOne="Automated"
        coloredHeading="Contract Management"
        unColoredHeadingTwo="System"
        description="Quisque at metus egestas, tempor odio nec, fringilla risus. Morbi tempor dictum risus vel vulputate. Sed lacinia, velit ac accumsan tempus, augue nisl mollis felis, eu pretium mauris nulla id nunc."
        button={{
          title: "Get in touch",
          variant: "indigo",
          size: "indigo",
        }}
      />
      <Hero />
      <LightFeature />
      <div className="lg:bg-[url('/q.png')] bg-left bg-cover bg-no-repeat bg-dark-indigo">
        <OurSolution />
        <DarkFeature />
      </div>
      <AboutUs />
      <Certification />
      <GetInTouch />
    </main>
  );
}
