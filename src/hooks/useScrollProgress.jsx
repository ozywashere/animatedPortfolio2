import React, { useState, useEffect } from "react";

const UseScrollProgress = () => {
  const [completion, setCompletion] = useState(0);
  useEffect(() => {
    const scrollListener = () => {
      const totalHeight = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(Number(totalHeight / scrollHeight).toFixed(2) * 100);
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);
  return completion;
};

export default UseScrollProgress;
