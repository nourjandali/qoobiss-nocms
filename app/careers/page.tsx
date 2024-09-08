import { Careers } from "@/components/Careers";
import { GetInTouch } from "@/components/GetInTouch";

export default function Home() {
  return (
    <main>
      <Careers />
      <GetInTouch className="pt-5" />
    </main>
  );
}
