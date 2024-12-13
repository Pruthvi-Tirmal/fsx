import React from "react";
import Image, { StaticImageData } from "next/image";
interface ImageProps {
  src: StaticImageData;
  placeholder?: string;
  fill: boolean;
  objectFit?: string;
  alt: string;
}
const ImageComponent = ({ src, fill, alt }: ImageProps) => {
  return (
    <div className="relative w-full h-full">
      <Image src={src} alt={alt} fill={fill} className="object-fill" />
    </div>
  );
};

export default ImageComponent;
