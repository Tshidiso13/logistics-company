import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  pickup: string;
  delivery: string;
  cargoType: string;
  message: string;
};

const Contact = () => {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    pickup: "",
    delivery: "",
    cargoType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ For now: show success state.
    // Later you can send this to an API, EmailJS, Formspree, etc.
    setSubmitted(true);

    // Optional: reset form after submit
    setForm({
      fullName: "",
      email: "",
      phone: "",
      pickup: "",
      delivery: "",
      cargoType: "",
      message: "",
    });

    // Hide success message after some seconds
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-gray-900 text-white pt-[110px] pb-14">
        <div className="px-6 md:px-16 lg:px-24 xl:px-32">
          <h1 className="text-3xl md:text-4xl font-bold">Get a Quote / Contact</h1>

          {/* Breadcrumb */}
          <div className="mt-3 text-sm text-gray-300 flex items-center gap-2">
            <Link to="/" className="hover:text-orange-400 transition">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-200">Contact</span>
          </div>

          <p className="mt-5 max-w-2xl text-gray-200">
            Need transport or logistics support? Send your shipment details and our
            team will respond with a quote and the best solution for your route,
            cargo type, and delivery timeline.
          </p>
        </div>
      </section>

      {/* Quote Form + Contact Info */}
      <section className="py-20 bg-gray-50">
        <div className="px-6 md:px-16 lg:px-24 xl:px-32">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Quote Form */}
            <div className="bg-white p-10 rounded-2xl shadow-md">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Request a Quote
              </h2>
              <p className="mt-3 text-gray-600">
                Fill in the details below and we’ll get back to you as soon as possible.
              </p>

              {submitted && (
                <div className="mt-6 p-4 rounded-lg bg-green-50 text-green-700 border border-green-200">
                  ✅ Request submitted successfully. We’ll contact you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
                {/* Row 1 */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Tshidiso Mokoena"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. you@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="e.g. +27 71 234 5678"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700">
                      Cargo Type
                    </label>
                    <select
                      name="cargoType"
                      value={form.cargoType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="" disabled>
                        Select cargo type
                      </option>
                      <option value="General Freight">General Freight</option>
                      <option value="Pallets">Pallets</option>
                      <option value="Construction Materials">Construction Materials</option>
                      <option value="Perishables / Cold Chain">Perishables / Cold Chain</option>
                      <option value="Machinery / Oversized">Machinery / Oversized</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700">
                      Pickup Location
                    </label>
                    <input
                      name="pickup"
                      value={form.pickup}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Johannesburg, Gauteng"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700">
                      Delivery Location
                    </label>
                    <input
                      name="delivery"
                      value={form.delivery}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Durban, KZN"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us more about your shipment (weight, urgency, special handling, etc.)"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition"
                >
                  <Send className="w-5 h-5" />
                  Submit Request
                </button>

                <p className="text-xs text-gray-500 mt-2">
                  By submitting this form, you agree that we may contact you regarding your request.
                </p>
              </form>
            </div>

            {/* Contact Info + Map */}
            <div className="flex flex-col gap-8">
              {/* Contact Info */}
              <div className="bg-white p-10 rounded-2xl shadow-md">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Contact Information
                </h2>
                <p className="mt-3 text-gray-600">
                  Prefer to talk directly? Reach out using the details below.
                </p>

                <div className="mt-8 space-y-5 text-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">
                        444 Monument Ave, Johannesburg, South Africa
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a
                        href="tel:+27123456789"
                        className="text-gray-600 hover:text-orange-500 transition"
                      >
                        011 360 4577
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a
                        href="mailto:info@translogix.co.za"
                        className="text-gray-600 hover:text-orange-500 transition"
                      >
                        info@translogix.co.za
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gray-900 hover:bg-black text-white font-semibold transition"
                  >
                    Explore Our Services
                  </Link>
                </div>
              </div>

              {/* Google Map Placeholder */}
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <div className="w-full h-[320px] rounded-xl overflow-hidden">
                  <iframe
                    title="Company Location Map"
                    src="https://www.google.com/maps?q=Johannesburg%2C%20South%20Africa&output=embed"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="border-0 w-full h-full"
                  ></iframe>
                </div>

                <p className="mt-4 text-sm text-gray-500">
                  Visit our offices or contact us to arrange a meeting with our logistics team.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
      <FAQ />
      <Footer />
    </div>
  );
};

export default Contact;
