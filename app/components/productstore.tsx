import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import img1 from "./product_images/img1.svg";
import img2 from "./product_images/Frame 548.svg";
import img3 from "./product_images/img3.svg";
import img4 from "./product_images/img4.svg";
import img5 from "./product_images/img5.svg";
import img6 from "./product_images/img6.svg";
import img7 from "./product_images/Frame 548.svg";
import img8 from "./product_images/img9.svg";
import img9 from "./product_images/img9.svg";
import img10 from "./product_images/img10.svg";
import img11 from "./product_images/img11.svg";
import img12 from "./product_images/img12.svg";
import img13 from "./product_images/img13.svg";
import img14 from "./product_images/img14.svg";
import img15 from "./product_images/img15.svg";
import img16 from "./product_images/img16.svg";

// Define the Product type
interface Product {
  image: string;
  title: string;
  description: string;
  price: string;
  id: number;
  category: "Men" | "Women"; // Add category to products
}

// Define the state shape
interface ProductStore {
  products: Product[];
  category: string;
  setCategory: (category: string) => void;
}

export const useProductStore = create<ProductStore>()(
  persist(
    (set) => ({
      products: [
        {
          image: img1,
          title: "Women's T-Shirt",
          description: "Comfortable women's t-shirt",
          price: "$25",
          id: 1,
          category: "Women",
        },
        {
          image: img2,
          title: "Men's Hoodie",
          description: "Stylish men's hoodie",
          price: "$45",
          id: 2,
          category: "Men",
        },
        {
          image: img3,
          title: "Women's Jeans",
          description: "Trendy women's jeans",
          price: "$60",
          id: 3,
          category: "Women",
        },
        {
          image: img4,
          title: "Men's Sneakers",
          description: "Cool men's sneakers",
          price: "$70",
          id: 4,
          category: "Men",
        },
        {
          image: img5,
          title: "Men's Sneakers",
          description: "Cool men's sneakers",
          price: "$70",
          id: 5,
          category: "Men",
        },
        {
          image: img6,
          title: "Men's Sneakers",
          description: "Cool men's sneakers",
          price: "$70",
          id: 6,
          category: "Men",
        },
        {
          image: img7,
          title: "Men's Sneakers",
          description: "Cool men's sneakers",
          price: "$70",
          id: 7,
          category: "Men",
        },
        {
          image: img8,
          title: "Men's Sneakers",
          description: "Cool men's sneakers",
          price: "$70",
          id: 8,
          category: "Men",
        },
        {
          image: img9,
          title: "Men's Sneakers",
          description: "Cool men's sneakers",
          price: "$70",
          id: 9,
          category: "Men",
        },
        {
          image: img10,
          title: "Men's Sneakers",
          description: "Cool men's sneakers",
          price: "$70",
          id: 10,
          category: "Men",
        },
        {
          image: img11,
          title: "Men's Sneakers",
          description: "Cool men's sneakers",
          price: "$70",
          id: 11,
          category: "Men",
        },
        {
          image: img12,
          title: "Men's Sneakers",
          description: "Cool men's sneakers",
          price: "$70",
          id: 12,
          category: "Men",
        },
        {
          image: img13,
          title: "Men's Sneakers",
          description: "Cool men's sneakers",
          price: "$70",
          id: 13,
          category: "Men",
        },
        {
          image: img14,
          title: "Men's Sneakers",
          description: "Cool men's sneakers",
          price: "$70",
          id: 14,
          category: "Men",
        },
        {
          image: img15,
          title: "Men's Sneakers",
          description: "Cool men's sneakers",
          price: "$70",
          id: 15,
          category: "Men",
        },
        {
          image: img16,
          title: "Men's Sneakers",
          description: "Cool men's sneakers",
          price: "$70",
          id: 15,
          category: "Men",
        },
      ],
      category: "All",
      setCategory: (category) => set({ category }),
    }),
    {
      name: "product-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
