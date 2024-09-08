/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

type Feature = {
  number: string;
  heading: string;
  title: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  features: Feature[];
};

export type FeatureTwoProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const FeatureTwo = (props: FeatureTwoProps) => {
  const { tagline, heading, description, features } = {
    ...FeatureTwoDefaults,
    ...props,
  } as Props;

  return (
    <section className="pt-20 lg:pt-40">
      <div className="container container-padding flex flex-col gap-20">
        <div className="flex flex-col gap-6">
          <p className="font-semibold uppercase text-sm text-electric-violet">
            {tagline}
          </p>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:justify-between lg:gap-40">
            <h1 className="text-light-foreground text-4xl lg:font-light lg:text-8xl">
              {heading}
            </h1>
            <p className="text-light-chapeau text-sm lg:text-base">
              {description}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Feature = ({ ...feature }: Feature) => {
  return (
    <div className="p-[30px] lg:p-14 bg-white/40 flex flex-col gap-4 rounded-2xl">
      <p className="text-4xl text-electric-violet">{feature.number}</p>
      <h2 className="text-2xl lg:text-4xl pt-8 text-light-foreground lg:pt-[140px]">
        {feature.heading}
      </h2>
      <h3 className="text-lg text-electric-violet">{feature.title}</h3>
      <p className="text-sm text-light-chapeau">{feature.description}</p>
    </div>
  );
};

export const FeatureTwoDefaults: FeatureTwoProps = {
  tagline: "Our values",
  heading: "Lorem ipsum dolor sit amet consectetur",
  description:
    "Quisque at metus egestas, tempor odio nec, fringilla risus. Morbi tempor dictum risus vel vulputate. Sed lacinia, velit ac accumsan tempus, augue nisl mollis felis, eu pretium mauris nulla id nunc. Donec varius maximus metus in volutpat. Maecenas rhoncus orci felis, ut faucibus est efficitur at. Pellentesque tempor ornare suscipit. Nulla molestie laoreet justo, at fermentum odio ultricies nec. Proin faucibus efficitur hendrerit.",
  features: [
    {
      number: "01",
      heading: "Value #1",
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
    {
      number: "02",
      heading: "Value #2",
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
    {
      number: "03",
      heading: "Value #3",
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
  ],
};
