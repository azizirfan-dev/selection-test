"use client";

import { useState, useMemo } from "react";
import { replaceWordExact } from "@/lib/replaceWord";


export default function ReplaceSection() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [text, setText] = useState("");

  // replace → langsung ubah TEXT (single source of truth)
  const handleReplace = () => {
    const result = replaceWordExact({
      text,
      from,
      to,
    });

    setText(result);
  };

  // word count live
  const wordCount = useMemo(() => {
    if (!text.trim()) return 0;
    return text.trim().split(/\s+/).length;
  }, [text]);

  return (
    <main className="h-screen flex flex-col mx-auto p-6 gap-4">
      {/* Title */}
      <h1 className="text-2xl font-semibold">
        Simple Text Editor
      </h1>

      {/* Replace Section */}
      <section className="space-y-2">
        <p className="font-medium">Replace</p>

        <div className="flex gap-2">
          <input
            type="text"
            className="border p-2 flex-1 rounded-md"
            placeholder="Word"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />

          <input
            type="text"
            className="border p-2 flex-1 rounded-md"
            placeholder="Replace with"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />

          <button
            className="border px-4 rounded-md bg-black text-white"
            onClick={handleReplace}
          >
            Replace
          </button>
        </div>
      </section>

      {/* TEXT AREA — FULL SCREEN PART */}
      <section className="flex flex-col flex-1 gap-2">
        <label className="font-medium">Text</label>
        <textarea
          className="flex-1 border p-3 rounded-md"
          placeholder="Type your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </section>

      {/* Preview */}
      <section className="flex flex-col gap-2">
        <label className="font-medium">Preview</label>
        <textarea
          className="h-32 border p-3 rounded-md bg-gray-100 resize-none"
          readOnly
          value={text}
        />
      </section>

      {/* Word Count */}
      <p className="text-sm text-gray-600">
        Words: {wordCount}
      </p>
    </main>
  );
}
