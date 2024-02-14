"use client";

import { Button } from "@/components/ui/button";
import { NavItemProps } from "@/lib/types";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

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
                <div
                  key={item.name}
                  className="group relative text-base sm:text-sm"
                >
                  <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 shadow-md">
                    <Image
                      src={item.imageSrc}
                      alt="Product category image"
                      fill
                      className="object-cover object-center"
                    />
                  </div>

                  <Link
                    href={item.href}
                    className="mt-6 block font-medium text-gray-900"
                  >
                    {item.name}
                  </Link>
                  <p className="mt-1" aria-hidden="true">
                    Shop now
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default NavItem;
