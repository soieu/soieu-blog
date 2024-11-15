export default function Post({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row">
      <div className="w-5/6 mr-5 border border-black p-5">{children}</div>
      <div className="w-1/6 border border-black p-5">
        <div className="flex flex-wrap"></div>
      </div>
    </div>
  );
}
