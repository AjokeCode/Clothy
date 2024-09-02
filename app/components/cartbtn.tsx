// components/CartButtons.tsx
"use client";

import Link from "next/link";
import { useCartStore } from "./usecartstore";

interface CartButtonsProps {
  productId: string;
  itemInCart?: {
    quantity: number;
  };
  product: {
    id: string;
    price: string;
    title: string;
    image: string;
  };
}

const CartButtons: React.FC<CartButtonsProps> = ({
  productId,
  itemInCart,
  product,
}) => {
  const { addItem, updateItemQuantity } = useCartStore();

  return itemInCart ? (
    <div className="flex justify-between items-center">
      <button
        onClick={() => updateItemQuantity(productId, itemInCart.quantity + 1)}
        className="h-10 w-28 border"
        style={{
          borderRadius: "30px 0 0 30px",
          borderColor: "rgba(128, 125, 126, 0.2)",
        }}
      >
        +
      </button>
      <span className="h-10 flex items-center justify-center w-28 border">
        {itemInCart.quantity}
      </span>
      <button
        onClick={() => updateItemQuantity(productId, itemInCart.quantity - 1)}
        className="h-10 w-28 border"
        style={{
          borderRadius: "0 30px 30px 0",
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
        onClick={() =>
          addItem({
            ...product,
            quantity: 1,
          })
        }
        style={{
          backgroundColor: "rgba(128, 125, 126, 0.2)",
          color: "rgba(13, 12, 34, 1)",
        }}
      >
        Add to cart
      </button>
      <Link href={"/"}>
        <button
          className="w-24 h-10 text-white rounded-3xl"
          style={{
            backgroundColor: "rgba(13, 12, 34, 1)",
          }}
        >
          Buy now
        </button>
      </Link>
    </div>
  );
};

export default CartButtons;
