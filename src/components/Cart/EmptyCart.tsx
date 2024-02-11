import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { SheetTrigger } from "@/components/ui/sheet";

function EmptyCart() {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-1">
      <div
        className="relative mb-4 h-60 w-60 text-muted-foreground"
        aria-hidden="true"
      >
        <Image src="/hippo-empty-cart.png" fill alt="Empty cart" />
      </div>

      <p className="text-xl font-semibold">Your cart is empty</p>

      <SheetTrigger asChild>
        <Link
          href="/products"
          className={buttonVariants({
            variant: "link",
            size: "sm",
            className: "text-sm text-muted-foreground",
          })}
        >
          Add items to your cart
        </Link>
      </SheetTrigger>
    </div>
  );
}

export default EmptyCart;
