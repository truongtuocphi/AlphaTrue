"use client";

import Image from "next/image";
import styles from "@/components/Home/CoverFlow.module.css";
import { useEffect, useRef, useState } from "react";

const ITEM_DISTANCE = 100;
const ITEM_ANGLE = -25;
const CENTER_ITEM_POP = 150;
const CENTER_ITEM_DISTANCE = 50;
const AUTO_SLIDE_INTERVAL = 4000;

const Coverflow = (props: { imageData: any[] }) => {
  const el = useRef<HTMLDivElement>(null);
  const [centerIndex, setCenterIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCenterIndex((prevIndex) => {
          const nextIndex =
            prevIndex !== null ? (prevIndex + 1) % props.imageData.length : 0;
          target(nextIndex);
          return nextIndex;
        });
      }, AUTO_SLIDE_INTERVAL);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused, props.imageData]);

  function target(index: number) {
    const items = el.current!.children;

    for (let i = 0; i < items.length; i++) {
      const item = items[i] as HTMLDivElement;

      if (i == index) {
        setTransform(item, 0, CENTER_ITEM_POP, 0);
        setCenterIndex(index);
      } else if (i < index) {
        setTransform(
          item,
          (i - index) * ITEM_DISTANCE - CENTER_ITEM_DISTANCE,
          0,
          -ITEM_ANGLE
        );
      } else {
        setTransform(
          item,
          (i - index) * ITEM_DISTANCE + CENTER_ITEM_DISTANCE,
          0,
          ITEM_ANGLE
        );
      }
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.coverflow} ref={el}>
        {props.imageData.map(({ link, title, icon }, index) => (
          <div
            key={title}
            onMouseOver={() => target(index)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ backgroundImage: `url(${link})` }}
            className={`${styles.coverflowItem} rounded-3xl overflow-hidden`}
          >
            <div className="w-full h-full relative">
              <Image
                src={link}
                alt={title}
                className="w-full h-full object-cover object-right z-0"
              />
              {index === centerIndex ? (
                <>
                  <div className="w-full h-full absolute top-0 bg-bgCoverFlow"></div>
                  <div className="absolute bottom-8 left-10 w-full max-w-sm">
                    <p className="text-sm mb-8 text-black-100">
                      AlphaTrue offers a multi-sectoral strategy and a one-stop
                      solution for your business in the blockchain industry.
                      <br />
                      <br />
                      We work at the crossroads of sincere, empirical, and
                      technological research. AlphaTrue primary focuses are
                      customer experience, advanced products, and clarity and
                      efficiency in the management process.
                    </p>
                    <div className="text-black-100">
                      <div className="mb-3">AlphaTrue</div>
                      <h2 className="text-6xl font-bold ">{title}</h2>
                    </div>
                  </div>
                </>
              ) : (
                <div
                  className={`absolute bottom-5 ${
                    centerIndex === 0 ? "right-5" : "left-7"
                  } -rotate-0`}
                >
                  <div className="text-black-100 text-center">
                    {/* <h2 className="text-6xl font-bold">{title}</h2> */}
                    {icon}
                  </div>
                </div>
              )}

              {index === centerIndex ? (
                <>
                  <div className="w-full h-full absolute top-0 bg-bgCoverFlow"></div>
                  <div className="absolute bottom-8 left-10 w-full max-w-sm">
                    <p className="text-sm mb-8 text-black-100">
                      AlphaTrue offers a multi-sectoral strategy and a one-stop
                      solution for your business in the blockchain industry.
                      <br />
                      <br />
                      We work at the crossroads of sincere, empirical, and
                      technological research. AlphaTrue primary focuses are
                      customer experience, advanced products, and clarity and
                      efficiency in the management process.
                    </p>
                    <div className="text-black-100">
                      <div className="mb-3">AlphaTrue</div>
                      <h2 className="text-6xl font-bold ">{title}</h2>
                    </div>
                  </div>
                </>
              ) : (
                <div
                  className={`absolute bottom-5 ${
                    index == 2 ? "right-5" : "left-7"
                  }  -rotate-0`}
                >
                  <div className="text-black-100 text-center">
                    {/* <h2 className="text-6xl font-bold">{title}</h2> */}
                    {icon}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coverflow;
