
"use client";
import { useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );

    elements.forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4 bg-linear-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hayalinizdeki Yaşam Alanı İçin
            <span className="text-blue-600"> Doğru Adres</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Modern ve güvenilir emlak hizmetleri ile hayalinizdeki yaşam alanına ulaşın
          </p>
        </div>
      </section>

      {/* Featured House - Split Sections with Images */}
      <section id="properties" className="py-20 px-4 bg-linear-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16" data-reveal>
            Mülklerimiz
          </h2>

          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mb-20">
            <div className="grid grid-cols-2 gap-4" data-reveal>
              <div className="rounded-2xl overflow-hidden shadow-sm bg-gray-100">
                <Image src="/apartmentimages/outsidelook.jpg" alt="Dış görünüm" width={800} height={600} className="w-full h-44 md:h-64 object-cover card-image" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm bg-gray-100">
                <Image src="/apartmentimages/mainhall.jpg" alt="Salon" width={800} height={600} className="w-full h-44 md:h-64 object-cover card-image" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm bg-gray-100 col-span-2">
                <Image src="/apartmentimages/insidehouse2.jpg" alt="İç mekan" width={1200} height={800} className="w-full h-56 md:h-80 object-cover card-image" />
              </div>
            </div>
            <div className="rounded-3xl p-8 md:p-12 shadow-sm bg-stone-100/90 border border-stone-200/80" data-reveal>
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">Geniş ve Aydınlık Yaşam Alanı</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Gün ışığını maksimum alan salon ve açılır-kapanır cam sistemleriyle geniş balkon, ferah bir yaşam sunuyor. Modern
                zemin ve kapı detayları ile estetik ve fonksiyonellik bir arada.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 text-gray-800">
                <li className="flex items-center gap-2"><span className="text-blue-600">•</span> 3+1 geniş plan</li>
                <li className="flex items-center gap-2"><span className="text-blue-600">•</span> Geniş balkon</li>
                <li className="flex items-center gap-2"><span className="text-blue-600">•</span> Yüksek tavan</li>
                <li className="flex items-center gap-2"><span className="text-blue-600">•</span> Doğal ışık</li>
              </ul>
            </div>
          </div>

          {/* Row 2 (reverse) */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mb-20">
            <div className="order-2 md:order-1 rounded-3xl p-8 md:p-12 shadow-sm bg-rose-50/90 border border-rose-100/80" data-reveal>
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">Modern Mutfak ve Kaliteli Malzemeler</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Tam donanımlı mutfak, birinci sınıf dolap ve tezgâh malzemeleriyle şıklığı ve kullanışlılığı birlikte sunuyor.
                Aynı zamanda mutfağa yakın ikinci balkon keyif alanınızı artırıyor.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 text-gray-800">
                <li className="flex items-center gap-2"><span className="text-blue-600">•</span> Ankastre set</li>
                <li className="flex items-center gap-2"><span className="text-blue-600">•</span> Geniş depolama</li>
                <li className="flex items-center gap-2"><span className="text-blue-600">•</span> İkinci balkon</li>
                <li className="flex items-center gap-2"><span className="text-blue-600">•</span> Kolay temizlenen yüzeyler</li>
              </ul>
            </div>
            <div className="order-1 md:order-2 grid grid-cols-2 gap-4" data-reveal>
              <div className="rounded-2xl overflow-hidden shadow-sm bg-gray-100 col-span-2">
                <Image src="/apartmentimages/kitchen2.jpg" alt="Mutfak" width={1200} height={800} className="w-full h-56 md:h-80 object-cover card-image" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm bg-gray-100">
                <Image src="/apartmentimages/kitchen.jpg" alt="Mutfak detay" width={800} height={600} className="w-full h-44 md:h-64 object-cover card-image" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm bg-gray-100">
                <Image src="/apartmentimages/secondbalconyview.jpg" alt="Balkon" width={800} height={600} className="w-full h-44 md:h-64 object-cover card-image" />
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div className="grid grid-cols-2 gap-4" data-reveal>
              <div className="rounded-2xl overflow-hidden shadow-sm bg-gray-100 col-span-2">
                <Image src="/apartmentimages/thepoolimage.jpg" alt="Havuz" width={1200} height={800} className="w-full h-56 md:h-80 object-cover card-image" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm bg-gray-100">
                <Image src="/apartmentimages/room.jpg" alt="Yatak odası" width={800} height={600} className="w-full h-44 md:h-64 object-cover card-image" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm bg-gray-100">
                <Image src="/apartmentimages/bathroom.jpg" alt="Banyo" width={800} height={600} className="w-full h-44 md:h-64 object-cover card-image" />
              </div>
            </div>
            <div className="rounded-3xl p-8 md:p-12 shadow-sm bg-sky-50/90 border border-sky-100/80" data-reveal>
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">Site İmkanları ve Rahat Odalar</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Site içi havuz, merdiven boşluklarında modern tasarım ve güvenli giriş-çıkışla konforlu bir yaşam. Rahat ve sessiz
                odalar, dinlendiğiniz her anı daha iyi kılar.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm">Site içi havuz</span>
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm">Güvenlik</span>
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm">Sessiz çevre</span>
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm">Otopark</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-emerald-700">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12" data-reveal>
            İletişim
          </h2>
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            <div className="rounded-3xl p-8 md:p-10 bg-white/90 border border-emerald-200/70 shadow-sm" data-reveal>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Bize Ulaşın</h3>
              <p className="text-gray-700 mb-6">
                Aşağıdaki kanallardan hızlıca iletişim kurabilirsiniz. WhatsApp ile mesaj atabilir ya da doğrudan arayabilirsiniz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/905555555555?text=Merhaba%2C%20ilanlar%C4%B1n%C4%B1z%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 text-white px-6 py-3 hover:bg-emerald-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M20.52 3.48A11.94 11.94 0 0 0 12.01 0C5.38 0 0 5.37 0 12c0 2.11.55 4.09 1.51 5.8L0 24l6.35-1.66A11.95 11.95 0 0 0 12 24c6.63 0 12.01-5.37 12.01-12 0-3.21-1.26-6.23-3.49-8.52zM12 22a9.94 9.94 0 0 1-5.06-1.38l-.36-.21-3.77.99 1.01-3.67-.23-.38A10 10 0 1 1 12 22zm5.32-7.18c-.29-.15-1.72-.86-1.98-.95-.27-.1-.47-.15-.67.14-.2.29-.77.95-.95 1.15-.18.2-.35.22-.64.08-.29-.15-1.22-.45-2.32-1.44-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.18-.29.28-.48.09-.2.05-.36-.03-.51-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.51.07-.78.36-.27.29-1.03 1.01-1.03 2.47 0 1.46 1.06 2.87 1.21 3.06.15.2 2.08 3.18 5.04 4.46.7.3 1.25.48 1.68.62.71.23 1.36.2 1.87.12.57-.08 1.72-.7 1.97-1.39.24-.68.24-1.27.17-1.39-.07-.12-.26-.19-.55-.34z" />
                  </svg>
                  WhatsApp ile Yazın
                </a>
                <a
                  href="tel:+905555555555"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.59 2.61a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.17a2 2 0 0 1 2.11-.45c.84.27 1.71.47 2.61.59A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Telefon Et
                </a>
              </div>

              <div className="mt-8 grid gap-3 text-gray-700">
                <div className="flex items-center gap-2"><span className="text-emerald-600">•</span> Çalışma Saatleri: 09:00 - 19:00</div>
                <div className="flex items-center gap-2"><span className="text-emerald-600">•</span> E-posta: info@example.com</div>
              </div>
            </div>

            <div className="rounded-3xl p-4 md:p-6 bg-emerald-600/20 border border-emerald-300 min-h-72 md:min-h-96 flex items-center justify-center text-center text-emerald-50" data-reveal>
              <div>
                <p className="font-semibold mb-2">Google Harita Alanı</p>
                <p className="text-sm opacity-80">Buraya Google Maps yerleştireceğiz. Embed kodunu verdiğinizde ekleyeceğim.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}





















