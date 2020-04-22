import Layout from "../../../components/Layout";
import { ProjectProps } from "../../../components/Project/Project";
import BreadCrumb from "../../../components/Breadcrumb/Breadcrumb";
import { PROJECTS } from "../../../constants";
import { GetStaticProps } from "next";

export default ({ title, description }: ProjectProps) => {
  return (
    <Layout title={`${title} 42 | Blanc Adrien`} description={description}>
      <div className="nav-container">
        <BreadCrumb />
      </div>
      <style jsx>
        {`
          .nav-container {
            padding-left: 5%;
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
