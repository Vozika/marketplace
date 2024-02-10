import React from "react";
import AccountButton from "./AccountButton";
import AccountMenuDivider from "./AccountMenuDivider";

function AccountMenu({ user }: { user: boolean | null }) {
  return (
    <div className="ml-auto flex items-center">
      <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
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
    </div>
  );
}

export default AccountMenu;
