import { Link } from "react-router-dom";
import {
  Truck,
  Warehouse,
  Package,
  FileCheck2,
  Route,
  Zap,
} from "lucide-react";
import Footer from "../components/Footer";

// Optional: add a header background image
// import servicesHeader from "../assets/services-header.jpg";

type Service = {
  title: string;
  description: string;
  icon: React.ElementType;
  bullets: string[];
};

const services: Service[] = [
  {
    title: "Freight Transport",
    description:
      "Safe, dependable freight movement for local and long-haul routes across South Africa.",
    icon: Truck,
    bullets: [
      "Long-distance and local deliveries",
      "Dedicated and shared loads",
      "Secure handling and proof of delivery",
    ],
  },
  {
    title: "Warehousing",
    description:
      "Modern storage solutions with organized stock handling, tracking, and distribution support.",
    icon: Warehouse,
    bullets: [
      "Short & long-term storage",
      "Inventory receiving & dispatch",
      "Pick, pack & order fulfillment",
    ],
  },
  {
    title: "Distribution",
    description:
      "Efficient distribution planning with optimized routing to reduce delays and improve delivery performance.",
    icon: Package,
    bullets: [
      "Nationwide distribution coverage",
      "Route planning and scheduling",
      "Last-mile delivery support",
    ],
  },
  {
    title: "Customs Clearance",
    description:
      "Smooth documentation and clearance support for cross-border shipments and imports/exports.",
    icon: FileCheck2,
    bullets: [
      "Document preparation support",
      "Compliance and clearance guidance",
      "Reduced delays at ports/borders",
    ],
  },
  {
    title: "Fleet Management",
    description:
      "Professional fleet operations focused on safety, maintenance, and real-time visibility.",
    icon: Route,
    bullets: [
      "Preventative maintenance schedules",
      "GPS monitoring and reporting",
      "Driver performance and safety checks",
    ],
  },
  {
    title: "Express Delivery",
    description:
      "Fast, time-sensitive delivery solutions for urgent cargo that needs speed and reliability.",
    icon: Zap,
    bullets: [
      "Priority dispatch and delivery",
      "Same-day / next-day options (where available)",
      "Dedicated support for urgent requests",
    ],
  },
];

const Services = () => {
  return (
    <div className="w-full">
      {/* Page Header (Title + breadcrumb) */}
      <section className="bg-gray-900 text-white pt-[110px] pb-14">
        <div className="px-6 md:px-16 lg:px-24 xl:px-32">
          <h1 className="text-3xl md:text-4xl font-bold">Services</h1>

          <div className="mt-3 text-sm text-gray-300 flex items-center gap-2">
            <Link to="/" className="hover:text-orange-400 transition">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-200">Services</span>
          </div>

          <p className="mt-5 max-w-2xl text-gray-200">
            From freight transport to warehousing and express delivery, we offer
            end-to-end logistics solutions designed to keep your supply chain
            moving—safely, efficiently, and on time.
          </p>
        </div>
      </section>

      {/* Services Grid (3x2) */}
      <section className="py-20 bg-gray-50">
        <div className="px-6 md:px-16 lg:px-24 xl:px-32">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What We Do Best
            </h2>
            <p className="mt-4 text-gray-600">
              Choose from our core services below. Each option is backed by
              experienced teams, reliable processes, and clear communication
              from pickup to delivery.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, description, icon: Icon, bullets }) => (
              <div
                key={title}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-orange-500" />
                </div>

                {/* Title + Description */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>

                {/* Details */}
                <ul className="mt-6 space-y-2 text-gray-600 text-sm">
                  {bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-orange-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA inside card */}
                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-black transition"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA strip */}
          <div className="mt-16 bg-white rounded-2xl shadow-md p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Need a custom logistics solution?
              </h3>
              <p className="mt-2 text-gray-600">
                Tell us your pickup and delivery requirements—our team will
                recommend the best option for your cargo type, timing, and
                budget.
              </p>
            </div>

            <Link
              to="/contact"
              className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
