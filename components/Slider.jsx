"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Data = [
  {
    id: 0,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 1,
    title: "We deliver your order wherever you  ",
    image: "/slide2.png",
  },
  {
    id: 2,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

function Slider() {
  const [currentSlide, setcurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setcurrentSlide((pre) => (pre === Data.length - 1 ? 0 : pre + 1)),
      2000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid md:grid-cols-2  w-full max-md:grid-rows-2   h-screen ">
      <div className="absolute max-md:hidden text-gray-700  font-bold flex w-full h-full px-7 items-center z-10 justify-between">
        <span
          className="cursor-pointer text-5xl"
          onClick={() =>
            setcurrentSlide((prev) => (prev === Data.length - 1 ? 0 : prev + 1))
          }
        >
          {"<"}
        </span>
        <span
          className="cursor-pointer text-5xl"
          onClick={() =>
            setcurrentSlide((prev) => (prev === 0 ? Data.length - 1 : prev - 1))
          }
        >
          {">"}
        </span>
      </div>
      <div
        key={Data[currentSlide].id}
        className="flex gap-8   justify-center bg-pink-50 items-center text-center flex-col"
      >
        <h1 className="md:text-4xl  text-2xl uppercase font-bold text-orange-700">
          {Data[currentSlide].title}
        </h1>
        <button className="bg-orange-600 hover:bg-orange-800 text-white px-3 rounded-md py-2">
          Order Now
        </button>
      </div>
      <div className="relative h-full  w-full ">
        <Image src={Data[currentSlide].image} fill objectFit="cover" />
      </div>
    </div>
  );
}

export default Slider;
