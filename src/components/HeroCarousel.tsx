"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Poulet Bio Premium",
    subtitle: "Élevé en plein air",
    description: "Découvrez notre poulet biologique, élevé dans le respect de la nature et du bien-être animal",
    image: "/images/hero-chicken-2.jpg"
  },
  {
    id: 2,
    title: "Découpe Artisanale",
    subtitle: "Qualité Bouchère",
    description: "Morceaux sélectionnés avec soin, préparés par nos artisans bouchers",
    image: "/images/hero-chicken-3.jpg"
  },
  {
    id: 3,
    title: "Cuisine Bio",
    subtitle: "Saveurs Authentiques",
    description: "Des recettes traditionnelles qui subliment la qualité exceptionnelle de nos produits",
    image: "/images/hero-chicken-1.jpg"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
      {/* Images */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />

            {/* Image with proper optimization */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
              quality={85}
            />

            {/* Text overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="text-center text-white px-4 max-w-4xl">
                <h2 className="text-4xl md:text-6xl font-bold mb-3 animate-fade-in">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl mb-4 text-green-100 animate-fade-in-delay">
                  {slide.subtitle}
                </p>
                <p className="text-base md:text-lg mb-6 text-gray-200 animate-fade-in-delay-2">
                  {slide.description}
                </p>
                <button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold transition-colors animate-fade-in-delay-3">
                  Commander maintenant
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-colors z-30"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-colors z-30"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide
                ? "bg-white"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}