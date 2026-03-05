import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-900 text-white">

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center"
            >
                <h1 className="text-6xl font-bold mb-4">
                    Hi, I'm Narmadha Thirugnanam 👋
                </h1>

                <p className="text-xl text-gray-300">
                    Front-End Developer | React | TypeScript
                </p>

            </motion.div>

        </section>
    );
}