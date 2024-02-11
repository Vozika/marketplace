"use client";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

import EmptyCart from "@/components/Cart/EmptyCart";
import PriceOption from "@/components/Cart/PriceOption";

function Cart() {
  const itemCount = 10;
  const fee = 5;

  const priceOptions = [
    { name: "Shipping", price: "Free" },
    { name: "Transaction Fee", price: formatPrice(fee) },
    { name: "Total", price: formatPrice(fee) },
  ];

  return (
    <div className="ml-4 flow-root lg:ml-6">
      <Sheet>
        <SheetTrigger className="group -m-2 flex items-center p-2">
          <ShoppingCart
            aria-hidden="true"
            className="w-6 h-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
          />
          <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
            0
          </span>
        </SheetTrigger>
        <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
          <SheetHeader className="space-y-2.5 pr-6">
            <SheetTitle>Cart (0)</SheetTitle>
          </SheetHeader>

          {itemCount > 0 ? (
            <>
              <div className="flex w-full flex-col pr-6">
                Cart items{/* TODO: cart logic */}
              </div>
              <div className="space-y-4 pr-6">
                <Separator />

                <div className="space-y-1.5 text-sm">
                  {priceOptions.map((option) => (
                    <PriceOption
                      key={option.name}
                      name={option.name}
                      price={option.price}
                    />
                  ))}
                </div>
                <SheetFooter>
                  <SheetTrigger asChild>
                    <Link
                      href="/cart"
                      className={buttonVariants({
                        className: "w-full",
                      })}
                    >
                      Continue to Checkout
                    </Link>
                  </SheetTrigger>
                </SheetFooter>
              </div>
            </>
          ) : (
            <EmptyCart />
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Cart;
