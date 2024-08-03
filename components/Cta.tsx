type Props = {
  heading: string;
  descriptionFirstPart: string;
  coloredText: string;
  descriptionSecondPart: string;
};

export type CtaProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Cta = (props: CtaProps) => {
  const { heading, descriptionFirstPart, coloredText, descriptionSecondPart } =
    {
      ...CtaDefaults,
      ...props,
    } as Props;
  return (
    <section className="py-16 md:py-24 lg:py-24 px-[160px]">
      <div className="grid grid-cols-[0.35fr_1fr] justify-between items-start w-full gap-x-20">
        <h1 className="text-electric-violet text-sm leading-[130%] font-semibold uppercase">
          {heading}
        </h1>
        <p className="text-[64px] font-light leading-[120%] justify-self-end">
          <span className="text-gradient">{descriptionFirstPart}</span>{" "}
          <span className="text-accent">{coloredText}</span>{" "}
          <span className="text-gradient">{descriptionSecondPart}</span>
        </p>
      </div>
    </section>
  );
};

export const CtaDefaults: CtaProps = {
  heading: "Why Qoobiss",
  descriptionFirstPart: "Discover the power of",
  coloredText: "automated",
  descriptionSecondPart: "client onboarding",
};

Cta.displayName = "Cta";
