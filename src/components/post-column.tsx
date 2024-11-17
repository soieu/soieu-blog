import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  createdAt: string;
  tags: string[];
}

export default function PostColumn({ post }: { post: Post }) {
  return (
    <Link href={`/${post.slug}`}>
      <div className="border border-black w-full bg-white hover:bg-black hover:text-white hover:cursor-pointer mb-3">
        <div className="text-5xl font-light p-5">{post.title}</div>

        <div className="text-base text-gray-500 flex flex-row justify-between items-center px-5 py-2">
          <div className="flex flex-row">
            {post.tags.map((tag) => (
              <span
                className="border border-black rounded-full px-4 py-1 mr-2 bg-black text-white font-bold"
                key={tag}
              >
                #{tag}
              </span>
            ))}
          </div>
          {new Intl.DateTimeFormat("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }).format(new Date(post.createdAt))}
        </div>
      </div>
    </Link>
  );
}
