"use client";

import React, { useState } from "react";
import banner from "@/public/images/Home/bannerTime.png";

import styles from "@/components/Home/TimeLine.module.css";

import Image from "next/image";

const TimeLine = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [oldTab, setOldTab] = useState<number | null>(null);

  const handleTabClick = (id: any) => {
    if (id === activeTab) return;

    setOldTab(activeTab);
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
          className={`${styles.card} ${isHidden ? styles.hidden : ""}`}
          style={{
            zIndex: 6 - i,
            transform: `translateX(${i * 10}px) translateY(${i * 10}px)`,
          }}
        >
          <Image
            src={banner}
            alt="banner"
            className="w-full h-full rounded-2xl"
          />
        </div>
      );
    });
  };

  return (
    <section className={`flex gap-9 ${styles.page}`}>
      <section>
        <ul className={styles.tabsControls}>
          {Array.from({ length: 3 }, (_, i) => {
            const id = i + 1;
            return (
              <li key={id} className={styles.tabsControlsItem}>
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
                    className={`text-black-10 cursor-pointer float-right ${
                      activeTab === id ? "text-8xl font-bold" : "text-base"
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
      <section className={styles.cardsContainer}>{renderCards()}</section>
    </section>
  );
};

export default TimeLine;
