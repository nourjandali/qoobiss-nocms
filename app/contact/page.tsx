import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Contact />
      <div className="pt-20 pb-5 lg:px-[160px] flex items-center justify-center">
        <img
          src="/contact-image.png"
          alt="Contact image"
          className="lg:rounded-2xl aspect-video object-cover"
        />
      </div>
      <Footer />
    </main>
  );
}
