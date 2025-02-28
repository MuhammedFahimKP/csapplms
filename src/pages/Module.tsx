import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useData from "@/hooks/useData";

import { ModulePageTypeParam, VideoResponseType } from "@/types";

import MainLayout from "@/layouts/MainLayout";

import { Check, CornerDownLeft, CornerDownRight } from "lucide-react";

import BackButton from "@/components/BackButton";
import NoInternet from "@/components/NoInternet";
import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";

const Module = () => {
  const { id } = useParams<ModulePageTypeParam>();
  const { data, error, isLoading } = useData<VideoResponseType[]>(
    "videos.php",
    {
      params: {
        module_id: id,
      },
    }
  );

  const navigate = useNavigate();

  const [selected, setSelected] = useState<null | VideoResponseType>(null);

  return (
    <MainLayout>
      <section className="relative w-full flex items-center justify-center">
        {data && (
          <>
            <section className="flex flex-col gap-5 mb-5 mt-10  w-sm p-4 ">
              {data?.map((video, index) => (
                <section
                  className={`flex items-center justify-between   ${
                    index % 2 === 1 ? "flex-row-reverse " : ""
                  } `}
                >
                  <section
                    className="flex flex-col items-center justify-center gap-4"
                    onClick={() =>
                      setSelected({
                        id: video.id,
                        title: video.title,
                        description: video.description,
                        video_type: video.video_type,
                        video_url: video.video_url,
                      })
                    }
                  >
                    <section
                      className={
                        "size-12 flex  items-center justify-center text-lg font-medium rounded-full ring-8 " +
                        `${
                          selected?.id !== video.id
                            ? "bg-white ring-white/60 text-primary "
                            : "bg-emerald-700 ring-emerald-700/60 text-white"
                        }`
                      }
                    >
                      <Check />
                    </section>
                    <p className="text-lg text-white">{video.title}</p>
                    {index !== data.length - 1 && (
                      <section className="my-5 w-full   flex  text-yellow-400 ">
                        {index % 2 == 0 ? (
                          <CornerDownRight className="size-10 ml-10" />
                        ) : (
                          <CornerDownLeft className="size-10 ml-20" />
                        )}
                      </section>
                    )}{" "}
                  </section>
                  <section className="size-6"></section>
                </section>
              ))}
            </section>

            {selected && (
              <div className="fixed z-50  bottom-4 w-[95%] p-4 md:w-sm  flex items-center justify-center  bg-primary/50 rounded-sm ">
                <Button
                  className="bg-white text-primary w-full hover:bg-white/65"
                  size={"lg"}
                  onClick={() =>
                    navigate(`/learn/${selected.id}`, {
                      state: selected,
                    })
                  }
                >
                  Continue
                </Button>
              </div>
            )}

            {!selected && (
              <div className="fixed z-50  bottom-4 w-[95%] p-4 md:w-sm  flex items-center justify-center  bg-primary/50 rounded-sm ">
                <p className=" text-white text-center font-semibold text-lg  ">
                  Please select the lesson you want to watch
                </p>
              </div>
            )}
          </>
        )}

        <BackButton extraClasses="absolute top-2 left-2 " />

        {isLoading && (
          <div className="my-64">
            <Spinner />
          </div>
        )}

        {error?.message === "Network Error" && (
          <section className="flex items-center justify-center w-full my-64  ">
            <NoInternet reason="failed to fetch the modules" />
          </section>
        )}
      </section>
    </MainLayout>
  );
};

export default Module;
