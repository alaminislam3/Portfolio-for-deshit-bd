import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2E2E2E]  text-gray-300 py-12">
      <div className="max-w-7xl  mx-[50px]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">CodeC</h2>
          <p className="text-sm leading-relaxed">
            Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada
            terra videa magna derita valies darta donna mare fermentum iaculis
            eu non diam phasellus. Scelerisque felis imperdiet proin fermentum
            leo. Amet volutpat consequat mauris nunc congue.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-white font-semibold mb-3 relative inline-block">
            USEFUL LINKS
            <span className="absolute left-0 bottom-0 w-[60px] h-[2px] bg-lime-400 block mt-1"></span>
          </h3>
          <ul className="mt-5 space-y-2 text-sm">
            <li className="hover:text-[#FFBD39] cursor-pointer">Home</li>
            <li className="hover:text-[#FFBD39] cursor-pointer">About Us</li>
            <li className="hover:text-[#FFBD39] cursor-pointer">Services</li>
            <li className="hover:text-[#FFBD39] cursor-pointer">Terms Of Service</li>
            <li className="hover:text-[#FFBD39] cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-white font-semibold mb-3 relative inline-block">
            OUR SERVICES
            <span className="absolute left-0 bottom-0 w-[60px] h-[2px] bg-lime-400 block mt-1"></span>
          </h3>
          <ul className="mt-5 space-y-2 text-sm">
            <li className="hover:text-[#FFBD39] cursor-pointer">Photography</li>
            <li className="hover:text-[#FFBD39] cursor-pointer">Web Design</li>
            <li className="hover:text-[#FFBD39] cursor-pointer">Woocommerce</li>
            <li className="hover:text-[#FFBD39] cursor-pointer">Brand Image</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-white font-semibold mb-3 relative inline-block">
            CONTACT US
            <span className="absolute left-0 bottom-0 w-[60px] h-[2px] bg-lime-400 block mt-1"></span>
          </h3>
          <ul className="mt-5 text-sm space-y-2">
            <li>A108 Adam Street</li>
            <li>New York, NY 535022</li>
            <li>United States</li>
            <li>
              <strong>Phone:</strong> +1 5589 55488 55
            </li>
            <li>
              <strong>Email:</strong> info@example.com
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            <a href="#" className="w-9 h-9 rounded-full bg-[#444444] flex items-center justify-center hover:bg-[#FFBD39] hover:text-black transition-all">
              <FaFacebookF />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-[#444444] flex items-center justify-center hover:bg-[#FFBD39] hover:text-black transition-all">
              <FaTwitter />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-[#444444] flex items-center justify-center hover:bg-[#FFBD39] hover:text-black transition-all">
              <FaInstagram />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-[#444444] flex items-center justify-center hover:bg-[#FFBD39] hover:text-black transition-all">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-600 mt-10 pt-5 text-center text-sm text-gray-400">
        © Copyright <span className="text-white font-semibold">Deshlt-BD</span> | All Rights Reserved
      </div>
    </footer>
  );
}
