import React from "react";
import Link from "next/link";
import Image from 'next/image';
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {
  return (

      <div className="flex flex-col md:flex-row md:justify-start justify-center items-center  py-2 shadow-xl">
        <div className="logo mx-5">
          <Image src="/shoeKart.png" width={200} height={30} alt="shoeKart" />
        </div>

        <div className="nav">
          <ul className = "flex items-center space-x-6 font-bold md:text-md">
            <Link href= {'/sneaker'}> <li>Sneaker</li> </Link>
            <Link href= {'/formals'}> <li>Formals</li> </Link>
            <Link href= {'/sports'}> <li>Sports</li> </Link>
          </ul>
        </div>

        <div className="cart absolute right-0 top-4 mx-5">
          <AiOutlineShoppingCart  className="text-xl  md:text-3xl" />
        </div>

      </div>

  );
};

export default NavBar;
