
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hayalinizdeki Ev İçin
            <span className="text-blue-600"> Doğru Adres</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Modern ve güvenilir emlak hizmetleri ile hayalinizdeki yaşam alanına ulaşın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#properties"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg text-center"
            >
              Mülklerimizi İnceleyin
            </a>
            <a 
              href="#contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors font-semibold text-lg text-center"
            >
              İletişime Geçin
            </a>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Öne Çıkan Mülklerimiz
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Property cards will go here */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Hakkımızda
          </h2>
          {/* About content will go here */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            İletişim
          </h2>
          {/* Contact form will go here */}
        </div>
      </section>
    </div>
  );
}





















