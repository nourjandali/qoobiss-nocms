"use client";

import React from "react";

type Props = {
  heading: string;
  children: React.ReactNode;
};

export type HeroProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Hero = (props: HeroProps) => {
  const { heading, children } = {
    ...HeroDefaults,
    ...props,
  } as Props;

  return (
    <section className="pt-20 lg:pt-40">
      <div className="container container-padding">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:justify-between lg:gap-20">
          <h2 className="text-light-foreground text-center text-4xl lg:font-light lg:text-8xl lg:text-left">
            {heading}
          </h2>
          <div className="text-light-foreground text-sm lg:text-lg text-center lg:text-left">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const HeroDefaults: HeroProps = {
  heading: "Lorem ipsum dolor sit amet consectetur",
  children: (
    <React.Fragment>
      <p>
        Quisque at metus egestas, tempor odio nec, fringilla risus. Morbi tempor
        dictum risus vel vulputate. Sed lacinia, velit ac accumsan tempus, augue
        nisl mollis felis, eu pretium mauris nulla id nunc.
      </p>
      <br />
      <p>
        Donec varius maximus metus in volutpat. Maecenas rhoncus orci felis, ut
        faucibus est efficitur at. Pellentesque tempor ornare suscipit. Nulla
        molestie laoreet justo, at fermentum odio ultricies nec. Proin faucibus
        efficitur hendrerit.
      </p>
    </React.Fragment>
  ),
};
