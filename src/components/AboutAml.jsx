import { useEffect, useRef, useState } from "react";
import foundersArray from "../data/FoundersData";

export default function AboutAml() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white/90 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
          <span className="bg-gradient-to-b from-black to-gray-600 bg-clip-text text-transparent block">
            Founders & Directors
          </span>
          <span className="bg-gradient-to-b from-blue-500 to-cyan-400 bg-clip-text text-transparent  block ">
            Message
          </span>
        </h2>

        <div className="mt-8 space-y-4">
          {foundersArray.map((founder, i) => (
            <div
              key={i}
              className={`p-6 border rounded-lg shadow-sm bg-white/80 backdrop-blur-sm transition-all duration-700
                transform opacity-0 translate-y-10
                ${isVisible ? `opacity-100 translate-y-0 delay-${i * 200}` : ""}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <h3 className="text-xl font-semibold">{founder.title}</h3>
              <p className="text-gray-700 mt-2">{founder.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
