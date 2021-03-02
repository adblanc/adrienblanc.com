import { GetStaticPaths, GetStaticProps } from "next";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import { getAllPostSlugs, getPostdata, Post } from "../../lib/posts";

interface Props {
  data: Post;
  source: any;
}

const PostPage = ({ data, source }: Props) => {
  const content = hydrate(source);
  return (
    <div className="flex items-center justify-center p-32">
      <article className="prose lg:prose-lg">
        <div>
          <h1 className="text-center">{data.title}</h1>
          <p className="text-center text-gray-500">{data.date}</p>
        </div>
        <div>{content}</div>
      </article>
    </div>
  );
};

export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostSlugs();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data, source } = getPostdata(params.slug as string);

  const mdxSource = await renderToString(source, {
    scope: data,
  });

  return {
    props: {
      data,
      source: mdxSource,
    },
  };
};
