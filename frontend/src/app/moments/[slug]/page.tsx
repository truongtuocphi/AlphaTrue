"use client";

import { AnimationSection } from "@/components/AnimationSection";
import Header from "@/components/Header";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import Image from "next/image";

import Avatar from "@/public/images/Team/avatar.png";

const images = [
  { id: 1, src: Avatar.src, alt: "Image 1" },
  { id: 2, src: Avatar.src, alt: "Image 1" },
  { id: 3, src: Avatar.src, alt: "Image 1" },
  { id: 4, src: Avatar.src, alt: "Image 1" },
];

export default function Moments({ params }: { params: { slug: string } }) {
  const slugPost = params.slug;

  return (
    <>
      <div className="w-full h-fit flex justify-center mt-10">
        <Header
          bgColor="bg-backgroundGrayHeader"
          bgColorScroll="bg-backgroundGrayHeader"
          textColor="text-black-50"
          fill="black"
        />
      </div>

      <div className="mt-11">
        <HorizontalScrollCarousel />
      </div>
    </>
  );
}

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["25%", "-50%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {images.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: any) => {
  return (
    <div
      key={card.id}
      className="group relative h-[300px] w-[448px] overflow-hidden bg-neutral-200 rounded-lg"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};
