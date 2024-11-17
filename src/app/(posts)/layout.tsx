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
      let paddingClass = "";

      switch (level) {
        case 1:
          paddingClass = "pl-0";
          break;
        case 2:
          paddingClass = "pl-4";
          break;
        case 3:
          paddingClass = "pl-8";
          break;
        case 4:
          paddingClass = "pl-12";
          break;
        case 5:
          paddingClass = "pl-16";
          break;
        case 6:
          paddingClass = "pl-20";
          break;
        default:
          paddingClass = "pl-0";
      }

      const fontWeight = header.tagName === "H1" ? "font-bold" : "";
      navLinks.push(
        `<li class="${paddingClass} ${fontWeight}"><a href="#${id}">${header.textContent}</a></li>`
      );
    });

    if (navRef.current) {
      navRef.current.innerHTML = `<ul>${navLinks.join("")}</ul>`;
    }

    const handleScroll = () => {
      let currentSection = "";
      headers.forEach((header) => {
        const rect = header.getBoundingClientRect();
        if (rect.top <= 0) {
          currentSection = header.getAttribute("id") || "";
        }
      });

      const navItems = navRef.current?.querySelectorAll("li");
      navItems?.forEach((item) => {
        const link = item.querySelector("a");
        if (link?.getAttribute("href") === `#${currentSection}`) {
          item.classList.add("bg-yellow-200");
        } else {
          item.classList.remove("bg-yellow-200");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
