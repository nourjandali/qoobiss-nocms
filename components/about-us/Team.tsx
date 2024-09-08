/* eslint-disable @next/next/no-img-element */
type ImageProps = {
  src: string;
  alt?: string;
};

type TeamMember = {
  image: ImageProps;
  name: string;
  jobTitle: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  teamMembers: TeamMember[];
};

export type TeamProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Team = (props: TeamProps) => {
  const { tagline, heading, teamMembers } = {
    ...TeamDefaults,
    ...props,
  } as Props;
  return (
    <section className="pt-20 lg:pt-40">
      <div className="container container-padding flex flex-col gap-6 lg:gap-16">
        <div className="flex flex-col items-start gap-6">
          <p className="font-semibold uppercase text-sm text-electric-violet">
            {tagline}
          </p>
          <div className="max-w-lg w-full">
            <h1 className="text-light-foreground text-4xl lg:font-light lg:text-8xl">
              {heading}
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 items-start justify-center lg:grid-cols-3 gap-5">
          {teamMembers.map((member, index) => (
            <div key={index}>
              <div className="size-full">
                <img
                  src={member.image.src}
                  alt={member.image.alt}
                  className="size-full object-cover rounded-t-2xl"
                />
              </div>
              <div className="flex flex-col gap-2 lg:gap-4 bg-white/40 p-6 lg:p-10 rounded-b-2xl">
                <h2 className="text-light-foreground lg:text-2xl">
                  {member.name}
                </h2>
                <p className="text-sm text-light-chapeau">{member.jobTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const TeamDefaults: TeamProps = {
  tagline: "Our Team",
  heading: "Lorem ipsum dolor sit amet consectetur",
  teamMembers: [
    {
      image: {
        src: "/team-image.png",
        alt: "Placeholder image 1",
      },
      name: "Prenume Nume",
      jobTitle: "CEO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      image: {
        src: "/team-image.png",
        alt: "Placeholder image 2",
      },
      name: "Prenume Nume",
      jobTitle: "CEO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      image: {
        src: "/team-image.png",
        alt: "Placeholder image 3",
      },
      name: "Prenume Nume",
      jobTitle: "CEO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      image: {
        src: "/team-image.png",
        alt: "Placeholder image 4",
      },
      name: "Prenume Nume",
      jobTitle: "CEO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      image: {
        src: "/team-image.png",
        alt: "Placeholder image 5",
      },
      name: "Prenume Nume",
      jobTitle: "CEO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      image: {
        src: "/team-image.png",
        alt: "Placeholder image 6",
      },
      name: "Prenume Nume",
      jobTitle: "CEO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ],
};

Team.displayName = "Team";
