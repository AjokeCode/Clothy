"use client";

import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { useProductStore } from "./productstore";
import Image from "next/image";

const Product: React.FC = () => {
  const { addItem, items, updateItemQuantity } = useCart();
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

  const add = (e) => {
    addItem(e);
    setInCart((prev) => [...prev, e.id]);
  };

  return (
    <div className="flex flex-col items-center justify-center relative md:-mt-16 z-10 -mt-6">
      <div className="w-11/12 bg-white drop-shadow-lg rounded-t-3xl flex flex-col self-center">
        <div
          className="flex items-center justify-between text-sm font-normal self-center md:self-start
          space-x-4 px-6 py-2 rounded-3xl md:w-1/5 mt-6 md:ml-6 w-10/12 ml-0"
          style={{
            color: "#807D7E",
            backgroundColor: "rgba(250, 250, 250, 1)",
          }}
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
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {filteredProducts.map((product, index) => {
            const itemInCart = items.find(
              (item) => item.id === filteredProducts.id
            );
            return (
              <div key={index} className="mb-6">
                <Image
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto"
                />
                <div className="flex justify-between">
                  <div className="flex flex-col gap-4">
                    <h2 className="mt-2 text-base font-medium">
                      {product.title}
                    </h2>
                    <p className="text-sm font-normal">{product.description}</p>
                  </div>
                  <p
                    className="font-bold text-2xl"
                    style={{ color: "rgba(13, 12, 34, 1)" }}
                  >
                    {product.price}
                  </p>
                </div>

                {itemInCart ? (
                  <div>
                    <button
                      className=""
                      onClick={() =>
                        updateItemQuantity(
                          itemInCart.id,
                          itemInCart.quantity + 1
                        )
                      }
                    >
                      +
                    </button>
                    <button
                      className="product-btn"
                      onClick={() =>
                        updateItemQuantity(
                          itemInCart.id,
                          itemInCart.quantity - 1
                        )
                      }
                    >
                      -
                    </button>
                  </div>
                ) : (
                  <button className="product-btn" onClick={() => add(product)}>
                    Add to cart
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
