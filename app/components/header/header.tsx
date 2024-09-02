"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BsListNested } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import img1 from "./Logo (1).svg";
import img2 from "./Icon.svg";
import { useCart, CartProvider } from "react-use-cart";

const Header = () => {
  const { totalUniqueItems } = useCart();
  const [isClick, setIsClick] = useState(false);
  return (
    <CartProvider>
      <div
        className="md:flex hidden justify-between items-center md:h-20 h-16 w-full md:px-16 px-8 z-50 sticky"
        style={{
          backgroundColor: "#FFFFFF",
          fontFamily: "Raleway, sans-serif",
        }}
      >
        <Image src={img1} alt="img" />
        <ul
          className="text-sm font-normal md:flex justify-between hidden"
          style={{ color: "#807D7E" }}
        >
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li className="ml-6">
            <Link href={"/cart"}>Cart</Link>
          </li>
        </ul>
        <Link
          href={"/cart"}
          className="md:flex hidden justify-between text-sm font-normal items-center cursor-pointer"
        >
          <Image src={img2} alt="img" />
          <p className="-ml-2 -mt-4 text-xs font-semibold h-5 w-5 text-center bg-pink-400 text-white rounded-full">
            {totalUniqueItems}
          </p>
        </Link>
      </div>

      {/* mobile */}
      <div
        className="flex md:hidden justify-between items-center px-8 h-16 w-full border-b border-zinc-200"
        style={{
          backgroundColor: "#FFFFFB",
          fontFamily: "Bricolage Grotesque, sans-serif",
        }}
      >
        <Image src={img1} alt="img" />

        {!isClick ? (
          <BsListNested
            className={`${
              isClick ? "hidden" : ""
            } md:hidden block text-4xl cursor-pointer`}
            onClick={() => setIsClick(true)}
            style={{ color: "rgba(60, 66, 66, 1)" }}
          />
        ) : (
          <nav
            className="fixed inset-0 flex flex-col items-center justify-center h-screen z-[1500]"
            style={{
              backgroundColor: "#ffffff",
              color: "rgba(13, 12, 34, 1)",
            }}
          >
            <AiOutlineClose
              className="text-2xl absolute top-4 right-12 cursor-pointer"
              onClick={() => setIsClick(false)}
              style={{ color: "rgba(60, 66, 66, 1)" }}
            />
            <ul className="space-y-8 text-center" style={{ color: "#807D7E" }}>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li className="ml-6">
                <Link href={"/cart"}>Cart</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </CartProvider>
  );
};
export default Header;
