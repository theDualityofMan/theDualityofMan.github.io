import React, { useState } from "react";

export default function HomePage(){
    return(
        <div className="flex flex-col items-center justify-center p-6 gap-3">
                <div className ="bg-white flex justify-center text-4xl font-mono tracking-md animate-fade-up animate-delay-300 animate-once w-100 ">
                    hi. i'm daniel
                </div>
                <div className ="bg-white flex justify-center text-2xl font-mono tracking-wide animate-fade-up animate-delay-1000 animate-once w-100 ">
                    boom crash the sound of my heart
                </div>
        </div>
    );
    
}