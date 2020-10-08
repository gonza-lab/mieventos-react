import React, { useEffect, useState } from "react";

export const Slider = ({ imgs }) => {
  const [isShow, setIsShow] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      if (isShow === imgs.length - 1) {
        setIsShow(0);
      } else {
        setIsShow((prev) => prev + 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isShow, imgs.length]);

  return (
    <div className="slider">
      {imgs.map((img, index) => (
        <img
          className={`animate__animated 
            ${isShow === index ? "show animate__fadeIn" : ""}`
          }
          src={img.src}
          alt={img.alt}
          key={img.src}
        />
      ))}
    </div>
  );
};
