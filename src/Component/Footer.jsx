import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2E2E2E] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            CodeC
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            CodeC is dedicated to providing top-notch web development and
            digital solutions. We help businesses grow online by creating
            responsive, modern, and user-friendly websites. Our team is
            committed to delivering high-quality services that ensure client
            satisfaction and business success.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-white font-semibold mb-3 relative inline-block text-lg sm:text-xl">
            USEFUL LINKS
            <span className="absolute left-0 bottom-0 w-[60px] h-[2px] bg-lime-400 block mt-1"></span>
          </h3>
          <ul className="mt-5 space-y-2 text-sm sm:text-base">
            <li className="hover:text-[#FFBD39] cursor-pointer">Home</li>
            <li className="hover:text-[#FFBD39] cursor-pointer">About Us</li>
            <li className="hover:text-[#FFBD39] cursor-pointer">Services</li>
            <li className="hover:text-[#FFBD39] cursor-pointer">
              Terms Of Service
            </li>
            <li className="hover:text-[#FFBD39] cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-white font-semibold mb-3 relative inline-block text-lg sm:text-xl">
            OUR SERVICES
            <span className="absolute left-0 bottom-0 w-[60px] h-[2px] bg-lime-400 block mt-1"></span>
          </h3>
          <ul className="mt-5 space-y-2 text-sm sm:text-base">
            <li className="hover:text-[#FFBD39] cursor-pointer">Photography</li>
            <li className="hover:text-[#FFBD39] cursor-pointer">Web Design</li>
            <li className="hover:text-[#FFBD39] cursor-pointer">Woocommerce</li>
            <li className="hover:text-[#FFBD39] cursor-pointer">Brand Image</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-white font-semibold mb-3 relative inline-block text-lg sm:text-xl">
            CONTACT US
            <span className="absolute left-0 bottom-0 w-[60px] h-[2px] bg-lime-400 block mt-1"></span>
          </h3>
          <ul className="mt-5 text-sm sm:text-base space-y-2">
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
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#444444] flex items-center justify-center hover:bg-[#FFBD39] hover:text-black transition-all"
                >
                  <Icon className="text-sm sm:text-base" />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-600 mt-10 pt-5 text-center text-sm sm:text-base text-gray-400">
        © Copyright <span className="text-white font-semibold">Deshlt-BD</span>{" "}
        | All Rights Reserved
      </div>
    </footer>
  );
}
