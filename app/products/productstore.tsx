import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import img1 from "../components/product_images/img1.svg";
import img2 from "../components/product_images/Frame 548.svg";
import img3 from "../components/product_images/img3.svg";
import img4 from "../components/product_images/img16.svg";
import img5 from "../components/product_images/img5.svg";
import img6 from "../components/product_images/img6.svg";
import img7 from "../components/product_images/img19.svg";
import img8 from "../components/product_images/img17.svg";
import img9 from "../components/product_images/img9.svg";
import img10 from "../components/product_images/img10.svg";
import img11 from "../components/product_images/img11.svg";
import img12 from "../components/product_images/img18.svg";
import img13 from "../components/product_images/img13.svg";
import img14 from "../components/product_images/img14.svg";
import img15 from "../components/product_images/img15.svg";
import img16 from "../components/product_images/img16.svg";

// Define the Product type
export interface Products {
  image: string;
  title: string;
  description: string;
  price: string;
  id: string;
  category: "Men" | "Women"; // Add category to products
}

// Define the state shape
interface ProductStore {
  products: Products[];
  category: string;
  setCategory: (category: string) => void;
}

export const useProductStore = create<ProductStore>()(
  persist(
    (set) => ({
      products: [
        {
          image: img1,
          title: "Black Abaya",
          description:
            "Crafted from premium lightweight fabric, this Abaya offers both comfort and sophistication. The flowing design drapes gracefully, while the subtle detailing adds a touch of modern style. Perfect for any occasion, it provides full coverage with an effortlessly chic look.",
          price: "$25.00",
          id: "1",
          category: "Women",
        },
        {
          image: img2,
          title: "Sophisticated silk Abaya",
          description:
            "Experience the blend of luxury and tradition with our sophisticated silk Abaya. This exquisite piece is crafted from sumptuous silk, providing a smooth and flowing drape. The minimalistic design is elevated by delicate, hand-finished details, making it a versatile option for both formal and casual settings. Enjoy the perfect combination of comfort and elegance with this timeless wardrobe staple.",
          price: "$45.00",
          id: "2",
          category: "Women",
        },
        {
          image: img3,
          title: "Classic Round Polo Shirt",
          description:
            "Elevate your everyday wardrobe with our classic round polo shirt. Made from soft, breathable cotton, this polo offers unbeatable comfort and a perfect fit. The timeless round collar and clean lines provide a versatile style that easily transitions from casual outings to more polished looks. Available in a range of colors, it’s an essential piece for any wardrobe, combining simplicity with classic sophistication.",
          price: "$60.00",
          id: "3",
          category: "Men",
        },
        {
          image: img4,
          title: "Black Abaya",
          description:
            "Embrace tradition with a modern twist in our beautifully embroidered Abaya. Made from high-quality fabric, this Abaya features intricate embroidery along the sleeves and hem, adding a unique touch to the classic silhouette. Designed for comfort and elegance, it's the perfect choice for special occasions or everyday wear, offering a refined and graceful look.",
          price: "$70.00",
          id: "4",
          category: "Women",
        },
        {
          image: img5,
          title: "Chic Black Jumpsuit",
          description:
            "sleek jumpsuit features a tailored fit that accentuates your silhouette while offering ultimate comfort. With its minimalistic design, defined waist, and contemporary cut, it’s perfect for any occasion—from evening events to casual outings. Elevate your wardrobe with this sophisticated, all-in-one piece that effortlessly combines style and function.",
          price: "$70.00",
          id: "5",
          category: "Women",
        },
        {
          image: img6,
          title: "Stunning Blue One-Shoulder Jumpsuit",
          description:
            " This striking piece features a bold one-shoulder design that exudes modern sophistication, while the rich blue hue adds a vibrant touch. The fitted bodice and flowing pants create a flattering silhouette, perfect for making a statement at any event. Crafted from high-quality fabric, it ensures both comfort and elegance, making it a standout choice for any special occasion.",
          price: "$70.00",
          id: "6",
          category: "Women",
        },
        {
          image: img7,
          title: "Men's Sneakers",
          description: "Cool men's sneakers",
          price: "$70.00",
          id: "7",
          category: "Men",
        },
        {
          image: img8,
          title: "Men's Sneakers",
          description: "Cool men's sneakers",
          price: "$70.00",
          id: "8",
          category: "Men",
        },
        {
          image: img9,
          title: "Men's Sneakers",
          description: "Cool men's sneakers",
          price: "$70.00",
          id: "9",
          category: "Women",
        },
        {
          image: img10,
          title: "Men's Sneakers",
          description: "Cool men's sneakers",
          price: "$70.00",
          id: "10",
          category: "Women",
        },
        {
          image: img11,
          title: "Men's Sneakers",
          description: "Cool men's sneakers",
          price: "$70.00",
          id: "11",
          category: "Women",
        },
        {
          image: img12,
          title: "Men's Sneakers",
          description: "Cool men's sneakers",
          price: "$70.00",
          id: "12",
          category: "Men",
        },
        {
          image: img13,
          title: "Men's Sneakers",
          description: "Cool men's sneakers",
          price: "$70.00",
          id: "13",
          category: "Women",
        },
        {
          image: img14,
          title: "Men's Sneakers",
          description: "Cool men's sneakers",
          price: "$70.00",
          id: "14",
          category: "Women",
        },
        {
          image: img15,
          title: "Men's Sneakers",
          description: "Cool men's sneakers",
          price: "$70.00",
          id: "15",
          category: "Women",
        },
        {
          image: img16,
          title: "Men's Sneakers",
          description: "Cool men's sneakers",
          price: "$70.00",
          id: "15",
          category: "Women",
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
