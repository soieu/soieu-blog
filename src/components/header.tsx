import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-5 flex items-center mb-5 bg-white">
      <table className="border border-black w-full">
        <tbody>
          <tr>
            {/* SOIEU Column */}
            <td className="font-bold text-xl border border-black px-5 py-2 w-full">
              <Link href="/" className="block w-full h-full">
                SOIEU.
              </Link>
            </td>

            {/* TAGS Column with Link */}
            <td className="font-black text-xs border border-black px-8 hover:bg-black hover:text-white hover:cursor-pointer">
              <Link href="/tags" className="block w-full h-full">
                TAGS
              </Link>
            </td>

            {/* ABOUT Column with Link */}
            <td className="font-black text-xs border-l-px border border-black px-7 hover:bg-black hover:text-white hover:cursor-pointer">
              <Link href="/about" className="block w-full h-full">
                ABOUT
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </header>
  );
}
