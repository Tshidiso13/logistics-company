import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Which areas do you deliver to in South Africa?",
    answer:
      "We offer nationwide coverage across major cities and provinces, including Gauteng, KwaZulu-Natal, Western Cape, Eastern Cape, Free State, Limpopo, Mpumalanga, North West, and Northern Cape. If your route is remote, we’ll confirm availability and the best delivery option during quoting.",
  },
  {
    question: "How do I request a quote and what information do you need?",
    answer:
      "You can request a quote through our Quote/Contact form. To give an accurate price and ETA, we typically need: pickup and delivery locations, cargo type, estimated weight/volume, preferred pickup date/time, and any special handling requirements (fragile, refrigerated, oversized, etc.).",
  },
  {
    question: "Do you provide real-time tracking for shipments?",
    answer:
      "Yes. We support GPS-enabled tracking for many routes and vehicle types. Depending on the service selected, you may receive live updates, estimated arrival times, and delivery confirmation once the shipment is complete.",
  },
  {
    question: "What types of cargo can you transport?",
    answer:
      "We handle a wide range of cargo including general freight, pallets, retail stock, construction materials, machinery, and temperature-sensitive goods (where refrigerated service is used). If your cargo is hazardous or requires compliance documentation, please mention it during quoting so we can advise on the correct process.",
  },
  {
    question: "How do you ensure safety and cargo protection?",
    answer:
      "Safety is a priority across our operations. Our process includes vehicle inspections, preventative maintenance schedules, professional driver standards, secure loading practices, and route planning. We also use monitoring tools to reduce risk and maintain consistent delivery performance.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery times depend on distance, route conditions, scheduling, and service type (standard vs express). Local deliveries can often be completed same-day or next-day, while intercity or cross-province deliveries typically follow agreed ETAs based on route planning.",
  },
  {
    question: "Do you offer warehousing and distribution support?",
    answer:
      "Yes. We offer storage solutions and distribution services to support your supply chain. This can include receiving, inventory handling, pick-and-pack, dispatch coordination, and scheduled deliveries to your customers or retail locations.",
  },
  {
    question: "Is my shipment insured?",
    answer:
      "Insurance options can vary depending on cargo type, value, and the service selected. If you require coverage, please provide the declared value during quoting and we’ll advise on the available insurance/coverage options and documentation needed.",
  },
  {
    question: "Can you handle urgent or express deliveries?",
    answer:
      "Yes. We offer express delivery options for time-sensitive shipments, subject to vehicle availability and route feasibility. When requesting a quote, mark the request as urgent and include the desired delivery deadline.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-24 bg-white">
      <div className="px-6 md:px-16 lg:px-24 xl:px-32">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Answers to common questions about our transport, logistics, and
            delivery services.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 p-6 bg-gray-50 hover:bg-gray-100 transition text-left"
                >
                  <span className="font-semibold text-gray-900">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                <div
                  className={`px-6 transition-all duration-300 ${
                    isOpen ? "max-h-[500px] py-5" : "max-h-0 py-0"
                  } overflow-hidden bg-white`}
                >
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions? Contact our team and we’ll help you choose the
            right logistics solution.
          </p>
          <a
            href="/contact"
            className="inline-block mt-5 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
