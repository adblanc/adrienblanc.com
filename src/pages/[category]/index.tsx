import Layout from "../../components/Layout";
import BreadCrumb from "../../components/Breadcrumb/Breadcrumb";
import ProjectList from "../../components/ProjectList/ProjectList";
import { GetStaticProps } from "next";
import { getAllProjects } from "../../utils/getProjects";

interface Props {
  category: string;
  projects: any[];
}

export default ({ category, projects }: Props) => (
  <Layout
    title="Adrien Blanc | Portfolio"
    description={`List of my ${category} projects.`}
  >
    <BreadCrumb />
    <h1>Some of my {category} projects</h1>
    <ProjectList {...{ projects }} />
  </Layout>
);

export async function getStaticPaths() {
  return {
    paths: [
      { params: { category: "42" } },
      { params: { category: "personal" } },
    ],
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<{}, { category: string }> = async ({
  params,
}) => {
  return {
    props: {
      category: params?.category || "",
      projects: (await getAllProjects()).filter((p) =>
        p.slug.includes(params!.category)
      ),
    },
  };
};
