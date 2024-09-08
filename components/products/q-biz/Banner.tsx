/* eslint-disable @next/next/no-img-element */
"use client";

import clsx from "clsx";
import { Button, type ButtonProps } from "@/components/ui/button";

type Props = {
  title: string;
  unColoredHeadingOne: string;
  coloredHeading: string;
  unColoredHeadingTwo: string;
  description: string;
  button: ButtonProps;
};

export type BannerProps = React.ComponentPropsWithoutRef<"section"> & Props;

export const Banner = (props: BannerProps) => {
  const {
    title,
    unColoredHeadingOne,
    coloredHeading,
    unColoredHeadingTwo,
    description,
    button,
  } = {
    ...BannerDefaults,
    ...props,
  } as Props;

  return (
    <section
      className={clsx(
        "relative flex flex-col items-end justify-end lg:justify-center lg:items-center size-full h-[90vh] lg:h-[130vh] pb-20 lg:pb-0",
        "bg-[url('/q-biz.png')]",
        "bg-dark-background bg-right-top [background-size:630px] bg-no-repeat lg:bg-center lg:bg-cover",
        props.className
      )}
    >
      <div className="container container-padding">
        <div className="flex flex-col items-start size-full justify-center gap-[30px] lg:gap-[50px] z-10">
          <div className="flex flex-col items-start gap-5 lg:gap-8">
            <h1 className="text-gradient text-8xl lg:text-[100px] font-light">
              {title}
            </h1>
            <h2 className="lg:flex lg:flex-col lg:items-start text-4xl lg:text-8xl lg:font-light tracking-tight">
              <span className="text-gradient">{unColoredHeadingOne}</span>{" "}
              <span className="text-accent">{coloredHeading}</span>{" "}
              <span className="text-gradient">{unColoredHeadingTwo}</span>
            </h2>
            <p className="text-gradient lg:text-dark-chapeau max-w-sm">
              {description}
            </p>
          </div>
          <Button {...button}>{button.title}</Button>
        </div>
      </div>
      <div className="absolute z-0 inset-0 pointer-events-none lg:block hidden">
        <img
          src="/banner-ellipse.png"
          alt="Banner ellipse"
          className="object-cover w-full"
        />
      </div>
      <div className="absolute z-0 inset-0 pointer-events-none lg:hidden">
        <img
          src="/banner-ellipse-mobile.png"
          alt="Banner ellipse"
          className="object-cover w-full"
        />
      </div>
    </section>
  );
};

export const BannerDefaults: BannerProps = {
  title: "Q-BIZ",
  unColoredHeadingOne: "Automated",
  coloredHeading: "Contract Management",
  unColoredHeadingTwo: "System",
  description:
    "Quisque at metus egestas, tempor odio nec, fringilla risus. Morbi tempor dictum risus vel vulputate. Sed lacinia, velit ac accumsan tempus, augue nisl mollis felis, eu pretium mauris nulla id nunc.",
  button: {
    title: "Get in touch",
    variant: "indigo",
    size: "indigo",
  },
};
