/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";
import ReactConfetti from "react-confetti";
import { useWindowSize } from "react-use";
import { StaggeredHeading } from "./ui/word-curtain";

type InputField = {
  placeholder: string;
  type?: string;
  name: string;
};

type InfoSection = {
  title: string;
  items: string[];
};

type ImageConfig = {
  src: string;
  alt: string;
};

type Props = {
  heading: string;
  description: string;
  infoSections: InfoSection[];
  form: {
    inputs: InputField[];
    terms: string;
    submitButton: string;
    formsparkId: string;
  };
  images: {
    main: ImageConfig;
    background: ImageConfig;
  };
};

export type PartnerWithUsProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const PartnerWithUs = (props: PartnerWithUsProps) => {
  const { heading, description, infoSections, form, images } = {
    ...PartnerWithUsDefaults,
    ...props,
  } as Props;

  // Window size for confetti
  const { width, height } = useWindowSize();

  // FormSpark setup
  const [submit, submitting] = useFormspark({
    formId: form.formsparkId,
  });

  // Toast setup
  const { toast } = useToast();

  // Form and celebration states
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle successful submission celebration
  const celebrate = () => {
    setShowConfetti(true);
    toast({
      title: "Success!", // Simple string
      description: "Thanks for reaching out! We'll get back to you soon.",
      className: "bg-white text-light-foreground border-none",
    });

    // Stop confetti after 5 seconds
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreedToTerms) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please agree to the terms before submitting.",
      });
      return;
    }

    try {
      await submit(formData);
      setFormData({});
      setAgreedToTerms(false);
      celebrate();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description:
          "There was a problem sending your message. Please try again.",
      });
    }
  };

  return (
    <section className="pt-36 lg:pt-52 relative">
      {showConfetti && (
        <ReactConfetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.2}
        />
      )}
      <div className="container container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20">
          <div className="flex flex-col items-start gap-12 self-stretch">
            <StaggeredHeading className="self-stretch text-4xl text-light-foreground">
              {heading}
            </StaggeredHeading>
            <p className="text-sm text-light-chapeau">{description}</p>
            <div className="flex flex-col items-start gap-10 self-stretch">
              {infoSections.map((section, index) => (
                <div key={index} className="flex flex-col items-start gap-2.5">
                  <StaggeredHeading className="text-2xl text-light-foreground">
                    {section.title}
                  </StaggeredHeading>
                  <div className="flex flex-col">
                    {section.items.map((item, itemIndex) => (
                      <StaggeredHeading
                        key={itemIndex}
                        className="text-light-chapeau text-sm leading-[1.4]"
                      >
                        {item}
                      </StaggeredHeading>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
            <div className="flex pt-20 lg:pt-6 flex-col items-start gap-2.5 self-stretch">
              {form.inputs.map((input, index) => (
                <Input
                  key={index}
                  placeholder={input.placeholder}
                  type={input.type || "text"}
                  name={input.name}
                  value={formData[input.name] || ""}
                  onChange={handleInputChange}
                  required
                />
              ))}
            </div>

            <div className="flex items-start gap-5 py-3.5">
              <Checkbox
                id="terms"
                checked={agreedToTerms}
                onCheckedChange={(checked) =>
                  setAgreedToTerms(checked as boolean)
                }
              />
              <label htmlFor="terms" className="text-sm text-light-chapeau">
                {form.terms}
              </label>
            </div>

            <div className="mt-6 flex items-center justify-center">
              <Button
                type="submit"
                variant="light-default"
                disabled={submitting || !agreedToTerms}
              >
                {submitting ? "Sending..." : form.submitButton}
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="pt-20 pb-5 flex items-center justify-center lg:container lg:container-padding">
        <img
          src={images.main.src}
          alt={images.main.alt}
          className="lg:rounded-2xl aspect-video object-cover"
        />
      </div>
      <div className="absolute -z-10 inset-0 pointer-events-none">
        <img
          src={images.background.src}
          alt={images.background.alt}
          className="object-cover w-full h-1/2"
        />
      </div>
    </section>
  );
};

export const PartnerWithUsDefaults: PartnerWithUsProps = {
  heading: "All you need to be a leader in the future landscape",
  description:
    "Explore the unique advantages and features of Qoobiss products and learn how they can help you achieve your business objectives. Reach out to us today to see how our solutions can tailor to your specific needs and drive your success forward.",
  infoSections: [
    {
      title: "Office",
      items: [
        "Expo Business Park",
        "Str. Av. Popișteanu, nr. 54A, etaj 1",
        "Sector 1, București",
      ],
    },
    {
      title: "Contact",
      items: ["+40 123 456 789", "contact@qoobiss.com"],
    },
  ],
  form: {
    formsparkId: "pPRlp06q0",
    inputs: [
      { placeholder: "Name", name: "Name" },
      { placeholder: "Company email", name: "Email", type: "email" },
      { placeholder: "Phone number", name: "Phone", type: "tel" },
      { placeholder: "Job title", name: "Job Title" },
      { placeholder: "Language", name: "Language" },
      { placeholder: "Message", name: "Message" },
    ],
    terms:
      "Lorem ipsum dolor sit amet consectetur. Sed et posuere vulputate orci ut est laoreet. Ornare et urna tellus porttitor adipiscing mattis non consequat tristique. Vitae mi faucibus vel et.",
    submitButton: "Send",
  },
  images: {
    main: {
      src: "/contact-image.png",
      alt: "Contact image",
    },
    background: {
      src: "/contact-ellipse.png",
      alt: "Contact ellipse",
    },
  },
};
