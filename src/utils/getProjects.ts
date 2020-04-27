import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const get42Projects = () => {
  return fs.readdirSync(path.join("projects", "42"));
};

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
      async (group) =>
        await Promise.all(
          group.fileNames.map(async (file) => {
            const markdown = await fs.promises.readFile(
              path.join("projects", group.category, file),
              "utf8"
            );
            const { data } = matter(markdown);

            return {
              title: data.title,
              slug: `${group.category}/${file.replace(".md", "")}`,
            };
          })
        )
    )
  );

  const projects = allProjects.reduce((prev, next) => prev.concat(next));

  return projects;
};
