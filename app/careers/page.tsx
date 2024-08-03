import { Careers } from "@/components/Careers";
import { Certification } from "@/components/Certification";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Careers />
      <Certification showCertifications={false} />
      <Footer />
    </main>
  );
}
