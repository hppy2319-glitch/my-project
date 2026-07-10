import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import Hero from "@/components/Hero";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 5);

  return (
    <main className="flex-1">
      <Hero />

      <section className="max-w-2xl mx-auto px-6 py-16">
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
            </li>
          ))}
        </ul>

        {posts.length === 0 && (
          <p className="text-[var(--muted)]">아직 작성된 글이 없어요.</p>
        )}

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="text-sm font-medium hover:underline"
          >
            전체 글 보기 →
          </Link>
        </div>
      </section>
    </main>
  );
}
