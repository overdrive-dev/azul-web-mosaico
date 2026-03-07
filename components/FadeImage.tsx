"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

type FadeImageProps = ImageProps & {
  wrapperClassName?: string;
};

export default function FadeImage({
  className,
  wrapperClassName,
  ...props
}: FadeImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Image
      {...props}
      className={`${className || ""} transition-opacity duration-500 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
      onLoad={() => setIsLoaded(true)}
    />
  );
}
