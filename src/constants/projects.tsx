import { ProjectProps } from "../components/Project/Project";

export const PROJECTS: ProjectProps[] = [
  {
    title: "ft_containers",
    tags: ["C++", "Data structures", "42"],
    description:
      "Implementation of the various container types of the C++ standard template library",
  },
  {
    title: "minishell",
    tags: ["C", "UNIX", "42"],
    description:
      "Implementation of a shell with some built-in commands and the possibility to execute programs, use environment variables, use redirections and pipes and much more...",
  },
  {
    title: "philosophers",
    tags: ["C", "Multithreading", "42"],
    description:
      "Three different implementation of the famous dining philosophers problem using mutex, semaphores and processes.",
  },
  {
    title: "libasm",
    tags: ["Assembly", "42"],
    description:
      "An introduction to assembly language by making a little library of functions. As assembly language isn't portable, this version is based on macOS standards.",
  },
];
