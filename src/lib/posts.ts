import { readdir } from "fs/promises";
import path from "path";

type Post = {
  slug: string;
  title: string;
  createdAt: string;
  tags: string[];
};
type TagWithCount = {
  tag: string;
  count: number;
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

  posts.sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));

  return posts;
}

export async function getTagsWithCount(): Promise<TagWithCount[]> {
  const postList = await getPosts();
  const tagCounts: Record<string, number> = {};

  postList.forEach((post) => {
    post.tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  return Object.entries(tagCounts)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

export async function getPostsByTag(tag: string): Promise<Post[]> {
  const postList = await getPosts();
  return postList.filter((post) => post.tags.includes(tag));
}
