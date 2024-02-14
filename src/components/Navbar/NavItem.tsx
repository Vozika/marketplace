"use client";

import { Button } from "@/components/ui/button";
import { NavItemProps } from "@/lib/types";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import NavItemCard from "./NavItemCard";

function NavItem({ isOpen, isAnyOpen, handleOpen, category }: NavItemProps) {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button
          className="gap-1.5"
          onClick={handleOpen}
          variant={isOpen ? "secondary" : "ghost"}
        >
          {category.label}
          <ChevronDown
            data-testid="chevron-icon"
            className={cn("h-4 w-4 transition-all text-muted-foreground", {
              "-rotate-180": isOpen,
            })}
          />
        </Button>
      </div>

      {isOpen ? (
        <div
          // TODO: check if animation on !isAnyOpen is really working
          className={cn(
            "absolute inset-x-0 top-full text-sm text-muted-foreground bg-white",
            {
              "animate-in fade-in-10 slide-in-from-top-8": !isAnyOpen,
            }
          )}
        >
          <div
            className="absolute inset-0 top-1/2 bg-white shadow-md"
            aria-hidden="true"
            data-testid="shadow-div"
          />

          <div className="mx-auto max-w-7xl px-8">
            <div className="grid grid-cols-3 gap-x-8 py-16">
              {category.featured.map((item) => (
                <NavItemCard
                  key={item.name}
                  imageSrc={item.imageSrc}
                  href={item.href}
                  name={item.name}
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default NavItem;
