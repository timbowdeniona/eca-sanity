import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<"sm" | "md" | "lg" | "xl">();

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width >= 1441) {
        setScreenSize("xl");
      } else if (width >= 1025) {
        setScreenSize("lg");
      } else if (width >= 641) {
        setScreenSize("md");
      } else {
        setScreenSize("sm");
      }
    };

    // Initial check
    checkScreenSize();

    // Event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
