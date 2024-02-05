import { ReactNode } from "react";

export type PerkCard = {
  name: string;
  icon: ReactNode;
  description: string;
};

export type MaxWidthWrapper = {
  className?: string;
  children?: ReactNode;
};
