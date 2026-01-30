import { CheckCircle } from "lucide-react";

const features = [
  "Intelligent healthcare systems",
  "Rigorous quality assurance",
  "Smart diagnostics",
  "Patient-centric solutions",
  "Reliable and fast outcomes",
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white/90 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
          <span className="bg-gradient-to-b from-black to-gray-600 bg-clip-text text-transparent">
            Why Choose
          </span>
          <br />
          <span className="bg-gradient-to-b from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Allied Medical
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
              <p className="text-gray-800 text-base sm:text-lg">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
