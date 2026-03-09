import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl font-bold"
      >
        Hi, I'm Narmadha Thirugnanam
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-4 text-xl text-gray-300"
      >
        React Frontend Developer
      </motion.p>

      <motion.a
        href="#projects"
        whileHover={{ scale: 1.1 }}
        className="mt-8 px-6 py-3 bg-green-500 rounded-lg text-black font-semibold"
      >
        View Projects
      </motion.a>
    </section>
  );
}