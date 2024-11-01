/* eslint-disable @next/next/no-img-element */
"use client";

import clsx from "clsx";
import { Button, type ButtonProps } from "@/components/ui/button";
import AnimateHeading, { StaggeredHeading } from "@/components/ui/word-curtain";
import Link from "next/link";

type Props = {
  title: string;
  unColoredHeadingOne: string;
  coloredHeading: string;
  unColoredHeadingTwo: string;
  description: string;
  button: ButtonProps;
};

export type BannerProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

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
            <AnimateHeading className="text-gradient text-8xl lg:text-[100px] font-semibold">
              {title}
            </AnimateHeading>
            <AnimateHeading className="lg:flex lg:flex-col lg:items-start text-4xl lg:text-8xl lg:font-light tracking-tight">
              <span className="text-gradient">{unColoredHeadingOne}</span>{" "}
              <span className="text-accent">{coloredHeading}</span>{" "}
              <span className="text-gradient">{unColoredHeadingTwo}</span>
            </AnimateHeading>
            <p className="text-gradient lg:text-dark-chapeau max-w-sm">
              {description}
            </p>
          </div>
          <Link href="/partner-with-us">
            <Button {...button}>{button.title}</Button>
          </Link>
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
  title: "Origin",
  unColoredHeadingOne: "Orchestrate your",
  coloredHeading: "clients’ journey",
  unColoredHeadingTwo: "digitally",
  description:
    "Transform your client-facing operations into automated customized digital workflows. Digitalize the entire end-to-end client journey across any industry. Create, streamline and run efficient digital workflows in days, not months—without writing a single line of code.",
  button: {
    title: "Get in touch",
    variant: "indigo",
    size: "indigo",
  },
};
