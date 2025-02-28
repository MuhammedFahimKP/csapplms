import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import useNetwork from "@/hooks/useNetwork";

import { goBack } from "@/lib/utils";

import ReactPlayer from "react-player";
import toast, { Toaster } from "react-hot-toast";

import { Download, ArrowLeft, HelpCircle } from "lucide-react";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const VideoPlayerUI = () => {
  const { state } = useLocation();

  const network = useNetwork();

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (!network) {
      toast.error(
        "No internet connection. Please check your network settings."
      );
    }
  }, [network]);

  const playerRef = useRef<ReactPlayer | null>(null);

  return (
    <section className="w-full min-h-screen">
      <section className="flex flex-col w-full max-w-md mx-auto bg-white rounded-lg md:max-w-[80%] md:my-10 ">
        {/* Header with back button */}
        <section className=" w-full">
          {/* Video Player */}
          <ReactPlayer
            ref={playerRef}
            url={state?.video_url}
            width="100%"
            height={width < 900 ? "240px" : "400px"}
            controls
            progressInterval={1000}
            config={{
              file: {
                attributes: {
                  controlsList: "nodownload", // Disable browser's default download
                },
              },
            }}
          />

          {/* Back button (absolute positioned) */}
        </section>

        <section className="p-4">
          <h2 className="text-xl font-bold text-gray-800">{state?.title}</h2>
          <p className="text-gray-600 mt-2">{state?.description}</p>
        </section>

        <section className="p-4 grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            <Download size={18} />
            <span>Download</span>
          </button>

          <button className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            <HelpCircle size={18} color="#f0ad4e" />
            <span>Doubts</span>
          </button>
        </section>
        <Toaster position="bottom-center" reverseOrder={false} />
      </section>
      <button
        className="absolute top-2 left-2 w-8 h-8 flex items-center justify-center bg-white bg-opacity-70 rounded-full"
        aria-label="Go back"
        onClick={goBack}
      >
        <ArrowLeft size={20} />
      </button>
    </section>
  );
};

export default VideoPlayerUI;
