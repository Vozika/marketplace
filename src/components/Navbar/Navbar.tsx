import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import NavItems from "@/components/Navbar/NavItems";
import Logo from "@/components/Logo/Logo";
import Cart from "@/components/Cart/Cart";
import AccountMenu from "@/components/AccountMenu/AccountMenu";

function Navbar() {
  const user = null;

  return (
    <header className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center border-b border-gray-200">
          {/* TODO: Mobile nav */}

          <Logo />
          <NavItems />
          <AccountMenu user={user} />
          <Cart />
        </div>
      </MaxWidthWrapper>
    </header>
  );
}

export default Navbar;
