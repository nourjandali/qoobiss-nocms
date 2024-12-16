/* eslint-disable @next/next/no-img-element */
"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import AnimateHeading, { StaggeredHeading } from "../ui/word-curtain";
import Link from "next/link";
import LottieAnimation from "../LottieAnimation";
import madeAnimation from "@/assets/made.json";
import instantAnimation from "@/assets/instant.json";
import enhancedAnimation from "@/assets/enhanced.json";
import performanceAnimation from "@/assets/performance.json";

type ImageProps = {
  src: string;
  alt?: string;
};

type SectionProps = {
  number: string;
  icon: any;
  heading: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  sections: SectionProps[];
  button: ButtonProps;
};

export type LightFeatureProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const LightFeature = (props: LightFeatureProps) => {
  const { tagline, heading, description, button, sections } = {
    ...LightFeatureDefaults,
    ...props,
  } as Props;

  const isMobile = useMediaQuery("(max-width: 991px)");

  return (
    <section className="pt-20 lg:pt-40 relative">
      <div className="container container-padding">
        <div className="flex flex-col items-start lg:gap-20">
          <div>
            <p className="font-semibold mb-6 uppercase text-xl leading-[1.3] text-electric-violet">
              {tagline}
            </p>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:justify-between lg:gap-40">
              <StaggeredHeading className="text-4xl lg:font-light lg:text-11xl text-light-foreground">
                {heading}
              </StaggeredHeading>
              <div>
                <p className="text-light-chapeau lg:text-lg">{description}</p>
                <div className="py-12 flex lg:justify-normal justify-center items-center gap-4 lg:mt-[30px]">
                  <Link href="/partner-with-us">
                    <Button {...button} className="px-[30px] py-[15px]">
                      {button.title}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 items-stretch lg:grid-cols-2 gap-5 z-10">
            {sections.map((section, index) => (
              <div
                key={index}
                className="flex flex-col p-[30px] lg:p-14 h-full bg-white/40 rounded-2xl"
              >
                <div className="flex w-full items-center justify-between">
                  <div
                    className={`${
                      index === 0 ? "-ml-8 mb-8" : "mb-8"
                    } relative size-24`}
                  >
                    <LottieAnimation
                      animationData={section.icon}
                      width={index === 0 ? "164px" : "96px"}
                      height="96px"
                      loop={false}
                    />
                  </div>
                  <StaggeredHeading className="text-electric-violet leading-[1.2] text-2xl lg:text-4xl -mt-8 lg:-mt-12">
                    {section.number}
                  </StaggeredHeading>
                </div>
                <div className="flex flex-col flex-1 justify-between">
                  <StaggeredHeading className="text-2xl lg:text-4xl text-light-foreground mb-6">
                    {section.heading}
                  </StaggeredHeading>
                  <AnimateHeading className="text-light-chapeau lg:text-lg leading-[1.3]">
                    {section.description}
                  </AnimateHeading>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const LightFeatureDefaults: LightFeatureProps = {
  tagline: "INNOVATION IS KEY",
  heading: "Unlock New Business Growth Opportunities",
  description:
    "Embrace the transformative potential of digitalization to enhance efficiency and streamline interactions across your business landscape. By automating critical workflows and routine operations, you significantly grow performance and improve operational speed. An efficient framework allows you to adapt quickly to market changes and seize new opportunities, solidifying your competitive advantage in the dynamic digital era.",
  button: { title: "Let's talk", variant: "light-default" },
  sections: [
    {
      number: "01",
      icon: madeAnimation,
      heading: "Made for digital age",
      description:
        "Meet your customers where they search for you—in the digital environment. Enable your business to seamlessly connect with customers online, ensuring you are present at every crucial touchpoint of their journey.",
    },
    {
      number: "02",
      icon: instantAnimation,
      heading: "Instant Execution",
      description:
        "Accelerate the launch of new products and modify workflows with exceptional rapidity. Our digital tools enable your business to create swift and agile flows, allowing you to adapt quickly to market demands without delay.",
    },
    {
      number: "03",
      icon: enhancedAnimation,
      heading: "Enhanced Competitiveness",
      description:
        "Secure a strategic advantage with our flexible digital tools that keep your business agile and proactive in responding to market shifts. Experience enhanced competitiveness as you efficiently tackle new challenges and opportunities.",
    },
    {
      number: "04",
      icon: performanceAnimation,
      heading: "Performance Growth",
      description:
        "Reduce operational and capital costs by automating routine processes. Qoobiss solutions not only enhance efficiency but also help you achieve new business objectives faster, contributing to significant performance improvements.",
    },
  ],
};

LightFeature.displayName = "LightFeature";

export default LightFeature;
