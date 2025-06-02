'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  return (
    <section className="max-w-4xl mx-auto p-6 mt-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Kontaktiraj me</h2>
      {sent ? (
        <p className="text-green-600">Poruka je poslata! Hvala na interesovanju.</p>
      ) : (
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          onSubmit={() => setSent(true)}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium">Vaše ime</label>
            <input
              type="text"
              name="ime"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Poruka</label>
            <textarea
              name="poruka"
              rows={4}
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Pošalji
          </button>
        </form>
      )}
    </section>
  )
}