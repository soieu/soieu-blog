import Link from "next/link";
type TagWithCount = {
  tag: string;
  count: number;
};

interface TagProps {
  tag: TagWithCount;
}

export default async function Tag({
  tag,
  params = null,
}: TagProps & { params: { tag: string } | null }) {
  console.log(params);
  return params?.tag === tag.tag ? (
    <Link href={`/tags/${tag.tag}`}>
      <span className="border rounded-full px-4 py-1 mb-2 border-black bg-black text-white font-bold hover:bg-white hover:text-black hover:cursor-pointer m-1">
        #{tag.tag} {tag.count}
      </span>
    </Link>
  ) : (
    <Link href={`/tags/${tag.tag}`}>
      <span className="border border-black rounded-full px-4 py-1 bg-white text-black font-bold hover:bg-black hover:text-white hover:cursor-pointer m-1">
        #{tag.tag} {tag.count}
      </span>
    </Link>
  );
}
