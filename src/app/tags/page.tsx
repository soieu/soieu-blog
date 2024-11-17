import TagTab from "@/components/tag-tab";

export default async function Tag() {
  return (
    <>
      <div>
        <div className="flex flex-col-reverse w-full xl:flex-row">
          <div className="xl:w-3/4 bg-white w-full mr-5 border border-black p-5">
            태그를 선택하세요
          </div>
          <TagTab params={null} />
        </div>
      </div>
    </>
  );
}
