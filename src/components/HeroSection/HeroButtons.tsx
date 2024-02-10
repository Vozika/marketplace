import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";

function HeroButtons() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <Link href="/products" className={buttonVariants()}>
          Browse Trending
        </Link>
        <Button variant="ghost">Our quality promise &rarr;</Button>
      </div>
    </div>
  );
}

export default HeroButtons;
