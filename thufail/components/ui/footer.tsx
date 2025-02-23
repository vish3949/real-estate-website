import React from "react";
import Link from "next/link";
import { PawPrintIcon as Paw, Fish, Bone, Scissors, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Paw className="mr-2" size={20} />
              Pawsome Pet Shop
            </h3>
            <p className="text-sm text-gray-400">
              Your one-stop shop for all your furry friends' needs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-sm text-gray-400 hover:text-white flex items-center"
                >
                  <Bone className="mr-2" size={16} />
                  Pet Food & Treats
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-400 hover:text-white flex items-center"
                >
                  <Scissors className="mr-2" size={16} />
                  Grooming Services
                </Link>
              </li>
              <li>
                <Link
                  href="/adoption"
                  className="text-sm text-gray-400 hover:text-white flex items-center"
                >
                  <Paw className="mr-2" size={16} />
                  Pet Adoption
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-400 hover:text-white flex items-center"
                >
                  <Fish className="mr-2" size={16} />
                  About Us
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
            <h3 className="text-lg font-semibold mb-4">Visit Us</h3>
            <p className="text-sm text-gray-400">123 Pawsome Street</p>
            <p className="text-sm text-gray-400">Petville, State 12345</p>
            <p className="text-sm text-gray-400">Phone: (123) 456-7890</p>
            <p className="text-sm text-gray-400">
              Email: woof@pawsomepetshop.com
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Pawsome Pet Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
