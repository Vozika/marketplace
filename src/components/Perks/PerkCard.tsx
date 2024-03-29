import { PerkCard } from "@/lib/types";

function PerkCard({ name, icon, description }: PerkCard) {
  return (
    <div
      className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
      data-testid="perk-card"
    >
      <div className="md:flex-shrink-0 flex justify-center">
        <div
          className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900"
          data-testid="perk-card-circle"
        >
          {icon}
        </div>
      </div>

      <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
        <h3 className="text-base font-medium text-gray-900 lg:font-bold lg:text-lg">
          {name}
        </h3>
        <p
          className="mt-3 text-sm text-muted-foreground"
          data-testid="perk-card-description"
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default PerkCard;
