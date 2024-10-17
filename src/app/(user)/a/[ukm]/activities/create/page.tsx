import React from "react";
import ActivitiesCreateForm from "~/components/form/activities-create";

const CreateActivitiesPage = () => {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Tambah Aktivitas</h1>
      </div>
      <ActivitiesCreateForm />
    </>
  );
};

export default CreateActivitiesPage;