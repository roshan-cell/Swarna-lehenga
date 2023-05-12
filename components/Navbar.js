import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";

const NavBar = () => {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };

  const ref = useRef();

  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center  py-2 shadow-md">
      <div className="logo mx-5">
        <Link href={"/"}>
          {" "}
          <Image
            src="/shoeKart.png"
            width={80}
            height={30}
            alt="shoeKart"
          />{" "}
        </Link>
      </div>

      <div className="nav">
        <ul className="flex items-center space-x-6 font-bold md:text-md">
          <Link href={"/sneaker"}>
            {" "}
            <li>Sneaker</li>{" "}
          </Link>
          <Link href={"/formals"}>
            {" "}
            <li>Formals</li>{" "}
          </Link>
          <Link href={"/sports"}>
            {" "}
            <li>Sports</li>{" "}
          </Link>
        </ul>
      </div>

      <div
        onClick={toggleCart}
        className="cart cursor-pointer absolute right-0 top-4 mx-5"
      >
        <AiOutlineShoppingCart className="text-xl  md:text-3xl my-3 " />
      </div>

      <div
        ref={ref}
        className="w-72 h-full sidebar cursor-pointer absolute top-0 right-0 bg-yellow-100 px-5 py-10 transform transition-transform translate-x-full"
      >
        <h2 className="font-bold text-xl text-center"> Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-2 cursor-pointer text-2xl text-blue-50-100"
        >
          {" "}
          <AiFillCloseCircle />{" "}
        </span>
        <ol className="list-decimal font-semibold">
          <li>
            <div className="item flex my-5">
              <span className="w-2/3 font-semibold">Sneakers</span>
              <span className="flex font-semibold items-center justify-center w-1/3 text-lg">
                {" "}
                <AiOutlinePlusCircle className="cursor-pointer bg-pink-500" />
                <span className="mx-2"> 2 </span>{" "}
                <AiOutlineMinusCircle className="cursor-pointer bg-pink-500" />{" "}
              </span>
            </div>
          </li>
        </ol>
      
        <div className="flex">
          <button className="flex mr-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm">
            <BsFillBagCheckFill className="m-1" /> Checkout
          </button>

          <button className="flex mr-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm">
            <BsFillBagCheckFill className="m-1" /> Clear
          </button>

        </div>
      </div>
    </div>
  );
};

export default NavBar;
