import { motion } from "framer-motion";
import { PROFILE } from "@/utils/data";
import Link from "next/link";

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
        className="max-w-5xl px-6 py-16 mx-auto dark:bg-gray-700 dark:border-gray-700 dark:text-gray-200"
      >
        <h2 className="mb-10 text-3xl font-bold text-center">Get in Touch</h2>
        <p className="mb-12 text-center text-gray-600 dark:text-gray-300">
          Have a project in mind or just want to say hello? Feel free to reach
          out using the form below.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="p-6 space-y-4 border rounded-lg dark:border-gray-600">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <p>Here’s how you can reach me directly.</p>
            <div>
              <p className="font-medium">Email</p>
              <p className="text-blue-500">{PROFILE.email}</p>
            </div>
            <div>
              <p className="font-medium">Location</p>
              <p>{PROFILE.location}</p>
            </div>
            <div>
              <p className="font-medium">Phone</p>
              <p>{PROFILE.phone}</p>
            </div>
            <div>
              <p className="font-medium">Social</p>
              <div className="space-x-4">
                <Link
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub
                </Link>
                <Link
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>

          <form
            action="https://formspree.io/f/mrbagwkp"
            method="POST"
            className="p-6 space-y-4 border rounded-lg dark:border-gray-600"
            onSubmit={(e) => {
              const form = e.currentTarget;
              setTimeout(() => form.reset(), 100);
            }}
          >
            <div className="flex flex-col gap-4">
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
                className="w-full px-4 py-2 bg-gray-100 border rounded-lg dark:bg-gray-600 dark:border-gray-600"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-4 py-2 bg-gray-100 border rounded-lg dark:bg-gray-600 dark:border-gray-600"
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                required
                className="w-full px-4 py-2 bg-gray-100 border rounded-lg dark:bg-gray-600 dark:border-gray-600"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </motion.div>
  );
}
