/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

type Image = {
  src: string;
  alt?: string;
};

type Certification = {
  image: Image;
};

type Props = {
  heading: string;
  certifications: Certification[];
};

export type CertificationProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Certification = (props: CertificationProps) => {
  const { heading, certifications } = {
    ...CertificationDefaults,
    ...props,
  } as Props;

  return (
    <section className="pt-20 lg:pt-28">
      <div className="container container-padding">
        <div className="flex flex-col items-center gap-6 lg:gap-12">
          <h1 className="text-light-foreground text-sm font-semibold uppercase">
            {heading}
          </h1>
          <div className="flex flex-wrap w-full items-start justify-center gap-8 lg:gap-12">
            {certifications.map((certification, index) => (
              <div
                key={index}
                className="flex justify-center items-center flex-shrink-0"
              >
                <img
                  src={certification.image.src}
                  alt={certification.image.alt}
                  className="size-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const CertificationDefaults: CertificationProps = {
  heading: "Certifications",
  certifications: [
    { image: { src: "/certificate-1.svg", alt: "Certificate 1" } },
    { image: { src: "/certificate-2.svg", alt: "Certificate 2" } },
  ],
};
