import { GetStaticPaths, GetStaticProps } from "next";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import { NextSeo } from "next-seo";
import Link from "next/link";
import GithubIcon from "../../../components/GithubIcon";
import { IconPlaceholder } from "../../../components/Icon";
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
    <>
      <NextSeo
        title={`${project.title} ${
          project.category === "42" ? "(42)" : ""
        } | Adrien Blanc`}
        description={project.description}
      />
      <div className="flex items-center justify-center">
        <article className="prose lg:prose-lg border border-gray-500 rounded-md ">
          <div className="relative w-full h-full border-gray-600 border-2 rounded-md p-8 -top-2 left-2 bg-white">
            <div>
              <div className="flex flex-row">
                <Link href="/">
                  <a>
                    <svg
                      className="w-8 h-8 m-1 cursor-pointer"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                  </a>
                </Link>
                <div className=" flex-1">
                  <h1 className="text-center">{project.title}</h1>
                  <p className="text-center text-gray-500">
                    {project.tags.join(" | ")}
                  </p>
                </div>
                <div>
                  {project.github ? (
                    <GithubIcon link={project.github} />
                  ) : (
                    <IconPlaceholder />
                  )}
                </div>
              </div>
            </div>
            <div>{content}</div>
          </div>
        </article>
      </div>
    </>
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
