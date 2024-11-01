/* eslint-disable @next/next/no-img-element */
import { Button, type ButtonProps } from "@/components/ui/button";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Links = {
  url: string;
  subTitle: string;
};

type Content = {
  title: string;
  links: Links[];
};

type Props = {
  contents: Content[];
  officeAddress?: string[];
  contactInfo?: {
    phone: string;
    email: string;
  };
  socialLinks?: {
    platform: string;
    url: string;
  }[];
  logo?: ImageProps;
  mainHeadingText?: string;
  ellipseImages?: {
    desktopSrc: string;
    mobileSrc: string;
    alt: string;
  };
  copyrightText?: string;
  termsUrl?: {
    url: string;
    title: string;
  };
  privacyUrl?: {
    url: string;
    title: string;
  };
};

export type FooterProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Footer = (props: FooterProps) => {
  const {
    contents,
    officeAddress,
    contactInfo,
    socialLinks,
    logo,
    mainHeadingText,
    copyrightText,
    termsUrl,
    privacyUrl,
  } = {
    ...FooterDefaults,
    ...props,
  } as Props;

  return (
    <footer className="pb-4 lg:pb-0 pt-20 lg:pt-28 relative">
      <div className="container container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-[0.35fr_1fr] lg:mb-20">
          <img
            src={logo?.src || "/footer-qoobiss.svg"}
            alt={logo?.alt || "qoobiss logo"}
          />
          <h1 className="text-4xl lg:text-[80px] text-light-foreground font-normal lg:font-light my-8 lg:my-0">
            {mainHeadingText || "Innovation is bliss."}
          </h1>
        </div>

        <div className="grid grid-cols-1 items-start gap-x-8 gap-y-10 md:grid-cols-3 md:gap-y-12 lg:grid-cols-5">
          {contents.map((content, index) => (
            <div key={index}>
              <h2 className="text-md xxl:text-2xl text-light-foreground">
                {content.title}
              </h2>
              {content.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-light-chapeau text-sm mt-2.5 block"
                >
                  {link.subTitle}
                </a>
              ))}
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
            <h2 className="text-md xxl:text-2xl xxl:leading-[1] text-light-foreground">
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
            <a href={termsUrl?.url} className="text-[#4F4E7A] text-xs">
              {termsUrl?.title}
            </a>
            <a href={privacyUrl?.url} className="text-[#4F4E7A] text-xs">
              {privacyUrl?.title}
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
  contents: [
    {
      title: "Our Solutions",
      links: [
        { url: "/products", subTitle: "All products" },
        { url: "/products/origin", subTitle: "Origin" },
        { url: "/products/ontrace", subTitle: "Ontrace" },
        { url: "/products/omnicheck", subTitle: "Omnicheck" },
      ],
    },
    {
      title: "Company",
      links: [
        { url: "/about-us", subTitle: "About us" },
        { url: "/security-and-compliance", subTitle: "Security & Compliance" },
        { url: "/partner-with-us", subTitle: "Partner with us" },
        { url: "/careers", subTitle: "Careers" },
        { url: "/news", subTitle: "News" },
      ],
    },
  ],
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
  logo: { src: "/footer-qoobiss.svg", alt: "qoobiss logo" },
  mainHeadingText: "Innovation is bliss.",
  copyrightText: "Copyright © All rights reserved 2024",
  termsUrl: { url: "#", title: "Terms And Conditions" },
  privacyUrl: { url: "#", title: "Privacy Policy" },
};

Footer.displayName = "Footer";
