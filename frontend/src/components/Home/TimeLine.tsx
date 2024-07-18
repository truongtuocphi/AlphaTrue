"use client";

import { useEffect, useRef } from "react";
import IconIsolation from "../icons/IconIsolation";
import IconTimeLine from "../icons/IconTimeLine";

const dataTimeLine = [
  {
    Time: <IconTimeLine />,
    content: [
      {
        date: "22/12/1990",
        icon: <IconIsolation />,
        title: "Event",
        des: "We work at the crossroads of sincere, empirical, and technological research. AlphaTrue's primary focuses are customer experience, advanced produc",
      },
      {
        date: "22/12/1990",
        icon: <IconIsolation />,
        title: "Event",
        des: "We work at the crossroads of sincere, empirical, and technological research. AlphaTrue's primary focuses are customer experience, advanced produc",
      },
    ],
  },
  {
    Time: <IconTimeLine color="#00B9FC" />,
    content: [
      {
        date: "22/12/1990",
        icon: <IconIsolation />,
        title: "Event",
        des: "We work at the crossroads of sincere, empirical, and technological research. AlphaTrue's primary focuses are customer experience, advanced produc",
      },
      {
        date: "22/12/1990",
        icon: <IconIsolation />,
        title: "Event",
        des: "We work at the crossroads of sincere, empirical, and technological research. AlphaTrue's primary focuses are customer experience, advanced produc",
      },
    ],
  },
  {
    Time: <IconTimeLine color="#00B9FC" />,
    content: [
      {
        date: "22/12/1990",
        icon: <IconIsolation />,
        title: "Event",
        des: "We work at the crossroads of sincere, empirical, and technological research. AlphaTrue's primary focuses are customer experience, advanced produc",
      },
      {
        date: "22/12/1990",
        icon: <IconIsolation />,
        title: "Event",
        des: "We work at the crossroads of sincere, empirical, and technological research. AlphaTrue's primary focuses are customer experience, advanced produc",
      },
    ],
  },
];

export default function TimeLine() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return;

    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY !== 0) {
        event.preventDefault();
        scrollContainer.scrollLeft += event.deltaY;
      }

      // Kiểm tra xem đã đến cuối của phần tử cuộn ngang chưa
      const atEnd =
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth;

      // Nếu đã đến cuối phần tử cuộn ngang, cho phép cuộn trang web
      if (atEnd && event.deltaY > 0) {
        window.scrollBy(0, event.deltaY);
      }
    };
    scrollContainer.addEventListener("wheel", handleWheel);

    return () => {
      scrollContainer.removeEventListener("wheel", handleWheel);
    };
  }, []);
  return (
    <div
      className="flex w-full justify-between gap-16 overflow-x-hidden relative z-10 scroll-shadows-h"
      ref={scrollContainerRef}
    >
      {dataTimeLine.map((item, index) => {
        const dataContent = item.content;

        return (
          <div key={index} className="flex-none rowShadow">
            <div className="border-dashed border-[0.5px] absolute top-11 w-[720px] border-blue-600 -z-10"></div>
            <div className="w-full flex gap-16 justify-between">
              {item.Time}
              {dataContent.map((itemContent, index) => {
                return (
                  <div
                    key={index}
                    className="w-full max-w-60 flex gap-3 flex-col text-center"
                  >
                    <h6 className="text-xl font-bold text-black-10">
                      {itemContent.date}
                    </h6>
                    <div className="flex justify-center">
                      {itemContent.icon}
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="text-base font-bold text-black-10">
                        {itemContent.title}
                      </div>
                      <p className="text-sm text-black-10">{itemContent.des}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
