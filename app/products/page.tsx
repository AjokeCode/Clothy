"use client";

import React from "react";
import { useCartStore } from "../components/usecartstore";
import { useProductStore } from "./productstore";
import Image from "next/image";
import Link from "next/link";
import img1 from "./Frame 1000003961.svg";
import CartButtons from "../components/cartbtn";

const Product: React.FC = () => {
  const { cart } = useCartStore();
  const { products, category, setCategory } = useProductStore((state) => ({
    products: state.products,
    category: state.category,
    setCategory: state.setCategory,
  }));

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  const getButtonClassName = (cat: string) =>
    `text-sm font-normal px-4 py-2 rounded-3xl ${
      category === cat ? "font-extrabold text-black" : "text-gray-600"
    }`;

  return (
    <div className="flex flex-col items-center justify-center relative md:-mt-16 z-10 -mt-6">
      <div className="w-11/12 bg-white drop-shadow-lg rounded-t-3xl flex flex-col self-center">
        <div
          className="flex items-center justify-between text-sm font-normal self-center md:self-start space-x-4 px-6 py-2 rounded-3xl md:w-1/5 mt-6 md:ml-6 w-10/12 ml-0"
          style={{
            color: "#807D7E",
            backgroundColor: "rgba(250, 250, 250, 1)",
          }}
        >
          <button
            onClick={() => setCategory("All")}
            className={getButtonClassName("All")}
          >
            All
          </button>
          <button
            onClick={() => setCategory("Women")}
            className={getButtonClassName("Women")}
          >
            Women
          </button>
          <button
            onClick={() => setCategory("Men")}
            className={getButtonClassName("Men")}
          >
            Men
          </button>
        </div>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {filteredProducts.map((product) => {
            const itemInCart = cart.find((item) => item.id === product.id);

            return (
              <div key={product.id} className="mb-6">
                <Link href={`/products/${encodeURIComponent(product.id)}`}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    className="w-full h-auto cursor-pointer"
                  />
                </Link>
                <div className="flex justify-between mb-4">
                  <div className="flex flex-col gap-4">
                    <h2 className="mt-2 text-base font-medium">
                      {product.title}
                    </h2>
                    <Image src={img1} alt="img star" />
                  </div>
                  <p
                    className="font-bold text-2xl"
                    style={{ borderColor: "rgba(13, 12, 34, 1)" }}
                  >
                    {product.price}
                  </p>
                </div>

                <CartButtons
                  productId={product.id}
                  itemInCart={itemInCart}
                  product={{
                    id: product.id,
                    price: product.price,
                    title: product.title,
                    image: product.image,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
