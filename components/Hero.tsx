import CategoryNav from "./CategoryNav";

export default function Hero() {
  return (
    <div className="hero-gradient text-[var(--hero-text)]">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl leading-tight">
          이리저리 해보는 중
        </h1>
        <p className="mt-4 text-[var(--hero-text)]/70 text-lg">
          AI, 정보, 게임까지 — 이것저것 해보며 남기는 기록
        </p>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-5">
          <CategoryNav variant="onDark" />
        </div>
      </div>
    </div>
  );
}
