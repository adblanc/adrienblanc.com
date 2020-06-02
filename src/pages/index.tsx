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
import { useInView } from "react-intersection-observer";

interface Props {
  projects: any[];
}

export default ({}: Props) => {
  useEffect(() => {
    launchSvgAnimation();
    initWriter();
  }, []);
  const [refOne, inViewOne] = useInView({ threshold: 0.5 });
  const [refTwo, inViewTwo] = useInView({ threshold: 0.5 });
  const [refThree] = useInView({ threshold: 0.5 });

  const activePoint = inViewOne ? 0 : inViewTwo ? 1 : 2;
  return (
    <ScrollContainer
      activePoint={activePoint}
      points={["header", "projects", "footer"]}
    >
      <Layout
        title="Adrien Blanc | Portfolio"
        description="Hi, my name is Adrien Blanc and I'm a fullstack developer. I mostly use Typescript and my preferred technologies are React Native, React, Node.js and GraphQL."
        noUpperCurve
        noLowerCurve
      >
        <div ref={refOne} className="scroll-fix" id="header">
          <UpperCurve />
          <HeaderTypo />
        </div>
        <div ref={refTwo} className="scroll-fix" id="projects">
          <GalaxyComponent id="42" />
        </div>
        <div ref={refThree} className="scroll-fix" id="footer">
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
