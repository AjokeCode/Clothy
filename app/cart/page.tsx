"use client";

import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header/header";
import { useCartStore } from "../components/usecartstore";
import img1 from "./Frame 1000003961.svg";
import { useEffect } from "react";
import img2 from "./fluent_delete-20-regular.svg";

const Cart: React.FC = () => {
  const { cart, updateItemQuantity, clearCart } = useCartStore();

  const isEmpty = cart.length === 0;

  useEffect(() => {
    localStorage.removeItem("react-use-cart");
  }, []);

  if (isEmpty)
    return (
      <p className="text-center font-semibold pt-16">Your cart is empty</p>
    );

  return (
    <>
      <Header />
      <div className="py-6 md:px-12 px-6 md:text-2xl text-sm font-semibold flex flex-col">
        <h1 className="mb-4">My Cart: {cart.length}</h1>
        {cart.map((item, index) => {
          return (
            <div
              className="flex justify-between mb-4 border w-full md:h-48 h-32 rounded-xl md:px-6 px-2 py-4"
              key={index}
              style={{ borderColor: "rgba(128, 125, 126, 0.06)" }}
            >
              <Image
                src={item.image}
                alt={item.title}
                className="object-cover md:h-44 h-24 w-1/4"
              />
              <div className=" flex flex-col justify-between">
                <h1 className="">{item.title}</h1>
                <Image src={img1} alt="Rating" />
              </div>
              <div className="flex flex-col justify-between md:ml-4 ml-2">
                <p className="font-bold text-xl">{item.price}</p>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                    className="px-2 py-1 border"
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                    className="px-2 py-1 border"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex gap-4 self-end mt-12 items-center">
          <p>Clear cart: </p>
          <Image
            src={img2}
            alt="Delete"
            width={25}
            height={25}
            className="cursor-pointer self-end"
            onClick={() => clearCart()}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
