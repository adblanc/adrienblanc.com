import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface IProject {
  title: string;
  description: string;
  tags: string[];
  img: string;
  slug: string;
  category: string;
}

export const getAllProjects = async () => {
  const categories = await fs.promises.readdir("projects");

  const allFileCategories = await Promise.all(
    categories.map(async (category) => ({
      category,
      fileNames: await fs.promises.readdir(path.join("projects", category)),
    }))
  );

  const allProjects = await Promise.all(
    allFileCategories.map(
      async ({ fileNames, category }) =>
        await Promise.all(
          fileNames.map(async (file) => {
            const markdown = await fs.promises.readFile(
              path.join("projects", category, file),
              "utf8"
            );
            const {
              data: { title, description, tags, img },
            } = matter(markdown);
            return {
              title,
              description,
              tags,
              img: img || "",
              slug: `projects/${category}/${file.replace(".mdx", "")}`,
              category,
            };
          })
        )
    )
  );

  const projects: IProject[] = allProjects
    .reduce((prev, next) => prev.concat(next))
    .sort((p) => {
      if (p.category === "side-projects") return -1;
      else return 1;
    });

  return projects;
};

export const getProjectData = (category: string, slug: string) => {
  const fullPath = path.join("projects", category, `${slug}.mdx`);

  const content = fs.readFileSync(fullPath, "utf-8");
  const { data, content: source } = (matter(content) as any) as {
    data: IProject;
    content: string;
  };

  return {
    data: { ...data, category },
    source,
  };
};

export const getAllProjectsPaths = async () => {
  const categories = await fs.promises.readdir("projects");

  const allFileCategories = await Promise.all(
    categories.map(async (category) => ({
      category,
      fileNames: await fs.promises.readdir(path.join("projects", category)),
    }))
  );

  const allProjects = await Promise.all(
    allFileCategories.map(
      async ({ fileNames, category }) =>
        await Promise.all(
          fileNames.map(async (file) => {
            return {
              params: {
                slug: file.replace(".mdx", ""),
                category,
              },
            };
          })
        )
    )
  );

  return allProjects.reduce((prev, next) => prev.concat(next));
};
