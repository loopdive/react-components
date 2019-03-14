import { useState, useEffect } from "react";

export default () => {
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
