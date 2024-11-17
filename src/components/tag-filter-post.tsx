import { getPostsByTag } from "@/lib/posts";
import PostColumn from "./post-column";

export default async function TagFilterPosts({
  params,
}: {
  params: { tag: string };
}) {
  const posts = await getPostsByTag(params.tag);
  return (
    <div className="xl:w-3/4 w-full   border-black mr-3">
      {posts.map((post) => (
        <PostColumn post={post} key={post.slug} />
      ))}
    </div>
  );
}
