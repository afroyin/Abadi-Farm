export default function Features() {
  const services = [
    {
      icon: '🐔',
      title: 'Various Sizes',
      description: 'Chickens available in multiple sizes to meet your specific needs.',
    },
    {
      icon: '📅',
      title: 'All Ages',
      description: 'From chicks to mature birds, we have chickens at every life stage.',
    },
    {
      icon: '💉',
      title: 'Fully Vaccinated',
      description: 'All our chickens are vaccinated to ensure health and productivity.',
    },
    {
      icon: '🏢',
      title: 'Modern Infrastructure',
      description: 'Professional farming facilities with optimal conditions for chicken welfare.',
    },
    {
      icon: '✅',
      title: 'Quality Assured',
      description: 'Strict quality control ensures only the best chickens reach your farm.',
    },
    {
      icon: '🚚',
      title: 'Reliable Delivery',
      description: 'Fast and safe delivery to ensure your chickens arrive in perfect condition.',
    },
  ];

  return (
    <section id="features" className="w-full py-12 sm:py-16 md:py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive chicken breeding and supply services with professional standards
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{service.icon}</div>
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
