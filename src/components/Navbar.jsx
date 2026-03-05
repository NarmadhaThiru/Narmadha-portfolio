import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -60 }}
            animate={{ y: 0 }}
            className="fixed top-0 w-full bg-black text-white p-4 flex justify-center gap-8 z-50"
        >
            <Link to="hero" smooth duration={500} className="cursor-pointer hover:text-green-400">
                Home
            </Link>

            <Link to="skills" smooth duration={500} className="cursor-pointer hover:text-green-400">
                Skills
            </Link>

            <Link to="projects" smooth duration={500} className="cursor-pointer hover:text-green-400">
                Projects
            </Link>

            <Link to="contact" smooth duration={500} className="cursor-pointer hover:text-green-400">
                Contact
            </Link>
        </motion.nav>
    );
}