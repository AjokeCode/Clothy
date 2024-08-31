"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { useProductStore } from "../productstore";
import Image from "next/image";
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer";
import img1 from "../Frame 1000003962.svg";
import { useCart } from "react-use-cart";
import SizeButton from "@/app/components/sizebtn";
import ReviewComponent from "@/app/components/review/review";
const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const { products } = useProductStore((state) => ({
    products: state.products,
  }));
  const { addItem } = useCart();
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelectedButton(index);
  };

  const handleAddToCart = () => {
    if (id && selectedButton !== null) {
      const product = products.find((p) => p.id === id);
      if (product) {
        addItem({
          id: product.id,
          price: parseFloat(product.price.replace(/[^0-9.-]+/g, "")),
        });
      }
    }
  };

  const size = ["XXL", "XL", "XS"];

  if (!id) {
    return <div>Loading...</div>;
  }

  const product = products.find((p) => p.id === id);

  if (!product) return <div>Product not found</div>;

  return (
    <>
      <Header />
      <div className="md:px-16 md:py-12 py-6 px-8 font-semibold">
        <h1
          className="md:text-4xl text-2xl mb-4"
          style={{ color: "rgba(60, 66, 66, 1)" }}
        >
          Product detail
        </h1>
        <div className="flex justify-between flex-col md:flex-row">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
          />
          <div className="flex flex-col md:ml-8 ml-0">
            <div className="flex justify-between">
              <div className="flex flex-col gap-3 mb-6">
                <p className="md:text-4xl text-2xl">{product.title}</p>
                <Image src={img1} alt="img" />
              </div>
              <p className="md:text-3xl text-xl">{product.price}</p>
            </div>
            <h1 className="md:text-2xl text-xl mb-2">Description</h1>
            <p className="text-base font-normal">{product.description}</p>
            <div className="pt-6">
              <h1 className="text-2xl mb-4">Choose size</h1>
              <h2
                className="text-base font-normal mb-3"
                style={{ color: "#807D7E" }}
              >
                Available size
              </h2>
              <div className="flex space-x-4">
                {size.map((value, index) => (
                  <SizeButton
                    key={index}
                    size={value}
                    index={index}
                    isSelected={selectedButton === index}
                    onClick={handleClick}
                  />
                ))}
              </div>
            </div>
            <div className="pt-6">
              <button
                onClick={handleAddToCart}
                className="w-72 h-10 rounded-3xl"
                style={{
                  backgroundColor: "rgba(128, 125, 126, 0.2)",
                  color: "rgba(13, 12, 34, 1)",
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <ReviewComponent />
      <Footer />
    </>
  );
};

export default ProductDetail;
