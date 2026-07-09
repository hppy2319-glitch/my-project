import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { getAllSlugs, getPostBySlug } from "@/lib/mdx";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-12 prose">
      <h1>{post.frontmatter.title}</h1>
      <p className="text-sm text-gray-500">{post.frontmatter.date}</p>
      <MDXRemote
        source={post.content}
        options={{
          mdxOptions: {
            rehypePlugins: [
              [rehypePrettyCode, { theme: "github-dark" }],
            ],
          },
        }}
      />
    </main>
  );
}
