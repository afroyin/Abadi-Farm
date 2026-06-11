"use client";

export default function GalleryPage() {
  const chickens = [
    {
      id: 1,
      title: "Broiler — Small",
      age: "3 weeks",
      weight: "0.8–1.2 kg",
      src: "/chickens/broiler-small.jpg",
    },
    {
      id: 2,
      title: "Broiler — Medium",
      age: "5 weeks",
      weight: "1.5–2.0 kg",
      src: "/chickens/broiler-medium.jpg",
    },
    {
      id: 3,
      title: "Broiler — Large",
      age: "7 weeks",
      weight: "2.5–3.0 kg",
      src: "/chickens/broiler-large.jpg",
    },
    {
      id: 4,
      title: "Layer Pullet",
      age: "10 weeks",
      weight: "1.2–1.5 kg",
      src: "/chickens/layer-pullet.jpg",
    },
    {
      id: 5,
      title: "Free Range",
      age: "12 weeks",
      weight: "2.0–2.5 kg",
      src: "/chickens/free-range.jpg",
    },
    {
      id: 6,
      title: "Day-Old Chick",
      age: "1 day",
      weight: "0.04 kg",
      src: "/chickens/doc.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-2">
            Abadi Farm
          </p>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Our Chickens
          </h1>
          <p className="text-sm text-gray-500 max-w-sm mx-auto">
            All birds are fully vaccinated and raised in professional
            facilities.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {chickens.map((chicken) => (
            <div
              key={chicken.id}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-orange-200 hover:shadow-sm transition-all duration-200"
            >
              <div className="aspect-square bg-gray-100 overflow-hidden">
                <img
                  src={chicken.src}
                  alt={chicken.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/farm-logo.png";
                  }}
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  {chicken.title}
                </h3>
                <p className="text-xs text-gray-400 mb-0.5">
                  Age: {chicken.age}
                </p>
                <p className="text-xs text-gray-400">
                  Weight: {chicken.weight}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
