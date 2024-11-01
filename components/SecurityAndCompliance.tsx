/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Banner } from "./Banner";
import { StaggeredHeading } from "./ui/word-curtain";

type ImageProps = {
  src: string;
  alt?: string;
};

type CertificationProps = {
  id: number;
  title: string;
  isoImage: ImageProps;
  shortDescription: string;
  badge: string;
  fullDescription: string;
  validUntil: string;
};

type Props = {
  heading: string;
  certifications: CertificationProps[];
};

export type SecurityAndComplianceProps =
  React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("ro-RO", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

export const SecurityAndCompliance = (props: SecurityAndComplianceProps) => {
  const { heading, certifications } = {
    ...SecurityAndComplianceDefaults,
    ...props,
  } as Props;

  return (
    <section>
      <Banner title="Security and Compliance" />
      <div className="pt-20 lg:pt-28">
        <div className="container container-padding">
          <StaggeredHeading className="text-3xl mb-6">
            {heading}
          </StaggeredHeading>
          <Carousel className="w-full">
            <CarouselContent>
              {certifications.map((cert) => (
                <CarouselItem
                  key={cert.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-xl">
                              {cert.title}
                            </CardTitle>
                            <Badge variant="secondary">{cert.badge}</Badge>
                          </div>
                          <CardDescription>
                            {cert.shortDescription}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <img
                            src={cert.isoImage.src}
                            alt={cert.isoImage.alt}
                            className="size-60 mx-auto object-cover"
                          />
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <p className="text-sm text-muted-foreground">
                            Valid until: {formatDate(cert.validUntil)}
                          </p>
                          <Button variant="light-default" size="primary">
                            Learn More
                          </Button>
                        </CardFooter>
                      </Card>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          {cert.title}
                          <Badge variant="secondary">{cert.badge}</Badge>
                        </DialogTitle>
                        <DialogDescription>
                          <div className="mt-4 space-y-4">
                            <img
                              src={cert.isoImage.src}
                              alt={cert.isoImage.alt}
                              className="size-full object-cover"
                            />
                            <p className="text-base leading-relaxed">
                              {cert.fullDescription}
                            </p>
                            <div className="flex items-center justify-between pt-4 border-t">
                              <span className="text-sm text-muted-foreground">
                                Certification Status: Active
                              </span>
                              <span className="text-sm text-muted-foreground">
                                Valid until: {formatDate(cert.validUntil)}
                              </span>
                            </div>
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-electric-violet [&_svg]:size-6 hidden lg:block" />
            <CarouselNext className="text-electric-violet [&_svg]:size-6 hidden lg:block" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export const SecurityAndComplianceDefaults: SecurityAndComplianceProps = {
  heading: "Trusted Standards You Can Rely On",
  certifications: [
    {
      id: 1,
      title: "ISO 9001:2015",
      isoImage: {
        src: "/certificate-1.svg",
        alt: "Certificate 1",
      },
      shortDescription: "Quality Management System",
      badge: "Quality",
      fullDescription:
        "Consistently Exceeding Standards ISO 9001:2015 certification outlines the criteria for a comprehensive quality management system. Qoobiss adheres to these guidelines to consistently provide products and services that meet customer expectations and regulatory requirements, ensuring high quality across all operations.",
      validUntil: "2025-12-31",
    },
    {
      id: 2,
      title: "ISO 30107-3 Levels 1 and 2",
      isoImage: {
        src: "/certificate-2.svg",
        alt: "Certificate 2",
      },
      shortDescription: "Biometric Security Assurance",
      badge: "Biometric",
      fullDescription:
        "Biometric Security Assurance ISO 30107-3 standards focus on the testing and reporting of biometric presentation attack detection (PAD). Qoobiss has achieved Level 1 and Level 2 certification, affirming our robust measures in securing biometric data against spoofing and fraud.",
      validUntil: "2025-12-31",
    },
    {
      id: 3,
      title: "ISO 27001:2013",
      isoImage: {
        src: "/certificate-1.svg",
        alt: "Certificate 3",
      },
      shortDescription: "Robust Information Security",
      badge: "Security",
      fullDescription:
        "Robust Information Security ISO 27001:2013 specifies the requirements for establishing, implementing, maintaining, and continually improving an information security management system (ISMS). Qoobiss' certification underscores our commitment to securing sensitive corporate and customer information.",
      validUntil: "2025-12-31",
    },
    {
      id: 4,
      title: "ETSI Technical Standards 119 461",
      isoImage: {
        src: "/certificate-2.svg",
        alt: "Certificate 4",
      },
      shortDescription: "Electronic Signature Integrity",
      badge: "Digital Trust",
      fullDescription:
        "Electronic Signature Integrity ETSI TS 119 461 sets out standards for electronic signatures and infrastructures. Qoobiss complies with these standards, providing secure and verified electronic signing solutions that meet European trust and legality criteria.",
      validUntil: "2025-12-31",
    },
    {
      id: 5,
      title: "eIDAS",
      isoImage: {
        src: "/certificate-1.svg",
        alt: "Certificate 5",
      },
      shortDescription: "Trusted Digital Transactions",
      badge: "Compliance",
      fullDescription:
        "Trusted Digital Transactions eIDAS compliance ensures that Qoobiss adheres to EU regulations for electronic identification and trust services for electronic transactions. This enables us to provide digital services that are secure, transparent, and legally binding across the EU.",
      validUntil: "2025-12-31",
    },
    {
      id: 6,
      title: "ADR Compliance",
      isoImage: {
        src: "/certificate-2.svg",
        alt: "Certificate 6",
      },
      shortDescription: "Adherence to Digital Authority Standards",
      badge: "National Digital",
      fullDescription:
        "Adherence to Digital Authority Standards ADR compliance ensures that Qoobiss adheres to the standards set by Romania's Digital Authority. This certification confirms our commitment to upholding the highest standards in digital transformation and service delivery within Romania, aligning our operations with national digital regulations and initiatives.",
      validUntil: "2025-12-31",
    },
  ],
};
