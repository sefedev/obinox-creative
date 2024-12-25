"use client";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i}>
        {i <= rating ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-yellow-400" // Filled star
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.605l-4.117 3.584 1.27 5.261c.27.993-.166 2.034-1.136 2.034-.496 0-.975-.267-1.137-.681l-4.01-2.427-4.01 2.427c-.163.414-.641.681-1.137.681-.97 0-1.405-1.041-1.136-2.034l1.27-5.26-4.117-3.585c-.887-1.06-.415-2.512.749-2.605l5.405-.434 2.082-5.005z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-300" // Empty star
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.872.952a.562.562 0 01.5.98l-4.208 3.634a.563.563 0 00-.132.505l1.593 6.602a.562.562 0 01-1 .577l-5.342-3.068a.562.562 0 00-.5 0l-5.342 3.068a.562.562 0 01-1-.577l1.593-6.602a.563.563 0 00-.132-.505l-4.208-3.634a.562.562 0 01.5-.98l5.872-.952a.562.562 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        )}
      </span>
    );
  }
  return <div className="flex">{stars}</div>;
};

export default StarRating;
