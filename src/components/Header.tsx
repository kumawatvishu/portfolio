import Typewriter from "typewriter-effect";
import { PROFILE } from "@/utils/data";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";
import Navbar from "./Navbar";
import { BsEye } from "react-icons/bs";
import Link from "next/link";

export default function Header() {
  return (
    <header id="Home" className="dark:bg-gray-900">
      <Navbar />

      <div className="flex flex-col items-center max-w-6xl gap-8 px-4 py-10 pt-24 mx-auto sm:gap-10 md:flex-row justify-evenly sm:pt-28 sm:px-6">
        <div className="font-nunito flex flex-col w-[90%] sm:w-[70%] md:w-1/2 items-center md:items-start text-center md:text-left">
          <h1 className="m-3 text-2xl font-extrabold sm:m-5 sm:text-3xl dark:text-white">
            Hey folks, I&apos;m {PROFILE.role}
          </h1>

          <div className="mt-2 text-sm sm:text-base dark:text-white">
            <Typewriter
              options={{
                strings: PROFILE.tagline,
                autoStart: true,
                loop: true,
                delay: 35,
                deleteSpeed: 20,
              }}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-5 md:justify-start sm:gap-4 sm:mt-6">
            <Link
              href={PROFILE.resumeUrl}
              download
              className="flex items-center px-3 py-2 text-sm text-white bg-gray-900 border border-gray-600 rounded-md sm:text-base dark:bg-white dark:text-black dark:hover:bg-orange-500 hover:bg-orange-500"
            >
              <FaDownload className="mr-2" /> Download Resume
            </Link>

            <Link
              href="/assets/Resume.pdf"
              className="flex items-center px-3 py-2 text-sm text-white bg-gray-700 border border-gray-600 rounded-md sm:text-base dark:bg-white dark:text-black dark:hover:bg-orange-500 hover:bg-orange-500"
            >
              <BsEye className="mr-2" />
              Preview Resume
            </Link>
          </div>

          <div className="flex justify-center gap-4 mt-4 text-xl text-gray-800 md:justify-center sm:text-2xl dark:text-gray-200">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              className="hover:text-blue-500"
            >
              <FaLinkedin />
            </a>
            <a href={PROFILE.github} target="_blank">
              <FaGithub />
            </a>
            <a
              href={`https://wa.me/${PROFILE.whatsapp}`}
              className="hover:text-green-500"
              target="_blank"
            >
              <FaWhatsapp />
            </a>
            <a href={`mailto:${PROFILE.email}`} className="hover:text-blue-500">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="border-[4px] sm:border-[5px] border-orange-500 w-40 h-48 sm:w-56 sm:h-64 md:w-72 md:h-70 lg:w-80 lg:h-96 flex justify-center items-center mt-6 md:mt-0">
          <Image
            src={PROFILE.avatar}
            alt={PROFILE.name}
            className="object-cover object-top w-40 h-48 rounded-md animate-movePfp sm:w-56 sm:h-64 md:w-72 md:h-70 lg:w-80 lg:h-96"
            height={500}
            width={400}
            priority
          />
        </div>
      </div>
    </header>
  );
}
