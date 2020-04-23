import Layout from "../../../components/Layout";
import BreadCrumb from "../../../components/Breadcrumb/Breadcrumb";
import { PROJECTS, ProjectProps } from "../../../constants";
import { GetStaticProps } from "next";
import TagList from "../../../components/TagList/TagList";

export default ({ title, description, category, tags }: ProjectProps) => {
  return (
    <Layout
      title={`${title} ${category === "42" ? "42" : ""} | Blanc Adrien`}
      description={description}
    >
      <BreadCrumb />
      <div>
        <h1 className="title">{title}</h1>
        <TagList tags={tags.map((tag) => ({ href: tag, label: tag }))} />
      </div>
      <style jsx>
        {`
          .title {
            margin: 5%;
          }
        `}
      </style>
    </Layout>
  );
};

export async function getStaticPaths() {
  const projects = PROJECTS.map((p) => ({
    params: { category: p.category, name: p.slug.split("/").pop() },
  }));

  return {
    paths: projects,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<{}, { name: string }> = async ({
  params,
}) => {
  const project = PROJECTS.find((p) => p.slug.includes(params!.name));
  return {
    props: {
      ...project,
    },
  };
};
