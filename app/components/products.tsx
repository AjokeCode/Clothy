"use client";

import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { useProductStore } from "./productstore";
import Image from "next/image";

const Product: React.FC = () => {
  const { addItem } = useCart();
  const [inCart, setInCart] = useState([]);
  const { products, category, setCategory } = useProductStore((state) => ({
    products: state.products,
    category: state.category,
    setCategory: state.setCategory,
  }));
  const filteredProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);
  // const add = (e:) => {
  //   addItem(e);
  //   setInCart((prev) => [...prev, e.id]);
  // };

  return (
    <div className="flex flex-col items-center justify-center relative -mt-24 z-10">
      <div className="w-11/12 bg-white drop-shadow-lg rounded-t-3xl flex flex-col self-center">
        <div
          className="flex space-x-4 p-4 max-w-14 rounded-3xl"
          style={{ color: "#807D7E", backgroundColor: "blue" }}
        >
          <button onClick={() => setCategory("All")} className="">
            All
          </button>
          <button onClick={() => setCategory("Women")} className="">
            Women
          </button>
          <button onClick={() => setCategory("Men")} className="">
            Men
          </button>
        </div>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product, index) => (
            <div key={index} className="">
              <Image
                src={product.image}
                alt={product.title}
                className="w-full h-auto"
              />
              <h2 className="mt-2 text-lg font-bold">{product.title}</h2>
              <p className="mt-1">{product.description}</p>
              <p className="mt-1 font-bold">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
