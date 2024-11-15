// import { Post } from "@/types/types";
import { readdir } from "fs/promises";
import path from "path";
type Post = {
  slug: string;
  title: string;
  createdAt: string;
  tags: string[];
};
export async function getPosts(): Promise<Post[]> {
  const postPath = path.resolve(process.cwd(), "src", "app", "(posts)");

  const slugs = (await readdir(postPath, { withFileTypes: true })).filter(
    (dirent) => dirent.isDirectory()
  );

  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`../app/(posts)/${name}/page.mdx`);
      return { slug: name, ...metadata };
    })
  );

  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return posts;
}
