"use client";

import { useEffect, useRef } from "react";
import { MDXProvider } from "@mdx-js/react";
import { useMDXComponents } from "../../../mdx-components";

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
        `<li><a href="#${id}" class="block w-full ${paddingClass} ${fontWeight}">${header.textContent}</a></li>`
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
          link.classList.add("bg-black", "text-white");
        } else {
          link?.classList.remove("bg-black", "text-white");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [children]);

  return (
    <MDXProvider components={useMDXComponents({})}>
      <div className="flex flex-row min-h-screen h-full">
        <div className="xl:w-4/5 bg-white mr-5 border border-black p-5 flex-grow flex flex-col h-full mb-10">
          <article className="prose max-w-none px-5 ">{children}</article>
        </div>
        <div className="sticky top-24 xl:w-1/5 xl:block bg-white h-full border border-black hidden">
          <nav className="w-full" ref={navRef}></nav>
        </div>
      </div>
    </MDXProvider>
  );
}
