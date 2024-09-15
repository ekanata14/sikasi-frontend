import React from "react";
import ActivitiesCreateForm from "~/components/form/activities-create";

const EditActivitiesPage = () => {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Ubah Aktivitas</h1>
      </div>
      <ActivitiesCreateForm />
    </>
  );
};

export default EditActivitiesPage;