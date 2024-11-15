export default function CodeBlock({ children }) {
  return (
    <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto">
      <code>{children}</code>
    </pre>
  );
}
