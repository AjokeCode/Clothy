import { create } from "zustand";

interface Review {
  name: string;
  review: string;
}

interface ReviewState {
  reviews: Review[];
  addReview: (newReview: Review) => void;
}

const useReviewStore = create<ReviewState>((set) => ({
  reviews: [
    {
      name: "Adams Ibrahim",
      review:
        "I'm absolutely thrilled with this Hoodie! The fit is spot on, skimming my body in all the right places. The quality is exceptional, with soft, plush fabric that feels luxurious against my skin. Overall, a fantastic purchase that exceeds my expectations!",
    },
    {
      name: "Barakat Adams",
      review:
        "I'm beyond pleased with this Abaya! The fit is elegant, draping beautifully in all the right places. The fabric is of exceptional quality, soft and comfortable, making it a pleasure to wear. This Abaya truly exceeds my expectations and is a wonderful addition to my wardrobe!",
    },
  ],
  addReview: (newReview) =>
    set((state) => ({ reviews: [...state.reviews, newReview] })),
}));

export default useReviewStore;
