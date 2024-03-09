import { RatingStarsProps } from "@/interfaces/widgetInterfaces";
import React from "react";
import { TiStarFullOutline } from "react-icons/ti";

const RatingStars = ({ rating }: RatingStarsProps) => {
  const positiveRating = Math.round(rating);
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        return <TiStarFullOutline key={index} className={`${index < positiveRating ? "text-yellow-400" : "text-gray-300"}`} />;
      })}
    </div>
  );
};

export default RatingStars;
