import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">TransLogix</h3>
          <p className="text-gray-400 leading-relaxed">
            TransLogix is your trusted partner for nationwide transport and logistics. 
            We deliver your cargo safely, efficiently, and on time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-orange-500 transition">Home</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-orange-500 transition">Services</Link>
            </li>
            <li>
              <Link to="/quote" className="hover:text-orange-500 transition">Quote</Link>
            </li>
            <li>
              <Link to="/fleet" className="hover:text-orange-500 transition">Fleet</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-orange-500 transition">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orange-500 transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-orange-500" />
              <span>444 Monument Ave, Johannesburg, South Africa</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-orange-500" />
              <a href="tel:+27123456789" className="hover:text-orange-500 transition">
                011 360 4577
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-orange-500" />
              <a href="mailto:info@translogix.co.za" className="hover:text-orange-500 transition">
                info@translogix.co.za
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} TransLogix. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
