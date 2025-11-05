import { motion } from 'framer-motion'

type GameCardProps = {
  title: string;
  description: string;
  link: string;
};

export function GameCard({ title, description, link }: GameCardProps) {
  return (
    <motion.div
      className="
        w-72
        bg-black/70 border border-blue-300 rounded-lg
        p-4 text-white
        shadow-[0_0_15px_#93C5FD]
        hover:shadow-[0_0_25px_#93C5FD]
        transition-all duration-300
        flex flex-col justify-between
        min-h-[180px]
      "
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 0 35px #93C5FD"
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <h3 className="text-lg font-bold text-blue-300 mb-1">{title}</h3>
        <p className="text-sm text-blue-100">{description}</p>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 self-start text-sm text-blue-300 hover:text-blue-100 underline"
      >
        Play →
      </a>
    </motion.div>
  );
}
