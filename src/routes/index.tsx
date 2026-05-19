import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { WhyUs } from "@/components/sections/WhyUs";
import { Gallery } from "@/components/sections/Gallery";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Urban Invisible Grills — Invisible Safety. Uninterrupted Views." },
      { name: "description", content: "Bangalore's premium invisible grill specialists. 10-year warranty, 5000+ installations, same-day service. Free site inspection." },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <SmoothScroll />
      <Hero />
      <Products />
      <WhyUs />
      <Gallery />
      <Process />
      <Testimonials />
      <Faq />
      <FinalCta />
    </main>
  );
}
