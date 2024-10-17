import React from "react";
import Image from "next/image";
import { cn } from "~/lib/utils";

const AppIcon = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <>
      <Image
        className={cn("mx-auto w-auto h-auto", className)}
        src="/assets/images/stikom_logo.png"
        width={640}
        height={386}
        priority={true}
        alt="Logo Stikom"
        {...props}
      />
    </>
  );
});
AppIcon.displayName = "AppIcon";

export {AppIcon};