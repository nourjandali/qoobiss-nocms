/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Image from "next/image";

type Image = {
  src: string;
  alt?: string;
};

type Props = {
  tagline: string;
  heading: string;
  children: React.ReactNode;
  image: Image;
  imageMobile: Image;
};

export type FeatureOneProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const FeatureOne = (props: FeatureOneProps) => {
  const { tagline, heading, children, image, imageMobile } = {
    ...FeatureOneDefaults,
    ...props,
  } as Props;

  return (
    <section className="lg:pt-40">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center lg:justify-between lg:gap-20">
          <div className="py-20 lg:py-0">
            <img
              src={image.src}
              alt={image.alt || ""}
              className="lg:block hidden size-full"
            />
            <img
              src={imageMobile.src}
              alt={imageMobile.alt || ""}
              className="lg:hidden size-full"
            />
          </div>
          <div className="grid grid-cols-1 gap-6 container-padding">
            <p className="font-semibold uppercase text-sm text-electric-violet">
              {tagline}
            </p>
            <h1 className="text-light-foreground text-4xl lg:text-8xl lg:font-light">
              {heading}
            </h1>
            <div className="text-light-chapeau text-sm lg:text-base">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FeatureOneDefaults: FeatureOneProps = {
  tagline: "Our vision",
  heading: "Lorem ipsum dolor sit amet consectetur",
  children: (
    <React.Fragment>
      <p>
        Lorem ipsum dolor sit amet consectetur. Vitae pretium donec blandit
        hendrerit dignissim fusce scelerisque venenatis felis. Duis fusce
        pellentesque velit integer mattis quam quis leo cras. Id egestas
        convallis pellentesque lorem euismod nec turpis eleifend. Ipsum lectus
        porta semper amet nullam sollicitudin sed pellentesque gravida. Faucibus
        pretium suscipit urna dui. Et tincidunt viverra erat ornare ac. Dictum
        fermentum erat ac pellentesque vitae enim vel. Facilisi parturient
        tortor quis egestas quis integer dictum semper. Id risus id proin nisl
        nibh nec. Interdum amet diam venenatis eu ac integer aliquet fermentum
        mauris. Bibendum urna nunc molestie posuere diam arcu. Tincidunt
        pellentesque ipsum massa interdum arcu mauris quis massa.
      </p>
      <br />
      <p>
        Vitae facilisis nisl odio et aliquam nec. Risus malesuada nibh euismod
        tellus nulla enim vel. Amet blandit ornare quisque congue eu. Arcu
        euismod ac lectus convallis eleifend nam scelerisque aliquet. Faucibus
        nunc consectetur amet id tempor nec.
      </p>
      <br />
      <p>
        Neque ut egestas varius nibh non. Imperdiet consectetur pharetra tellus
        tempus aliquam massa nisl volutpat. Dolor malesuada mauris ut ante massa
        mi tortor. Non pulvinar eros vitae turpis volutpat pellentesque eget.
        Nam fermentum ut quis tellus tortor tellus porta leo dignissim.
      </p>
    </React.Fragment>
  ),
  image: {
    src: "/aboutus-image.png",
    alt: "About Us image",
  },
  imageMobile: {
    src: "/aboutus-image-mobile.png",
    alt: "About Us image",
  },
};
