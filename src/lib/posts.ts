import path from "path";
import fs from "fs";
import matter from "gray-matter";

const NEEDED_KEYS = ["title", "date", "description"] as const;

const postsDirectory = path.join(process.cwd(), "posts");

export type Post = Record<typeof NEEDED_KEYS[number], string>;

export type PostWithSlug = Post & {
  slug: string;
};

export const getPosts = (): PostWithSlug[] => {
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((file) => {
    const slug = file.replace(".mdx", "");

    const fullPath = path.join(postsDirectory, file);

    const content = fs.readFileSync(fullPath, "utf-8");

    const { data } = (matter(content) as any) as {
      data: Post;
    };

    const keys = Object.keys(data);

    if (!keys.every((k) => NEEDED_KEYS.find((key) => key === k))) {
      throw Error(`Expected ${NEEDED_KEYS.join(",")} in ${fullPath}`);
    }

    return {
      slug,
      ...data,
    };
  });

  return posts;
};

export const getPostdata = (slug: string) => {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  const content = fs.readFileSync(fullPath, "utf-8");
  const { data, content: source } = (matter(content) as any) as {
    data: Post;
    content: string;
  };

  return {
    data,
    source,
  };
};

export const getAllPostSlugs = () => {
  const files = fs.readdirSync(postsDirectory);

  return files.map((file) => ({
    params: {
      slug: file.replace(".mdx", ""),
    },
  }));
};
