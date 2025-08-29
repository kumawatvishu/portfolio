// src/components/Footer.tsx
import { PROFILE } from "@/utils/data";
import { FaWhatsapp, FaPhoneAlt, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex justify-center gap-2 py-6 text-center text-gray-700 bg-gray-200 dark:bg-gray-900 dark:text-gray-400">
      <p className="mb-3 text-sm">
        © {new Date().getFullYear()} {PROFILE.name} • All Rights Reserved
      </p>

      {/* Contact Links */}
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${PROFILE.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-green-500"
      >
        <FaWhatsapp />
      </a>

      {/* Call */}
      <a href={`tel:${PROFILE.phone}`} className="hover:text-blue-500">
        <FaPhoneAlt />
      </a>

      {/* Instagram */}
      {/* <a
          href={PROFILE.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500"
        >
          <FaInstagram />
        </a> */}
    </footer>
  );
}
