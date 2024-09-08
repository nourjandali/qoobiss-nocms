/* eslint-disable @next/next/no-img-element */
import { Button, type ButtonProps } from "@/components/ui/button";

type ImageProps = {
  src: string;
  alt?: string;
};

type DarkFeaturesProps = {
  icon: ImageProps;
  heading: string;
  description: string;
};

type Props = {
  heading: string;
  description: string;
  button: ButtonProps;
  DarkFeatures: DarkFeaturesProps[];
  image: ImageProps;
};

export type DarkFeatureProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const DarkFeature = (props: DarkFeatureProps) => {
  const { heading, description, button, DarkFeatures } = {
    ...DarkFeatureDefaults,
    ...props,
  } as Props;
  return (
    <section className="pt-6 pb-20 lg:pt-40 lg:pb-20 bg-dark-background relative">
      <div className="container container-padding">
        <div className="grid auto-cols-fr grid-cols-1 items-start justify-start gap-y-12 lg:grid-cols-[0.35fr_1fr] lg:gap-x-12 lg:gap-y-16 lg:gap-x-20">
          <div className="w-full lg:w-[85%]">
            <h1 className="mb-6 lg:mb-5 lg:text-2xl text-gradient">
              {heading}
            </h1>
            <p className="lg:text-lg text-dark-chapeau">{description}</p>
            <div className="mt-12 flex items-center gap-x-4 lg:mt-10 justify-center lg:justify-normal">
              <Button {...button} className="px-[30px] py-[15px]">
                {button.title}
              </Button>
            </div>
          </div>
          <div className="grid w-full auto-cols-fr grid-cols-1 gap-y-5 lg:gap-y-12 lg:grid-cols-2 lg:gap-5">
            {DarkFeatures.map((DarkFeature, index) => (
              <div key={index} className="p-16 custom-gradient rounded-2xl">
                <div className="mb-[36px] lg:mb-[140px]">
                  <img
                    src={DarkFeature.icon.src}
                    className="size-24"
                    alt={DarkFeature.icon.alt}
                  />
                </div>
                <h2 className="mb-6 text-2xl lg:mb-8 lg:text-4xl lg:leading-[1.2] text-dark-foreground">
                  {DarkFeature.heading}
                </h2>
                <p className="text-dark-chapeau text-sm leading-[1.3]">
                  {DarkFeature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const DarkFeatureDefaults: DarkFeatureProps = {
  heading: "Adapt your business to the fast moving digital reality.",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  button: { title: "Discover our products", variant: "dark-default" },
  DarkFeatures: [
    {
      icon: {
        src: "/integration.svg",
        alt: "Integration icon",
      },
      heading: "Seamless integration",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
    },
    {
      icon: {
        src: "/scalability.svg",
        alt: "Scalability icon",
      },
      heading: "Easy scalability",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
    {
      icon: {
        src: "/secure.svg",
        alt: "Secure icon",
      },
      heading: "Secure",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
    {
      icon: {
        src: "/internal-dev.svg",
        alt: "Internal dev icon",
      },
      heading: "No need of internal dev",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
  ],
};

DarkFeature.displayName = "DarkFeature";
