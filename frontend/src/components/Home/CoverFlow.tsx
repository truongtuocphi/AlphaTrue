"use client";

import Image from "next/image";
import styles from "./CoverFlow.module.css";
import { useEffect, useRef } from "react";

const ITEM_DISTANCE = 100;
const ITEM_ANGLE = -25;
const CENTER_ITEM_POP = 150;
const CENTER_ITEM_DISTANCE = 80;

const Coverflow = (props: { imageData: any[] }) => {
  const el = useRef<HTMLDivElement>(null);

  // Help function to set element style transform property
  function setTransform(
    el: HTMLDivElement,
    xpos: number,
    zpos: number,
    yAngle: number
  ) {
    el.style.transform = `translateX(${xpos}px) translateZ(${zpos}px) rotateY(${yAngle}deg)`;
  }
  useEffect(() => {
    target(Math.floor(props.imageData.length * 0.5));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.imageData]);

  function target(index: number) {
    const items = el.current!.children;

    for (let i = 0; i < items.length; i++) {
      const item = items[i] as HTMLDivElement;

      if (i == index) setTransform(item, 0, CENTER_ITEM_POP, 0);
      else if (i < index) {
        setTransform(
          item,
          (i - index) * ITEM_DISTANCE - CENTER_ITEM_DISTANCE,
          0,
          -ITEM_ANGLE
        );
      } else
        setTransform(
          item,
          (i - index) * ITEM_DISTANCE + CENTER_ITEM_DISTANCE,
          0,
          ITEM_ANGLE
        );
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.coverflow} ref={el}>
        {props.imageData.map(({ link, title }, index) => (
          <div
            key={title}
            onMouseOver={() => target(index)}
            style={{ backgroundImage: `url(${link})` }}
            className={`${styles.coverflowItem} rounded-3xl overflow-hidden`}
          >
            <Image
              src={link}
              alt={title}
              className="w-full h-full object-cover object-right"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coverflow;
