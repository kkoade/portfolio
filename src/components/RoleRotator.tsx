"use client";

import { useEffect, useState } from "react";
import type { RotatorWord } from "@/data/content";

export function RoleRotator({ words }: { words: RotatorWord[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % words.length);
    }, words[index].holdMs);
    return () => clearTimeout(timer);
  }, [index, words]);

  return (
    <span className="inline-block [perspective:400px] align-baseline [clip-path:inset(0)]">
      <span key={index} className="inline-block animate-rolodex-flip [transform-origin:top]">
        {words[index].text}
      </span>
    </span>
  );
}
