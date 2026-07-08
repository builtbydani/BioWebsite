export const profile = {
  name: 'Dani',
  location: 'U.S',
  currentRole: 'Intern at DigiKey',
  currentTeam: 'Mosaic team',
  degree: 'Bachelor’s degree in Computer Science',
  focus: 'Backend services with C# and .NET 10',
};

export const heroContent = {
  heading: `Hello, I'm ${profile.name}!`,
  intro:
    "Welcome to my corner of the internet; where I'll be sharing who I am, and what I'm up to. Check back regularly for updates!",
  snapshot: [`${profile.currentRole} on the ${profile.currentTeam}`, `${profile.degree}`],
  links: [
    { label: 'GitHub', href: 'https://github.com/builtbydani' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/daniel-richards-dev/' },
    { label: 'Resume', href: '/2025_Resume_Final.pdf', isExternalFile: true },
  ],
};

// Update the arrays below when you want to refresh About content.
export const aboutContent = {
  heading: 'About Me',
  bio: [
    `Hello! I’m ${profile.name}, a developer and creative based in the ${profile.location}. I currently work as an ${profile.currentRole} on the ${profile.currentTeam}.`,
    `I recently graduated college with a ${profile.degree}. I’m building cute, powerful tools for the web and beyond; from my personal site builtbydani.dev, to game preservation projects, to visual/interactive full-stack apps.`,
    'I love skate culture, spooky/pastel aesthetics, and retro games.',
  ],
  profileHighlights: [
    { label: 'Current role', value: `${profile.currentRole} — ${profile.currentTeam}` },
    { label: 'Education', value: profile.degree },
    { label: 'Focus', value: profile.focus },
  ],
  footer: 'Always learning, always building 🖤',
};
