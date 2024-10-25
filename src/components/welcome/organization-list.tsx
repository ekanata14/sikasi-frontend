import * as React from "react";
import { cn } from "~/lib/utils";
import { OrganizationData } from "~/types/organizationTypes";
import { OrganizationListCard, OrganizationAddCard } from "./fragments/";

interface OrganizationListProps {
  userOrganizationData: OrganizationData[];
}

const OrganizationList = React.forwardRef<HTMLElement, OrganizationListProps>(({ userOrganizationData, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={cn("h-full lg:h-fit w-full rounded-sm flex flex-col gap-4", "lg:grid lg:grid-cols-4 lg:bg-gray-100 lg:bg-transparent")}
      {...props}
    >
      {userOrganizationData.map((organization) => (
        <OrganizationListCard
          organization={organization}
          key={organization.nickname}
        />
      ))}

      <OrganizationAddCard />
    </section>
  );
});

OrganizationList.displayName = "OrganizationList";

export default OrganizationList;
