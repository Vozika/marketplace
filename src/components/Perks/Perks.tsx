import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import PerkCard from "./PerkCard";
import { perks } from "@/lib/perks";

function Perks() {
  return (
    <section className="border-t border-gray-200 bg-gray-50">
      <MaxWidthWrapper className="py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {perks.map((perk) => (
            <PerkCard
              key={perk.name}
              name={perk.name}
              description={perk.description}
              icon={<perk.Icon />}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default Perks;
