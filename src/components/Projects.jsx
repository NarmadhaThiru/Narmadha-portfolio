import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
    {
        title: "E-commerce UI",
        description: "Modern React e-commerce interface with cart and product pages.",
        github: "https://github.com/yourgithub/project1",
    },
    {
        title: "Task Manager",
        description: "Productivity app built with React and local storage.",
        github: "https://github.com/yourgithub/project2",
    }
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-20 display flex flex-col items-center"
        >
            <h2 className="text-4xl font-bold text-center mb-14">
                My <span className="text-green-400">Projects</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-green-500/40 transition"
                    >
                        <h3 className="text-2xl font-semibold mb-3 text-green-400">
                            {project.title}
                        </h3>

                        <p className="text-gray-300 mb-6">{project.description}</p>

                        <a
                            href={project.github}
                            target="_blank"
                            className="flex items-center gap-2 text-gray-200 hover:text-green-400"
                        >
                            <FaGithub />
                            View Code
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}