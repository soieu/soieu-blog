import TagFilterPosts from "@/components/tag-filter-post";
import TagTab from "@/components/tag-tab";

export default async function Tag({ params }: { params: { tag: string } }) {
  return (
    <>
      <div>
        <div className="flex flex-row ">
          <TagFilterPosts params={params} />
          <TagTab params={params} />
        </div>
      </div>
    </>
  );
}
