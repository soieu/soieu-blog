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
      navLinks.push(`<li><a href="#${id}">${header.textContent}</a></li>`);
    });

    if (navRef.current) {
      navRef.current.innerHTML = `<ul>${navLinks.join("")}</ul>`;
    }
  }, [children]);

  return (
    <div className="flex flex-row min-h-screen overflow-visible h-full">
      <div className="w-4/5 mr-5 border border-black p-5">{children}</div>
      <div className="sticky top-24 w-1/5 h-full border border-black p-5">
        <div className="flex flex-wrap" ref={navRef}></div>
      </div>
    </div>
  );
}
