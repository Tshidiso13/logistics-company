import { Link } from "react-router-dom";
import { Target, Eye, Users, Truck, CalendarDays } from "lucide-react";


import aboutImg from "../assets/about.jpg";
import aboutHeader from "../assets/history.jpg";
import Footer from "../components/Footer";

const stats = [
  {
    label: "Years Experience",
    value: "10+",
    icon: CalendarDays,
    description: "Proven track record delivering logistics solutions.",
  },
  {
    label: "Fleet Vehicles",
    value: "45+",
    icon: Truck,
    description: "A modern fleet ready for local and long-haul routes.",
  },
  {
    label: "Happy Clients",
    value: "300+",
    icon: Users,
    description: "Trusted by businesses across South Africa.",
  },
];

const About = () => {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section
        className="relative text-white min-h-[420px] md:min-h-[660px] flex items-center"
        style={{
          backgroundImage: `url(${aboutHeader})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 xl:px-32 pt-[110px]">
          <h1 className="text-4xl md:text-5xl font-bold">
            About Us
          </h1>

          {/* Breadcrumb */}
          <div className="mt-4 text-sm text-gray-300 flex items-center gap-2">
            <Link to="/" className="hover:text-orange-400 transition">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-200">About</span>
          </div>

          <p className="mt-6 max-w-2xl text-lg text-gray-200">
            We provide dependable transport and logistics services built on
            safety, transparency, and on-time delivery—helping businesses move
            cargo efficiently across South Africa.
          </p>
        </div>
      </section>

      {/* Company Story (2-column) */}
      <section className="py-20 bg-white">
        <div className="px-6 md:px-16 lg:px-24 xl:px-32">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Left: Story */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Story
              </h2>

              <p className="mt-5 text-gray-600 leading-relaxed">
                TransLogix started with one goal: to make transport and logistics
                simpler, safer, and more reliable for growing businesses. Over
                the years, we’ve built a strong network of routes, partners, and
                processes that help our clients deliver on their promises.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Today, we handle everything from daily distribution to long-haul
                freight, supported by a dedicated team, a well-maintained fleet,
                and modern tracking systems. Whether you’re moving goods across
                a city or across provinces, we focus on clear communication,
                careful handling, and consistent delivery performance.
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

            {/* Right: Image / Placeholder */}
            <div className="relative">
              {/* If you have an image, uncomment the import and this image tag */}
              <img
                src={aboutImg}
                alt="Transport and logistics operations"
                className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
              />

              {/* Placeholder block if no image yet
              <div className="w-full h-[420px] rounded-2xl bg-gray-100 shadow-inner flex items-center justify-center">
                <p className="text-gray-500 text-sm">
                  Add an image: src/assets/about-image.jpg
                </p>
              </div> */}

              {/* Accent badge */}
              <div className="absolute -bottom-6 left-6 bg-white shadow-lg rounded-xl px-5 py-4">
                <p className="text-sm text-gray-500">Trusted Logistics Partner</p>
                <p className="text-lg font-bold text-gray-900">
                  Nationwide Coverage
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-20 bg-gray-50">
        <div className="px-6 md:px-16 lg:px-24 xl:px-32">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Mission */}
            <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center">
                <Target className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Our Mission
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                To deliver reliable transport and logistics solutions that help
                businesses move goods safely and efficiently. We focus on
                professional service, accurate planning, and consistent on-time
                performance—every trip, every route, every client.
              </p>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li>• Safe handling and compliance-driven operations</li>
                <li>• Transparent communication and shipment visibility</li>
                <li>• Route optimization for speed and cost control</li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center">
                <Eye className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Our Vision
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                To become one of South Africa’s most trusted logistics providers
                by building a network powered by technology, disciplined safety
                standards, and a customer-first mindset. We aim to grow with our
                clients and support stronger supply chains nationwide.
              </p>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li>• Technology-enabled logistics and real-time tracking</li>
                <li>• Strong partnerships and nationwide reach</li>
                <li>• Continuous improvement and service excellence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="px-6 md:px-16 lg:px-24 xl:px-32">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Proven Performance You Can Trust
            </h2>
            <p className="mt-4 text-gray-600">
              Our results reflect our commitment to safety, reliability, and
              service delivery—backed by real experience on South African routes.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map(({ label, value, icon: Icon, description }) => (
              <div
                key={label}
                className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{label}</p>
                    <p className="mt-2 text-4xl font-bold text-gray-900">
                      {value}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-orange-500" />
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{description}</p>
              </div>
            ))}
          </div>

          {/* Extra trust line */}
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-gray-900 hover:bg-black text-white rounded-lg font-semibold transition"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
