import Image from "next/image";
import React from "react";

function FoodMenu() {
  return (
    <div className="  h-screen overflow-x-scroll mt-9 ">
      <div className="w-max flex">
        <div className="h-[60vh]  w-screen">
          <div className="h-500 relative w-auto">
            <Image src={"/m1.png"} fill objectFit="cover" />
          </div>
          <div className="flex flex-col gap-3 items-center">
            <span>sicilan</span>
            <p className="m-w-[300px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              harum quam aperiam repudiandae laborum ipsum voluptatibus
              eligendi.
            </p>
            <span className="text-orange-500">$24.00</span>
            <button className="p-1 bg-orange-700 text-white rounded-md">
              Add To Cart
            </button>
          </div>
        </div>
        <div className="h-[60vh]  w-[500px]">
          <div className="h-500 relative w-auto">
            <Image src={"/m1.png"} fill objectFit="cover" />
          </div>
          <div className="flex flex-col gap-3 items-center">
            <span>sicilan</span>
            <p className="m-w-[300px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              harum quam aperiam repudiandae laborum ipsum voluptatibus
              eligendi.
            </p>
            <span className="text-orange-500">$24.00</span>
            <button className="p-1 bg-orange-700 text-white rounded-md">
              Add To Cart
            </button>
          </div>
        </div>
        <div className="h-[60vh]  w-[500px]">
          <div className="h-500 relative w-auto">
            <Image src={"/m1.png"} fill objectFit="cover" />
          </div>
          <div className="flex flex-col gap-3 items-center">
            <span>sicilan</span>
            <p className="m-w-[300px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              harum quam aperiam repudiandae laborum ipsum voluptatibus
              eligendi.
            </p>
            <span className="text-orange-500">$24.00</span>
            <button className="p-1 bg-orange-700 text-white rounded-md">
              Add To Cart
            </button>
          </div>
        </div>
        <div className="h-[60vh]  w-[500px]">
          <div className="h-500 relative w-auto">
            <Image src={"/m1.png"} fill objectFit="cover" />
          </div>
          <div className="flex flex-col gap-3 items-center">
            <span>sicilan</span>
            <p className="m-w-[300px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              harum quam aperiam repudiandae laborum ipsum voluptatibus
              eligendi.
            </p>
            <span className="text-orange-500">$24.00</span>
            <button className="p-1 bg-orange-700 text-white rounded-md">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodMenu;
