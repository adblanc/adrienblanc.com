import Layout from "../../components/Layout";
import BreadCrumb from "../../components/Breadcrumb/Breadcrumb";
import ProjectList from "../../components/ProjectList/ProjectList";
import { GetStaticProps } from "next";
import { getAllProjects } from "../../utils/getProjects";

interface Props {
  category: string;
  projects: any[];
}

export default ({ category, projects }: Props) => {
  const all = category === "all";
  return (
    <Layout
      title="Adrien Blanc | Portfolio"
      description={
        all ? "List of all my projects" : `List of my ${category} projects.`
      }
    >
      <BreadCrumb />
      {all ? <h1>All my projects</h1> : <h1>Some of my {category} projects</h1>}

      <ProjectList {...{ projects }} />
    </Layout>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { category: "42" } },
      { params: { category: "personal" } },
      { params: { category: "all" } },
    ],
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<{}, { category: string }> = async ({
  params,
}) => {
  const all = params!.category === "all";
  return {
    props: {
      category: params?.category || "",
      projects: (await getAllProjects()).filter(
        (p) => all || p.slug.includes(params!.category)
      ),
    },
  };
};
