export default function Header() {
  return (
    <header className="sticky flex items-center">
      <table className="border border-black w-full ">
        <tr>
          <td className="font-bold text-xl border border-black px-5 py-1 w-full">
            SOIEU.
          </td>
          <td className="font-bold text-base border border-black px-5 hover:bg-black hover:text-white hover:cursor-pointer">
            TAGS
          </td>
          <td className="font-bold text-base border-l-px border border-black px-3 hover:bg-black hover:text-white hover:cursor-pointer">
            ABOUT
          </td>
        </tr>
      </table>
    </header>
  );
}
