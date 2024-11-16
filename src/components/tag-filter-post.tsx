import { getPostsByTag } from "@/lib/posts";
import PostColumn from "./post-column";

export default async function TagFilterPosts({
  params,
}: {
  params: { tag: string };
}) {
  const posts = await getPostsByTag(params.tag);
  return (
    <div className="w-3/4 mr-5 border border-black p-5 bg-white">
      {posts.map((post) => (
        <PostColumn post={post} key={post.slug} />
      ))}
    </div>
  );
}
