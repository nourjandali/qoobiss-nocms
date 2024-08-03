import { Button, type ButtonProps } from "@/components/ui/button";

type ImageProps = {
  src: string;
  alt?: string;
};

type SectionProps = {
  number: string;
  icon: ImageProps;
  heading: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  sections: SectionProps[];
  button: ButtonProps;
};

export type Feature2Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Feature2 = (props: Feature2Props) => {
  const { tagline, heading, description, button, sections } = {
    ...Feature2Defaults,
    ...props,
  } as Props;
  return (
    <section className="py-16 md:py-24 lg:py-28 px-[160px]">
      <div className="flex flex-col items-start lg:gap-20">
        <div>
          <p className="mb-3 font-semibold md:mb-4 uppercase text-sm leading-[130%] text-electric-violet">
            {tagline}
          </p>
          <div className="flex gap-5 self-stretch items-start w-full">
            <h1 className="text-5xl font-light md:text-7xl lg:text-[64px] text-light-foreground">
              {heading}
            </h1>
            <div className="w-1/2">
              <p className="text-light-chapeau">{description}</p>
              <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-[30px]">
                <Button {...button}>{button.title}</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-5">
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col p-14 gap-[120px] flex-1 self-stretch bg-white/40 rounded-2xl"
            >
              <div className="flex w-full items-center justify-between">
                <h2 className="text-electric-violet leading-[120%] text-4xl">
                  {section.number}
                </h2>
                <img
                  src={section.icon.src}
                  className="size-32"
                  alt={section.icon.alt}
                />
              </div>
              <div>
                <h3 className="mb-3 text-2xl md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl text-light-foreground">
                  {section.heading}
                </h3>
                <p className="text-light-chapeau text-sm leading-[135%]">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Feature2Defaults: Feature2Props = {
  tagline: "Technology",
  heading: "Lorem ipsum dolor sit amet consectetur",
  description:
    "Quisque at metus egestas, tempor odio nec, fringilla risus. Morbi tempor dictum risus vel vulputate. Sed lacinia, velit ac accumsan tempus, augue nisl mollis felis, eu pretium mauris nulla id nunc. Donec varius maximus metus in volutpat. Maecenas rhoncus orci felis, ut faucibus est efficitur at. Pellentesque tempor ornare suscipit. Nulla molestie laoreet justo, at fermentum odio ultricies nec. Proin faucibus efficitur hendrerit.",
  button: { title: "Use cases", variant: "light-default" },
  sections: [
    {
      number: "01",
      icon: {
        src: "/ai-biometric.svg",
        alt: "Biometric icon",
      },
      heading: "AI and biometric driven technology",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
    {
      number: "02",
      icon: {
        src: "/robust-api.svg",
        alt: "Robust API icon",
      },
      heading: "Robust API system",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
    {
      number: "03",
      icon: {
        src: "/cloud-deployment.svg",
        alt: "Cloud deployment icon",
      },
      heading: "On-premise or cloud deployment",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
  ],
};

Feature2.displayName = "Feature2";
