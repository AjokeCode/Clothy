// pages/product/[id].tsx

import { useRouter } from "next/router";
import { useProductStore } from "./productstore"; // Adjust path as needed
import Image from "next/image";

const ProductDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // Get the ID from the URL
  const { products } = useProductStore((state) => ({
    products: state.products,
  }));

  // Find the product based on the ID
  const product = products.find((p) => p.id === id);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-detail">
      <h1>{product.title}</h1>
      <Image src={product.image} alt={product.title} width={500} height={500} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Add more details or functionalities as needed */}
    </div>
  );
};

export default ProductDetail;
