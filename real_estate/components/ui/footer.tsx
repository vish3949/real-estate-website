import Link from "next/link";
import {
  Leaf,
  Sprout,
  Droplet,
  Scissors,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Leaf className="mr-2" size={20} />
              TurfPro Management
            </h3>
            <p className="text-sm text-gray-400">
              Expert solutions for all your turf and lawn care needs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-400 hover:text-white flex items-center"
                >
                  <Sprout className="mr-2" size={16} />
                  Lawn Care Services
                </Link>
              </li>
              <li>
                <Link
                  href="/sports-turf"
                  className="text-sm text-gray-400 hover:text-white flex items-center"
                >
                  <Leaf className="mr-2" size={16} />
                  Sports Turf Management
                </Link>
              </li>
              <li>
                <Link
                  href="/irrigation"
                  className="text-sm text-gray-400 hover:text-white flex items-center"
                >
                  <Droplet className="mr-2" size={16} />
                  Irrigation Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/landscaping"
                  className="text-sm text-gray-400 hover:text-white flex items-center"
                >
                  <Scissors className="mr-2" size={16} />
                  Landscaping
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-400 hover:text-white flex items-center"
                >
                  <Phone className="mr-2" size={16} />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-400 flex items-center mb-2">
              <MapPin className="mr-2" size={16} />
              123 Greenway Avenue, Turfville, State 12345
            </p>
            <p className="text-sm text-gray-400 flex items-center mb-2">
              <Phone className="mr-2" size={16} />
              (123) 456-7890
            </p>
            <p className="text-sm text-gray-400 flex items-center">
              <Mail className="mr-2" size={16} />
              info@turfpromanagement.com
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} TurfPro Management. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
