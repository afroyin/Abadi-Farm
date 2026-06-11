export default function Features() {
  const services = [
    {
      icon: "🐔",
      title: "Various Sizes",
      description: "Chickens in multiple sizes to meet your specific needs.",
    },
    {
      icon: "📅",
      title: "All Ages",
      description: "From chicks to mature birds at every life stage.",
    },
    {
      icon: "💉",
      title: "Fully Vaccinated",
      description: "All chickens vaccinated for health and productivity.",
    },
    {
      icon: "🏢",
      title: "Modern Infrastructure",
      description: "Professional facilities with optimal conditions.",
    },
    {
      icon: "✅",
      title: "Quality Assured",
      description: "Strict quality control — only the best reach your farm.",
    },
    {
      icon: "🚚",
      title: "Reliable Delivery",
      description: "Fast, safe delivery in perfect condition.",
    },
  ];

  return (
    <section id="features" className="w-full py-10 bg-gray-50 px-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">
            Our Services
          </h2>
          <p className="text-sm text-gray-500 max-w-xs mx-auto leading-relaxed">
            Comprehensive chicken breeding and supply with professional
            standards
          </p>
        </div>

        {/* 2×3 Grid */}
        <div className="grid grid-cols-2 gap-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 border border-gray-100 hover:border-orange-200 hover:shadow-sm transition-all duration-200"
            >
              <div className="text-2xl mb-2">{service.icon}</div>
              <h3 className="text-xs font-semibold text-gray-900 mb-1 leading-snug">
                {service.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
