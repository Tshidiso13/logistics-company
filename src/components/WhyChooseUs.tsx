import {
  ShieldCheck,
  MapPin,
  Clock,
  Headset,
} from "lucide-react";

import bgImage from "../assets/hero-truck.jpeg"; // Background image import

const features = [
  {
    title: "Safety & Compliance",
    description:
      "Our fleet operates under strict safety standards and industry regulations. We prioritize cargo protection, vehicle maintenance, and trained drivers to ensure your goods arrive securely and damage-free.",
    icon: ShieldCheck,
  },
  {
    title: "Real-Time Tracking",
    description:
      "Track your shipments in real time with GPS-enabled monitoring. Stay informed at every stage of delivery, ensuring transparency, accountability, and peace of mind.",
    icon: MapPin,
  },
  {
    title: "Fast & Reliable Delivery",
    description:
      "We optimize routes and logistics planning to guarantee on-time deliveries. Whether local or nationwide, we ensure speed without compromising safety or quality.",
    icon: Clock,
  },
  {
    title: "Dedicated Customer Support",
    description:
      "Our support team is available to assist you before, during, and after delivery. We provide clear communication, fast response times, and personalized logistics solutions.",
    icon: Headset,
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className="relative py-24"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 px-6 md:px-16 lg:px-24 xl:px-32">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 text-white">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose Us
          </h2>
          <p className="mt-5 text-lg text-gray-200">
            We go beyond transportation — offering reliability, transparency,
            and logistics expertise that help your business move forward with
            confidence.
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group bg-white/90 p-8 rounded-2xl shadow-sm hover:shadow-xl transition"
            >
              {/* Icon */}
              <div className="w-16 h-16 mb-6 rounded-xl bg-orange-500/10 flex items-center justify-center">
                <Icon className="w-8 h-8 text-orange-500" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
