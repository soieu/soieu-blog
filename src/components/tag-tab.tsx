import { getTagsWithCount } from "@/lib/posts";
import Tag from "./tag";

export default async function TagTab({
  params = null,
}: {
  params: { tag: string } | null;
}) {
  return (
    <div className="xl:w-1/4 border border-black p-5 bg-white mb-3 flex flex-wrap flex-row xl:h-full">
      {getTagsWithCount().then((tags) =>
        tags.map((tag) => <Tag tag={tag} key={tag.tag} params={params} />)
      )}
    </div>
  );
}
