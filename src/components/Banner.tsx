import { BannerPropType } from "@/types";

import bannerImg from "@/assets/banner.jpg";
const Banner = ({ subjectRef }: BannerPropType) => {
  const handleFindSubject = () => {
    if (subjectRef.current) {
      subjectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative w-[95%] h-96 overflow-hidden rounded-lg shadow-xl my-10">
      <section className="absolute inset-0 bg-gradient-to-r from-purple-900 to-purple-600 opacity-90"></section>

      <section className="relative h-full flex flex-col md:flex-row items-center justify-between p-8">
        <section className="w-full md:w-1/2 text-white space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Unlock Your Learning Potential
          </h1>
          <p className="text-lg opacity-90">
            Access thousands of courses from expert instructors. Learn at your
            own pace with our comprehensive Learning Management System.
          </p>
          <section className="pt-4">
            <a
              onClick={handleFindSubject}
              className="bg-white text-purple-800 hover:cursor-pointer font-semibold px-6 py-3 rounded-lg hover:bg-purple-100 transition-colors duration-300 shadow-lg"
            >
              Find Subjects
            </a>
          </section>
        </section>

        <section className="w-full md:w-1/2 h-64 md:h-full relative mt-6 md:mt-0 flex items-center justify-end">
          <section className="hidden lg:block relative h-full w-5/6 overflow-hidden rounded-lg ">
            <img
              src={bannerImg}
              alt="Student working on multiple devices with creative ideas "
              className="h-full w-full "
            />
          </section>
        </section>
      </section>
    </section>
  );
};

export default Banner;
