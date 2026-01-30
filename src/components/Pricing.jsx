import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Jupiter Prime",
    price: "29.99",
    description: "Perfect for individuals and small teams",
    features: ["Up to 5 team members", "10GB storage", "Basic analytics", "Email support", "API access", "Mobile app"],
    mostPopular: false,
  },
  {
    name: "Jupiter Plus",
    price: "39.99",
    description: "Perfect for growing teams",
    features: ["Up to 10 team members", "50GB storage", "Advanced analytics", "Priority support", "API access", "Mobile app"],
    mostPopular: false,
  },
  {
    name: "Neptune Prime",
    price: "59.99",
    description: "Perfect for larger teams",
    features: ["Up to 20 team members", "100GB storage", "Advanced analytics", "Priority support", "API access", "Mobile app"],
    mostPopular: false,
  },
  {
    name: "ICU Ventilators",
    price: "199.99",
    description: "Enterprise-grade product",
    features: ["Unlimited team members", "Unlimited storage", "Enterprise analytics", "24/7 phone support", "API access", "Mobile app", "Custom integrations"],
    mostPopular: false,
  },
  {
    name: "Vaporizer Tec-8 ",
    price: "39.99",
    description: "can be Mounte at any machine",
    features: ["Up to 10 team members", "120 ml storage", "Advanced analytics", "Priority support", "API access", "Mobile app"],
    mostPopular: true,
  },
  {
    name: "Monitors",
    price: "31.99",
    description: "can be Mounte at any machine",
    features: ["Up to 10 team members", "120 ml storage", "Advanced analytics", "Priority support", "API access", "Mobile app"],
    mostPopular: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
          <span className="bg-gradient-to-b from-black to-gray-500 bg-clip-text text-transparent">Our Products</span>
          <br />
          <span className="bg-gradient-to-b from-blue-500 to-cyan-500 bg-clip-text text-transparent">Pricing</span>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-12">
          Choose the perfect product for your needs. All products are certified.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white/70 backdrop-blur-sm border rounded-xl sm:rounded-2xl p-6 sm:p-8 flex flex-col h-full transition-all duration-300 ${
                plan.mostPopular
                  ? "border-blue-500 shadow-2xl shadow-blue-500/20 lg:scale-105"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              {plan.mostPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="flex items-center space-x-1 px-4 py-1 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                    <Star className="w-3 h-3 sm:w-3 sm:h-3 fill-white" />
                    <span className="text-white">Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-black">{plan.name}</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                    ${plan.price}
                  </span>
                  <span className="text-gray-500 ml-1 sm:ml-2 text-sm sm:text-base">/month</span>
                </div>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100/50 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-blue-500" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-300 mt-auto hover:scale-102 cursor-pointer text-sm sm:text-base ${
                  plan.mostPopular
                    ? "bg-gradient-to-b from-blue-500 to-cyan-500 text-white"
                    : "bg-blue-50 border border-blue-200 hover:bg-blue-100 text-blue-600"
                }`}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>

        <p className="mt-8 sm:mt-12 text-gray-600 text-base text-xl">
          Need a custom services plan?{" "}
          <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors duration-200">
            Contact our sales team
          </a>
        </p>
      </div>
    </section>
  );
}
