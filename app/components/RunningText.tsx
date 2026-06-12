"use client";

export default function RunningText() {
  return (
    <div className="w-full bg-gray-900 text-white py-3 px-3 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="text-sm sm:text-base font-medium px-3">
          Thanks for visiting our business page
        </span>
        <span className="text-sm sm:text-base font-medium px-3">
          Thanks for visiting our business page
        </span>
        <span className="text-sm sm:text-base font-medium px-3">
          Thanks for visiting our business page
        </span>
      </div>
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          animation: marquee 3s linear infinite;
        }
      `}</style>
    </div>
  );
}
