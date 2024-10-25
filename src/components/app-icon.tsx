import React, { HTMLAttributes } from "react";
import Image from "next/image";
import { cn } from "~/lib/utils";

const AppIcon = React.forwardRef<HTMLImageElement, HTMLAttributes<HTMLImageElement>>(({ className, ...props }, ref) => {
  return (
    <>
      <Image
        className={cn("mx-auto w-auto h-auto", className)}
        src="/assets/images/logo192.png"
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