"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { AnimationSection } from "@/components/AnimationSection";
import Card from "@/components/Moments/Card";

import Avatar_1 from "@/public/images/Team/avatar.png";
import Avatar_2 from "@/public/images/Team/avatar_member.png";
import Image from "next/image";

const images = [
  { id: 1, src: Avatar_1.src, alt: "Image 1" },
  { id: 2, src: Avatar_2.src, alt: "Image 2" },
  { id: 3, src: Avatar_1.src, alt: "Image 3" },
  { id: 4, src: Avatar_2.src, alt: "Image 4" },
];

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const [transformValues, setTransformValues] = useState(["25%", "-50%"]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], transformValues);

  useEffect(() => {
    const updateTransformValues = () => {
      if (window.innerWidth < 640) {
        setTransformValues(["5%", "-80%"]);
      } else if (window.innerWidth < 1024) {
        setTransformValues(["10%", "-60%"]);
      } else if (window.innerWidth > 1536) {
        setTransformValues(["40%", "-60%"]);
      }
    };

    updateTransformValues();

    window.addEventListener("resize", updateTransformValues);
    return () => window.removeEventListener("resize", updateTransformValues);
  }, []);

  useEffect(() => {
    const updateIndex = () => {
      const scrollProgress = scrollYProgress.get();
      const index = Math.round(scrollProgress * (images.length - 1));

      setCurrentIndex(index);
    };

    const unsubscribe = scrollYProgress.on("change", updateIndex);
    return () => unsubscribe();
  }, [scrollYProgress]);

  const handleCardClick = (index: number) => {
    setSelectedImageIndex(index - 1);
    setIsModalOpen(true);
  };

  const handlePrevClick = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNextClick = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <section ref={targetRef} className="relative h-[200vh]">
      <div
        className={`sticky top-0 flex h-screen items-center overflow-hidden ${
          isModalOpen && `hidden`
        }`}
      >
        <motion.div style={{ x }} className="flex gap-4 relative">
          {images.map((card) => (
            <AnimationSection className="animate-flip-down" key={card.id}>
              <Card card={card} onClick={handleCardClick} />
            </AnimationSection>
          ))}
        </motion.div>
        <div className="absolute bottom-5 2xl:bottom-40 left-1/2 transform -translate-x-1/2 m-4 text-2xl text-black-50">
          {currentIndex + 1} - {images.length}
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-backgroundModel z-50"
          onClick={handleModalClick}
        >
          {/* <button
            className="absolute top-4 right-4 text-black-20 text-3xl"
            onClick={() => setIsModalOpen(false)}
          >
            &times;
          </button> */}
          <div
            className="absolute lg:py-48 lg:px-8 left-4 lg:left-56 hover:cursor-pointer lg:hover:bg-bgHoverModel"
            onClick={handlePrevClick}
          >
            <button className="text-black-20 text-3xl">&larr;</button>
          </div>
          <div className="w-[650px] h-[450px] flex justify-center overflow-hidden">
            <Image
              src={images[selectedImageIndex].src}
              alt={images[selectedImageIndex].alt}
              className="object-cover"
              width={700}
              height={450}
            />
          </div>

          <div
            className="absolute lg:py-48 lg:px-8 right-4 lg:right-56 hover:cursor-pointer lg:hover:bg-bgHoverModel"
            onClick={handleNextClick}
          >
            <button className="text-black-20 text-3xl ">&rarr;</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HorizontalScrollCarousel;
