'use client';

export default function RunningText() {
  return (
    <div className="w-full bg-gray-900 text-white py-4 px-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="text-sm sm:text-base font-medium px-4">
          Thanks for visiting our business page
        </span>
        <span className="text-sm sm:text-base font-medium px-4">
          Thanks for visiting our business page
        </span>
        <span className="text-sm sm:text-base font-medium px-4">
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
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
}
