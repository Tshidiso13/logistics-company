import { Link } from "react-router-dom";


const CTA = () => {
  return (
    <section className="relative bg-orange-500 py-24">
      {/* Optional decorative background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-80"></div>

      <div className="relative z-10 px-6 md:px-16 lg:px-24 xl:px-32 text-center text-white max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Ready to Move Your Business Forward?
        </h2>
        <p className="mt-4 text-lg md:text-xl text-orange-100">
          Partner with TransLogix for reliable, safe, and efficient transport
          and logistics solutions. Our nationwide network and experienced
          team ensure your cargo reaches its destination on time, every time.
        </p>

        <Link
          to="/contact"
          className="mt-8 inline-block px-10 py-4 bg-white text-orange-500 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Request a Quote
        </Link>
      </div>
    </section>
  );
};

export default CTA;
