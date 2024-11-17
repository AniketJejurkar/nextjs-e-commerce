"use client";

import { useEffect, useState } from "react";

export default function ProductImageGallery({ images }: { images: string[] }) {
  const [mainImage, setMainImage] = useState<string>(images[0]);
  const changeImage = (imgUrl: string) => {
    setMainImage(imgUrl);
  };
  return (
    <div className="w-full md:w-1/2 px-4 mb-8">
      <img
        src={mainImage}
        alt="Product"
        className="w-full h-auto rounded-lg shadow-md mb-4"
        id="mainImage"
      />

      <div className="flex gap-4 py-4 justify-center overflow-x-auto">
        <img
          src={images[0]}
          onClick={() => changeImage(images[0])}
          alt="Thumbnail 1"
          className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
        />
        <img
          src={images[1]}
          alt="Thumbnail 2"
          onClick={() => changeImage(images[1])}
          className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
        />
        <img
          src={images[2]}
          alt="Thumbnail 3"
          onClick={() => changeImage(images[2])}
          className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
        />
        <img
          src={images[3]}
          onClick={() => changeImage(images[3])}
          alt="Thumbnail 4"
          className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
        />
        <img
          src={images[4]}
          onClick={() => changeImage(images[4])}
          alt="Thumbnail 5"
          className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
        />
      </div>
    </div>
  );
}
