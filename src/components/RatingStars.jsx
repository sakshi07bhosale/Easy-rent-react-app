import "./RatingStars.css";
import { Star, StarHalf } from "lucide-react";

function RatingStars({ rating = 0, maxStars = 5, showScore = false }) {
  const normalizedRating = Math.max(0, Math.min(rating, maxStars));
  const stars = Array.from({ length: maxStars }, (_, index) => {
    const starNumber = index + 1;
    if (normalizedRating >= starNumber) return "full";
    if (normalizedRating >= starNumber - 0.5) return "half";
    return "empty";
  });

  return (
    <div className="rating-stars">
      {stars.map((type, index) => {
        if (type === "full") {
          return <Star key={index} className="rating-star full" />;
        }
        if (type === "half") {
          return <StarHalf key={index} className="rating-star half" />;
        }
        return <Star key={index} className="rating-star empty" />;
      })}
      {showScore ? (
        <span className="rating-value">{normalizedRating.toFixed(1)}</span>
      ) : null}
    </div>
  );
}

export default RatingStars;
