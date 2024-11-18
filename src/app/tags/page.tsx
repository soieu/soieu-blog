import TagTab from "@/components/tag-tab";

export default async function Tag() {
  return (
    <>
      <div>
        <div className="flex xl:flex-col flex-row-reverse w-full">
          <div className="xl:w-3/4 w-full bg-white mr-5 border border-black p-5">
            태그를 선택하세요
          </div>
          <TagTab params={null} />
        </div>
      </div>
    </>
  );
}
