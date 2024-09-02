"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { useCartStore, CartItem } from "@/app/components/usecartstore";
import { useProductStore } from "../productstore";
import Image from "next/image";
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer";
import img1 from "../Frame 1000003962.svg";
import SizeButton from "@/app/components/sizebtn";
import CartButtons from "@/app/components/cartbtn";
import ReviewComponent from "@/app/components/review/review";

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const { addItem, cart } = useCartStore((state) => ({
    addItem: state.addItem,
    cart: state.cart,
  }));
  const { products } = useProductStore((state) => ({
    products: state.products,
  }));
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelectedButton(index);
  };

  const handleAddToCart = () => {
    if (id && selectedButton !== null) {
      const product = products.find((p) => p.id === id);
      if (product) {
        const item: CartItem = {
          id: product.id,
          title: product.title,
          price: product.price.replace(/[^0-9.-]+/g, ""), // Ensuring price is a number
          quantity: 1,
          image: product.image,
        };
        addItem(item);
      }
    }
  };

  const size = ["XXL", "XL", "XS"];

  if (!id) {
    return <div>Loading...</div>;
  }

  const product = products.find((p) => p.id === id);

  if (!product) return <div>Product not found</div>;

  // Determine if the product is already in the cart
  const itemInCart = cart.find((item) => item.id === product.id);

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
          </div>
        </div>
      </div>
      <ReviewComponent />
      <Footer />
    </>
  );
};

export default ProductDetail;
