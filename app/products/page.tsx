import { Products } from "@/components/products/Products";
import { AboutUs } from "@/components/products/AboutUs";
import { GetInTouch } from "@/components/GetInTouch";

export default function Home() {
  return (
    <main>
      <Products />
      <AboutUs />
      <GetInTouch />
    </main>
  );
}
