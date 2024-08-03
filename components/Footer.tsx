/* eslint-disable @next/next/no-img-element */
import { Button, type ButtonProps } from "@/components/ui/button";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Links = {
  title: string;
  url: string;
};

type ColumnLinks = {
  title: string;
  links: Links[];
};

type Props = {
  columnLinks: ColumnLinks[];
  footerText?: string;
  officeAddress?: string[];
  contactInfo?: {
    phone: string;
    email: string;
  };
  socialLinks?: {
    platform: string;
    url: string;
  }[];
  copyrightText?: string;
  termsUrl?: string;
  privacyUrl?: string;
};

export type FooterProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Footer = (props: FooterProps) => {
  const {
    columnLinks,
    footerText,
    officeAddress,
    contactInfo,
    socialLinks,
    copyrightText,
    termsUrl,
    privacyUrl,
  } = {
    ...FooterDefaults,
    ...props,
  } as Props;

  return (
    <footer className="pt-20 lg:pt-28 relative">
      <div className="container container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-[0.35fr_1fr] lg:mb-20">
          <img src="/footer-qoobiss.svg" alt="qoobiss logo" />
          <h1 className="text-4xl lg:text-[80px] text-light-foreground font-normal lg:font-light my-8 lg:my-0">
            Innovation is bliss.
          </h1>
        </div>
        <div className="grid grid-cols-1 items-start gap-x-8 gap-y-10 md:grid-cols-3 md:gap-y-12 lg:grid-cols-4">
          {columnLinks.map((column, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-start"
            >
              <ul className="flex flex-col gap-2 xxl:gap-4">
                {column.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="text-md xxl:text-2xl text-light-foreground"
                  >
                    <a href={link.url}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="text-md xxl:text-2xl text-light-foreground">
              Office
            </h2>
            <div className="text-light-chapeau text-sm mt-2.5">
              {officeAddress?.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <h2 className="text-md xxl:text-2xl text-light-foreground">
              Contact
            </h2>
            <p className="text-light-chapeau text-sm">{contactInfo?.phone}</p>
            <p className="text-light-chapeau text-sm">{contactInfo?.email}</p>
          </div>

          <div className="flex flex-col gap-2.5">
            <h2 className="text-md xxl:text-2xl xxl:leading-[100%] text-light-foreground">
              Find us on
            </h2>
            {socialLinks?.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-light-chapeau text-sm"
              >
                {link.platform}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center items-start self-stretch lg:pl-[406px] pt-8 lg:pt-20">
          <div className="border-t border-dark-stroke pt-8 md:gap-[46px] flex md:flex-row flex-col items-start lg:items-end lg:py-4 self-stretch">
            <a href="#" className="text-[#4F4E7A] text-xs">
              {copyrightText}
            </a>
            <a href={termsUrl} className="text-[#4F4E7A] text-xs">
              Terms And Conditions
            </a>
            <a href={privacyUrl} className="text-[#4F4E7A] text-xs">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
      <img
        src="/footer-ellipse.png"
        alt="Footer's ellipse"
        className="size-full absolute top-0 -z-10 lg:block hidden pointer-events-none"
      />
      <img
        src="/footer-ellipse-mobile.png"
        alt="Footer's ellipse"
        className="size-full absolute top-0 -z-10 lg:hidden pointer-events-none"
      />
    </footer>
  );
};

export const FooterDefaults: FooterProps = {
  columnLinks: [
    {
      title: "Office",
      links: [
        { title: "Products", url: "#" },
        { title: "Use cases", url: "#" },
        { title: "About us", url: "#" },
        { title: "Career", url: "#" },
      ],
    },
  ],
  footerText: "© 2024 Relume. All rights reserved.",
  officeAddress: [
    "Expo Business Park Str. Av.",
    "Popișteanu, nr. 54A, etaj 1 Sector 1,",
    "București",
  ],
  contactInfo: {
    phone: "+40 123 456 789",
    email: "contact@qoobiss.com",
  },
  socialLinks: [
    { platform: "LinkedIn", url: "#" },
    { platform: "Facebook", url: "#" },
  ],
  copyrightText: "Copyright © All rights reserved 2024",
  termsUrl: "#",
  privacyUrl: "#",
};

Footer.displayName = "Footer";
