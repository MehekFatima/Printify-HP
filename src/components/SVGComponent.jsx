import React, { useState, useEffect } from "react";
// Import all image paths
import img_0 from "../assets/animations/images/img_0.png";
import img_1 from "../assets/animations/images/img_1.png";
import img_2 from "../assets/animations/images/img_2.png";
import img_3 from "../assets/animations/images/img_3.png";
import img_4 from "../assets/animations/images/img_4.png";
import img_5 from "../assets/animations/images/img_5.png";

const logoImages = [img_0, img_1, img_2, img_3, img_4];

const SVGComponent = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % logoImages.length);
    }, 400); // Change image every 400ms

    return () => clearInterval(intervalId);
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 461 456"
      width={300}
      height={300}
      preserveAspectRatio="xMidYMid meet"
      style={{
        width: "100%",
        height: "100%",
        transform: "translate3d(0px, 0px, 0px)",
        contentVisibility: "visible",
      }}
      {...props}
    >
      <defs>
        <clipPath id="clipPath1">
          <rect width="461" height="456" />
        </clipPath>
      </defs>
      
      {/* Background image (img_5) - Shirt */}
      <image
        href={img_5}
        width="100%"
        height="100%"
        clipPath="url(#clipPath1)"
        transform="scale(0.8) translate(46, 46)"
      />
      
      {/* Animated logo images */}
      <image
        href={logoImages[currentImageIndex]}
        width="100%"
        height="100%"
        clipPath="url(#clipPath1)"
        transform="scale(0.2) translate(920, 920)"
      />
    </svg>
  );
};

export default SVGComponent;