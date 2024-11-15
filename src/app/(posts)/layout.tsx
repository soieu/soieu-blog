export default function Post({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row min-h-screen overflow-visible h-full">
      <div className="w-5/6 mr-5 border border-black p-5">{children}</div>
      <div className="sticky top-24 w-1/6 h-full border border-black p-5">
        <div className="flex flex-wrap"></div>
      </div>
    </div>
  );
}
