import PostColumn from "@/components/post-column";
import Tag from "@/components/tag";
import supabase from "@/lib/supabase"; // supabase 클라이언트 가져

export default async function Tags() {
  const { data, error } = await supabase
    .from("post") // 'post' 테이블에서 데이터 가져오기
    .select("*");
  return (
    <div className="flex flex-row">
      <div className="w-3/4 mr-5 border border-black p-5">
        <div>
          {data?.map((post) => (
            <PostColumn data={post} key={post.id} />
          ))}
        </div>
      </div>
      <div className="w-1/4 border border-black p-5">
        <input
          className="w-full border border-black p-1 px-3 outline-none mb-5"
          placeholder="태그 검색"
        />
        <div className="flex flex-wrap">
          <Tag text="hello" />
          <Tag text="hello" />
          <Tag text="hello" />
          <Tag text="hello" />
          <Tag text="hello" />
          <Tag text="hello" />
        </div>
      </div>
    </div>
  );
}
