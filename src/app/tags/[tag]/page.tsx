import TagFilterPosts from "@/components/tag-filter-post";
import TagTab from "@/components/tag-tab";
type TagProps = {
  params: Promise<{ tag: string }>;
};

export default async function Tag({ params }: TagProps) {
  const resolvedParams = await params;
  return (
    <>
      <div>
        <div className="xl:flex xl:flex-row w-full flex flex-col-reverse">
          <TagFilterPosts params={resolvedParams} />
          <TagTab params={resolvedParams} />
        </div>
      </div>
    </>
  );
}
