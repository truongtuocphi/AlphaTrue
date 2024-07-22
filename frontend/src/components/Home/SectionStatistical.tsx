"use client";

import React, { useEffect, useState } from "react";

const listStatistical = [
  { number: 20, name: "PROJECT DONE" },
  { number: 50, name: "TRUSTED PEOPLE" },
  { number: 100, name: "HAPPY CLIENTS" },
  { number: 40, name: "TEAM MEMBERS" },
];

export default function SectionStatistical() {
  const [animatedNumbers, setAnimatedNumbers] = useState(
    listStatistical.map((item) => ({ ...item, currentNumber: 0 }))
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      const triggerPosition = 90; // vị trí mà bắt đầu animation

      if (currentPosition >= triggerPosition) {
        // Nếu scroll đến vị trí trigger, bắt đầu animation
        const animationDuration = 20000; // Thời gian animation (ms)
        const intervalTime = 60; // Thời gian cập nhật số lần mỗi lần animation (ms)
        const increments = animatedNumbers.map((item) => ({
          ...item,
          increment:
            Math.ceil((item.number / (animationDuration / intervalTime)) * 10) /
            10,
        }));

        const interval = setInterval(() => {
          setAnimatedNumbers((prevNumbers) =>
            prevNumbers.map((item, index) => ({
              ...item,
              currentNumber: Math.min(
                item.currentNumber + increments[index].increment,
                item.number
              ),
            }))
          );
        }, intervalTime);

        return () => clearInterval(interval);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animatedNumbers]);

  return (
    <div className="w-full h-fit grid grid-cols-2 justify-center items-center gap-14 py-6 px-6 bg-black-20 md:flex lg:gap-24">
      {animatedNumbers.map(({ currentNumber, name }) => {
        return (
          <div key={name} className="flex flex-col gap-1 text-center">
            <h3 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-second-50">
              {Math.round(currentNumber) === 50
                ? `${Math.round(currentNumber)}k+`
                : `${Math.round(currentNumber)}+`}
            </h3>
            <div className="font-bold text-sm sm:text-base text-black-100">
              {name}
            </div>
          </div>
        );
      })}
    </div>
  );
}
