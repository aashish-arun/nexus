export const techCategories = {
  Frontend: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Next.js',
    'React Native',
    'Tailwind CSS',
  ],
  Backend: [
    'Java',
    'C#',
    'Python',
    'Oracle APEX',
    'Firebase',
    'Node.js',
  ],
  Database: [
    'MySQL',
    'Oracle Database',
    'SQL',
    'PL/SQL',
    'HeidiSQL',
  ],
  DevOps: [
    'Git',
    'GitHub',
    'Docker',
  ],
  Design: [
    'Figma',
    'Software Ideas Modular',
  ],
  OS: [
    'Windows',
    'Windows Server',
    'Linux',
    'Linux Server',
  ],
}

// Flatten all tech for "All" filter
export const allTech = Object.values(techCategories).flat()