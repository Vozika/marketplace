import HeroSection from "@/components/HeroSection/HeroSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import Perks from "@/components/Perks/Perks";

export default function Home() {
  return (
    <div>
      <MaxWidthWrapper>
        <HeroSection />
        {/* TODO: List products */}
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <Perks />
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
