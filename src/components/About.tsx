import { PROFILE } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function About() {
  // Parent container variants for stagger animation
  const textContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  // Children variants (slide from top)
  const textItem: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut", // ✅ Framer Motion default easing (no TS error)
      },
    },
  };

  return (
    <section
      id="About"
      className="flex flex-col items-center max-w-full gap-8 px-4 py-10 sm:gap-10 md:flex-row justify-evenly sm:py-14 sm:px-6 dark:bg-gray-800 dark:text-white"
    >
      {/* Image Animation (Top to Bottom) */}
      <motion.div
        className="hidden rounded-md shadow-lg sm:block abt-img lg:w-26 lg:h-80"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src={PROFILE.avatar}
          alt="about"
          className="w-full h-full shadow-[0_10px_20px_0_#111] rounded-[5px] object-cover"
          width={500}
          height={500}
        />
      </motion.div>

      {/* Text Animation (Staggered from Top) */}
      <motion.div
        className="flex flex-col items-center p-4 rounded-lg shadow-lg sm:p-6 intro abt-intro box-style md:w-1/2 md:text-left dark:bg-gray-700 dark:text-gray-100"
        variants={textContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1
          variants={textItem}
          className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl"
        >
          About Me
        </motion.h1>

        <motion.p
          variants={textItem}
          className="text-sm leading-relaxed text-gray-700 sm:text-base dark:text-gray-100"
        >
          Hello, I&apos;m{" "}
          <span className="font-semibold text-orange-500">{PROFILE.name}</span>,
          a passionate full stack developer. I specialize in building dynamic,
          responsive, and scalable applications, both on the front-end and
          back-end.
        </motion.p>

        <motion.div
          variants={textItem}
          className="flex justify-center gap-3 mt-5 sm:gap-4 sm:mt-6 md:justify-start"
        >
          <Link
            href="/#Contact"
            className="flex items-center px-3 py-2 text-sm text-white bg-gray-900 border border-gray-600 rounded-md sm:text-base hover:bg-orange-500"
          >
            Hire Me
          </Link>
          <Link
            href="#"
            className="flex items-center px-3 py-2 text-sm text-white bg-gray-900 border border-gray-600 rounded-md sm:text-base hover:bg-orange-500"
          >
            Explore More
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
