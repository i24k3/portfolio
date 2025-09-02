import { useEffect, useState } from "react";

const ScrollInd = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY <= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 text-gray-500 text-3xl transition-opacity duration-500 z-50 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="animate-bounce">↓</div>
    </div>
  );
};

export default ScrollInd;

