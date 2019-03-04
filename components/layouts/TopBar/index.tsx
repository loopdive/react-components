import React, { ReactNode, useState, useEffect } from "react";
import { css } from "styled-components";

export default ({ style, children, sticky }: { style?: any; children?: ReactNode; sticky?: boolean }) => {
  const scrollUp = sticky ? useScrollDirection() : false;

  return (
    <div
      css={css`
        ${style}
        width: 100%;
        z-index: 10000;
        ${scrollUp &&
          css`
            transform: translateY(-100%);
          `}
        transition: 0.3s;
        ${sticky &&
          css`
            position: fixed;
          `}
      `}
    >
      {children}
    </div>
  );
};

const useScrollDirection = () => {
  const [scrollingUp, setScrollingUp] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (scrollPosition > currentScrollPos) {
      setScrollingUp(false);
    } else {
      setScrollingUp(true);
    }
    setScrollPosition(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return scrollingUp;
};
