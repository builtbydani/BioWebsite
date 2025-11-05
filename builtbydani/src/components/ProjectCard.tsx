import { motion } from 'framer-motion'

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  linkText: string;
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function ProjectCard({ title, description, link, linkText }: ProjectCardProps) {
  return (
    <motion.div
      className="
        bg-purple-100/80 p-6 
        rounded-xl 
        shadow hover:shadow-lg transition
      "
      variants={cardVariants}
      whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      <h3 
        className="
          text-xl font-semibold mb-2
        "
      >
        {title}
      </h3>
      <p 
        className="
          text-sm text-gray-700 mb-4
        "
      >
        {description}
      </p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-300 font-semibold hover:underline"
      >
        {linkText}
      </a>
    </motion.div>
  );
}
