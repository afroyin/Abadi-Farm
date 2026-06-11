export default function CTA() {
  return (
    <section id="contact" className="w-full py-8 px-4 bg-white">
      <div className="max-w-sm mx-auto text-center">
        {/* Header */}
        <p className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-1">
          Abadi Farm
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2 leading-snug">
          Ready to partner with us?
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed mb-4 max-w-xs mx-auto">
          Premium quality chickens delivered to your door. Reach out for a quote
          today.
        </p>

        {/* Buttons */}
        <div className="flex gap-2 justify-center flex-wrap mb-4">
          <button className="bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-700 transition">
            Order chickens
          </button>
          <button className="border border-gray-300 text-gray-900 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
            Get a quote
          </button>
        </div>

        {/* Contact info */}
        <div className="border-t border-gray-100 pt-4 space-y-2 text-left">
          {[
            { icon: "📞", label: "Phone", value: "+62 XXX XXXX XXXX" },
            { icon: "📧", label: "Email", value: "info@abadifarm.com" },
            { icon: "📍", label: "Location", value: "Abadi Farm, Indonesia" },
          ].map(({ icon, label, value }) => (
            <div key={label} className="flex items-start gap-3">
              <span className="text-lg mt-0.5">{icon}</span>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">{label}</p>
                <p className="text-sm font-medium text-gray-900">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
