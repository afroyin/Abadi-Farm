"use client";

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              Abadi Farm
            </h3>
            <p className="text-sm sm:text-base text-gray-400">
              Premium chicken breeder dedicated to providing high-quality
              poultry for farms and businesses.
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <button
                onClick={() => scrollTo("follow-us")}
                className="hover:text-secondary transition text-sm sm:text-base"
              >
                Facebook
              </button>
              <button
                onClick={() => scrollTo("follow-us")}
                className="hover:text-secondary transition text-sm sm:text-base"
              >
                Instagram
              </button>
              <button
                onClick={() => scrollTo("follow-us")}
                className="hover:text-secondary transition text-sm sm:text-base"
              >
                WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            &copy; 2024 Abadi Farm. All rights reserved.
          </p>
          <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm">
            <button
              onClick={() => scrollTo("privacy-policy")}
              className="hover:text-secondary transition"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => scrollTo("terms-of-service")}
              className="hover:text-secondary transition"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
