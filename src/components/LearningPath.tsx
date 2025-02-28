import React from "react";
import { Check } from "lucide-react";

const LearningPathUI = () => {
  // Define learning modules
  const modules = [
    { id: 1, title: "Input Vs. Output", completed: true, x: 65, y: 15 },
    { id: 2, title: "Imitation Technique", completed: true, x: 82, y: 35 },
    { id: 3, title: "Collocations - Intro", completed: true, x: 30, y: 55 },
    { id: 4, title: "Collocations - Examples", completed: true, x: 82, y: 75 },
    {
      id: 5,
      title: "Collocations - Put Together",
      completed: false,
      x: 30,
      y: 95,
    },
  ];

  return (
    <div className="relative w-full h-screen bg-purple-700 overflow-hidden">
      {/* Small dots in background */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white bg-opacity-70 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Clouds */}
      <div className="absolute w-16 h-8 bg-purple-400 rounded-full top-24 right-10 opacity-60"></div>
      <div className="absolute w-24 h-10 bg-purple-400 rounded-full top-20 right-4 opacity-60"></div>

      {/* Trees */}
      <div className="absolute bottom-20 right-8">
        <div className="w-12 h-32 bg-purple-900 rounded-t-full"></div>
      </div>
      <div className="absolute bottom-24 right-24">
        <div className="w-8 h-24 bg-purple-900 rounded-t-full"></div>
      </div>

      {/* Hills */}
      <div className="absolute bottom-0 w-full">
        <div className="absolute w-full h-32 bg-purple-800 rounded-t-full -left-20 bottom-0"></div>
        <div className="absolute w-full h-24 bg-purple-800 rounded-t-full -right-20 bottom-0"></div>
      </div>

      {/* Back Button */}
      <div className="absolute top-4 left-4 w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
          />
        </svg>
      </div>

      {/* Path */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 100 100"
      >
        <path
          d="M65,15 Q75,20 82,35 Q85,50 30,55 Q20,60 82,75 Q90,85 30,95"
          fill="none"
          stroke="#F9D949"
          strokeWidth="1.5"
          strokeDasharray="3,3"
          strokeLinecap="round"
        />
        {/* Arrow heads */}
        <polygon points="82,36 80,33 84,34" fill="#F9D949" />
        <polygon points="30,56 32,53 28,54" fill="#F9D949" />
        <polygon points="82,76 80,73 84,74" fill="#F9D949" />
      </svg>

      {/* Checkpoints */}
      {modules.map((module) => (
        <React.Fragment key={module.id}>
          <div
            className="absolute flex flex-col items-start"
            style={{ left: `${module.x - 30}%`, top: `${module.y}%` }}
          >
            <span className="text-white text-sm mb-2">{module.title}</span>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                module.completed ? "bg-white" : "bg-white bg-opacity-50"
              }`}
            >
              {module.completed && (
                <Check className="text-purple-700" size={24} />
              )}
            </div>
          </div>
        </React.Fragment>
      ))}

      {/* Continue Button */}
      <div className="absolute bottom-4 w-full px-4">
        <button className="w-full bg-white text-purple-700 py-3 px-4 rounded-lg font-medium text-lg">
          Continue
        </button>
      </div>
    </div>
  );
};

export default LearningPathUI;
