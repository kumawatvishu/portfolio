import { PROFILE } from "@/utils/data";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

export default function FloatingEmail() {
  return (
    <div className="fixed z-50 flex flex-col gap-3 bottom-6 right-6">
      <Link
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PROFILE.email}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700"
        aria-label="Email me"
      >
        <FaEnvelope />
      </Link>
    </div>
  );
}
