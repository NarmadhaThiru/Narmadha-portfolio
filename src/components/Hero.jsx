import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white"
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">Hi, I'm Narmadha Thirugnanam 👋</h1>
        <p className="text-xl text-gray-300">Front-End Developer | React | TypeScript</p>
        <p className="text-xl text-gray-300">Senior React Developer with 7+ years building scalable, high-performance web apps.</p>6+
      </div>
    </section>
  );
}