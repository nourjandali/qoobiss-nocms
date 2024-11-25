/* eslint-disable @next/next/no-img-element */
"use client";

import { Link } from "lucide-react";
import { Button } from "@/components/ui/button";
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
};

export type NextUseCaseCardProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const NextUseCaseCard = (props: NextUseCaseCardProps) => {
  const { url, image, imageMobile, tagline, title } = {
    ...NextUseCaseCardDefaults,
    ...props,
  } as Props;

  return (
    <section className="pt-[50px] lg:pt-40">
      <div className="container container-padding">
        <div className="grid grid-cols-1 lg:flex items-center self-stretch p-2.5 lg:pr-[60px] gap-12 rounded-2xl bg-white/40">
          <div className="flex items-center gap-5 lg:gap-10 flex-1 self-stretch w-full">
            <img
              src={image.src}
              alt={image.alt}
              className="lg:rounded-2xl lg:flex-shrink-0 hidden lg:block lg:aspect-square lg:size-32"
            />
            <img
              src={imageMobile.src}
              alt={imageMobile.alt}
              className="rounded-2xl flex-shrink-0 lg:hidden size-20 object-cover"
            />
            <div className="flex lg:px-5 flex-col justify-center items-start gap-2.5 flex-1 w-full">
              <p className="text-xl text-electric-violet font-semibold uppercase">
                {tagline}
              </p>
              <h1 className="text-base lg:text-2xl text-light-foreground">
                {title}
              </h1>
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
      </div>
    </section>
  );
};

export const NextUseCaseCardDefaults: NextUseCaseCardProps = {
  url: "#",
  image: {
    src: "/use-case-image.png",
    alt: "Use case image",
  },
  imageMobile: {
    src: "/use-case-image-mobile.png",
    alt: "Use case image",
  },
  tagline: "Next use case",
  title: "Revenue query from the Fisc Authorities databases",
};
