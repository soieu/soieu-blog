// app/tags/page.js
import PostColumn from "@/components/post-column";
import { getPosts } from "@/lib/posts";

export default async function TagsPage() {
  const postList = await getPosts();

  console.log(postList);
  return (
    <div>
      {postList.map((post) => (
        <PostColumn post={post} key={post.slug} />
      ))}
    </div>
  );
}
