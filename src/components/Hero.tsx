import heroBg from "../assets/hero-bg.jpg";
// import heroTruck from "../assets/hero-truck.jpeg";

const Hero = () => {
  return (
    <section
      className="relative h-[720px] w-full flex items-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 xl:px-32">
        <div className="grid md:grid-cols-2 items-center gap-10">
          
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Reliable Transport & Logistics Solutions Across South Africa
            </h1>

            <p className="mt-6 text-lg text-gray-200 max-w-xl">
              We deliver safe, efficient, and on-time logistics solutions tailored
              to your business needs nationwide.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="/contact"
                className="px-8 py-3 bg-orange-500 hover:bg-orange-600 transition rounded-md font-medium"
              >
                Get a Quote
              </a>

              <a
                href="/services"
                className="px-8 py-3 border border-white hover:bg-white hover:text-black transition rounded-md font-medium"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Right Image */}
          {/* <div className="hidden md:flex justify-end">
            <img
              src={heroTruck}
              alt="Logistics Truck"
              className="max-h-[420px] w-auto drop-shadow-xl"
            />
          </div> */}

        </div>
      </div>
    </section>
  );
};

export default Hero;
