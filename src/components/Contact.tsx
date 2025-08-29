import { PROFILE } from "@/utils/data";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-full dark:bg-gray-700 dark:text-white"
    >
      <section
        id="Contact"
        className="max-w-4xl px-6 py-12 mx-auto dark:bg-gray-700 dark:border-gray-700 dark:text-gray-200 "
      >
        <h2 className="mb-6 text-2xl font-bold text-center">Contact Me</h2>
        <form
          action="https://formspree.io/f/mrbagwkp"
          method="POST"
          className="space-y-4"
        >
          <div className="flex gap-2">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 bg-gray-100 border rounded-lg dark:bg-gray-600 dark:border-gray-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 bg-gray-100 border rounded-lg dark:border-gray-600 dark:bg-gray-600"
            />
          </div>
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="w-full px-4 py-2 bg-gray-100 border rounded-lg dark:bg-gray-600 dark:border-gray-600"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </section>
    </motion.div>
  );
}
