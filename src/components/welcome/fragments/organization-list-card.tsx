import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { OrganizationData } from "~/types/organizationTypes";

interface OrganizationListCardProps {
  organization: OrganizationData;
}

const OrganizationListCard = React.forwardRef<HTMLAnchorElement, OrganizationListCardProps>(({ organization, ...props }, ref) => {
  return (
    <Link
      href={`/admin/${organization.nickname}`}
      key={organization.nickname}
      ref={ref}
      {...props}
    >
      <AspectRatio
        ratio={16 / 7}
        className="bg-white w-full rounded-md shadow-md p-2 hover:text-blue-500 hover:bg-slate-100 m-1"
      >
        <div className="grid grid-cols-5 h-full items-center">
          <div className="col-span-2 flex justify-center items-center">
            <Image
              className="mx-auto"
              src="/assets/images/stikom_logo.png"
              width={100}
              height={100}
              alt="Logo Stikom"
            />
          </div>
          <div className="col-span-3 flex flex-col">
            <p className="text-xs">{organization.name}</p>
            <h3 className="font-bold uppercase text-2xl">{organization.nickname}</h3>
          </div>
        </div>
      </AspectRatio>
    </Link>
  );
});

OrganizationListCard.displayName = "OrganizationListCard";

export default OrganizationListCard;
