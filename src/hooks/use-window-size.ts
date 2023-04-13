import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowDimension, setWindowDimension] = useState({
    winWidth: 0,
    winHeight: 0,
    // winWidth: window.innerWidth, // might give window not defined error
    // winHeight: window.innerHeight,
  });

  const handleResize = () => {
    setWindowDimension({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    //dispatch handleResize fn on window resize
    window.addEventListener("resize", handleResize);

    //removing prev listner to prevent memory leak
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension.winWidth <= 767;

  const isTablet =
    windowDimension.winWidth > 767 && windowDimension.winWidth <= 1024;

  const isDesktop =
    windowDimension.winWidth > 1024 && windowDimension.winWidth <= 1440;

  const isLargeDesktop = windowDimension.winWidth > 1440;

  return {
    windowDimension,
    /** greater than 767px */
    isMobile,
    /** greater than 767px and less than 1024px */
    isTablet,
    /** greater than 1024px and less than 1440px */
    isDesktop,
    /** greater than 1440px */
    isLargeDesktop,
  };
};

export default useWindowSize;
