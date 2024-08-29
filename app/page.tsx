"use client";

import Header from "./components/header/header";
import Hero from "./components/hero";
import Product from "./components/products";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    localStorage.removeItem("product-storage");
  }, []);
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <>
      <Header />
      <Hero />
      <Product />
    </>
    // </main>
  );
}
