import { Ambience } from "@/components/ambience";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Faq } from "@/components/faq";
import { Closer } from "@/components/closer";
import { SiteFooter } from "@/components/site-footer";
import { content } from "@/lib/content";

export default function Page() {
  return (
    <main className="relative">
      <Ambience />
      <Nav productName={content.product_name} />
      <Hero content={content} />
      <Features features={content.features} />
      <Faq faq={content.faq} />
      <div id="join">
        <Closer content={content} />
      </div>
      <SiteFooter productName={content.product_name} />
    </main>
  );
}
