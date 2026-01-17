import { Truck, Warehouse, Package, Plane, Ship, Loader } from "lucide-react";

const services = [
  {
    title: "Road Transport",
    description:
      "Reliable and secure road freight solutions ensuring timely delivery across South Africa.",
    icon: Truck,
  },
  {
    title: "Warehousing",
    description:
      "Safe and modern storage facilities with inventory management and distribution services.",
    icon: Warehouse,
  },
  {
    title: "Distribution",
    description:
      "Efficient nationwide distribution with real-time tracking and optimized routing.",
    icon: Package,
  },
  {
    title: "Air Freight",
    description:
      "Fast and reliable air cargo solutions for time-sensitive shipments, domestically and internationally.",
    icon: Plane,
  },
  {
    title: "Sea Freight",
    description:
      "Cost-effective and secure sea transport for bulk shipments, ensuring global connectivity.",
    icon: Ship,
  },
  {
    title: "Logistics Support",
    description:
      "EEnd-to-end logistics support includding loading, inventory, supply chain management.",
    icon: Loader,
  },
];

const Preview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="px-6 md:px-16 lg:px-24 xl:px-32">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Core Logistics Services
          </h2>
          <p className="mt-4 text-gray-600">
            End-to-end transport and logistics solutions designed for efficiency,
            safety, and reliability.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center mb-6">
                <Icon className="w-7 h-7 text-orange-500" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
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

export default Preview;
