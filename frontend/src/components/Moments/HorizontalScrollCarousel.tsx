"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Card from "@/components/Moments/Card";

import Avatar from "@/public/images/Team/avatar.png";

const images = [
  { id: 1, src: Avatar.src, alt: "Image 1" },
  { id: 2, src: Avatar.src, alt: "Image 2" },
  { id: 3, src: Avatar.src, alt: "Image 3" },
  { id: 4, src: Avatar.src, alt: "Image 4" },
];

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const [transformValues, setTransformValues] = useState(["25%", "-50%"]);
  const [currentIndex, setCurrentIndex] = useState(0);

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
      } else {
        setTransformValues(["25%", "-50%"]);
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

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 relative">
          {images.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 m-4 text-2xl text-black-50">
          {currentIndex + 1} - {images.length}
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
