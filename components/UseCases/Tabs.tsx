/* eslint-disable @next/next/no-img-element */
"use client";

import { UseCaseCard } from "./UseCaseCard";
import { Button, ButtonProps } from "../ui/button";

type Image = {
  src: string;
  alt: string;
};

type Card = {
  url: string;
  image: Image;
  tagline: string;
  title: string;
  description: string;
};

type Props = {
  buttons: ButtonProps[];
  cards: Card[];
};

export type TabsProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Tabs = (props: TabsProps) => {
  const { cards, buttons } = {
    ...TabsDefaults,
    ...props,
  } as Props;

  return (
    <section className="pt-20 lg:pt-40 relative">
      <div className="container container-padding max-w-xl">
        <div className="grid grid-cols-2 lg:flex items-center justify-center gap-2.5 pb-10 max-w-xxs mx-auto lg:mx-0 w-full lg:max-w-none">
          {buttons.map((button, index) => (
            <Button key={index} {...button}>
              {button.title}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:flex lg:flex-col gap-5">
          {cards.map((card) => (
            <UseCaseCard key={card.url} {...card} />
          ))}
        </div>

        <div className="absolute z-0 inset-0 pointer-events-none size-full">
          <img
            src="/use-cases-ellipse.png"
            alt="Banner ellipse"
            className="size-full"
          />
        </div>
      </div>
    </section>
  );
};

export const TabsDefaults: TabsProps = {
  buttons: [
    {
      title: "All products",
      variant: "light-default",
      size: "filter",
    },
    {
      title: "Q-Biz",
      variant: "light-default",
      size: "filter",
      className: "border-[#11092b1a]",
    },
    {
      title: "Q-Identify",
      variant: "light-default",
      size: "filter",
      className: "border-[#11092b1a]",
    },
    {
      title: "Q-AML",
      variant: "light-default",
      size: "filter",
      className: "border-[#11092b1a]",
    },
  ],
  cards: [
    {
      url: "#",
      image: {
        src: "/use-case-image.png",
        alt: "Use case image",
      },
      tagline: "Finance / Payments",
      title: "Enhanced due diligence for credit industry",
      description:
        "Lorem ipsum dolor sit amet consectetur. Integer scelerisque blandit at etiam commodo phasellus nam. Scelerisque commodo pulvinar pulvinar rhoncus a neque. Neque porttitor hendrerit ornare vel magna adipiscing. Sed condimentum orci augue mollis. ",
    },
    {
      url: "#",
      image: {
        src: "/use-case-image.png",
        alt: "Use case image",
      },
      tagline: "Finance / Payments",
      title: "Revenue query from the Fisc Authorities databases",
      description:
        "Lorem ipsum dolor sit amet consectetur. Integer scelerisque blandit at etiam commodo phasellus nam. Scelerisque commodo pulvinar pulvinar rhoncus a neque. Neque porttitor hendrerit ornare vel magna adipiscing. Sed condimentum orci augue mollis. ",
    },
    {
      url: "#",
      image: {
        src: "/use-case-image.png",
        alt: "Use case image",
      },
      tagline: "Finance / Payments",
      title: "Fraud prevention for credit industry",
      description:
        "Lorem ipsum dolor sit amet consectetur. Integer scelerisque blandit at etiam commodo phasellus nam. Scelerisque commodo pulvinar pulvinar rhoncus a neque. Neque porttitor hendrerit ornare vel magna adipiscing. Sed condimentum orci augue mollis. ",
    },
    {
      url: "#",
      image: {
        src: "/use-case-image.png",
        alt: "Use case image",
      },
      tagline: "Finance / Payments",
      title: "Client identification for betting and sporting industry",
      description:
        "Lorem ipsum dolor sit amet consectetur. Integer scelerisque blandit at etiam commodo phasellus nam. Scelerisque commodo pulvinar pulvinar rhoncus a neque. Neque porttitor hendrerit ornare vel magna adipiscing. Sed condimentum orci augue mollis. ",
    },
  ],
};
