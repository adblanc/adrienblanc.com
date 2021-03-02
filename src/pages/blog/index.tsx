import { GetStaticProps } from "next";
import Link from "next/link";
import { getPosts, PostWithSlug } from "../../lib/posts";

interface Props {
  posts: PostWithSlug[];
}

const PostsIndex = ({ posts }: Props) => {
  return (
    <div className="flex items-center justify-center p-32">
      <div className="max-w-prose">
        <h1 className="text-center font-semibold text-4xl mb-12">
          Welcome to my blog
        </h1>
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${encodeURIComponent(post.slug)}`}>
            <a>
              <article className="border-gray-600 border-2 rounded-sm">
                <div className="relative w-full h-full border-gray-600 border-2 rounded-sm p-4 -top-2 left-2 bg-white">
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <p>{post.date}</p>
                </div>
              </article>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostsIndex;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
};
