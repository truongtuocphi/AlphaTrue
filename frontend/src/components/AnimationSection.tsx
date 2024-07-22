"use client";

import React from "react";
import ReactVisibilitySensor from "react-visibility-sensor";

export const AnimationSection: React.FC<{
  children: React.ReactElement | string | boolean | undefined;
  className: string;
  height?: number;
}> = ({ children, className, height }) => {
  const domRef = React.useRef<HTMLElement>(null);

  const [isVisible, setVisible] = React.useState(false);

  React.useEffect(() => {
    check();
  }, []);

  const check = async () => {
    const observer = await new IntersectionObserver((entries) => {
      // In your case there's only one element to observe:
      if (entries[0].isIntersecting) {
        // Not possible to set it back to false like this:
        setVisible(true);
        // No need to keep observing:
        observer.unobserve(domRef?.current as HTMLElement);
      } else {
        setVisible(false);
      }
    });
    observer.observe(domRef?.current as HTMLElement);
    return () => observer.disconnect();
  };

  return (
    <ReactVisibilitySensor partialVisibility onChange={check}>
      <section ref={domRef}>
        <div className={`${isVisible ? `${className} visible` : `invisible`}`}>
          {children}
        </div>
      </section>
    </ReactVisibilitySensor>
  );
};
