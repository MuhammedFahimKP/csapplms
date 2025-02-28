import { useLocation, useNavigate } from "react-router-dom";

import { steps } from "@/lib/constants";
import { goBack } from "@/lib/utils";

import { ChevronLeft, ChevronRight, Check } from "lucide-react";

const VideoPreview = () => {
  const { state } = useLocation();

  if (!state) {
    return <div>Video not found</div>;
  }

  const navigate = useNavigate();

  return (
    <section className="flex flex-col min-h-screen bg-purple-100 w-full   ">
      <section className="w-full m-auto lg:w-sm ">
        <header className="p-4 flex items-center">
          <button className="p-2" onClick={goBack}>
            <ChevronLeft size={24} color="#333" />
          </button>
          <section className="mx-auto">
            <section className="bg-cyan-400 w-10 h-10 rounded-lg flex items-center justify-center">
              <section className="flex">
                <section className="w-3 h-3 bg-white rounded-full mr-1"></section>
                <section className="w-3 h-3 bg-white rounded-full"></section>
              </section>
            </section>
          </section>
          <section className="w-8"></section>
        </header>

        <section className="px-6 pt-4 flex-1">
          <section className="mb-4">
            <p className="text-gray-700 text-sm">Level I</p>
            <h1 className="text-2xl font-bold">{state?.title || "title"}</h1>
          </section>

          <section className="flex flex-col mt-8">
            <section className="flex mb-6">
              <section className="flex flex-col items-center">
                <section className="w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center">
                  <Check size={18} color="white" />
                </section>

                <section className="w-0.5 h-12 bg-purple-700"></section>
              </section>

              <section className="flex-1 ml-4 flex items-center justify-between">
                <section>
                  <p className="text-gray-600 text-sm">Step 1</p>
                  <p className="font-bold">{state?.title || "title"}</p>
                </section>
                <ChevronRight size={20} color="#333" />
              </section>
            </section>

            {steps.map((step, index) => (
              <section key={index} className="flex mb-6">
                <section className="flex flex-col items-center">
                  <section className="w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center">
                    <Check size={18} color="white" />
                  </section>

                  {index < steps.length - 1 && (
                    <section className="w-0.5 h-12 bg-purple-700"></section>
                  )}
                </section>

                <section className="flex-1 ml-4 flex items-center justify-between">
                  <section>
                    <p className="text-gray-600 text-sm">Step {step.number}</p>
                    <p className="font-bold">{step.title}</p>
                  </section>
                  <ChevronRight size={20} color="#333" />
                </section>
              </section>
            ))}
          </section>
        </section>

        <footer className="p-6 mt-auto">
          <button
            className="w-full py-4 bg-purple-700 text-white rounded-lg font-medium"
            onClick={() => navigate("/video/watch/" + state.id, { state })}
          >
            Continue
          </button>
        </footer>
      </section>
    </section>
  );
};

export default VideoPreview;
