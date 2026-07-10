import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export interface PostFrontmatter {
  title: string;
  date: string;
  category?: string;
  tags: string[];
  description: string;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, "").normalize("NFC"));
}

export function getPostBySlug(slug: string): Post {
  const normalizedSlug = slug.normalize("NFC");

  // 실제 디스크의 파일명과 정규화 형태가 다를 수 있으므로,
  // 디렉토리를 스캔해서 정규화 후 일치하는 파일을 찾는다.
  const files = fs.existsSync(POSTS_DIR) ? fs.readdirSync(POSTS_DIR) : [];
  const matchedFile = files.find(
    (file) =>
      file.endsWith(".mdx") &&
      file.replace(/\.mdx$/, "").normalize("NFC") === normalizedSlug
  );

  if (!matchedFile) {
    throw new Error(`Post not found for slug: ${slug}`);
  }

  const filePath = path.join(POSTS_DIR, matchedFile);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug: normalizedSlug,
    frontmatter: data as PostFrontmatter,
    content,
  };
}

export function getAllPosts(): Post[] {
  return getAllSlugs()
    .map((slug) => getPostBySlug(slug))
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}
