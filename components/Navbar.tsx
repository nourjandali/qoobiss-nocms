/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ImageProps = {
  url: string;
  src: string;
  alt?: string;
};

type NavLink = {
  url: string;
  title: string;
};

type Props = {
  logo: ImageProps;
  navLinks: NavLink[];
  button: ButtonProps;
};

export type NavbarProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Navbar = (props: NavbarProps) => {
  const { logo, navLinks, button } = {
    ...NavbarDefaults,
    ...props,
  } as Props;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentPath = usePathname();

  return (
    <nav className="flex w-full items-center lg:min-h-18 lg:px-20 absolute z-[100]">
      <div className="size-full lg:flex lg:items-center lg:justify-between border-b border-[#69519433] lg:py-8 z-10">
        <div className="flex min-h-16 py-5 lg:py-0 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <Link href={logo.url}>
            <img src={logo.src} alt={logo.alt} />
          </Link>
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-white"
              animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
              variants={topLineVariants}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-white"
              animate={isMobileMenuOpen ? "open" : "closed"}
              variants={middleLineVariants}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-white"
              animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
              variants={bottomLineVariants}
            />
          </button>
        </div>
        <motion.div
          variants={{
            open: {
              height: "var(--height-open, 100dvh)",
            },
            close: {
              height: "var(--height-closed, 0)",
            },
          }}
          initial="close"
          exit="close"
          animate={isMobileMenuOpen ? "open" : "close"}
          transition={{ duration: 0.3 }}
          className="overflow-hidden px-[5%] lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto] gap-[36px] bg-dark-indigo lg:bg-transparent"
        >
          {navLinks.map((navLink, index) => (
            <div key={index} className="first:pt-4 lg:first:pt-0">
              <Link
                href={navLink.url}
                className={`lg:text-[15px]
                  ${
                    currentPath === navLink.url
                      ? "text-accent font-semibold"
                      : "text-dark-foreground"
                  }`}
              >
                {navLink.title}
              </Link>
            </div>
          ))}
          <div className="mt-6 flex flex-col items-center gap-4 lg:ml-4 lg:mt-0 lg:flex-row">
            <Button {...button} className="w-full">
              {button.title}
            </Button>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export const NavbarDefaults: NavbarProps = {
  logo: {
    url: "/",
    src: "/logo.svg",
    alt: "Logo image",
  },
  navLinks: [
    { title: "Home", url: "/" },
    { title: "Products", url: "/products" },
    { title: "Use cases", url: "/use-cases" },
    { title: "About us", url: "/about-us" },
    { title: "Careers", url: "/careers" },
  ],
  button: {
    title: "Get in touch",
    variant: "primary-dark",
    size: "primary",
  },
};

const topLineVariants = {
  open: {
    translateY: 8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: -45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const middleLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1 },
  },
  closed: {
    width: "1.5rem",
    transition: { delay: 0.3, duration: 0.2 },
  },
};

const bottomLineVariants = {
  open: {
    translateY: -8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: 45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};
