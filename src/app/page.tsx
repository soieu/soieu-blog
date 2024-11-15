// app/tags/page.js
import PostColumn from "@/components/post-column";
import supabase from "@/lib/supabase"; // supabase 클라이언트 가져오기

export default async function TagsPage() {
  // 서버 사이드에서 Supabase 데이터를 가져옵니다.
  const { data, error } = await supabase
    .from("post") // 'post' 테이블에서 데이터 가져오기
    .select("*");

  console.log(data);
  if (error) {
    console.error("서버에서 데이터 가져오기 실패:", error);
    return <div>데이터를 불러오는 데 문제가 발생했습니다.</div>;
  }

  return (
    <div>
      {data.map((post) => (
        <PostColumn data={post} key={post.id} />
      ))}
    </div>
  );
}
