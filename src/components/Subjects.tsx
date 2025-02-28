import useData from "@/hooks/useData";

import { Subject as SubjectType, SubjectPropType } from "@/types";

import NoInternet from "./NoInternet";
import SubjectCard from "./SubjectCard";
import SubjectCardSkeleton from "./skeletons/SubjectCardSkeleton";

const Subjects = ({ ref }: SubjectPropType) => {
  const { data, error, isLoading } = useData<SubjectType[]>("subjects.php");

  return (
    <section className="container mx-auto px-4 py-8" id="subjects" ref={ref}>
      <h2 className="text-3xl font-bold text-center text-purple-900  mb-8">
        Explore Subjects
      </h2>

      <section className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
        {isLoading &&
          Array.from({ length: 12 }).map((_, index) => (
            <SubjectCardSkeleton key={index} />
          ))}

        {data?.map(({ description, id, image, title }) => (
          <SubjectCard
            key={id}
            id={id}
            title={title}
            image={image}
            description={description}
          />
        ))}
      </section>
      <section className="flex items-center justify-center w-full my-20">
        {error && error.message == "Network Error" && (
          <NoInternet reason="failed to fetch the subjects" />
        )}
      </section>
    </section>
  );
};

export default Subjects;
