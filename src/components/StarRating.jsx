export default function StarRating({ rating }) {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;
  const totalStars = 5;

  return (
    <div className="d-flex align-items-center">
      {[...Array(totalStars)].map((_, idx) => {
        if (idx < filledStars) {
          return <i key={idx} className="bi bi-star-fill text-primary"></i>;
        } else if (idx === filledStars && hasHalfStar) {
          return <i key={idx} className="bi bi-star-half text-primary"></i>;
        } else {
          return <i key={idx} className="bi bi-star text-primary"></i>;
        }
      })}
    </div>
  );
}
