// app/tags/page.js
import PostColumn from "@/components/post-column";
import { getPosts } from "@/lib/posts";
interface Post {
  slug: string;
  title: string;
  createdAt: string;
  tags: string[];
}

export default async function TagsPage() {
  const postList: Post[] = await getPosts();
  console.log(postList);
  return (
    <div>
      {postList.map((post) => (
        <PostColumn post={post} key={post.slug} />
      ))}
    </div>
  );
}
