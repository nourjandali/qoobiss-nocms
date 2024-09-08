/* eslint-disable @next/next/no-img-element */
"use client";

type Image = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  image: Image;
};

export type ContentTwoProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const ContentTwo = (props: ContentTwoProps) => {
  const { heading, description, image } = {
    ...ContentTwoDefaults,
    ...props,
  } as Props;

  return (
    <section className="pt-20 lg:pt-40">
      <div className="flex lg:flex-row flex-col justify-between items-center gap-24 lg:gap-0">
        <div className="flex items-center justify-end size-full order-last lg:order-first">
          <img src={image.src} alt={image.alt} className="size-full" />
        </div>
        <div className="container container-padding px-[5%] order-first lg:order-last">
          <div className="flex w-full max-w-[40rem] flex-col items-start gap-8">
            <h1 className="text-light-foreground text-4xl lg:text-8xl lg:font-light">
              {heading}
            </h1>
            <p className="text-light-chapeau text-sm lg:text-base">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ContentTwoDefaults: ContentTwoProps = {
  heading: "Lorem ipsum dolor sit amet consectetur",
  description:
    "Lorem ipsum dolor sit amet consectetur. Integer scelerisque blandit at etiam commodo phasellus nam. Scelerisque commodo pulvinar pulvinar rhoncus a neque. Neque porttitor hendrerit ornare vel magna adipiscing. Sed condimentum orci augue mollis. Tortor sagittis tempor commodo volutpat in vitae lacus purus odio. Lorem ornare arcu posuere ultricies tortor convallis porttitor. Pellentesque id gravida donec dui turpis eget nam nisl. Hendrerit volutpat vestibulum amet at et purus. Sem nec dui enim aliquet ut volutpat. Consectetur pellentesque in sollicitudin et vestibulum pretium. Mi arcu eget urna tellus sit volutpat amet. Nulla dignissim tincidunt dignissim eu amet.",
  image: {
    src: "/use-case-content2.png",
    alt: "Use case image",
  },
};
