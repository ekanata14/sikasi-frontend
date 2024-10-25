import * as React from "react";
import Link from "next/link";
import { ListPlus } from "lucide-react";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { cn } from "~/lib/utils";

const OrganizationAddCard = React.forwardRef<HTMLAnchorElement>(({ ...props }, ref) => {
  return (
    <Link
      href=""
      ref={ref}
      {...props}
    >
      <AspectRatio
        ratio={16 / 7}
        className={cn("bg-white w-full m-1 p-4 rounded-md shadow-md", "hover:bg-slate-100 hover:text-blue-500")}
      >
        <span className="font-medium w-full h-full flex justify-center items-center border-gray-800 hover:border-blue-500 border-dashed border-2 rounded-md">
          <ListPlus className="mr-2" />
          Tambah UKM
        </span>
      </AspectRatio>
    </Link>
  );
});

OrganizationAddCard.displayName = "OrganizationAddCard";

export default OrganizationAddCard;
