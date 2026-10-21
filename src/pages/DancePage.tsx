import React from "react";
import Jared from "../assets/jared.png";

const DancePage: React.FC = () => (
  <div className="relative flex justify-center items-center h-screen overflow-hidden bg-gradient-to-br from-purple-200 via-pink-200 to-purple-300">

    {/* Floating Hearts */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute text-purple-500 opacity-50 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 60 + 30}px`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.random() * 6 + 4}s`,
          }}
        >
          💜
        </div>
      ))}
    </div>

    {/* Jared */}
    <img
    src={Jared}
    alt="Jared Dancing"
    className="relative z-10 drop-shadow-[0_10px_20px_rgba(186,85,211,0.6)]
    hover:scale-110 jared-wiggle-hover"
    />

    {/* Sparkle text */}
    <div className="absolute bottom-10 text-pink-700 text-3xl font-bold drop-shadow animate-bounce">
      ✨ Go Jared Go ✨
    </div>
  </div>
);

export default DancePage;
