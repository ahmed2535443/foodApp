"use client";
import React, { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { FcPhone } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  let [show, setShow] = useState("left-[-100%]");
  return (
    <nav className=" text-orange-500 border-2 flex   bg-white  border-orange-500 justify-between w-full min-h-[80px] items-center px-7">
      <ul className="hidden  md:flex gap-3 items-center font-bold">
        <li>HOMEPAGE</li>
        <li>MENU</li>
        <li>CONTACT</li>
      </ul>
      <AiOutlineMenu
        onClick={() => setShow("left-[0]")}
        className="md:hidden cursor-pointer"
      />
      <div className="font-extrabold  md:text-2xl ">MASSIMO</div>
      <div className="font-bold items-center hidden  md:flex gap-3">
        <div className="flex gap-3 bg-orange-500 text-orange-800 px-1 rounded-xl items-center">
          <FcPhone size={25} /> 555 44 00
        </div>
        <span className="flex items-center gap-3">
          ORDERS <TiShoppingCart size={25} />
        </span>
        <span>CART {"(3)"}</span>
      </div>
      <div
        className={`fixed  duration-300 ease-in-out py-10 gap-10 flex flex-col top-0 ${show} h-screen w-[300px] bg-white border border-orange-500`}
      >
        <div className="absolute right-1 top-2">
          <AiOutlineClose
            className="cursor-pointer"
            size={30}
            onClick={() => setShow("left-[-100%]")}
          />
        </div>
        <ul className="flex flex-col gap-10 items-center font-bold">
          <li>
            HOMEPAGE <span></span>
          </li>
          <li>MENU</li>
          <li>CONTACT</li>
        </ul>
        <div className="font-bold items-center flex flex-col   gap-10">
          <div className="flex  gap-3 bg-orange-500 text-orange-800 px-1 rounded-xl items-center">
            <FcPhone size={25} /> 555 44 00
          </div>
          <span className="flex items-center gap-3">
            ORDERS <TiShoppingCart size={25} />
          </span>
          <span>CART {"(3)"}</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
