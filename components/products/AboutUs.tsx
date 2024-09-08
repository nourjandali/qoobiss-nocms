/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";

type Image = {
  src: string;
  alt?: string;
};

type StatProps = {
  value: string;
  label: string;
  description: string;
};

type Props = {
  tagline: string;
  title: string;
  image: Image;
  button: ButtonProps;
  stats: StatProps[];
};

export type AboutUsProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const AboutUs = (props: AboutUsProps) => {
  const { tagline, title, image, button, stats } = {
    ...AboutUsDefaults,
    ...props,
  } as Props;

  return (
    <section className="pt-20 lg:py-40 relative">
      <div className="container container-padding">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <p className="font-semibold uppercase text-sm text-electric-violet mb-8">
              {tagline}
            </p>
            <h1 className="text-light-foreground text-4xl lg:font-light lg:text-11xl mb-8">
              {title}
            </h1>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full rounded-lg lg:mb-12"
            />
            <Button {...button} className="lg:flex hidden">
              {button.title}
            </Button>
          </div>
          <div className="lg:w-[35%]">
            {stats.map((stat, index) => (
              <Stat key={index} {...stat} />
            ))}
          </div>

          <div className="lg:hidden items-center justify-center text-center flex w-full mt-14 lg:mt-0">
            <Button {...button} className="px-[30px] py-[15px]">
              {button.title}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Stat = ({ value, label, description }: StatProps) => {
  return (
    <div className="mb-8">
      <div className="text-[100px] lg:text-[140px] leading-[1.3] font-extralight text-light-foreground">
        {value}
      </div>
      <div className="text-2xl mb-4">{label}</div>
      <p className="text-light-chapeau leading-[1.4] lg:w-1/2">{description}</p>
    </div>
  );
};

export const AboutUsDefaults: AboutUsProps = {
  tagline: "ABOUT US",
  title: "Lorem ipsum dolor sit amet consectetur",
  image: {
    src: "/q-image.png",
    alt: "Q's image",
  },
  button: {
    title: "More about us",
    variant: "light-default",
    size: "default",
  },
  stats: [
    {
      value: "2016",
      label: "Founded",
      description:
        "Quisque at metus egestas, tempor odio nec, fringilla risus. Morbi tempor dictum risus vel vulputate. Sed lacinia, velit ac accumsan tempus.",
    },
    {
      value: "7+",
      label: "Solutions launched",
      description:
        "Quisque at metus egestas, tempor odio nec, fringilla risus. Morbi tempor dictum risus vel vulputate. Sed lacinia, velit ac accumsan tempus.",
    },
    {
      value: "2+",
      label: "Countries",
      description:
        "Quisque at metus egestas, tempor odio nec, fringilla risus. Morbi tempor dictum risus vel vulputate. Sed lacinia, velit ac accumsan tempus.",
    },
  ],
};
