import { useParams, useLocation } from "react-router-dom";

import useData from "@/hooks/useData";

import type { SubjectPageParamType, ModuleType } from "@/types";

import MainLayout from "@/layouts/MainLayout";
import BackButton from "@/components/BackButton";
import ModulesList from "@/components/ModulesList";
import CurrentCourse from "@/components/CurrentCourse";
import Spinner from "@/components/Spinner";
import NoInternet from "@/components/NoInternet";

const Subject = () => {
  const { id } = useParams<SubjectPageParamType>();
  const { state } = useLocation();

  const { data, error, isLoading } = useData<ModuleType[]>("modules.php", {
    params: {
      subject_id: id,
    },
  });

  console.log(error);

  return (
    <MainLayout>
      <nav className="bg-primary w-full text-white h-14 flex items-center justify-between px-4 shadow-md mb-5">
        {/* Back Arrow Button */}

        <BackButton />

        {/* Title */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-xl font-medium">
          Modules
        </div>

        {/* Empty div to balance the layout */}
        <div className="w-6"></div>
      </nav>

      <CurrentCourse title={state?.title || ""} />

      <ModulesList modules={data || []} title={state?.title || ""} />

      {isLoading && <Spinner />}

      {error?.message === "Network Error" && (
        <section className="flex items-center justify-center w-full my-15  ">
          <NoInternet reason="failed to fetch the modules" />
        </section>
      )}
    </MainLayout>
  );
};

export default Subject;
