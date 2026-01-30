import { User } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Williams",
    role: "Cardiologist",
    feedback:
      "Allied Medical's ICU ventilators have revolutionized our intensive care unit. Reliable and easy to operate.",
  },
  {
    name: "John Doe",
    role: "Hospital Administrator",
    feedback:
      "The support team is exceptional, and the analytics tools help us make faster decisions.",
  },
  {
    name: "Dr. Emily Zhang",
    role: "Anesthesiologist",
    feedback:
      "Anaesthesia machines from Allied Medical are precise, safe, and very intuitive for our staff.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white/90 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12">
          <span className="bg-gradient-to-b from-black to-gray-600 bg-clip-text text-transparent">
            What Our Clients
          </span>
          <br />
          <span className="bg-gradient-to-b from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Say About Us
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 text-left flex flex-col h-full shadow-md"
            >
              <div className="flex items-center space-x-3 mb-4">
                <User className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />
                <div>
                  <h3 className="text-black font-semibold">{t.name}</h3>
                  <p className="text-gray-600 text-sm">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-800 text-base sm:text-lg flex-grow">{t.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
