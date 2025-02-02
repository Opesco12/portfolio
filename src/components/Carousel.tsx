import React from "react";
import { useState, useEffect } from "react";
import { CloseCircle, ArrowLeft2, ArrowRight2 } from "iconsax-react";

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isModalOpen) {
        if (e.key === "Escape") closeModal();
        if (e.key === "ArrowLeft") goToPrevious();
        if (e.key === "ArrowRight") goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, activeIndex]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-lg aspect-video">
        <div className="flex transition-transform duration-300 ease-in-out">
          {images.map((img, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex-grow-0"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-64 md:h-96 object-cover cursor-pointer"
                onClick={openModal}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/75 transition-colors"
        >
          <ArrowLeft2
            className="w-6 h-6 text-white"
            variant="Linear"
          />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/75 transition-colors"
        >
          <ArrowRight2
            className="w-6 h-6 text-white"
            variant="Linear"
          />
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <CloseCircle
              className="w-8 h-8"
              variant="Linear"
            />
          </button>

          <div className="relative max-w-[90vw] max-h-[90vh]">
            <img
              src={images[activeIndex]}
              alt={`Enlarged slide ${activeIndex + 1}`}
              className="max-h-[90vh] object-contain"
            />

            {/* Modal Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/75 transition-colors"
            >
              <ArrowLeft2
                className="w-8 h-8 text-white"
                variant="Linear"
              />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/75 transition-colors"
            >
              <ArrowRight2
                className="w-8 h-8 text-white"
                variant="Linear"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
