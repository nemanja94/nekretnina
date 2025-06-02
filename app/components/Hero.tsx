"use client";

import Image from "next/image";
import { useState, useEffect, TouchEvent } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

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

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      // minimum swipe distance
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative w-full h-[65vh] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={img}
            alt={`Slide ${index + 1}`}
            fill
            sizes="100vw"
            priority={index === 0}
            className="object-cover"
            quality={85}
          />
        </div>
      ))}

      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-4" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 p-1.5 md:p-2 rounded-full z-20 hover:bg-white transition-all"
        aria-label="Previous slide"
      >
        <FiChevronLeft size={20} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 p-1.5 md:p-2 rounded-full z-20 hover:bg-white transition-all"
        aria-label="Next slide"
      >
        <FiChevronRight size={20} />
      </button>
    </section>
  );
}
