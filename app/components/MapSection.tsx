export default function MapSection() {
  return (
    <section className="max-w-4xl mx-auto p-6 mt-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Lokacija na mapi</h2>
      <div className="w-full h-96">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2858.2259697959494!2d20.221033!3d44.243592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDE0JzM2LjkiTiAyMMKwMTMnMTUuNyJF!5e0!3m2!1sen!2srs!4v1748892605133!5m2!1sen!2srs"
          loading="lazy"
          allowFullScreen
        />
      </div>
    </section>
  );
}
