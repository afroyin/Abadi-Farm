export default function Hero() {
  return (
    <section id="hero" className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20" style={{ backgroundColor: '#C2B280' }}>
      <div className="max-w-6xl mx-auto text-center w-full">
        <div className="mb-6 sm:mb-8 flex justify-center">
          <img 
            src="/farm-logo.png" 
            alt="Abadi Farm Logo" 
            className="w-48 sm:w-64 md:w-72 h-auto"
          />
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Premium Chicken Breeder
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
          Abadi Farm specializes in breeding and supplying high-quality chickens of various sizes and ages. Every bird is vaccinated and raised with professional farm infrastructure.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-lg transition w-full sm:w-auto">
            View Our Chickens
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-lg transition w-full sm:w-auto">
            Contact Us
          </button>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
}
