import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center p-20"
        >
            <h2 className="text-4xl font-bold mb-10">
                Get In <span className="text-green-400">Touch</span>
            </h2>

            <p className="text-gray-300 mb-10 text-center max-w-xl">
                I'm currently looking for React Frontend Developer opportunities.
                Feel free to connect with me.
            </p>

            <div className="flex gap-10">
                <motion.a
                    whileHover={{ scale: 1.2 }}
                    href="mailto:tnarmadha21@gmail.com"
                    className="bg-gray-800 p-6 rounded-full hover:shadow-green-500/40"
                >
                    <FaEnvelope size={28} className="text-green-400" />
                </motion.a>

                <motion.a
                    whileHover={{ scale: 1.2 }}
                    href="https://linkedin.com/in/narmadha-t/"
                    target="_blank"
                    className="bg-gray-800 p-6 rounded-full hover:shadow-green-500/40"
                >
                    <FaLinkedin size={28} className="text-blue-400" />
                </motion.a>
            </div>
        </section>
    );
}