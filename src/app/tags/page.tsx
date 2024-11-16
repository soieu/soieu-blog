import TagTab from "@/components/tag-tab";

export default async function Tag() {
  return (
    <>
      <div>
        <div className="flex flex-row">
          <div className="w-3/4 mr-5 border border-black p-5">
            태그를 선택하세요
          </div>
          <TagTab params={null} />
        </div>
      </div>
    </>
  );
}
