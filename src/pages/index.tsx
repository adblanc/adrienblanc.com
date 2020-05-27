import Layout from "../components/Layout";
import { initWriter } from "../classes/TypeWriter";
import { useEffect } from "react";
import { launchSvgAnimation } from "../utils/animateSVG";
import { getAllProjects } from "../utils/getProjects";
import GalaxyComponent from "../components/Galaxy/Galaxy";
import HeaderTypo from "../components/HeaderTypo/HeaderTypo";
import ScrollContainer from "../components/ScrollContainer/ScrollContainer";
import UpperCurve from "../components/Curves/UpperCurve";
import LowerCurve from "../components/Curves/LowerCurve";
import Footer from "../components/Footer";

interface Props {
  projects: any[];
}

export default ({}: Props) => {
  useEffect(() => {
    launchSvgAnimation();
    initWriter();
  }, []);
  return (
    <ScrollContainer>
      <Layout
        title="Adrien Blanc | Portfolio"
        description="Hi, my name is Adrien Blanc and I'm a fullstack developer. I mostly use Typescript and my preferred technologies are React Native, React, Node.js and GraphQL."
        noUpperCurve
        noLowerCurve
      >
        <div className="scroll-fix">
          <UpperCurve />
          <HeaderTypo />
        </div>
        <div className="scroll-fix">
          <GalaxyComponent id="42" />
        </div>
        <div className="scroll-fix">
          <Footer />
          <LowerCurve />
        </div>
      </Layout>
      <style jsx>
        {`
          .scroll-fix {
            scroll-snap-align: center;
            height: 100vh;
          }
        `}
      </style>
    </ScrollContainer>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      projects: await getAllProjects(),
    },
  };
};
