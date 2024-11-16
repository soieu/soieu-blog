// app/tags/page.js
import PostColumn from "@/components/post-column";
import { getPosts } from "@/lib/posts";
interface Post {
  slug: string;
  title: string;
  createdAt: string;
  tags: string[];
}

export default async function Page() {
  const postList: Post[] = await getPosts();
  return (
    <div>
      {postList.map((post) => (
        <PostColumn post={post} key={post.slug} />
      ))}
    </div>
  );
}
