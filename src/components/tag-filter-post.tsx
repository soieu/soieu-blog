import { getPostsByTag } from "@/lib/posts";
import PostColumn from "./post-column";

export default async function TagFilterPosts({
  params,
}: {
  params: { tag: string };
}) {
  const posts = await getPostsByTag(params.tag);
  return (
    <div className="xl:w-3/4 w-full mr-5  border-black p-5 ">
      {posts.map((post) => (
        <PostColumn post={post} key={post.slug} />
      ))}
    </div>
  );
}
