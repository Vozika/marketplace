import { cn } from "@/lib/utils";
import { MaxWidthWrapper } from "@/lib/types";

function MaxWidthWrapper({ className, children }: MaxWidthWrapper) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
