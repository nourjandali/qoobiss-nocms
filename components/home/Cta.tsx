"use client";

import AnimateHeading, { StaggeredHeading } from "../ui/word-curtain";

type Props = {
  heading: string;
  descriptionFirstPart: string;
  coloredText: string;
  descriptionSecondPart: string;
};

export type CtaProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Cta = (props: CtaProps) => {
  const { heading, descriptionFirstPart, coloredText } = {
    ...CtaDefaults,
    ...props,
  } as Props;
  return (
    <section className="lg:pt-40 bg-dark-background">
      <div className="container container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-[0.35fr_1fr] justify-between items-start w-full gap-x-20 gap-y-6">
          <StaggeredHeading className="text-electric-violet text-xl leading-[1.3] font-semibold uppercase">
            {heading}
          </StaggeredHeading>
          <AnimateHeading className="text-4xl leading-[1.2] lg:text-11xl font-light lg:justify-self-end">
            <span className="text-gradient">{descriptionFirstPart}</span>{" "}
            <span className="text-accent">{coloredText}</span>{" "}
          </AnimateHeading>
        </div>
      </div>
    </section>
  );
};

export const CtaDefaults: CtaProps = {
  heading: "Why Qoobiss",
  descriptionFirstPart: "Grow the power of",
  coloredText: "automation",
};
