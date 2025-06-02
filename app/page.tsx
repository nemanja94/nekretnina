import Hero from './components/Hero'
import Gallery from './components/Gallery'
import MapSection from './components/MapSection'
import ContactForm from './components/ContactForm'

export default function Home() {
  return (
    <main className="bg-gray-100 text-gray-800">
      <Hero />
      <section className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
        <h2 className="text-2xl font-semibold mb-4">Detalji nekretnine</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Lokacija: Beograd, Zvezdara</li>
          <li>Površina: 120 m²</li>
          <li>Broj soba: 4</li>
          <li>Renovirana 2022. godine</li>
          <li>Uknjiženo</li>
        </ul>
        <p className="mt-4 text-lg font-semibold">
          Cena: <span className="text-green-600">180.000 €</span>
        </p>
      </section>
      <Gallery />
      <MapSection />
      <ContactForm />
      <footer className="text-center text-sm text-gray-500 mt-12 p-4">
        © 2025 Prodaja Nekretnine
      </footer>
    </main>
  )
}