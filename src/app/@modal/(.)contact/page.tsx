"use client";

import { useRouter } from "next/navigation";

export default function ContactModal() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-60">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => router.back()}
        aria-hidden
      />
      <div className="absolute inset-x-0 top-20 mx-auto max-w-3xl px-4">
        <div className="rounded-2xl bg-white shadow-xl border border-gray-200 overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">İletişim Bilgileri</h3>
            <button
              onClick={() => router.back()}
              aria-label="Kapat"
              className="rounded-md p-2 hover:bg-gray-100 text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-6 grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700 mb-4">
                Bize hızlıca ulaşmak için WhatsApp veya telefon seçeneklerini kullanabilirsiniz. Ayrıca e-posta ile de iletişime geçebilirsiniz.
              </p>
              <div className="space-y-3">
                <a
                  href="https://wa.me/905555555555?text=Merhaba%2C%20ilanlar%C4%B1n%C4%B1z%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-4 py-2.5 hover:bg-emerald-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M20.52 3.48A11.94 11.94 0 0 0 12.01 0C5.38 0 0 5.37 0 12c0 2.11.55 4.09 1.51 5.8L0 24l6.35-1.66A11.95 11.95 0 0 0 12 24c6.63 0 12.01-5.37 12.01-12 0-3.21-1.26-6.23-3.49-8.52zM12 22a9.94 9.94 0 0 1-5.06-1.38l-.36-.21-3.77.99 1.01-3.67-.23-.38A10 10 0 1 1 12 22zm5.32-7.18c-.29-.15-1.72-.86-1.98-.95-.27-.1-.47-.15-.67.14-.2.29-.77.95-.95 1.15-.18.2-.35.22-.64.08-.29-.15-1.22-.45-2.32-1.44-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.18-.29.28-.48.09-.2.05-.36-.03-.51-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.51.07-.78.36-.27.29-1.03 1.01-1.03 2.47 0 1.46 1.06 2.87 1.21 3.06.15.2 2.08 3.18 5.04 4.46.7.3 1.25.48 1.68.62.71.23 1.36.2 1.87.12.57-.08 1.72-.7 1.97-1.39.24-.68.24-1.27.17-1.39-.07-.12-.26-.19-.55-.34z" />
                  </svg>
                  WhatsApp
                </a>
                <a href="tel:+905555555555" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 text-white px-4 py-2.5 hover:bg-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.59 2.61a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.17a2 2 0 0 1 2.11-.45c.84.27 1.71.47 2.61.59A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Telefon
                </a>
                <div className="text-gray-700">
                  <div className="mt-2">E-posta: info@example.com</div>
                  <div className="mt-1">Çalışma Saatleri: 09:00 - 19:00</div>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 min-h-56 flex items-center justify-center text-center p-4">
              <div>
                <p className="font-medium text-gray-900">Google Harita Alanı</p>
                <p className="text-sm text-gray-600">Embed kodunuzu iletin, buraya ekleyelim.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


