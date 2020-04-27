import Layout from "../../../components/Layout";
import BreadCrumb from "../../../components/Breadcrumb/Breadcrumb";
import { GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import ProjectPresentation from "../../../components/ProjectPresentation/ProjectPresentation";

export interface ProjectData {
  title: string;
  description: string;
  tags: string[];
}

interface Props {
  name: string;
  category: string;
  htmlString: any;
  data: ProjectData;
}

export default (props: Props) => {
  const {
    data: { title, description },
    category,
  } = props;
  return (
    <Layout
      title={`${title} ${category === "42" ? "42" : ""} | Blanc Adrien`}
      description={description}
    >
      <BreadCrumb />
      <ProjectPresentation {...props.data} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const categories = await fs.promises.readdir("projects");

  const allFileCategories = await Promise.all(
    categories.map(async (category) => ({
      category,
      fileNames: await fs.promises.readdir(path.join("projects", category)),
    }))
  );

  const allPaths = allFileCategories.map(({ category, fileNames }) =>
    fileNames.map((file) => ({
      params: { category, name: file.replace(".md", "") },
    }))
  );

  const paths = allPaths.reduce((prev, next) => prev.concat(next));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<
  {},
  { name: string; category: string }
> = async ({ params }) => {
  const markdown = await fs.promises.readFile(
    path.join("projects", params!.category, `${params?.name}.md`),
    "utf8"
  );

  const parsedMarkdown = matter(markdown);
  const htmlString = marked(parsedMarkdown.content);
  return {
    props: {
      name: params?.name,
      category: params?.category,
      htmlString,
      data: parsedMarkdown.data,
    },
  };
};
