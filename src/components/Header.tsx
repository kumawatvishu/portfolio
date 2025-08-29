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
import { useState } from "react";
import Navbar from "./Navbar";
import { BsEye } from "react-icons/bs";

export default function Header() {
  return (
    <header id="Home" className="dark:bg-gray-900 ">
      <Navbar />

      <div className="flex flex-col items-center max-w-6xl gap-10 mx-auto md:flex-row justify-evenly py-14 pt-28">
        <div className="font-nunito flex flex-col w-[55%] md:w-1/2 items-center ">
          <h1 className="m-5 text-3xl font-extrabold font-nunito dark:text-white">
            Hey folks, I'm {PROFILE.role}
          </h1>

          <div className="mt-2 text-center dark:text-white">
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

          <div className="flex justify-center gap-4 mt-6">
            <a
              href={PROFILE.resumeUrl}
              download
              className="flex items-center p-2 text-white bg-gray-900 border-gray-600 rounded-md dark:bg-white dark:text-black dark:hover:bg-orange-500 hover:bg-orange-500 border-3"
            >
              <FaDownload className="mr-2" /> Download Resume
            </a>

            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-2 text-white bg-gray-700 border-gray-600 rounded-md dark:bg-white dark:text-black dark:hover:bg-orange-500 hover:bg-orange-500 border-3"
            >
              <BsEye className="mr-2" />
              Preview Resume
            </a>
          </div>

          <div className="flex justify-center gap-4 mt-4 text-2xl text-gray-800 dark:text-gray-200">
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
        <div className="border-[5px] border-orange-500 w-[329px] h-[392px] flex ">
          <Image
            src={PROFILE.avatar}
            alt={PROFILE.name}
            className="object-cover object-top rounded-md animate-movePfp"
            height={500}
            width={300}
          />
        </div>
      </div>
    </header>
  );
}
