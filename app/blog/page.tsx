import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export default function BlogListPage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">블로그</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="border-b pb-6">
            <Link
              href={`/blog/${post.slug}`}
              className="text-xl font-semibold hover:underline"
            >
              {post.frontmatter.title}
            </Link>
            <p className="text-sm text-gray-500 mt-1">
              {post.frontmatter.date}
            </p>
            <p className="text-gray-700 mt-2">
              {post.frontmatter.description}
            </p>
            <div className="flex gap-2 mt-2">
              {post.frontmatter.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 rounded-full px-2 py-1"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
