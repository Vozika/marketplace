import { NavItemCardProps } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

function NavItemCard({ imageSrc, href, name }: NavItemCardProps) {
  return (
    <div className="group relative text-base sm:text-sm">
      <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 shadow-md">
        <Image
          src={imageSrc}
          alt="Product category image"
          fill
          className="object-cover object-center"
          priority={true}
        />
      </div>

      <Link href={href} className="mt-6 block font-medium text-gray-900">
        {name}
      </Link>
      <p className="mt-1" aria-hidden="true">
        Shop now
      </p>
    </div>
  );
}

export default NavItemCard;
