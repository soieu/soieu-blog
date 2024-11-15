"use client";
import { useState } from "react";

interface TagProps {
  text: string;
}

export default function Tag({ text }: TagProps) {
  const [selected, setSelected] = useState(false);
  return selected ? (
    <span
      onClick={() => {
        setSelected(!selected);
      }}
      className="border border-black rounded-full p-2 bg-white text-black font-bold hover:bg-black hover:text-white hover:cursor-pointer m-1"
    >
      #{text}
    </span>
  ) : (
    <span
      onClick={() => {
        setSelected(!selected);
      }}
      className="border border-black rounded-full p-2 bg-black text-white font-bold hover:bg-white hover:text-black hover:cursor-pointer m-1"
    >
      #{text}
    </span>
  );
}
