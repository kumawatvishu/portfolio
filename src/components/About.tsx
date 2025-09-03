import { PROFILE } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="About"
      className="flex flex-col items-center max-w-full gap-10 md:flex-row justify-evenly py-14 dark:bg-gray-800 dark:text-white "
    >
      {/* Image Animation (Top to Bottom) */}
      <motion.div
        className="rounded-md shadow-lg abt-img w-44 h-96 sm:h-48"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src={PROFILE.avatar}
          alt="about"
          className="w-full h-full flex shadow-[0_10px_20px_0_#111] rounded-[5px] object-cover sm:w-[180px] sm:h-[250px]"
          width={500}
          height={500}
        />
      </motion.div>

      {/* Text Animation (Left to Right) */}
      <motion.div
        className="flex flex-col items-center p-4 rounded-lg shadow-lg intro abt-intro box-style md:w-1/2 md:text-left dark:bg-gray-700 dark:text-gray-100 "
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="items-center mb-4 text-3xl font-bold">About Me</h1>
        <p className="leading-relaxed text-gray-700 dark:text-gray-100">
          Hello, I&apos;m{" "}
          <span className="font-semibold text-orange-500">{PROFILE.name}</span>,
          a passionate full stack developer. I specialize in building dynamic,
          responsive, and scalable applications, both on the front-end and
          back-end.
        </p>
        <div className="flex justify-center gap-4 mt-6 md:justify-start">
          <Link
            href="/#Contact"
            className="flex items-center p-2 text-white bg-gray-900 border-gray-600 rounded-md hover:bg-orange-500 border-3"
          >
            Hire Me
          </Link>
          <Link
            href="#"
            className="flex items-center p-2 text-white bg-gray-900 border-gray-600 rounded-md hover:bg-orange-500 border-3"
          >
            Explore More
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

{
  /* <div className="rounded-md shadow-lg abt-img w-44 h-96 sm:h-48 ">
        <Image
          src={PROFILE.avatar}
          alt="about"
          className="w-full h-full flex shadow-[0_10px_20px_0_#111] rounded-[5px] object-cover sm:w-[180px] sm:h-[250px]"
          width={500}
          height={500}
        />
      </div> */
}
