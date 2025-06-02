"use client";

import { useEffect, useState } from "react";
import "basiclightbox/dist/basicLightbox.min.css";

import img1 from "../../assets/images/img1.jpeg";
import img2 from "../../assets/images/img2.jpeg";
import img3 from "../../assets/images/img3.jpeg";
import img4 from "../../assets/images/img4.jpeg";
import img5 from "../../assets/images/img5.jpeg";
import img6 from "../../assets/images/img6.jpeg";
import img7 from "../../assets/images/img7.jpeg";
import img8 from "../../assets/images/img8.jpeg";
import img9 from "../../assets/images/img9.jpeg";
import img10 from "../../assets/images/img10.jpeg";
import img11 from "../../assets/images/img11.jpeg";
import img12 from "../../assets/images/img12.jpeg";
import Image from "next/image";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

export default function Gallery() {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const cleanup: (() => void)[] = [];

    import("basiclightbox").then(({ default: basicLightbox }) => {
      const initializeLightbox = () => {
        const images = document.querySelectorAll(".lightbox-img");

        type LightboxImageElement = HTMLImageElement & {
          _lightboxHandler?: EventListenerOrEventListenerObject;
        };

        images.forEach((img) => {
          const lightboxImg = img as LightboxImageElement;
          // Remove existing listeners first
          const existingHandler = lightboxImg._lightboxHandler;
          if (existingHandler) {
            lightboxImg.removeEventListener("click", existingHandler);
          }

          const handler = () => {
            const imgSrc = lightboxImg.currentSrc;
            const instance = basicLightbox.create(`
              <img src="${imgSrc}" class="max-h-[90vh] max-w-[90vw]" />
            `);
            instance.show();
          };

          // Store handler reference for cleanup
          lightboxImg._lightboxHandler = handler;
          lightboxImg.addEventListener("click", handler);
          cleanup.push(() => lightboxImg.removeEventListener("click", handler));
        });
      };

      // Initialize immediately and after state changes
      initializeLightbox();
    });

    return () => cleanup.forEach((fn) => fn());
  }, [isExpanded]);

  const displayedImages = isExpanded ? images : images.slice(0, 3);

  return (
    <section className="max-w-6xl mx-auto p-6 mt-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Galerija</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {displayedImages.map((img, idx) => (
          <Image
            key={idx}
            src={img}
            alt={`Slika ${idx + 1}`}
            className="rounded-lg shadow cursor-pointer lightbox-img"
            style={{ objectFit: "cover" }}
            width={400}
            height={300}
          />
        ))}
      </div>

      <div className="md:hidden mt-4 text-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          {isExpanded
            ? "Prikaži manje slika"
            : `Prikaži sve slike (${images.length - 3})`}
        </button>
      </div>
    </section>
  );
}
