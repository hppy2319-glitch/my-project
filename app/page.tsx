import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 5);

  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <header className="mb-12">
        <h1 className="text-3xl font-bold">이리저리 해보는 중</h1>
        <p className="text-gray-500 mt-2">
          AI, 정보, 게임까지 — 이것저것 해보며 남기는 기록
        </p>
      </header>

      <section>
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

        {posts.length === 0 && (
          <p className="text-gray-400">아직 작성된 글이 없어요.</p>
        )}
      </section>

      <div className="mt-10">
        <Link href="/blog" className="text-sm font-medium hover:underline">
          전체 글 보기 →
        </Link>
      </div>
    </main>
  );
}
