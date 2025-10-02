import { motion, Variants } from "framer-motion";
import { PROFILE } from "@/utils/data";
import Link from "next/link";
import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaPaperPlane,
  FaCheckCircle,
  FaCode,
  FaReact,
  FaServer,
  FaDatabase,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaNpm,
  FaDocker,
  FaLinux,
  FaTerminal,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import BackgroundAnimation from "./BackgroundAnimation"; // Import the new component

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Removed vibrantColors as it's now handled by BackgroundAnimation

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariantsLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: "spring" as const, stiffness: 50, duration: 0.5 },
    },
  };

  const itemVariantsRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: "spring" as const, stiffness: 50, duration: 0.5 },
    },
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    }, 2000);
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="relative py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <BackgroundAnimation
        opacity={0.15}
        parallaxMultiplier={0.5}
        iconCount={100}
        particleCount={40}
      />{" "}
      {/* Use the new component */}
      <div className="relative z-10 max-w-6xl px-6 mx-auto">
        <section id="Contact" className="max-w-5xl mx-auto dark:bg-transparent">
          <motion.div variants={itemVariantsLeft} className="mb-12 text-center">
            <motion.h2
              className="mb-3 text-4xl font-extrabold text-transparent md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"
              animate={
                {
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                } as any
              }
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 100%",
              }}
            >
              Get in Touch
            </motion.h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 md:text-xl">
              Ready to start your next project? I&apos;d love to hear about your
              ideas and discuss how we can work together to bring them to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left Side - Contact Info */}
            <motion.div variants={itemVariantsLeft} className="space-y-8">
              <div className="p-8 border border-gray-200 shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl dark:border-gray-700">
                <h3 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-white">
                  Let&apos;s Connect
                </h3>
                <p className="mb-8 text-gray-600 dark:text-gray-300">
                  I&apos;m always excited to work on new projects and
                  collaborate with amazing people. Feel free to reach out
                  through any of these channels.
                </p>

                <div className="space-y-6">
                  <motion.div
                    className="flex items-center p-4 space-x-4 border border-blue-200 rounded-xl bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full">
                      <FaEnvelope className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">
                        Email
                      </h4>
                      <a
                        href={`mailto:${PROFILE.email}`}
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {PROFILE.email}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center p-4 space-x-4 border border-green-200 rounded-xl bg-green-50 dark:bg-green-900/20 dark:border-green-800"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-green-500 rounded-full">
                      <FaPhone className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">
                        Phone
                      </h4>
                      <a
                        href={`tel:${PROFILE.phone}`}
                        className="text-green-600 dark:text-green-400 hover:underline"
                      >
                        {PROFILE.phone}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center p-4 space-x-4 border border-purple-200 rounded-xl bg-purple-50 dark:bg-purple-900/20 dark:border-purple-800"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full">
                      <FaMapMarkerAlt className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">
                        Location
                      </h4>
                      <p className="text-purple-600 dark:text-purple-400">
                        {PROFILE.location}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h4 className="mb-4 font-semibold text-gray-800 dark:text-white">
                    Follow Me
                  </h4>
                  <div className="flex space-x-4">
                    <motion.a
                      href={PROFILE.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 text-white transition-colors duration-300 bg-gray-800 rounded-full dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a
                      href={PROFILE.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 text-white transition-colors duration-300 bg-blue-600 rounded-full hover:bg-blue-700"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaLinkedin />
                    </motion.a>
                    <motion.a
                      href={`https://wa.me/${PROFILE.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 text-white transition-colors duration-300 bg-green-500 rounded-full hover:bg-green-600"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaWhatsapp />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              variants={itemVariantsRight}
              className="p-8 border border-gray-200 shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl dark:border-gray-700"
            >
              <h3 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-white">
                Send a Message
              </h3>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center p-4 mb-6 space-x-3 bg-green-100 border border-green-300 dark:bg-green-900/20 dark:border-green-700 rounded-xl"
                >
                  <FaCheckCircle className="text-xl text-green-500" />
                  <p className="font-medium text-green-700 dark:text-green-300">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 transition-all duration-300 bg-white border border-gray-300 dark:border-gray-600 rounded-xl dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 transition-all duration-300 bg-white border border-gray-300 dark:border-gray-600 rounded-xl dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 transition-all duration-300 bg-white border border-gray-300 dark:border-gray-600 rounded-xl dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 transition-all duration-300 bg-white border border-gray-300 resize-none dark:border-gray-600 rounded-xl dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center w-full px-6 py-4 space-x-2 font-semibold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
