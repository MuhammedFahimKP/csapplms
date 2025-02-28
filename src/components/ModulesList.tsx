import { ModuleListPropType } from "@/types";

import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const ModulesList = ({ modules, title }: ModuleListPropType) => {
  return (
    modules.length > 0 && (
      <section className=" p-4 min-h-screen w-full lg:w-md ">
        <h1 className="text-white text-2xl font-bold mb-6">{title}</h1>

        <section className="relative">
          {/* Vertical line connecting circles */}
          <section className="absolute left-7 top-8 bottom-8 w-0.5 bg-white opacity-50 ring-4 ring-white" />

          {/* Course items */}
          {modules.map((module) => (
            <Link
              to={"/module/" + module.id}
              key={module.id}
              className="flex items-center mb-16 relative"
            >
              {/* Numbered circle */}
              <section className="w-14 h-14 bg-white rounded-full flex items-center justify-center z-10 shadow-md ring-8 ring-white/65  ">
                <span className="text-purple-700 text-2xl font-bold">
                  {module.id}
                </span>
              </section>

              {/* Course info */}
              <section className="flex-1 flex justify-between items-center ml-4 pr-2">
                <section>
                  <h2 className="text-white font-semibold text-md lg:text-lg  leading-tight">
                    {module.title}
                  </h2>
                  <p className="text-yellow-300 text-sm">{} Lessons</p>
                </section>

                {/* Arrow icon */}
                <section className="text-white text-2xl ml-2 lg:mr-0">
                  <ChevronRight />{" "}
                </section>
              </section>
            </Link>
          ))}
        </section>
      </section>
    )
  );
};

export default ModulesList;
