"use client";

const MESSAGE = "✦ Thanks for visiting our business page";
const ITEMS = Array(8).fill(MESSAGE);

export default function RunningText() {
  return (
    <div className="w-full bg-gray-900 text-white py-3 overflow-hidden">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 20s linear infinite" }}
      >
        {ITEMS.map((text, i) => (
          <span
            key={i}
            className="text-sm sm:text-base font-medium px-6 shrink-0"
          >
            {text}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
