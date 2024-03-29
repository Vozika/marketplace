"use client";
import { PRODUCT_CATEGORIES } from "@/config";
import { useState, useRef, useEffect } from "react";
import NavItem from "@/components/Navbar/NavItem";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

function NavItems() {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const isAnyOpen = activeIndex !== null;

  // Closes the navbar menu on clicking the escape key on keyboard
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);

  // Closes the navbar menu on click outside of the navbar
  const navRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(navRef, () => {
    setActiveIndex(null);
  });

  return (
    <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
      <div className="flex gap-4 h-full" ref={navRef}>
        {PRODUCT_CATEGORIES.map((category, index) => {
          const handleOpen = () => {
            if (activeIndex === index) {
              setActiveIndex(null);
            } else {
              setActiveIndex(index);
            }
          };

          const isOpen = index === activeIndex;

          return (
            <NavItem
              key={category.value}
              category={category}
              handleOpen={handleOpen}
              isOpen={isOpen}
              isAnyOpen={isAnyOpen}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NavItems;
