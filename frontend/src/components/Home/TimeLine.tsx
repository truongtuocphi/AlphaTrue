"use client";

import React, { useEffect, useState } from "react";
import banner from "@/public/images/Home/bannerTime.png";

import styles from "@/components/Home/TimeLine.module.css";

import Image from "next/image";
import { AnimationSection } from "../AnimationSection";

const getRandomTransform = () => {
  const rotate = Math.random() * 200 - 100;
  const translateX = (Math.random() * 1 + 100) * 1;
  const translateY = Math.random() * -60;
  const scale = Math.random() * 0.9 + 0.1;
  const skewX = Math.random() * 12;
  const skewY = Math.random() * 12;

  return `rotate(${rotate}deg) translateX(${translateX}%) translateY(${translateY}%) scale(${scale}) skewX(${skewX}deg) skewY(${skewY}deg)`;
};

const getInitialTransform = (index: number) => {
  const xValue = (index - 1) * 10;
  const yValue = (index - 1) * 10;
  return `translateX(${xValue}px) translateY(${yValue}px)`;
};

const TimeLine = () => {
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    const cards = document.querySelectorAll(`.${styles.card}`);
    cards.forEach((card, index) => {
      const id = index + 1;
      if (id < activeTab) {
        (card as HTMLElement).style.transform = getRandomTransform();
      } else {
        (card as HTMLElement).style.transform = getInitialTransform(id);
      }
    });
  }, [activeTab]);

  const handleTabClick = (id: any) => {
    if (id === activeTab) return;
    setActiveTab(id);
  };

  const renderCards = () => {
    return Array.from({ length: 3 }, (_, i) => {
      const id = i + 1;
      const isHidden = id < activeTab;

      return (
        <div
          key={id}
          id={id.toString()}
          className={`lg:max-w-xl xl:max-w-3xl ${styles.card} ${
            isHidden ? styles.hidden : ""
          }`}
          style={{
            zIndex: 6 - i,
            transform: `translateX(${i * 10}px) translateY(${i * 10}px)`,
          }}
        >
          <AnimationSection
            className={`animate-fade-up animate-once animate-duration-[2000ms]`}
          >
            <Image src={banner} alt="banner" className="rounded-2xl" />
          </AnimationSection>
        </div>
      );
    });
  };

  return (
    <section
      className={`flex justify-center gap-7 lg:gap-16 min-h-[300px] sm:min-h-[450px] md:min-h-[550px] lg:min-h-[650px] ${styles.page}`}
    >
      <AnimationSection
        className={`animate-fade-right animate-once animate-duration-[2000ms]`}
      >
        <section>
          <ul className={`mt-10 ${styles.tabsControls}`}>
            {Array.from({ length: 3 }, (_, i) => {
              const id = i + 1;
              return (
                <li key={id} className={`mb-3 ${styles.tabsControlsItem}`}>
                  <div
                    className={`flex justify-end ${styles.tabsControlsLink} ${
                      activeTab === id ? styles.tabsControlsLinkActive : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleTabClick(id);
                    }}
                  >
                    <div
                      className={`text-black-10 cursor-pointer ${
                        activeTab === id
                          ? "text-2xl lg:text-7xl font-extrabold"
                          : "text-sm lg:text-base"
                      }`}
                    >
                      1997
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </AnimationSection>
      <AnimationSection
        className={`animate-flip-up animate-once animate-duration-[2000ms]`}
      >
        <section
          className={`!w-[200px] sm:!w-[300px] md:!w-[400px] lg:!w-[500px] xl:!w-[600px] 2xl:!w-[700px] ${styles.cardsContainer}`}
        >
          <div className="flex flex-col gap-2 mb-3">
            <div className="text-sm xl:text-xl text-black-50">22/04/2024</div>
            <h5 className="text-xs sm:text-sm md:text-xl lg:text-2xl 2xl:text-4xl font-bold ">
              Release of the first AlphaTrue Products
            </h5>
          </div>
          {renderCards()}
        </section>
      </AnimationSection>
    </section>
  );
};

export default TimeLine;
