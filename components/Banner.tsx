/* eslint-disable @next/next/no-img-element */
"use client";

import clsx from "clsx";
import { StaggeredHeading } from "./ui/word-curtain";

type Props = {
  title: string;
};

export type BannerProps = React.ComponentPropsWithoutRef<"section"> & Props;

export const Banner = (props: BannerProps) => {
  const { title } = {
    ...BannerDefaults,
    ...props,
  } as Props;

  return (
    <section
      className={clsx(
        "flex flex-col items-start justify-center bg-center bg-cover bg-no-repeat w-full h-[400px] relative",
        "bg-[url('/hero-image-mobile.svg')] lg:bg-[url('/hero-image.svg')]",
        props.className
      )}
    >
      <StaggeredHeading className="text-white text-4xl lg:text-11xl lg:font-light z-10 container container-padding">
        {title}
      </StaggeredHeading>
      <div className="absolute z-0 inset-0 pointer-events-none lg:block hidden">
        <img
          src="/banner-ellipse.png"
          alt="Banner ellipse"
          className="size-full object-cover"
        />
      </div>
      <div className="absolute z-0 inset-0 pointer-events-none lg:hidden">
        <img
          src="/banner-ellipse-mobile.png"
          alt="Banner ellipse"
          className="size-full object-cover"
        />
      </div>
    </section>
  );
};

export const BannerDefaults: BannerProps = {
  title: "Example",
};
