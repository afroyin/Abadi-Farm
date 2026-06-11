export default function CTA() {
  return (
    <section id="contact" className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary to-accent px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
          Ready to Partner with Abadi Farm?
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 sm:mb-8">
          Get premium quality chickens delivered to your doorstep. Contact us today for a quote!
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
          <button className="bg-secondary hover:bg-opacity-90 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-lg transition transform hover:scale-105 w-full sm:w-auto">
            Order Chickens
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-lg transition w-full sm:w-auto">
            Get a Quote
          </button>
        </div>

        {/* Contact Information */}
        <div className="bg-white bg-opacity-10 rounded-lg p-6 sm:p-8 backdrop-blur-sm">
          <h3 className="text-2xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Contact Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-white">
            <div>
              <p className="text-gray-200 mb-2 text-sm sm:text-base">📞 Phone</p>
              <p className="text-base sm:text-lg font-semibold">+62 XXX XXXX XXXX</p>
            </div>
            <div>
              <p className="text-gray-200 mb-2 text-sm sm:text-base">📧 Email</p>
              <p className="text-base sm:text-lg font-semibold break-all">info@abadifarm.com</p>
            </div>
            <div>
              <p className="text-gray-200 mb-2 text-sm sm:text-base">📍 Location</p>
              <p className="text-base sm:text-lg font-semibold">Abadi Farm, Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
