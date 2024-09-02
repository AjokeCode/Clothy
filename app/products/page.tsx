"use client";

import React, { useState } from "react";
import { CartProvider, useCart } from "react-use-cart";
import { useProductStore, Products } from "./productstore";
import Image from "next/image";
import Link from "next/link";
import img1 from "./Frame 1000003961.svg";

const Product: React.FC = () => {
  const { addItem } = useCart();
  const { items, updateItemQuantity } = useCart();
  const [inCart, setInCart] = useState<string[]>([]);
  const { products, category, setCategory } = useProductStore((state) => ({
    products: state.products,
    category: state.category,
    setCategory: state.setCategory,
  }));

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  const add = (product: Products) => {
    addItem({
      id: product.id,
      price: parseFloat(product.price.replace(/[^0-9.-]+/g, "")),
    });
    setInCart((prev) => [...prev, product.id]);
    console.log(product.id);
  };

  return (
    <CartProvider>
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
            <button onClick={() => setCategory("All")}>All</button>
            <button onClick={() => setCategory("Women")}>Women</button>
            <button onClick={() => setCategory("Men")}>Men</button>
          </div>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {filteredProducts.map((product, index) => {
              const itemInCart = items.find((item) => item.id === product.id);
              return (
                <div key={index} className="mb-6">
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

                  {itemInCart ? (
                    <div>
                      <button
                        onClick={() =>
                          updateItemQuantity(
                            itemInCart.id,
                            (itemInCart.quantity || 0) + 1
                          )
                        }
                        className="h-10 w-2/6 border"
                        style={{
                          borderRadius: "30px, 0px, 0px, 30px",
                          borderColor: "rgba(128, 125, 126, 0.2)",
                        }}
                      >
                        +
                      </button>
                      <button
                        className="h-10 border w-2/6"
                        style={{
                          borderRadius: "30px, 0px, 0px, 30px",
                          borderColor: "rgba(128, 125, 126, 0.2)",
                        }}
                      >
                        {itemInCart.quantity}
                      </button>
                      <button
                        onClick={() =>
                          updateItemQuantity(
                            itemInCart.id,
                            (itemInCart.quantity || 0) - 1
                          )
                        }
                        className="h-10 border w-2/6"
                        style={{
                          borderRadius: "30px, 0px, 0px, 30px",
                          borderColor: "rgba(128, 125, 126, 0.2)",
                        }}
                      >
                        -
                      </button>
                    </div>
                  ) : (
                    <div className="flex justify-between text-sm font-medium">
                      <button
                        className="w-24 h-10 rounded-3xl"
                        onClick={() => add(product)}
                        style={{
                          backgroundColor: "rgba(128, 125, 126, 0.2)",
                          color: "rgba(13, 12, 34, 1)",
                        }}
                      >
                        Add to cart
                      </button>
                      <button
                        className="w-24 h-10 text-white rounded-3xl"
                        onClick={() => add(product)}
                        style={{
                          backgroundColor: "rgba(13, 12, 34, 1)",
                        }}
                      >
                        Buy now
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </CartProvider>
  );
};
export default Product;
