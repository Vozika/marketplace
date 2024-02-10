import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { AccountButtonProps } from "@/lib/types";

function AccountButton({ href, text }: AccountButtonProps) {
  return (
    <>
      <Link href={href} className={buttonVariants({ variant: "ghost" })}>
        {text}
      </Link>
    </>
  );
}

export default AccountButton;
