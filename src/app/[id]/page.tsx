export default function Post() {
  return (
    <div className="flex flex-row">
      <div className="w-5/6 mr-5 border border-black p-5">
        <h1 className="text-4xl font-bold">title</h1>
        <div className="text-lg">2024.01.01</div>
        <div className="text-lg">#LLM #LLAMA #TRANSFORMER</div>
        <div className="text-lg">content</div>
      </div>
      <div className="w-1/6 border border-black p-5">
        <div className="flex flex-wrap"></div>
      </div>
    </div>
  );
}
