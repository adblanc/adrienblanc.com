export interface ProjectProps {
  title: string;
  tags: string[];
  description: string;
  slug: string;
  category: string;
}

export const PROJECTS: ProjectProps[] = [
  {
    title: "ft_containers",
    tags: ["C++", "Data structures"],
    description:
      "Implementation of the various container types of the C++ standard template library",
    slug: "/42/ft-containers",
    category: "42",
  },
  {
    title: "minishell",
    tags: ["C", "UNIX"],
    description:
      "Implementation of a shell with some built-in commands and the possibility to execute programs, use environment variables, redirections, pipes and more...",
    slug: "/42/minishell",
    category: "42",
  },
  {
    title: "philosophers",
    tags: ["C", "Multithreading"],
    description:
      "Three different implementation of the famous dining philosophers problem using mutex, semaphores and processes.",
    slug: "/42/philosophers",
    category: "42",
  },
  {
    title: "libasm",
    tags: ["Assembly language"],
    description:
      "An introduction to assembly language by making a little library of functions. As assembly language isn't portable, this version is based on macOS standards.",
    slug: "/42/libasm",
    category: "42",
  },
  {
    title: "ft_services",
    tags: ["Kubernetes", "Clustering", "Docker"],
    description:
      "Infrastructure of different services using Kubernetes. It contains a nginx and ftps server, wordpress, mysql, phpmyadmin, grafana, influxdb all based on alpine.",
    slug: "/42/ft-services",
    category: "42",
  },
  {
    title: "cub3D",
    tags: ["C", "Raycasting"],
    description:
      "Implementation of a raycasting algorithm in C to recreate a wolf3D like game with textures, sprites using the minilibX, a minimalistic graphic library of 42.",
    slug: "/42/cub3D",
    category: "42",
  },
  {
    title: "TOZ",
    tags: ["React Native", "Typescript"],
    description: "My alcohol game made using React Native and typescript.",
    slug: "/personal/toz",
    category: "personal",
  },
];

export const get42Projects = () => PROJECTS.filter((p) => p.category === "42");

export const getPersonalProjects = () =>
  PROJECTS.filter((p) => p.category === "personal");
