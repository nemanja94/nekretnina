import Hero from './components/Hero'
import Gallery from './components/Gallery'
import MapSection from './components/MapSection'
// import ContactForm from './components/ContactForm'

export default function Home() {
  return (
    <main className="bg-gray-100 text-gray-800">
      <Hero />
      <section className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
        <h2 className="text-2xl font-semibold mb-4">Detalji nekretnine</h2>
          <h3>Na prodaju domaćinstvo + 2 hektara obradive zemlje</h3>
          <br />
        <ul className="list-disc list-inside space-y-2">
          <li>Vlasnik 1/1</li>
          <li>Na placu od 30 ari nalaze se:</li>
          <li className="ml-6">Tri kuće (dve useljive i jedna u završnoj fazi)</li>
          <li className="ml-6">Pomoćni objekti</li>
          <li>Domaćinstvo poseduje:</li>
          <li className="ml-6">Dve vrste vode (gradska i izvorska)</li>
          <li className="ml-6">Trofazna struja</li>
          <li className="ml-6">Video nadzor</li>
          <li className="ml-6">Fiksni telefon</li>
          <li>U sklopu domaćinstva je limarsko-farbarska radionica od 120 kvadrata</li>
          <li>Lokacija:</li>
          <li className="ml-6">Na regionalnom putu Ljig-Valjevo</li>
          <li className="ml-6">Udaljeno 3km od Ljiga i 8km od Banje Vrujci</li>
          <li>Kontakt: 062601050</li>
        </ul>
        <p className="mt-4 text-lg font-semibold">
          Cena: <span className="text-green-600">320.000 €</span>
        </p>
      </section>
      <Gallery />
      <MapSection />
      {/* <ContactForm /> */}
      <footer className="text-center text-sm text-gray-500 mt-12 p-4">
        © 2025 Prodaja Nekretnine
      </footer>
    </main>
  )
}