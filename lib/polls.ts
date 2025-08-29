export type Poll = {
  id: number;
  question: string;
  options: string[];
  category?: string;
  tags?: string[];
};

export const polls: Poll[] = [
  {
    id: 1,
    question: "What's your favorite programming language?",
    options: ["JavaScript", "Python", "TypeScript", "Go"],
    category: "Programming",
    tags: ["languages", "dev"],
  },
  {
    id: 2,
    question: "Which framework do you prefer for web development?",
    options: ["React", "Vue", "Angular", "Svelte"],
    category: "Web",
    tags: ["frameworks", "frontend"],
  },
  {
    id: 3,
    question: "What's your preferred development environment?",
    options: ["VS Code", "WebStorm", "Vim", "Sublime Text"],
    category: "Tools",
    tags: ["ide", "editor"],
  },
];

export function getPollById(id: number): Poll | undefined {
  return polls.find((p) => p.id === id);
}
