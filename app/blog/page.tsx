import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import CategoryNav from "@/components/CategoryNav";

export default async function BlogListPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const allPosts = getAllPosts();
  const posts = category
    ? allPosts.filter((p) => p.frontmatter.category === category)
    : allPosts;

  return (
    <main className="flex-1">
      <div className="border-b border-black/10 bg-white">
        <div className="max-w-2xl mx-auto px-6 py-8">
          <h1 className="font-[family-name:var(--font-display)] text-3xl mb-6">
            블로그
          </h1>
          <CategoryNav active={category} />
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-12">
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-black/10 pb-6">
              {post.frontmatter.category && (
                <span className="text-xs font-medium text-[var(--accent)]">
                  {post.frontmatter.category}
                </span>
              )}
              <Link
                href={`/blog/${post.slug}`}
                className="block text-xl font-semibold hover:underline mt-1"
              >
                {post.frontmatter.title}
              </Link>
              <p className="text-sm text-[var(--muted)] mt-1">
                {post.frontmatter.date}
              </p>
              <p className="text-[var(--page-text)]/80 mt-2">
                {post.frontmatter.description}
              </p>
              <div className="flex gap-2 mt-2">
                {post.frontmatter.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-black/5 rounded-full px-2 py-1"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>

        {posts.length === 0 && (
          <p className="text-[var(--muted)]">이 카테고리엔 아직 글이 없어요.</p>
        )}
      </div>
    </main>
  );
}
