import PostColumn from "./post-column";

import { getPostsByTag } from "@/lib/posts";

export default function TagPostTab() {
  return (
    <div className="w-3/4 mr-5 border border-black p-5">
      <div>
        {getPostsByTag("React").then((posts) =>
          posts.map((post) => <PostColumn post={post} key={post.slug} />)
        )}
      </div>
    </div>
  );
}
