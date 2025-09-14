import React from "react";
export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen overflow-auto">
      {/* Blur Box */}
      <div className="bg-black/30 backdrop-blur-sm rounded-lg shadow-lg flex flex-col items-center text-center p-8 w-[90vw] sm:w-[60vw] lg:w-[40vw] max-h-[80vh] overflow-y-auto">
       <br/>
        <h1 className="text-2xl font-bold text-white mb-4">
          Hi! I'm Daniel.
        </h1>
        <br/><br/>
        <p className="text-gray-200 mb-4">
          I'm a software engineer with a passion for building innovative
          solutions. I love thinking outside the box and building cool stuff. I
          have a passion for developing algorithms, and I enjoy solving complex
          problems. My goal is to create software that makes a difference in
          people's lives.
        </p>
        <br/><br/>
        <p className="text-gray-200">
          I'm currently studying Computer Science at the University of Guelph,
          where I am honing my skills in software development and exploring new
          technologies. I'm currently looking for coop for Jan-Sept 2025, and
          I'm excited to apply my knowledge in a real-world setting. My
          graduation date is set for April 2027.
        </p>
        <br/><br/>
      </div>
    </div>
  );
}