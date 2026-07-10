import Link from "next/link";

const CATEGORIES = [
  { label: "전체", value: undefined },
  { label: "AI", value: "AI" },
  { label: "정보", value: "정보" },
  { label: "게임", value: "게임" },
];

export default function CategoryNav({
  active,
  variant = "default",
}: {
  active?: string;
  variant?: "default" | "onDark";
}) {
  const baseText =
    variant === "onDark"
      ? "text-[var(--hero-text)]/70 hover:text-[var(--hero-text)]"
      : "text-[var(--page-text)]/70 hover:text-[var(--page-text)]";

  return (
    <nav className="flex items-center justify-center gap-8 text-base">
      {CATEGORIES.map((cat) => {
        const isActive = active === cat.value;
        const href = cat.value ? `/blog?category=${encodeURIComponent(cat.value)}` : "/blog";

        return (
          <Link
            key={cat.label}
            href={href}
            className={`category-link relative pb-1 font-medium transition-colors ${
              isActive ? "text-[var(--accent)] category-link--active" : baseText
            }`}
          >
            {cat.label}
          </Link>
        );
      })}
    </nav>
  );
}
