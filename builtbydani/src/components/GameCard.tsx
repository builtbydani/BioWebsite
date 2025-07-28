type GameCardProps = {
  title: string;
  description: string;
  link: string;
};

export function GameCard({ title, description, link }: GameCardProps) {
  return (
    <div
      className="
        w-72
        bg-black/70 border border-pink-500 rounded-lg
        p-4 text-white
        shadow-[0_0_15px_#ec4899]
        hover:shadow-[0_0_25px_#ec4899]
        transition-all duration-300
        flex flex-col justify-between
        min-h-[180px]
      "
    >
      <div>
        <h3 className="text-lg font-bold text-pink-400 mb-1">{title}</h3>
        <p className="text-sm text-pink-100">{description}</p>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 self-start text-sm text-blue-400 hover:text-blue-300 underline"
      >
        Play →
      </a>
    </div>
  );
}


