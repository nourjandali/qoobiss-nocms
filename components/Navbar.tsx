"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// TinaCMS generated types
interface NavigationLink {
  __typename?: "NavigationNavigationItemsLinks";
  title: string;
  href: string;
}

interface NavigationItem {
  __typename?: "NavigationNavigationItems";
  title: string;
  href?: string | null;
  links?: (NavigationLink | null)[] | null;
}

interface Logo {
  src: string;
  alt: string;
  height: number;
  width: number;
}

interface CTAButton {
  text: string;
  href: string;
}

interface NavigationContent {
  navigationItems?: (NavigationItem | null)[] | null;
  logo: Logo;
  ctaButton: CTAButton;
}

interface NavigationData {
  __typename?: "Navigation";
  id: string;
  navigation?: NavigationContent | null;
}

const DesktopNav = ({
  navigationItems,
}: {
  navigationItems: (NavigationItem | null)[];
}) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden lg:flex">
        {navigationItems.map(
          (item, index) =>
            item && (
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger
                  onClick={() => item.href && router.push(item.href)}
                  className={cn(
                    "cursor-pointer",
                    pathname === item.href && "text-electric-violet"
                  )}
                >
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col items-start text-left w-72 gap-2 p-6">
                  {item.links
                    ?.filter(
                      (link): link is NavigationLink =>
                        !!link && link.title !== "All products"
                    )
                    .map((link, linkIndex) => (
                      <NavigationMenuLink asChild key={linkIndex}>
                        <Link
                          href={link.href}
                          className={cn(
                            "block select-none leading-none p-2 w-full no-underline outline-none transition-colors text-light-foreground rounded-lg hover:text-electric-violet",
                            pathname === link.href && "text-electric-violet"
                          )}
                        >
                          <span className="text-base font-medium leading-none">
                            {link.title}
                          </span>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const MobileNav = ({
  open,
  onOpenChange,
  navigationItems,
  logo,
  ctaButton,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  navigationItems: (NavigationItem | null)[];
  logo: Logo;
  ctaButton: CTAButton;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    onOpenChange(false);
  }, [pathname, onOpenChange]);

  const handleLinkClick = (href: string) => {
    onOpenChange(false);
    router.push(href);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild className="lg:hidden">
        <Button size="icon" variant="link">
          <Menu className="size-6 text-light-background" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64">
        <SheetHeader className="border-b border-dark-stroke pb-[18px]">
          <SheetTitle asChild>
            <Link href="/" className="flex items-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                height={logo.height}
                width={logo.width}
              />
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-10 mt-6">
          {navigationItems.map(
            (item, index) =>
              item && (
                <div key={index} className="space-y-3">
                  <h2 className="font-bold text-lg focus:outline-none">
                    {item.title}
                  </h2>
                  <div className="flex flex-col gap-2">
                    {item.links?.map(
                      (link, linkIndex) =>
                        link && (
                          <button
                            key={linkIndex}
                            onClick={() => handleLinkClick(link.href)}
                            className={cn(
                              "text-sm text-left hover:text-electric-violet",
                              pathname === link.href
                                ? "text-electric-violet"
                                : "text-dark-foreground"
                            )}
                          >
                            {link.title}
                          </button>
                        )
                    )}
                  </div>
                </div>
              )
          )}
        </div>
        <Button
          variant="primary-dark"
          size="primary"
          className="mt-8 w-full"
          onClick={() => handleLinkClick(ctaButton.href)}
        >
          {ctaButton.text}
        </Button>
      </SheetContent>
    </Sheet>
  );
};

interface NavbarProps {
  data: NavigationData;
}

export const Navbar = ({ data }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  // Default values
  const defaultLogo = {
    src: "/qoobiss.svg",
    alt: "Qoobiss logo",
    height: 125,
    width: 125,
  };

  const defaultCTAButton = {
    text: "Get in touch",
    href: "/partner-with-us",
  };

  // Get navigation content with fallbacks
  const navigationContent = data.navigation || {
    navigationItems: [],
    logo: defaultLogo,
    ctaButton: defaultCTAButton,
  };

  const {
    navigationItems = [],
    logo = defaultLogo,
    ctaButton = defaultCTAButton,
  } = navigationContent;

  return (
    <nav className="sticky top-0 z-50 w-full bg-dark-background border-b border-dark-stroke shadow-lg">
      <div className="container container-padding">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              height={logo.height}
              width={logo.width}
            />
          </Link>

          <div className="flex items-center gap-4">
            <DesktopNav navigationItems={navigationItems} />
            <Separator
              className="bg-white/25 h-8 mx-4 hidden lg:block"
              orientation="vertical"
            />
            <Link href={ctaButton.href}>
              <Button
                variant="primary-dark"
                size="primary"
                className="hidden lg:block"
              >
                {ctaButton.text}
              </Button>
            </Link>
            <MobileNav
              open={open}
              onOpenChange={setOpen}
              navigationItems={navigationItems}
              logo={logo}
              ctaButton={ctaButton}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
