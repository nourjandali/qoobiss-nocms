/* eslint-disable @next/next/no-img-element */
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { Separator } from "./ui/separator";
import { RxChevronDown } from "react-icons/rx";

// Types
type ImageProps = {
  url: string;
  src: string;
  alt?: string;
};

type NavLink = {
  url: string;
  title: string;
  subMenuLinks?: NavLink[];
};

type CustomButtonProps = ButtonProps & {
  href: string;
};

type Props = {
  logo: ImageProps;
  navLinks: NavLink[];
  button: CustomButtonProps;
};

type NavbarProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

const NavigationLink = ({
  href,
  isActive,
  children,
}: {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className={clsx("lg:text-[15px]", {
      "text-accent font-semibold": isActive,
      "text-dark-foreground": !isActive,
    })}
  >
    {children}
  </Link>
);

export const Navbar = (props: NavbarProps) => {
  const { logo, navLinks, button } = {
    ...NavbarDefaults,
    ...props,
  } as Props;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentPath = usePathname();
  const isContactPage = currentPath === "/partner-with-us";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={clsx("flex w-full items-center lg:min-h-18 absolute z-[100]", {
        "bg-dark-background": isContactPage,
        "bg-dark-background lg:bg-transparent": isMobileMenuOpen,
        "bg-transparent": !isMobileMenuOpen && !isContactPage,
        "bg-[url('/navbar-ellipse-mobile.png')] bg-no-repeat": isMobileMenuOpen,
      })}
    >
      <div className="container">
        <div className="size-full lg:flex lg:items-center lg:justify-between border-b border-[#69519433] lg:py-8 z-10">
          <div className="flex min-h-16 py-5 lg:py-0 items-center justify-between md:min-h-18 lg:min-h-full container-padding">
            <Logo logo={logo} />
            <HamburgerButton
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            />
          </div>
          <motion.div
            variants={{
              open: { height: "var(--height-open, 100dvh)" },
              close: { height: "var(--height-closed, 0)" },
            }}
            initial="close"
            exit="close"
            animate={isMobileMenuOpen ? "open" : "close"}
            transition={{ duration: ANIMATION_DURATION }}
            className="overflow-y-auto container-padding lg:[--height-closed:auto] lg:[--height-open:auto] flex lg:flex-row flex-col items-center gap-6"
          >
            {navLinks.map((navLink, index) => (
              <div key={index} className="first:pt-10 lg:first:pt-0">
                {navLink.subMenuLinks ? (
                  <SubMenu navLink={navLink} isMobile={isMobileMenuOpen} />
                ) : (
                  <NavigationLink
                    href={navLink.url}
                    isActive={currentPath === navLink.url}
                  >
                    {navLink.title}
                  </NavigationLink>
                )}
              </div>
            ))}

            <Separator
              className="bg-white/25 w-px h-5"
              orientation="vertical"
            />

            {isMobileMenuOpen && (
              <Separator className="bg-white/25 w-[50px] my-2.5 hidden lg:block" />
            )}

            <div className="flex flex-col items-center gap-4 lg:flex-row">
              <Link href={button.href}>
                <Button {...button} className="w-full">
                  {button.title}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

const SubMenu = ({
  navLink,
  isMobile,
}: {
  navLink: NavLink;
  isMobile: boolean;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const [touchStartTime, setTouchStartTime] = useState<number>(0);
  const LONG_PRESS_DURATION = 500;

  const isActive = useMemo(() => {
    if (pathname.startsWith(navLink.url)) return true;
    return navLink.subMenuLinks?.some((link) => pathname === link.url);
  }, [navLink, pathname]);

  const handleTouchStart = useCallback(() => {
    if (isMobile) {
      setTouchStartTime(Date.now());
    }
  }, [isMobile]);

  const handleTouchEnd = useCallback(() => {
    if (isMobile) {
      const pressDuration = Date.now() - touchStartTime;
      if (pressDuration < LONG_PRESS_DURATION) {
        if (navLink.url && navLink.url !== "#") {
          router.push(navLink.url);
        }
      } else {
        setIsDropdownOpen((prev) => !prev);
      }
    }
  }, [isMobile, navLink.url, router, touchStartTime]);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (isMobile) {
        setIsDropdownOpen((prev) => !prev);
      } else if (navLink.url && navLink.url !== "#") {
        router.push(navLink.url);
      }
    },
    [isMobile, navLink.url, router]
  );

  const handleSubLinkClick = useCallback(
    (e: React.MouseEvent, url: string) => {
      e.preventDefault();
      router.push(url);
      setIsDropdownOpen(false);
    },
    [router]
  );

  return (
    <div
      onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
      onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
    >
      <button
        className={clsx(
          "flex w-full items-center justify-center gap-2 lg:flex-none lg:justify-start lg:px-4 lg:py-2 cursor-pointer select-none"
        )}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={handleClick}
      >
        <span
          className={clsx("text-md lg:text-[15px]", {
            "text-accent font-semibold": isActive,
            "text-dark-foreground": !isActive,
          })}
        >
          {navLink.title}
        </span>
        <motion.span
          variants={{
            rotated: { rotate: 180 },
            initial: { rotate: 0 },
          }}
          animate={isDropdownOpen ? "rotated" : "initial"}
          transition={{ duration: ANIMATION_DURATION }}
        >
          <RxChevronDown className="text-dark-foreground" />
        </motion.span>
      </button>

      <AnimatePresence>
        {isDropdownOpen && (
          <motion.nav
            variants={{
              open: {
                visibility: "visible",
                opacity: "var(--opacity-open, 100%)",
                y: 0,
              },
              close: {
                visibility: "hidden",
                opacity: "var(--opacity-close, 0)",
                y: "var(--y-close, 0%)",
              },
            }}
            animate={isDropdownOpen ? "open" : "close"}
            initial="close"
            exit="close"
            transition={{ duration: SUBMENU_ANIMATION_DURATION }}
            className={clsx(
              "font-medium rounded-3xl text-center",
              "lg:bg-white lg:border lg:border-white lg:p-2 lg:shadow-sm lg:shadow-white lg:absolute lg:z-50",
              "lg:[--y-close:25%]"
            )}
          >
            {navLink.subMenuLinks?.map((subLink, index) => (
              <Link
                key={index}
                href={subLink.url}
                onClick={(e) => handleSubLinkClick(e, subLink.url)}
                className={clsx("block py-3 pl-[5%] text-sm lg:px-4 lg:py-2", {
                  "text-accent font-semibold": pathname === subLink.url,
                  "text-dark-foreground lg:text-dark-indigo":
                    pathname !== subLink.url,
                })}
              >
                {subLink.title}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export const NavbarDefaults: NavbarProps = {
  logo: {
    url: "/",
    src: "/qoobiss.svg",
    alt: "Qoobiss logo",
  },
  navLinks: [
    {
      title: "Our Solutions",
      url: "/products",
      subMenuLinks: [
        { title: "Origin", url: "/products/origin" },
        { title: "Ontrace", url: "/products/ontrace" },
        { title: "Omnicheck", url: "/products/omnicheck" },
      ],
    },
    {
      title: "Company",
      url: "#",
      subMenuLinks: [
        { title: "About us", url: "/about-us" },
        { title: "Security & Compliance", url: "/security-and-compliance" },
        { title: "Partner with us", url: "/partner-with-us" },
        { title: "Careers", url: "/careers" },
        { title: "News", url: "/news" },
      ],
    },
  ],
  button: {
    title: "Get in touch",
    variant: "primary-dark",
    size: "primary",
    href: "/partner-with-us",
  },
};

const ANIMATION_DURATION = 0.3;
const SUBMENU_ANIMATION_DURATION = 0.2;

const hamburgerMenuVariants = {
  topLine: {
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
  },
  middleLine: {
    open: {
      width: 0,
      transition: { duration: 0.1 },
    },
    closed: {
      width: "1.5rem",
      transition: { delay: 0.3, duration: 0.2 },
    },
  },
  bottomLine: {
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
  },
};

const HamburgerButton = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <button
    className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
    onClick={onClick}
  >
    <motion.span
      className="my-[3px] h-0.5 w-6 bg-white"
      animate={isOpen ? ["open", "rotatePhase"] : "closed"}
      variants={hamburgerMenuVariants.topLine}
    />
    <motion.span
      className="my-[3px] h-0.5 w-6 bg-white"
      animate={isOpen ? "open" : "closed"}
      variants={hamburgerMenuVariants.middleLine}
    />
    <motion.span
      className="my-[3px] h-0.5 w-6 bg-white"
      animate={isOpen ? ["open", "rotatePhase"] : "closed"}
      variants={hamburgerMenuVariants.bottomLine}
    />
  </button>
);

const Logo = ({ logo }: { logo: ImageProps }) => (
  <Link href={logo.url}>
    <img src={logo.src} alt={logo.alt} />
  </Link>
);
