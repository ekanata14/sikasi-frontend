import React from "react";
import ActivitiesCreateForm from "~/components/form/activities-create";
import { Data } from "~/data/data";
import { cn } from "~/lib/utils";

const EditActivitiesPage = () => {
  return (
    <main className={cn("px-5 w-full min-h-screen")}>
      {/* Header */}
      <header className={cn("pt-20 pb-2")}>
        <h1 className="font-bold text-lg">Ubah Aktivitas UKM</h1>
        <p className="text-sm">
          Saat ini anda berada pada halaman mengubah aktivitas UKM {Data.ukm.abbreviation}
        </p>
      </header>

      {/* Section 1: Form */}
      <section className={cn("pt-4")}>
        <ActivitiesCreateForm />
      </section>

    </main>
  );
};

export default EditActivitiesPage;