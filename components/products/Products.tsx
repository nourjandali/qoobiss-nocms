/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import {
  Button,
  type ButtonProps as OriginalButtonProps,
} from "@/components/ui/button";
import clsx from "clsx";
import Link from "next/link";

type ButtonProps = OriginalButtonProps & {
  href?: string;
};

type ImageProps = {
  src: string;
  alt?: string;
};

type ContentProps = {
  title: string;
  unColoredHeadingOne: string;
  coloredHeading: string;
  unColoredHeadingTwo: string;
  description: string;
  buttons: ButtonProps[];
};

type Props = {
  contents: ContentProps[];
  images: ImageProps[];
};

export type ProductsProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Products = (props: ProductsProps) => {
  const { contents, images } = {
    ...ProductsDefaults,
    ...props,
  } as Props;

  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionHeight = window.innerHeight;
      const currentScrollPosition = window.scrollY + sectionHeight / 2;
      const currentSection = Math.floor(currentScrollPosition / sectionHeight);
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-dark-indigo">
      {images.map((image, index) => (
        <div
          key={index}
          className={clsx(
            "fixed inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500",
            {
              "opacity-100": activeSection === index,
              "opacity-0": activeSection !== index,
            }
          )}
          style={{ backgroundImage: `url(${image.src})` }}
        />
      ))}
      <div className="relative z-10">
        {contents.map((content, index) => (
          <div key={index} className="h-screen flex items-center">
            <div className="container container-padding relative">
              <div className="max-w-2xl relative lg:ml-16">
                <div
                  className="absolute -left-16 top-0 text-2xl text-dark-foreground opacity-30 lg:flex hidden items-center"
                  style={{
                    top: `${activeSection * 25}%`,
                    height: "25%",
                  }}
                >
                  {(index + 1).toString().padStart(2, "0")}
                </div>
                <div className="relative lg:pt-0 lg:pl-20">
                  <div className="absolute left-0 top-0 w-px h-[75%] -translate-x-1/2 bg-dark-foreground lg:flex hidden" />
                  <div
                    className="absolute left-0 w-2 h-1/4 -translate-x-1/2 bg-dark-foreground transition-all duration-300 lg:flex hidden"
                    style={{
                      top: `${activeSection * 25}%`,
                    }}
                  />
                  <h1 className="text-gradient text-8xl lg:text-[100px] font-light mb-4">
                    {content.title}
                  </h1>
                  <h2 className="text-4xl lg:text-8xl lg:font-light tracking-tight mb-6">
                    <span className="text-gradient">
                      {content.unColoredHeadingOne}
                    </span>{" "}
                    <span className="text-accent">
                      {content.coloredHeading}
                    </span>{" "}
                    <span className="text-gradient">
                      {content.unColoredHeadingTwo}
                    </span>
                  </h2>
                  <p className="text-gradient lg:text-dark-chapeau max-w-lg mb-8">
                    {content.description}
                  </p>
                  <div className="flex gap-x-4">
                    {content.buttons.map(
                      (button, buttonIndex) =>
                        button.href && (
                          <Link
                            key={buttonIndex}
                            href={`/products/${button.href}`}
                          >
                            <Button {...button}>{button.title}</Button>
                          </Link>
                        )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute z-0 inset-0 pointer-events-none lg:block hidden">
        <img
          src="/banner-ellipse.png"
          alt="Banner ellipse"
          className="object-cover"
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

export const ProductsDefaults: ProductsProps = {
  contents: [
    {
      title: "Q-Biz",
      unColoredHeadingOne: "Automated",
      coloredHeading: "Contract Management",
      unColoredHeadingTwo: "System",
      description:
        "Quisque at metus egestas, tempor odio nec, fringilla risus. Morbi tempor dictum risus vel vulputate. Sed lacinia, velit ac accumsan tempus, augue nisl mollis felis, eu pretium mauris nulla id nunc.",
      buttons: [
        {
          title: "Find out more",
          variant: "indigo",
          size: "lg",
          href: "q-biz",
        },
      ],
    },
    {
      title: "Q-Identify",
      unColoredHeadingOne: "Automated",
      coloredHeading: "Contract Management",
      unColoredHeadingTwo: "System",
      description:
        "Quisque at metus egestas, tempor odio nec, fringilla risus. Morbi tempor dictum risus vel vulputate. Sed lacinia, velit ac accumsan tempus, augue nisl mollis felis, eu pretium mauris nulla id nunc.",
      buttons: [
        {
          title: "Find out more",
          variant: "indigo",
          size: "lg",
          href: "q-identify",
        },
      ],
    },
    {
      title: "Q-AML",
      unColoredHeadingOne: "Automated",
      coloredHeading: "Contract Management",
      unColoredHeadingTwo: "System",
      description:
        "Quisque at metus egestas, tempor odio nec, fringilla risus. Morbi tempor dictum risus vel vulputate. Sed lacinia, velit ac accumsan tempus, augue nisl mollis felis, eu pretium mauris nulla id nunc.",
      buttons: [
        {
          title: "Find out more",
          variant: "indigo",
          size: "lg",
          href: "q-aml",
        },
      ],
    },
  ],
  images: [
    {
      src: "/q-biz.png",
      alt: "Placeholder image 1",
    },
    {
      src: "/q-identify.png",
      alt: "Placeholder image 2",
    },
    {
      src: "/q-aml.png",
      alt: "Placeholder image 3",
    },
  ],
};
