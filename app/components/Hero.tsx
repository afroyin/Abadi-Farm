import Link from "next/link";

const GALLERY_URL = "/gallery";
const WHATSAPP_URL = "https://wa.me/6285226802907";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
      style={{ backgroundColor: "#C2B280" }}
    >
      <div className="max-w-6xl mx-auto text-center w-full">
        {/* Logo */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <img
            src="/farm-logo.png"
            alt="Abadi Farm Logo"
            className="w-48 sm:w-64 md:w-72 h-auto animate-slide-fade"
          />
          <style>{`
            @keyframes slide-fade-left {
              0% {
                opacity: 0;
                transform: translateX(-100px);
              }
              100% {
                opacity: 1;
                transform: translateX(0);
              }
            }
            .animate-slide-fade {
              animation: slide-fade-left 1s ease-out forwards;
            }
          `}</style>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Premium Chicken Breeder
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
          Abadi Farm specializes in breeding and supplying high-quality chickens
          of various sizes and ages. Every bird is vaccinated and raised with
          professional farm infrastructure.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            href={GALLERY_URL}
            className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-lg transition w-full sm:w-auto text-center"
          >
            View Our Chickens
          </Link>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-lg transition w-full sm:w-auto text-center"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Decorative fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
