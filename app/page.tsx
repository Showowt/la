export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            la
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Premium cevicheria Experience
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-primary text-dark font-semibold hover:bg-primary/90 transition"
            >
              Book Now
            </a>
            <a
              href="#services"
              className="px-8 py-4 border border-primary text-primary hover:bg-primary/10 transition"
            >
              Explore
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-darker">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 bg-dark border border-gray-800">
                <h3 className="text-xl font-semibold mb-4">Service {i}</h3>
                <p className="text-gray-400">
                  Premium service description goes here.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-primary">
            Contact Us
          </h2>
          <p className="text-gray-300 mb-8">
            Ready to experience la? Get in touch.
          </p>
          <a
            href="https://wa.me/573001234567"
            className="inline-block px-8 py-4 bg-green-600 text-white font-semibold hover:bg-green-700 transition"
          >
            WhatsApp Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>© 2024 la. All rights reserved.</p>
          <p className="text-sm mt-2">Powered by MachineMind</p>
        </div>
      </footer>
    </main>
  );
}
