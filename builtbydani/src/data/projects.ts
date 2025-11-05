export type Project = {
  title: string;
  description: string;
  link: string;
  linkText: string;
};

export const projects: Project[] = [
  {
    title: "Visualio",
    description: "An in-browser audio visualizer built as a React component. Upload any .mp3 file!",
    link: "https://github.com/builtbydani/visualio",
    linkText: "View on GitHub →"
  },
  {
    title: "DSA Showcase",
    description: "A visualization of Data Structures and Algorithms. Built with React, JavaScript, and Tailwindcss",
    link: "https://github.com/builtbydani/dsa-showcase",
    linkText: "View on GitHub →"
  },
  {
    title: "Daniball",
    description: "A browser toy inspired by danball.jp Play with particles like sand, water, oil, and more!",
    link: "https://builtbydani.github.io/dani-ball/",
    linkText: "Try it out! V1.0 out now!"
  }
];
