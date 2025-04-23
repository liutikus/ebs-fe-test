

type StarRatingProps = {
  rating: number; // e.g. 4.3
  totalStars?: number;
};

export default function StarRating({ rating, totalStars = 5 }: StarRatingProps) {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: totalStars }, (_, i) => {
        const starIndex = i + 1;
        let fill = 'none';

        if (rating >= starIndex) {
          fill = 'currentColor'; // full star
        } else if (rating >= starIndex - 0.5) {
          fill = 'url(#half)'; // half star
        }

        return (
          <svg
            key={i}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={fill}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`text-[#362166]`}
          >
            <defs>
              <linearGradient id="half">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      })}
    </div>
  );
}
