"use client";

import { useEffect, useRef } from "react";

export default function Post({ children }: { children: React.ReactNode }) {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    const navLinks: string[] = [];

    headers.forEach((header, index) => {
      const id = `section-${index}`;
      header.setAttribute("id", id);
      const level = parseInt(header.tagName.substring(1), 10);
      const padding = (level - 1) * 10;
      navLinks.push(
        `<li style="padding-left: ${padding}px;"><a href="#${id}">${header.textContent}</a></li>`
      );
    });

    if (navRef.current) {
      navRef.current.innerHTML = `<ul>${navLinks.join("")}</ul>`;
    }
  }, [children]);

  return (
    <div className="flex flex-row min-h-screen overflow-visible h-full">
      <div className="xl:w-4/5 bg-white mr-5 border border-black p-5 w-full">
        {children}
      </div>
      <div className="sticky top-24 xl:w-1/5 xl:block bg-white h-full border border-black p-5 hidden">
        <div className="flex flex-wrap" ref={navRef}></div>
      </div>
    </div>
  );
}
