import AccountButton from "@/components/AccountMenu/AccountButton";
import AccountMenuDivider from "@/components/AccountMenu/AccountMenuDivider";
import { User } from "@/lib/types";

function AccountMenu({ user }: User) {
  return (
    <div className="hidden ml-auto lg:flex lg:items-center lg:justify-end lg:space-x-6">
      {user ? null : (
        <>
          <AccountButton href="/sign-in" text="Sign In" />
          <AccountMenuDivider />
        </>
      )}

      {user ? (
        <>
          <p>User Menu</p>
        </>
      ) : (
        <AccountButton href="/sign-up" text="Create Account" />
      )}

      <AccountMenuDivider />
    </div>
  );
}

export default AccountMenu;
