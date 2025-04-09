"use client";
import React, { useState, useEffect, useRef } from "react";
import { Arrowx } from "../../../../public/icons/arrowx";

type GalleryProps = {
  images: string[];
};

const Gallery = ({ images }: GalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextImage = () => {
    resetTimer();

    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsFading(false);
    }, 500); // Match transition duration
  };

  const prevImage = () => {
    resetTimer();
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
      setIsFading(false);
    }, 500);
  };
  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => nextImage(), 5000);
  };
  const resetTimer = () => {
    startAutoSlide();
  };
  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current!);
  }, []);

  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden">
      {" "}
      <div className="w-full h-full flex justify-center items-center">
        <div
          className={`absolute w-full h-full bg-contain bg-no-repeat bg-center transition-opacity duration-500 ease-in-out ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
          }}
        />
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-opacity-50 p-4 rounded-full cursor-pointer"
        onClick={prevImage}
      >
        <Arrowx rotation={180} />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-opacity-50 p-4 rounded-full cursor-pointer"
        onClick={nextImage}
      >
        <Arrowx />
      </button>
    </div>
  );
};

export default Gallery;
