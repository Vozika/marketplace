import { PriceOptionProps } from "@/lib/types";

function PriceOption({ name, price }: PriceOptionProps) {
  return (
    <div className="flex">
      <div className="flex-1">{name}</div>
      <div>{price}</div>
    </div>
  );
}

export default PriceOption;
