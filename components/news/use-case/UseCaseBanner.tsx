/* eslint-disable @next/next/no-img-element */
"use client";

type Props = {
  tagline: string;
  title: string;
};

export type UseCaseBannerProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const UseCaseBanner = (props: UseCaseBannerProps) => {
  const { tagline, title } = {
    ...UseCaseBannerDefaults,
    ...props,
  } as Props;

  return (
    <section>
      <div className="flex flex-col items-start justify-center bg-center bg-cover bg-no-repeat w-full h-[75vh] relative bg-[url('/use-case-banner.svg')] lg:bg-[url('/use-case-banner.svg')]">
        <div className="container container-padding flex flex-col items-start gap-2 lg:gap-5">
          <p className="font-semibold uppercase text-sm text-electric-violet">
            {tagline}
          </p>
          <h1 className="text-white text-4xl lg:text-11xl lg:font-light z-10 max-w-xxs lg:max-w-[52rem] w-full">
            {title}
          </h1>
        </div>
        <div className="absolute z-0 inset-0 pointer-events-none lg:block hidden">
          <img
            src="/banner-ellipse.png"
            alt="Banner ellipse"
            className="size-full object-cover"
          />
        </div>
        <div className="absolute z-0 inset-0 pointer-events-none lg:hidden">
          <img
            src="/banner-ellipse-mobile.png"
            alt="Banner ellipse"
            className="size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export const UseCaseBannerDefaults: UseCaseBannerProps = {
  tagline: "Use case",
  title: "Enhanced due diligence for credit industry",
};
