import React from "react";

export default function ProjectsPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      {/* Blur Box */}
      <div className="bg-black/30 backdrop-blur-sm rounded-lg shadow-lg flex flex-col items-center justify-top text-center p-8 w-[40vw] h-[60vh]">
        <h1 className="text-2xl font-bold text-white mb-4">
          Welcome to the Projects Page
        </h1>
        <p className="text-gray-200">
          blah blah blah
        </p>
      </div>
    </div>
  );
}