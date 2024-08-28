"use client";

import React from "react";
import { useProductStore } from "./productstore";
import Image from "next/image";
import img1 from "./image 327 (1).svg";

const Product: React.FC = () => {
  const { products, category, setCategory } = useProductStore((state) => ({
    products: state.products,
    category: state.category,
    setCategory: state.setCategory,
  }));

  // Filter products based on the selected category
  const filteredProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-11/12 bg-white rounded-t-3xl flex flex-col self-center">
        {/* Category Filters */}
        <div className="flex space-x-4 p-4" style={{ color: "#807D7E" }}>
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

        {/* Display Filtered Products */}
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
