type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  linkText: string;
};

export function ProjectCard({ title, description, link, linkText }: ProjectCardProps) {
  return (
    <div
      className="
        bg-purple-100/80 p-6 
        rounded-xl 
        shadow hover:shadow-lg transition
      "
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
    </div>
  );
}
