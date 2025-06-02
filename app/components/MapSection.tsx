export default function MapSection() {
  return (
    <section className="max-w-4xl mx-auto p-6 mt-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Lokacija na mapi</h2>
      <div className="w-full h-96">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.755680097378!2d20.51109431553551!3d44.79661837909895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7015c540c149%3A0x7d6f4f20e9f3fddf!2sZvezdara%2C%20Beograd!5e0!3m2!1ssr!2srs!4v1614712634774!5m2!1ssr!2srs"
          loading="lazy"
          allowFullScreen
        />
      </div>
    </section>
  )
}