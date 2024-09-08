import { Products } from "@/components/products/Products";
import { AboutUs } from "@/components/products/AboutUs";
import { Certification } from "@/components/Certification";
import { GetInTouch } from "@/components/GetInTouch";

export default function Home() {
  return (
    <main>
      <Products />
      <AboutUs />
      <Certification />
      <GetInTouch />
    </main>
  );
}
