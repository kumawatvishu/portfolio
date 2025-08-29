import { PROFILE } from "@/utils/data";
import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex justify-center gap-2 py-6 text-center text-gray-700 bg-gray-200 dark:bg-gray-900 dark:text-gray-400">
      <p className="mb-3 text-sm">
        © {new Date().getFullYear()} {PROFILE.name} • All Rights Reserved
      </p>

      <Link
        href={`https://wa.me/${PROFILE.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-green-500"
      >
        <FaWhatsapp />
      </Link>

      <Link href={`tel:${PROFILE.phone}`} className="hover:text-blue-500">
        <FaPhoneAlt />
      </Link>
    </footer>
  );
}
