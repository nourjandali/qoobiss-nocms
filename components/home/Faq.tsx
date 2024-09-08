import { Button, type ButtonProps } from "../ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Plus } from "lucide-react";

type QuestionsProps = {
  title: string;
  answer: string;
};

type Props = {
  tagline: string;
  heading: string;
  button: ButtonProps;
  buttonMobile: ButtonProps;
  questions: QuestionsProps[];
};

export type FaqProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Faq = (props: FaqProps) => {
  const { tagline, heading, button, buttonMobile, questions } = {
    ...FaqDefaults,
    ...props,
  } as Props;
  return (
    <section className="pt-20 lg:pt-40 relative">
      <div className="container container-padding">
        <div className="grid grid-cols-1 gap-y-6 lg:gap-y-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold lg:mb-4 uppercase text-sm leading-[1.3] text-electric-violet">
              {tagline}
            </p>
            <h1 className="text-5xl font-light lg:mb-6 lg:text-8xl">
              {heading}
            </h1>
            <div className="lg:mt-8 lg:flex hidden">
              <Button {...button}>{button.title}</Button>
            </div>
          </div>
          <Accordion type="multiple">
            {questions.map((question, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger
                  icon={
                    <Plus className="size-7 shrink-0 p-1 transition-transform duration-300 lg:size-8 text-electric-violet" />
                  }
                  className="lg:py-5 lg:text-md [&[data-state=open]>svg]:rotate-45 font-normal text-light-foreground text-left"
                >
                  {question.title}
                </AccordionTrigger>
                <AccordionContent className="lg:pb-6 text-light-chapeau text-sm leading-[1.3]">
                  {question.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="pt-12 lg:hidden text-center">
          <Button {...buttonMobile}>{buttonMobile.title}</Button>
        </div>
      </div>
    </section>
  );
};

export const FaqDefaults: FaqProps = {
  tagline: "Discover more",
  heading: "What would you like to know?",
  button: {
    title: "Contact",
    variant: "light-default",
  },
  questions: [
    {
      title:
        "Quisque at metus egestas, tempor odio nec, fringilla risus. Morbi tempor dictum risus vel vulputate?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      title: "Maecenas rhoncus orci felis, ut faucibus?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      title:
        "Donec varius maximus metus in volutpat. Maecenas rhoncus orci felis, ut?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
  ],
  buttonMobile: {
    title: "More about us",
    variant: "light-default",
  },
};

Faq.displayName = "Faq";
