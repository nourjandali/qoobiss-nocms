import { GetInTouch } from "@/components/GetInTouch";
import { Hero } from "@/components/news/Hero";
import { ContentOne } from "@/components/news/use-case/ContentOne";
import { ContentTwo } from "@/components/news/use-case/ContentTwo";
import { NextUseCaseCard } from "@/components/news/use-case/NextUseCaseCard";
import { UseCaseBanner } from "@/components/news/use-case/UseCaseBanner";

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
