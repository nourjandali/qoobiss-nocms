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

const navigationItems = [
  {
    title: "Our Solutions",
    href: "/products",
    links: [
      { title: "All products", href: "/products" },
      { title: "Origin", href: "/products/origin" },
      { title: "Ontrace", href: "/products/ontrace" },
      { title: "Omnicheck", href: "/products/omnicheck" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About us", href: "/about-us" },
      { title: "Security & Compliance", href: "/security-and-compliance" },
      { title: "Partner with us", href: "/partner-with-us" },
    ],
  },
];

const DesktopNav = () => {
  const pathname = usePathname();
  const router = useRouter();
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
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
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
                src="/qoobiss.svg"
                alt="Qoobiss logo"
                height={125}
                width={125}
              />
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
          onClick={() => handleLinkClick("/contact")}
        >
          Get in touch
        </Button>
      </SheetContent>
    </Sheet>
  );
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-dark-background border-b border-dark-stroke shadow-lg">
      <div className="container container-padding">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/qoobiss.svg"
              alt="Qoobiss logo"
              height={125}
              width={125}
            />
          </Link>

          <div className="flex items-center gap-4">
            <DesktopNav />
            <Separator
              className="bg-white/25 h-8 mx-4 hidden lg:block"
              orientation="vertical"
            />
            <Link href="/partner-with-us">
              <Button
                variant="primary-dark"
                size="primary"
                className="hidden lg:block"
              >
                Get in touch
              </Button>
            </Link>
            <MobileNav open={open} onOpenChange={setOpen} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
