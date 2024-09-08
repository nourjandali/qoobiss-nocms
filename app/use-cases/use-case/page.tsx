import { GetInTouch } from "@/components/GetInTouch";
import { Hero } from "@/components/use-cases/Hero";
import { ContentOne } from "@/components/use-cases/use-case/ContentOne";
import { ContentTwo } from "@/components/use-cases/use-case/ContentTwo";
import { NextUseCaseCard } from "@/components/use-cases/use-case/NextUseCaseCard";
import { UseCaseBanner } from "@/components/use-cases/use-case/UseCaseBanner";

export default function Home() {
  return (
    <main>
      <UseCaseBanner />
      <Hero />
      <ContentOne />
      <ContentTwo />
      <NextUseCaseCard />
      <GetInTouch className="pt-[50px] lg:pt-40" />
    </main>
  );
}
