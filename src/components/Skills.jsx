import { motion } from "framer-motion";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiRedux, SiTailwindcss } from "react-icons/si";

const skills = [
    { name: "React", icon: <FaReact size={40} className="text-cyan-400" /> },
    { name: "JavaScript", icon: <FaJs size={40} className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript size={40} className="text-blue-500" /> },
    { name: "HTML", icon: <FaHtml5 size={40} className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt size={40} className="text-blue-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss size={40} className="text-sky-400" /> },
    { name: "Redux", icon: <SiRedux size={40} className="text-purple-500" /> },
    { name: "Git", icon: <FaGitAlt size={40} className="text-red-500" /> },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-20"
        >
            <h2 className="text-4xl font-bold text-center mb-14">
                My <span className="text-green-400">Skills</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        className="bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col items-center gap-4 hover:shadow-green-500/40 transition"
                    >
                        {skill.icon}

                        <p className="text-lg font-semibold text-gray-200">
                            {skill.name}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}