/* eslint-disable @next/next/no-img-element */
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";

type Props = {
  heading: string;
  description: string;
};

export type ContactProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Contact = (props: ContactProps) => {
  const {} = {
    ...ContactDefaults,
    ...props,
  } as Props;
  return (
    <section className="pt-36 lg:pt-52 relative">
      <div className="container container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20">
          <div className="flex flex-col items-start gap-12 self-stretch">
            <h1 className="self-stretch text-4xl text-light-foreground">
              Get in touch
            </h1>
            <p className="text-sm text-light-chapeau">
              Quisque at metus egestas, tempor odio nec, fringilla risus. Morbi
              tempor dictum risus vel vulputate. Sed lacinia, velit ac accumsan
              tempus, augue nisl mollis felis, eu pretium mauris nulla id nunc.
            </p>

            <div className="flex flex-col items-start gap-10 self-stretch">
              <div className="flex flex-col items-start gap-2.5">
                <p className="text-2xl text-light-foreground">Office</p>
                <div className="flex flex-col">
                  <span className="text-light-chapeau text-sm leading-[1.4]">
                    Expo Business Park
                  </span>
                  <span className="text-light-chapeau text-sm leading-[1.4]">
                    Str. Av. Popișteanu, nr. 54A, etaj 1
                  </span>
                  <span className="text-light-chapeau text-sm leading-[1.4]">
                    Sector 1, București
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <p className="text-2xl text-light-foreground">Contact</p>
                <span className="text-light-chapeau text-sm leading-[1.4]">
                  +40 123 456 789
                </span>
                <span className="text-light-chapeau text-sm leading-[1.4]">
                  contact@qoobiss.com
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="flex pt-20 lg:pt-6 flex-col items-start gap-2.5 self-stretch">
              <Input placeholder="Name" />
              <Input placeholder="Company email" />
              <Input placeholder="Phone number" />
              <Input placeholder="Job title" />
              <Input placeholder="Language" />
              <Input placeholder="Message" />
            </div>

            <div className="flex items-start gap-5 py-3.5">
              <Checkbox id="terms" />
              <label htmlFor="terms" className="text-sm text-light-chapeau">
                Lorem ipsum dolor sit amet consectetur. Sed et posuere vulputate
                orci ut est laoreet. Ornare et urna tellus porttitor adipiscing
                mattis non consequat tristique. Vitae mi faucibus vel et.
              </label>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center">
          <Button variant="light-default">Send</Button>
        </div>
      </div>
      <div className="pt-20 pb-5 flex items-center justify-center lg:container lg:container-padding">
        <img
          src="/contact-image.png"
          alt="Contact image"
          className="lg:rounded-2xl aspect-video object-cover"
        />
      </div>
      <div className="absolute -z-10 inset-0 pointer-events-none">
        <img
          src="/contact-ellipse.png"
          alt="Contact ellipse"
          className="object-cover w-full h-1/2"
        />
      </div>
    </section>
  );
};

export const ContactDefaults: ContactProps = {};

Contact.displayName = "Contact";
