/* eslint-disable @next/next/no-img-element */
import { Button, type ButtonProps } from "@/components/ui/button";

type ImageProps = {
  src: string;
  alt?: string;
};

type Feature = {
  icon: ImageProps;
  heading: string;
  description: string;
};

type Props = {
  heading: string;
  description: string;
  button: ButtonProps;
  features: Feature[];
  image: ImageProps;
};

export type DarkFeatureProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const DarkFeature = (props: DarkFeatureProps) => {
  const { heading, description, button, features } = {
    ...DarkFeatureDefaults,
    ...props,
  } as Props;
  return (
    <section className="pb-12 pt-6 lg:py-40 relative">
      <div className="container container-padding">
        <div className="grid grid-cols-1 items-start lg:justify-between lg:grid-cols-[0.5fr_1fr]">
          <div className="w-[85%]">
            <h1 className="mb-5 lg:text-2xl text-gradient">{heading}</h1>
            <p className="text-lg text-dark-chapeau">{description}</p>
            <div className="mt-6 items-center gap-x-4 md:mt-10 lg:flex hidden">
              <Button {...button}>{button.title}</Button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 grid w-full auto-cols-fr grid-cols-1 gap-y-5 lg:gap-y-12 lg:grid-cols-2 lg:gap-5">
            {features.map((feature, index) => (
              <div key={index} className="p-16 custom-gradient rounded-2xl">
                <div className="mb-5 md:mb-[140px]">
                  <img
                    src={feature.icon.src}
                    className="size-24"
                    alt={feature.icon.alt}
                  />
                </div>
                <h2 className="mb-6 md:mb-8 lg:text-4xl text-dark-foreground">
                  {feature.heading}
                </h2>
                <p className="text-dark-chapeau text-sm leading-[1.3]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex items-center justify-center gap-x-4 lg:mt-0 lg:hidden">
          <Button {...button}>{button.title}</Button>
        </div>
      </div>
      <div className="absolute z-0 inset-0 pointer-events-none size-full">
        <img
          src="/use-cases-ellipse.png"
          alt="Banner ellipse"
          className="size-full"
        />
      </div>
    </section>
  );
};

export const DarkFeatureDefaults: DarkFeatureProps = {
  heading: "Lorem ipsum dolor sit amet consectetur.",
  description:
    "Lorem ipsum dolor sit amet consectetur. Nisl in est amet libero in mauris aliquet et. Tellus sagittis duis turpis diam libero at mattis nibh. Porta vitae a tortor et tristique nullam consequat nunc. Nisl sit sit eget pellentesque egestas. Etiam ac cursus adipiscing sit integer amet nullam. Pharetra sit ullamcorper quam parturient velit cras gravida.",
  features: [
    {
      icon: {
        src: "/mobile.png",
        alt: "Integration icon",
      },
      heading: "Seamless integration",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
    },
    {
      icon: {
        src: "/calendar.png",
        alt: "Scalability icon",
      },
      heading: "Easy scalability",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
    {
      icon: {
        src: "/location.png",
        alt: "Secure icon",
      },
      heading: "Secure",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
    {
      icon: {
        src: "/user.png",
        alt: "Internal dev icon",
      },
      heading: "No need of internal dev",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
  ],
  button: { title: "Use cases", variant: "dark-default" },
};
