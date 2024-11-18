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
      <p className="border rounded-full p-2 border-black bg-black text-white font-bold hover:bg-white hover:text-black hover:cursor-pointer m-1">
        # {tag.tag} {tag.count}
      </p>
    </Link>
  ) : (
    <Link href={`/tags/${tag.tag}`}>
      <p className="border border-black rounded-full p-2 m-1 bg-white text-black font-bold hover:bg-black hover:text-white hover:cursor-pointer">
        # {tag.tag} {tag.count}
      </p>
    </Link>
  );
}
