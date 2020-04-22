import Layout from "../components/Layout";
import { initWriter } from "../utils/TypeWriter";
import { useEffect } from "react";
import { launchSvgAnimation } from "../utils/animateSVG";
import ProjectList from "../components/ProjectList/ProjectList";
export default () => {
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
      <ProjectList />
    </Layout>
  );
};