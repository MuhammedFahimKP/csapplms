import { useNavigate } from "react-router-dom";

import { CurrentCoursePropType } from "@/types";

import { Button } from "./ui/button";

const CurrentCourse = ({ title }: CurrentCoursePropType) => {
  const navigate = useNavigate();

  return (
    <section className="rounded-2xl mb-5  bg-white w-[95%] lg:w-1/6 flex flex-col  justify-center   p-4  gap-1 ">
      <h1 className="text-md    ">Current Course:</h1>
      <h1 className="text-md  font-semibold ">{title} </h1>
      <Button className="rounded-full mt-3" onClick={() => navigate("/")}>
        Browse Other Courses
      </Button>
    </section>
  );
};

export default CurrentCourse;
