'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { src: '/corpers.png', alt: 'Partnership 1' },
  { src: '/chef_small.png', alt: 'Partnership 2' },
  { src: '/students.png', alt: 'Partnership 3' },
];

export default function PartnershipGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="bg-white py-12 min-[741px]:py-20 min-[1011px]:py-24 overflow-hidden">
  <div className="mx-auto max-w-7xl px-4 min-[741px]:px-10 lg:px-20 flex flex-col">

    {/* ROW CONTAINER */}
    <div className="flex flex-row items-center justify-center gap-4 w-full">
      
      {/* Image BEFORE (Left) */}
      <div className="hidden min-[741px]:block w-1/4">
        <div className="relative w-full aspect-square rounded-xl overflow-hidden border-2 border-gray-200">
          <Image
            src="/man1.png"
            alt="Before slideshow image"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Slideshow (Center) */}
      <div className="w-full min-[741px]:w-1/2">
        <div className="relative group mx-auto">
          <div className="relative overflow-hidden rounded-xl border-2 border-gray-200 aspect-[4/3] bg-gray-50">
            <div
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {galleryImages.map((image, index) => (
                <div key={index} className="relative min-w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons (Adjusted for tighter space) */}
          <button
            onClick={prevSlide}
            className="absolute -left-6 top-1/2 -translate-y-1/2 text-emerald-600 hover:scale-110 p-1"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-8 w-8 stroke-[1.5px]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-6 top-1/2 -translate-y-1/2 text-emerald-600 hover:scale-110 p-1"
            aria-label="Next slide"
          >
            <ChevronRight className="h-8 w-8 stroke-[1.5px]" />
          </button>
        </div>
      </div>

      {/* Image AFTER (Right) */}
      <div className="hidden min-[741px]:block w-1/4">
        <div className="relative w-full aspect-square rounded-xl overflow-hidden border-2 border-gray-200">
          <Image
            src="/woman2.jpeg"
            alt="After slideshow image"
            fill
            className="object-cover"
          />
        </div>
      </div>

    </div>

    {/* Indicators below the row */}
    <div className="flex justify-center gap-3 mt-8">
      {galleryImages.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentIndex(index)}
          className={`h-2.5 transition-all duration-300 rounded-full ${
            currentIndex === index ? 'w-10 bg-emerald-600' : 'w-2.5 bg-gray-300'
          }`}
        />
      ))}
    </div>

  </div>
</section>





  );
}
