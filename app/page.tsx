"use client";

import { useEffect } from "react";
import Home from "./home";

export default function Index() {
  useEffect(() => {
    localStorage.removeItem("product-storage");
  }, []);
  return (
    <>
      <Home />
    </>
    
  );
}
