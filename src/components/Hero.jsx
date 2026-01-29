// src/components/Hero.jsx

import React, { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Play, Sparkles, X } from "lucide-react";
import foundersData from "../data/FoundersData.js";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("Dr. Vinod Kohli");
  const [openImage, setOpenImage] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) =>
      setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const currentFloatingCard = foundersData[activeTab] || {};
  const IconComponent = currentFloatingCard.icon;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-x-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15), transparent 40%)`,
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-5xl font-semibold mb-6">
              <span className="block text-white">Going Together</span>
              <span className="block text-blue-400">Towards</span>
              <span className="block text-white">A Better Tomorrow</span>
            </h1>

            <p className="text-gray-400 mb-8 max-w-xl">
              Accelerate Allied Medical Limited’s healthcare innovation with
              intelligent systems and patient-centric solutions.
            </p>

            <div className="flex gap-4">
            <button
                onClick={() =>
                  window.open("")
                }
                className="px-8 py-4 bg-blue-600 rounded-lg flex items-center gap-2 hover:bg-white/20 transition"
              >
                <ArrowRight size={15} /> Join Now
              </button>
              <button
                onClick={() =>
                  window.open("https://www.youtube.com/watch?v=CUI4SW94Y_g")
                }
                className="px-8 py-4 bg-white/10 rounded-lg flex items-center gap-2 hover:bg-white/20 transition"
              >
                <Play size={18} /> Watch
              </button>

            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 relative">
            <div className="h-[450px] flex flex-col overflow-hidden rounded-lg">

              {/* Header */}
              <div className="flex justify-between items-center px-4 py-3 border-b border-white/10">
                <span className="text-sm text-gray-300">Founders & Directors</span>
                <ChevronDown size={16} className="text-gray-400" />
              </div>

              {/* Tabs */}
              <div className="p-4 flex flex-wrap gap-2">
                {Object.keys(foundersData).map((founder) => (
                  <button
                    key={founder}
                    onClick={() => setActiveTab(founder)}
                    className={`px-4 py-2 rounded-lg text-sm border ${activeTab === founder
                        ? "bg-blue-500/30 text-white border-blue-400/30"
                        : "bg-white/5 text-gray-300 border-white/10"
                      }`}
                  >
                    {founder}
                  </button>
                ))}
              </div>

              {/* Description */}
              <div className="flex-grow overflow-y-auto px-4 pb-4 space-y-4">
                <p className="text-gray-300 whitespace-pre-wrap">
                  {currentFloatingCard.bio}
                </p>

                {/* Image thumbnails */}
                {currentFloatingCard.images && (
                  <div className="grid grid-cols-2 gap-3">
                    {currentFloatingCard.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt=""
                        onClick={() => setOpenImage(img)}
                        className="cursor-pointer rounded-lg border border-white/10 hover:opacity-80 transition"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Floating card */}
            {currentFloatingCard?.title && (
              <div
                className={`hidden lg:flex absolute bottom-4 right-4 w-72 ${currentFloatingCard.bgColor} p-4 rounded-lg border border-white/20`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    {IconComponent && (
                      <IconComponent className={`w-6 h-6 ${currentFloatingCard.iconColor}`} />
                    )}
                    <span className="font-medium text-white">
                      {currentFloatingCard.title}
                    </span>
                  </div>
                  <p className="text-sm text-gray-200">
                    {currentFloatingCard.role}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* IMAGE MODAL */}
      {openImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setOpenImage(null)}
        >
          <div
            className="relative max-w-4xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white"
              onClick={() => setOpenImage(null)}
            >
              <X size={28} />
            </button>
            <img
              src={openImage}
              alt="Founder"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
