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
      <div className="border border-black w-full hover:bg-black hover:text-white hover:cursor-pointer mb-5">
        <div className="text-5xl font-bold p-5">{post.title}</div>
        <div className="text-base text-gray-500 text-right px-5 py-2">
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
