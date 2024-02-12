import Link from "next/link";
import { Icons } from "@/components/Icons/Icons";

function Logo() {
  return (
    <div className="ml-4 flex lg:ml-0">
      <Link href="/">
        <Icons.logo className="h-10 w-10" data-testid="logo-icon" />
      </Link>
    </div>
  );
}

export default Logo;
