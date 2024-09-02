import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import img1 from "./Logo (1).svg";
import img2 from "./Icon.svg";
import { useCartStore } from "../usecartstore";
import { BsListNested } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const { cart } = useCartStore();
  const [isClick, setIsClick] = useState(false);
  const pathname = usePathname();

  const totalUniqueItems = cart.length;

  const getLinkClassName = (path: string) =>
    `text-sm font-normal ${
      pathname === path ? "font-extrabold text-black" : "text-gray-600"
    }`;

  return (
    <>
      <div
        className="md:flex hidden justify-between items-center md:h-20 h-16 w-full md:px-16 px-8 z-50 sticky top-0"
        style={{
          backgroundColor: "#FFFFFF",
          fontFamily: "Raleway, sans-serif",
          zIndex: 1000,
        }}
      >
        <Image src={img1} alt="Logo" />
        <ul
          className="md:flex hidden justify-between"
          style={{ color: "#807D7E" }}
        >
          <li>
            <Link href="/" className={getLinkClassName("/")}>
              Home
            </Link>
          </li>
          <li className="ml-6">
            <Link href="/cart" className={getLinkClassName("/cart")}>
              Cart
            </Link>
          </li>
        </ul>
        <Link
          href="/cart"
          className="md:flex hidden justify-between text-sm font-normal items-center cursor-pointer"
        >
          <Image src={img2} alt="Cart Icon" />
          <p className="-ml-2 -mt-4 text-xs font-semibold h-5 w-5 text-center bg-pink-400 text-white rounded-full">
            {totalUniqueItems}
          </p>
        </Link>
      </div>

      {/* Mobile Header */}
      <div
        className="flex md:hidden justify-between items-center px-8 h-16 w-full border-b border-zinc-200"
        style={{
          backgroundColor: "#FFFFFB",
          fontFamily: "Bricolage Grotesque, sans-serif",
          zIndex: 1000,
        }}
      >
        <Image src={img1} alt="Logo" />

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
                <Link href="/" className={getLinkClassName("/")}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/cart" className={getLinkClassName("/cart")}>
                  Cart
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </>
  );
};

export default Header;
