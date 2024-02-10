import { PRODUCT_CATEGORIES } from "@/config";
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

export type Category = (typeof PRODUCT_CATEGORIES)[number];

export type NavItemProps = {
  category: Category;
  handleOpen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
};

export type AccountButtonProps = {
  href: string;
  text: string;
};

export type Event = MouseEvent | TouchEvent;
