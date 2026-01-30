// src/components/Hero.jsx

import React, { useEffect, useState } from "react";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) =>
      setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-x-hidden bg-[url('/image.jpg')] bg-cover bg-center">
    <div className="absolute inset-0 bg-black/10" />
      {/* Background glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              300px circle at ${mousePosition.x}px ${mousePosition.y}px,
              rgba(59,130,246,0.02),
              transparent 6%
            )
          `,
          transition: "background 0.2s ease-out",
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto w-full">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-semibold mb-6">
            <span className="block text-black">Going Together</span>
            <span className="block text-blue-600">Towards</span>
            <span className="block text-black">A Better Tomorrow</span>
          </h1>

          <p className="text-gray-700 mb-8 max-w-xl">
            Accelerate Allied Medical Limited’s healthcare innovation with
            intelligent systems and patient-centric solutions.
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => window.open("")}
              className="px-8 py-4 bg-white text-black rounded-lg flex items-center gap-2 hover:bg-orange-300 transition"
            >
              <ArrowRight size={15} /> 
              About US
            </button>

            <button
              onClick={() =>
                window.open("https://www.youtube.com/watch?v=CUI4SW94Y_g")
              }
              className="px-8 py-4 bg-white text-black rounded-lg flex items-center gap-2 hover:bg-orange-300 transition"
            >
              <Play size={18} /> Watch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
