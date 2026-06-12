"use client";

import { useEffect, useState } from "react";

interface TypingEffectProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function TypingEffect({
  texts,
  className = "",
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseDuration = 2200,
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex] ?? "";

    if (!isDeleting && displayText === current) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        const nextLength = isDeleting
          ? displayText.length - 1
          : displayText.length + 1;
        setDisplayText(current.slice(0, nextLength));
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    textIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <span className={className}>
      {displayText}
      <span className="ml-0.5 inline-block h-[1.1em] w-[2px] animate-pulse bg-emerald-300 align-middle" />
    </span>
  );
}
