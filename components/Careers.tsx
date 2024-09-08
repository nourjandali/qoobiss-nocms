/* eslint-disable @next/next/no-img-element */
"use client";

import { RxArrowRight } from "react-icons/rx";
import { Button } from "./ui/button";
import { Banner } from "./Banner";

type Position = {
  title: string;
  location: string;
};

type Props = {
  heading: string;
  description: string;
  positions: Position[];
};

export type CareersProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Careers = (props: CareersProps) => {
  const { heading, description, positions } = {
    ...CareersDefaults,
    ...props,
  } as Props;

  return (
    <section>
      <Banner title="Careers" />
      <div className="pt-20 lg:pt-40">
        <div className="container container-padding">
          <div className="flex py-5 flex-col items-center gap-6 self-stretch lg:grid lg:grid-cols-2 lg:gap-20">
            <h2 className="text-light-foreground text-center self-stretch text-4xl lg:font-light lg:text-8xl lg:text-left">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p className="self-stretch text-light-foreground text-sm lg:text-lg text-center lg:text-left">
              <span>
                Quisque at metus egestas, tempor odio nec, fringilla risus.
                Morbi tempor dictum risus vel vulputate. Sed lacinia, velit ac
                accumsan tempus, augue nisl mollis felis, eu pretium mauris
                nulla id nunc.
              </span>
              <br />
              <br />
              <span>
                Donec varius maximus metus in volutpat. Maecenas rhoncus orci
                felis, ut faucibus est efficitur at. Pellentesque tempor ornare
                suscipit. Nulla molestie laoreet justo, at fermentum odio
                ultricies nec. Proin faucibus efficitur hendrerit.
              </span>
            </p>
          </div>

          <div className="pt-20 lg:pt-40">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-20">
              <h3 className="text-4xl lg:text-8xl lg:font-light text-light-foreground">
                Available positions
              </h3>
              <div className="flex flex-col items-start gap-2.5 flex-shrink-0">
                {positions.map((position, index) => (
                  <div
                    key={index}
                    className="flex p-5 lg:p-10 justify-center items-center gap-[30px] lg:gap-[140px] self-stretch bg-white/40 rounded-lg lg:rounded-2xl"
                  >
                    <div className="flex flex-col justify-end items-start gap-2 flex-1">
                      <p className="text-xl lg:text-2xl text-light-foreground">
                        {position.title}
                      </p>
                      <p className="text-sm text-light-chapeau">
                        {position.location}
                      </p>
                    </div>
                    <div className="hidden lg:block">
                      <Button className="flex items-center rounded-[85px] border-2 border-dark-indigo justify-center p-2.5">
                        <RxArrowRight className="text-dark-indigo shrink-0 size-6" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-[100px] lg:pt-40">
          <img
            src="/careers-footer-image.svg"
            alt="Career image"
            className="size-full"
          />
        </div>
      </div>
    </section>
  );
};

export const CareersDefaults: CareersProps = {
  positions: [
    {
      title: "Lorem ipsum dolor sit amet",
      location: "București",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      location: "București",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      location: "București",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      location: "București",
    },
  ],
};

Careers.displayName = "Careers";
