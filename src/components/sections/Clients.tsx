import SectionHeading from "@/components/ui/SectionHeading";
import MarqueeRow from "@/components/ui/MarqueeRow";

const CLIENT_LOGOS = [
  { name: "Artize by Jaquar", src: "/images/clients/artize.png" },
  { name: "BKT Tyres", src: "/images/clients/bkt.svg" },
  { name: "Kartik Seeds", src: "/images/clients/kartik.png" },
  { name: "The Sleep Company", src: "/images/clients/tsc.png" },
];

export default function Clients() {
  return (
    <section className="py-24 md:py-32 bg-muted overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading title="Trusted By" />
      </div>

      <MarqueeRow logos={CLIENT_LOGOS} direction="left" />
      <MarqueeRow logos={CLIENT_LOGOS} direction="right" />
    </section>
  );
}
