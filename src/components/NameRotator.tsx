"use client";

import { useEffect, useState } from "react";
import type { NameFont } from "@/data/content";

export function NameRotator({ name, fonts }: { name: string; fonts: NameFont[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % fonts.length);
    }, fonts[index].holdMs);
    return () => clearTimeout(timer);
  }, [index, fonts]);

  return (
    <span className="inline-block align-baseline">
      <span
        key={index}
        className={`inline-block animate-wipe-reveal ${fonts[index].className}`}
      >
        {name}
      </span>
    </span>
  );
}
