import React from "react";
import Image from "next/image";

const DevImage = ({ containerStyle, imgSrc }) => {
  return (
    <div className={`${containerStyle}`}>
      <Image src={imgSrc} alt="" fill priority />
    </div>
  );
};

export default DevImage;
