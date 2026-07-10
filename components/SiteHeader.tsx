import Link from "next/link";

export default function SiteHeader() {
  return (
    <div className="w-full border-b border-black/5 bg-[var(--page-bg)]">
      <div className="max-w-4xl mx-auto px-6 h-12 flex items-center justify-between text-sm">
        <Link
          href="/"
          className="font-medium tracking-tight text-[var(--page-text)]"
        >
          이리저리 해보는 중
        </Link>
        <nav className="flex items-center gap-5 text-[var(--muted)]">
          <Link href="/blog" className="hover:text-[var(--page-text)]">
            전체 글
          </Link>
          <a
            href="https://github.com/hppy2319-glitch/my-project"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--page-text)]"
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </div>
  );
}
