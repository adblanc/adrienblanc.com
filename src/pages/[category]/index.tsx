import Layout from "../../components/Layout";
import BreadCrumb from "../../components/Breadcrumb/Breadcrumb";
import ProjectList from "../../components/ProjectList/ProjectList";
import { GetStaticProps } from "next";

interface Props {
  category: string;
}

export default ({ category }: Props) => (
  <Layout
    title="Adrien Blanc | Portfolio"
    description={`List of my ${category} projects.`}
  >
    <BreadCrumb />
    <h1>Some of my {category} projects</h1>
    <ProjectList
      showPersonal={category === "personal"}
      show42={category === "42"}
    />
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
    },
  };
};
