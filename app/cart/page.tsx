import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header/header";
import { useCart, CartProvider } from "react-use-cart";
import img1 from "./Frame 1000003961.svg";
import React from "react";
const Cart: React.FC = () => {
  const { items, updateItemQuantity, isEmpty, totalUniqueItems } = useCart();
  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <CartProvider>
      <Header />
      <div className="py-6 md:px-12 px-6">
        <h1>Cart: {totalUniqueItems}</h1>
        {items.map((item, index) => (
          <div className=" flex justify-between">
            <Image src={item.image} alt="img" />
            <div>
              <h1>{item.title}</h1>
              <Image src={img1} alt="img" />
            </div>
            <div className="flex flex-col justify-between">
              <p>{item.price}</p>
              <div className="flex">
                <button
                  onClick={() =>
                    updateItemQuantity(item.id, (item.quantity || 0) - 1)
                  }
                >
                  -
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() =>
                    updateItemQuantity(item.id, (item.quantity || 0) + 1)
                  }
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </CartProvider>
  );
};

export default Cart;
