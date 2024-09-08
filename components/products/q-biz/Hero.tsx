"use client";

type Props = {
  title: string;
  description: string;
};

export type HeroProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Hero = (props: HeroProps) => {
  const { title, description } = {
    ...HeroDefaults,
    ...props,
  } as Props;

  return (
    <section className="pt-20 lg:pt-[200px]">
      <div className="container container-padding text-center max-w-xl mx-auto flex flex-col items-center justify-center gap-6 lg:gap-8">
        <h1 className="text-light-foreground text-4xl lg:text-11xl lg:font-light z-10">
          {title}
        </h1>
        <div className="text-light-foreground text-sm lg:text-lg items-center justify-center flex">
          {description}
        </div>
      </div>
    </section>
  );
};

export const HeroDefaults: HeroProps = {
  title: "The single platform for any contracting flow",
  description:
    "QBIZ is an AI and Biometric based platform that lets you identify, verify and know your client, manage client onboarding and contract signing in a completely automated way. Now you can optimize sales and clients’ contracting flows like never before.",
};
