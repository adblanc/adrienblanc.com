import { GetStaticPaths, GetStaticProps } from "next";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import {
  getAllProjectsPaths,
  getProjectData,
  IProject,
} from "../../../lib/projects";

interface Props {
  project: IProject;
  source: any;
}

const Project = ({ project, source }: Props) => {
  const content = hydrate(source);

  return (
    <div className="flex items-center justify-center p-32">
      <article className="prose lg:prose-lg">
        <div>
          <h1 className="text-center">{project.title}</h1>
          <p className="text-center text-gray-500">
            {project.tags.join(" | ")}
          </p>
        </div>
        <div>{content}</div>
      </article>
    </div>
  );
};

export default Project;

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const { data, source } = getProjectData(
    params.category as string,
    params.slug as string
  );

  const mdxSource = await renderToString(source, {
    scope: data as any,
  });

  return {
    props: {
      project: data,
      source: mdxSource,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllProjectsPaths();

  return {
    paths,
    fallback: false,
  };
};
