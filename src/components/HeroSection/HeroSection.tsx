import HeroButtons from "@/components/HeroSection/HeroButtons";
import HeroHeading from "@/components/HeroSection/HeroHeading";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";

function HeroSection() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <HeroHeading />
        <HeroButtons />
      </div>
    </MaxWidthWrapper>
  );
}

export default HeroSection;
