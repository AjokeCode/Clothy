import React, { useState } from "react";
import useReviewStore from "./reviewstore";
import img1 from "./Frame 1000003961.svg";
import Image from "next/image";

const ReviewComponent: React.FC = () => {
  const { reviews, addReview } = useReviewStore();
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  const handleAddReview = () => {
    if (name && review) {
      addReview({ name, review });
      setName("");
      setReview("");
    }
  };

  return (
    <div className="flex flex-col md:px-16 px-6 py-8 font-semibold">
      <h1 className="text-2xl mb-6" style={{ color: "rgba(13, 12, 34, 1)" }}>
        Reviews
      </h1>

      <div className="flex flex-col md:flex-row justify-between w-full md:items-start items-center">
        <ul>
          {reviews.map((r, index) => (
            <li
              key={index}
              className="flex flex-col md:w-3/5 w-full rounded-xl border p-6 mb-6 text-sm"
              style={{
                backgroundColor: "rgba(255, 255, 255, 1)",
                borderColor: "rgba(128, 125, 126, 0.2)",
              }}
            >
              <div className="flex justify-between mb-2">
                <h1 className="font-medium">{r.name}</h1>
                <Image src={img1} alt="img" />
              </div>
              <p className="font-light">{r.review}</p>
            </li>
          ))}
        </ul>
        <div className="md:w-2/5 w-full flex flex-col gap-4 ">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
            className="border rounded-xl md:p-4 p-2 outline-none"
          />
          <textarea
            placeholder="Your Review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            style={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
            className="h-72 w-full md:p-6 p-3 rounded-xl outline-none"
          />
          <button
            onClick={handleAddReview}
            className="rounded-3xl text-white h-10"
            style={{ backgroundColor: "rgba(13, 12, 34, 1)" }}
          >
            Add Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewComponent;
