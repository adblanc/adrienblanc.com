import Layout from "../components/Layout";
import { initWriter } from "../classes/TypeWriter";
import { useEffect } from "react";
import { launchSvgAnimation } from "../utils/animateSVG";
import { getAllProjects } from "../utils/getProjects";
import GalaxyComponent from "../components/Galaxy/Galaxy";

interface Props {
  projects: any[];
}

export default ({}: Props) => {
  useEffect(() => {
    launchSvgAnimation();
    initWriter();
  }, []);
  return (
    <Layout
      displayHeader
      title="Adrien Blanc | Portfolio"
      description="Hi, my name is Adrien Blanc and I'm a fullstack developer. I mostly use Typescript and my preferred technologies are React Native, React, Node.js and GraphQL."
    >
      {/* <ProjectList projects={projects} /> */}
      <GalaxyComponent id="42" />
    </Layout>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      projects: await getAllProjects(),
    },
  };
};
