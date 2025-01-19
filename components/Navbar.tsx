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
import { useTina } from "tinacms/dist/react";

// Define the types for our navigation data
interface NavigationLink {
  title: string;
  href: string;
}

interface NavigationItem {
  title: string;
  href?: string;
  links: NavigationLink[];
}

interface NavbarProps {
  data: {
    navigationItems: NavigationItem[];
    logo: {
      src: string;
      alt: string;
    };
    ctaButton: {
      text: string;
      href: string;
    };
  };
}

const DesktopNav = ({
  navigationItems,
}: {
  navigationItems?: NavigationItem[];
}) => {
  const pathname = usePathname();
  const router = useRouter();

  if (!navigationItems) return null;

  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden lg:flex">
        {navigationItems.map((item, index) => (
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
                ?.filter((link) => link.title !== "All products")
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
        ))}
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
  navigationItems?: NavigationItem[];
  logo?: NavbarProps["data"]["logo"];
  ctaButton?: NavbarProps["data"]["ctaButton"];
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

  if (!navigationItems || !logo || !ctaButton) return null;

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
              <img src={logo.src} alt={logo.alt} className="size-[125px]" />
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-10 mt-6">
          {navigationItems.map((item, index) => (
            <div key={index} className="space-y-3">
              <h2 className="font-bold text-lg focus:outline-none">
                {item.title}
              </h2>
              <div className="flex flex-col gap-2">
                {item.links?.map((link, linkIndex) => (
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
                ))}
              </div>
            </div>
          ))}
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

export const Navbar = (props: { query: string; variables: {}; data: any }) => {
  const [open, setOpen] = useState(false);
  const { data } = useTina(props);

  // Add loading state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  // Show loading state
  if (isLoading || !data?.navigation) {
    return (
      <nav className="sticky top-0 z-50 w-full bg-dark-background border-b border-dark-stroke shadow-lg">
        <div className="container container-padding">
          <div className="flex items-center justify-between py-4">
            <div>Loading...</div>
          </div>
        </div>
      </nav>
    );
  }

  const { navigationItems, logo, ctaButton } = data.navigation;

  return (
    <nav className="sticky top-0 z-50 w-full bg-dark-background border-b border-dark-stroke shadow-lg">
      <div className="container container-padding">
        <div className="flex items-center justify-between py-4">
          {logo && (
            <Link href="/" className="flex items-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                height={logo.height}
                width={logo.width}
              />
            </Link>
          )}

          <div className="flex items-center gap-4">
            <DesktopNav navigationItems={navigationItems} />
            <Separator
              className="bg-white/25 h-8 mx-4 hidden lg:block"
              orientation="vertical"
            />
            {ctaButton && (
              <Link href={ctaButton.href}>
                <Button
                  variant="primary-dark"
                  size="primary"
                  className="hidden lg:block"
                >
                  {ctaButton.text}
                </Button>
              </Link>
            )}
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
