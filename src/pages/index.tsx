import Layout from "../components/Layout";
import AdrienBlanc from "../components/AdrienBlanc";
import { getAllProjects, IProject } from "../lib/projects";
import ProjectsList from "../components/ProjectsList";
import SocialsLink from "../components/SocialsLink";
import AboutMe from "../components/AboutMe";
import { useState } from "react";
import ProjectFilters from "../components/ProjetFilters";
import { NextSeo } from "next-seo";

interface Props {
  allProjects: IProject[];
}

export type Filter = "42" | "side-projects" | "all";

export type FilterProjects = (category: Filter) => void;

const Index: React.FC<Props> = ({ allProjects }) => {
  const [projects, setProjects] = useState(allProjects);
  const [filter, setFilter] = useState<Filter>("all");

  const filterProjects: FilterProjects = (category) => {
    if (category === "all") setProjects(allProjects);
    else setProjects(allProjects.filter((p) => p.category === category));

    setFilter(category);
  };

  return (
    <Layout>
      <NextSeo
        title="Portfolio | Adrien Blanc"
        description="Software engineer based in Paris and currently studying at 42. My favorites technologies to work with are React, React Native, Graphql and Typescript."
      />
      <AdrienBlanc idLeft="adrien" idRight="blanc" />
      <AboutMe {...{ filterProjects }} />
      <SocialsLink />
      <section className="max-w-4xl px-3 mx-auto md:px-6">
        <h2 id="projects" className="font-bold text-4xl mb-6">
          Some of my projects:{" "}
        </h2>
        <ProjectFilters {...{ filterProjects, filter }} />
        <ProjectsList {...{ projects }} />
      </section>
    </Layout>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      allProjects: await getAllProjects(),
    },
  };
};

export default Index;
