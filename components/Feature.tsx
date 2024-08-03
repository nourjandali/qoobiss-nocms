import { Button, type ButtonProps } from "@/components/ui/button";

type ImageProps = {
  src: string;
  alt?: string;
};

type FeaturesProps = {
  icon: ImageProps;
  heading: string;
  description: string;
};

type Props = {
  heading: string;
  description: string;
  button: ButtonProps;
  features: FeaturesProps[];
  image: ImageProps;
};

export type FeatureProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Feature = (props: FeatureProps) => {
  const { heading, description, button, features } = {
    ...FeatureDefaults,
    ...props,
  } as Props;
  return (
    <section className="py-16 md:py-24 lg:py-24 px-[160px]">
      <div className="grid auto-cols-fr grid-cols-1 items-start justify-start gap-y-12 md:grid-cols-[0.35fr_1fr] md:gap-x-12 md:gap-y-16 lg:gap-x-20">
        <div className="w-[85%]">
          <h1 className="mb-5 lg:text-2xl text-gradient">{heading}</h1>
          <p className="text-lg text-dark-chapeau">{description}</p>
          <div className="mt-6 flex items-center gap-x-4 md:mt-10">
            <Button {...button}>{button.title}</Button>
          </div>
        </div>
        <div className="grid w-full auto-cols-fr grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:gap-5">
          {features.map((feature, index) => (
            <div key={index} className="p-16 custom-gradient rounded-2xl">
              <div className="mb-5 md:mb-[140px]">
                <img
                  src={feature.icon.src}
                  className="size-24"
                  alt={feature.icon.alt}
                />
              </div>
              <h2 className="mb-6 text-2xl md:mb-8 md:text-3xl md:leading-[1.3] lg:text-4xl lg:leading-[1.2] text-dark-foreground">
                {feature.heading}
              </h2>
              <p className="text-dark-chapeau text-sm leading-[135%]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FeatureDefaults: FeatureProps = {
  heading: "Adapt your business to the fast moving digital reality.",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  button: { title: "Discover our products", variant: "dark-default" },
  features: [
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

Feature.displayName = "Feature";
