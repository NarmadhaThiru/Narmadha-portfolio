import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white"
    >
      <div class="text-center" style="opacity: 1; transform: none;"><h1 class="text-6xl font-bold mb-4">Hi, I'm Narmadha Thirugnanam 👋</h1>
        <p class="text-xl text-gray-300">Front-End Developer | React | TypeScript</p>
      </div>
    </section>
  );
}