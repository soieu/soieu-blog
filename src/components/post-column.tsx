import Link from "next/link";

interface PostData {
  id: string;
  title: string;
  tags: string;
  created_at: string;
}

export default function PostColumn({ data }: { data: PostData }) {
  return (
    <Link href={`/${data.id}`}>
      <div className="border border-black w-full hover:bg-black hover:text-white hover:cursor-pointer mb-5">
        <div className="text-5xl font-bold p-5">{data.title}</div>
        <div className="text-base text-gray-500 text-right px-5 py-2">
          {data.tags} {data.created_at}
        </div>
      </div>
    </Link>
  );
}
