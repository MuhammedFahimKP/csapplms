import { Subject as SubjectType } from "@/types";

import useWindowDimensions from "@/hooks/useWindowDimensions";

import { Link } from "react-router-dom";

const SubjectCard = ({ id, description, image, title }: SubjectType) => {
  const { width } = useWindowDimensions();

  return (
    <Link
      to={`/subject/${id}`}
      state={{
        title,
      }}
      className="bg-white shadow-md font-ubuntu  relative font-mono portrait  group duration-500  w-72 overflow-y-scroll  rounded-2xl  transition-all no-scrollbar "
    >
      <div>
        <img
          src={image}
          alt="Product image"
          className={`${width < 769 ? "object-fill w-full   " : ""}`}
        />
      </div>

      <section className="absolute h-full  top-0 bg-purple-900 place-content-center    w-full hidden group-hover:block transition-all duration-700  ">
        <section className="px-4 py-3 w-72">
          <p className="text-xl lg:text-2xl text-center text-white mb-5 font-bold  ">
            {title}
          </p>

          <p className="text-md lg:text-lg text-white  text-center  ">
            {description}
          </p>
        </section>
      </section>
    </Link>
  );
};

export default SubjectCard;
