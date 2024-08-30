"use client";

import { useEffect } from "react";
import Home from "./home";
import { CartProvider } from "react-use-cart";

export default function Index() {
  useEffect(() => {
    localStorage.removeItem("product-storage");
  }, []);
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <>
      <CartProvider>
        <Home />
      </CartProvider>
    </>
    // </main>
  );
}
