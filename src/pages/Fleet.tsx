import { Link } from "react-router-dom";
import { MapPin, Radar, ShieldCheck, Truck as TruckIcon } from "lucide-react";

// 👉 Add your images in: src/assets/fleet/
// Example:
//  - src/assets/fleet/box-truck.jpg
//  - src/assets/fleet/flatbed.jpg
//  - src/assets/fleet/refrigerated.jpg
//  - src/assets/fleet/long-haul.jpg

import boxTruck from "../assets/box-truck.jpeg";
import flatbed from "../assets/flatbed-truck.jpg";
import refrigerated from "../assets/refrigerated-truck.jpg";
import longHaul from "../assets/longhaul-truck.jpg";
import Footer from "../components/Footer";

type Vehicle = {
  name: string;
  image: string;
  capacity: string;
  useCase: string;
  highlights: string[];
};

const vehicles: Vehicle[] = [
  {
    name: "Box Truck",
    image: boxTruck,
    capacity: "3–8 Ton Capacity",
    useCase:
      "Best for city deliveries, retail distribution, and medium-size loads requiring protection from weather.",
    highlights: ["Enclosed cargo protection", "Ideal for urban routes", "Fast loading/unloading"],
  },
  {
    name: "Flatbed Truck",
    image: flatbed,
    capacity: "8–14 Ton Capacity",
    useCase:
      "Perfect for construction materials, machinery, pallets, and oversized cargo that needs open access loading.",
    highlights: ["Easy side-loading", "Oversized cargo friendly", "Strapping & securing options"],
  },
  {
    name: "Refrigerated Truck",
    image: refrigerated,
    capacity: "4–10 Ton Cold Chain",
    useCase:
      "Designed for temperature-sensitive goods such as food, pharmaceuticals, and perishables requiring cold-chain compliance.",
    highlights: ["Temperature controlled", "Cold-chain compliant", "Ideal for perishables"],
  },
  {
    name: "Long-Haul Freight Truck",
    image: longHaul,
    capacity: "Up to 34 Ton (varies)",
    useCase:
      "Built for intercity and cross-province transport, supporting bulk freight and long-distance delivery schedules.",
    highlights: ["Long-distance reliability", "High load capacity", "Planned route optimization"],
  },
];

const Fleet = () => {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-gray-900 text-white pt-[110px] pb-14">
        <div className="px-6 md:px-16 lg:px-24 xl:px-32">
          <h1 className="text-3xl md:text-4xl font-bold">Fleet & Solutions</h1>

          {/* Breadcrumb */}
          <div className="mt-3 text-sm text-gray-300 flex items-center gap-2">
            <Link to="/" className="hover:text-orange-400 transition">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-200">Fleet</span>
          </div>

          <p className="mt-5 max-w-2xl text-gray-200">
            Our fleet is built for reliability, safety, and performance. From
            city deliveries to long-haul freight, we match the right vehicle and
            solution to your cargo type, timing, and route requirements.
          </p>
        </div>
      </section>

      {/* Fleet Intro */}
      <section className="py-20 bg-white">
        <div className="px-6 md:px-16 lg:px-24 xl:px-32">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                A Fleet You Can Count On
              </h2>
              <p className="mt-5 text-gray-600 leading-relaxed">
                We maintain a modern, well-serviced fleet to ensure consistent
                delivery performance. Every route is planned with safety and
                efficiency in mind—supported by trained drivers, vehicle checks,
                and monitoring technology.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Whether you're shipping pallets, construction goods, temperature
                controlled cargo, or long-haul freight, our team recommends the
                right solution to reduce delays, minimize risk, and protect your
                cargo from pickup to delivery.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-medium transition"
                >
                  Request a Quote
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-3 border border-gray-300 hover:border-gray-400 rounded-md font-medium transition text-gray-800"
                >
                  View Services
                </Link>
              </div>
            </div>

            {/* Simple feature list */}
            <div className="bg-gray-50 rounded-2xl p-10 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <TruckIcon className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Vehicle Matching
                  </h3>
                  <p className="mt-2 text-gray-600">
                    We match the right vehicle type to your cargo size, route,
                    and delivery urgency to reduce handling risk and cost.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Safety First
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Drivers are trained, vehicles are inspected, and loads are
                    secured using best-practice standards for safe transport.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Nationwide Coverage
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Our network supports delivery across major cities and
                    provinces, with planned routing for efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Cards */}
      <section className="py-20 bg-gray-50">
        <div className="px-6 md:px-16 lg:px-24 xl:px-32">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Vehicles
            </h2>
            <p className="mt-4 text-gray-600">
              Different cargo requires different solutions. Explore our vehicle
              types and choose the best fit for your delivery needs.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {vehicles.map((v) => (
              <div
                key={v.name}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                {/* Image */}
                <div className="w-full h-[240px]">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900">{v.name}</h3>

                  <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 text-sm font-medium">
                    <TruckIcon className="w-4 h-4" />
                    <span>{v.capacity}</span>
                  </div>

                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {v.useCase}
                  </p>

                  <ul className="mt-6 space-y-2 text-gray-600 text-sm">
                    {v.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-orange-500" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex gap-4">
                    <Link
                      to="/contact"
                      className="px-6 py-3 bg-gray-900 hover:bg-black text-white rounded-lg font-medium transition"
                    >
                      Request a Quote
                    </Link>
                    <Link
                      to="/contact"
                      className="px-6 py-3 border border-gray-300 hover:border-gray-400 rounded-lg font-medium transition text-gray-800"
                    >
                      Ask a Question
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-gray-500 text-sm">
            * Vehicle availability and capacity can vary depending on route,
            cargo type, and scheduling.
          </p>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="px-6 md:px-16 lg:px-24 xl:px-32">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Technology-Driven Logistics
            </h2>
            <p className="mt-4 text-gray-600">
              We use modern tracking and monitoring tools to improve reliability,
              reduce risk, and keep you informed throughout the delivery process.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* GPS Tracking */}
            <div className="bg-gray-50 p-10 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center">
                <MapPin className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                GPS Tracking
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Every shipment is supported by GPS-enabled tracking, allowing
                for better route planning, accurate ETAs, and improved delivery
                coordination. This helps reduce delays and improves overall
                transparency.
              </p>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li>• Improved delivery accuracy and planning</li>
                <li>• Better route optimization and fuel efficiency</li>
                <li>• Increased cargo security and visibility</li>
              </ul>
            </div>

            {/* Real-time Monitoring */}
            <div className="bg-gray-50 p-10 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center">
                <Radar className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Real-Time Monitoring
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our monitoring systems support safer driving, proactive issue
                resolution, and consistent performance. If anything changes on
                the route, our team can respond quickly and keep you updated.
              </p>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li>• Live updates and improved communication</li>
                <li>• Faster response to route or delivery changes</li>
                <li>• Better safety and operational accountability</li>
              </ul>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-gray-900 text-white rounded-2xl p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Need the right fleet solution?</h3>
              <p className="mt-2 text-gray-200">
                Tell us what you’re moving and where it needs to go. We’ll match
                the right vehicle, route, and tracking support for your shipment.
              </p>
            </div>

            <Link
              to="/quote"
              className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Fleet;
