/* eslint-disable @next/next/no-img-element */
"use client";

import { Link } from "lucide-react";
import { Button } from "../ui/button";
import { RxArrowRight } from "react-icons/rx";

type Image = {
  src: string;
  alt: string;
};

type Props = {
  url: string;
  image: Image;
  imageMobile: Image;
  tagline: string;
  title: string;
  description: string;
};

export type UseCaseCardProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const UseCaseCard = (props: UseCaseCardProps) => {
  const { url, image, imageMobile, tagline, title, description } = {
    ...UseCaseCardDefaults,
    ...props,
  } as Props;

  return (
    <div className="grid grid-cols-1 lg:flex items-center self-stretch p-5 lg:pr-[60px] gap-12 rounded-2xl bg-white/40">
      <div className="grid grid-cols-1 lg:flex items-center gap-6 lg:gap-10 flex-1 self-stretch">
        <img
          src={image.src}
          alt={image.alt}
          className="size-60 rounded-2xl flex-shrink-0 hidden lg:block"
        />
        <img
          src={imageMobile.src}
          alt={imageMobile.alt}
          className="rounded-2xl flex-shrink-0 lg:hidden"
        />

        <div className="flex px-5 flex-col justify-center items-start gap-4 lg:gap-6 flex-1">
          <p className="text-sm text-electric-violet font-semibold uppercase">
            {tagline}
          </p>
          <h1 className="text-xl lg:text-2xl text-light-foreground">{title}</h1>
          <p className="text-sm text-light-chapeau">{description}</p>
        </div>
      </div>
      <div className="lg:flex lg:items-start hidden">
        <a
          href={url}
          className="flex items-center rounded-[85px] border-2 border-dark-indigo justify-center p-2.5"
        >
          <RxArrowRight className="text-dark-indigo shrink-0 size-6" />
        </a>
      </div>
    </div>
  );
};

export const UseCaseCardDefaults: UseCaseCardProps = {
  url: "#",
  image: {
    src: "/use-case-image.png",
    alt: "Use case image",
  },
  imageMobile: {
    src: "/use-case-image-mobile.png",
    alt: "Use case image",
  },
  tagline: "Finance / Payments",
  title: "Enhanced due diligence for credit industry",
  description:
    "Lorem ipsum dolor sit amet consectetur. Integer scelerisque blandit at etiam commodo phasellus nam. Scelerisque commodo pulvinar pulvinar rhoncus a neque. Neque porttitor hendrerit ornare vel magna adipiscing. Sed condimentum orci augue mollis. ",
};
