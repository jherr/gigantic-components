import { StarIcon } from "@heroicons/react/20/solid";

import { product, reviews } from "@/data";

import { classNames } from "@/utils";

export function ProductInfo() {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-xl font-medium text-gray-900">{product.name}</h1>
        <p className="text-xl font-medium text-gray-900">{product.price}</p>
      </div>
      <div className="mt-4">
        <h2 className="sr-only">Reviews</h2>
        <div className="flex items-center">
          <p className="text-sm text-gray-700">
            {reviews.average}
            <span className="sr-only"> out of 5 stars</span>
          </p>
          <div className="ml-1 flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={classNames(
                  reviews.average > rating
                    ? "text-yellow-400"
                    : "text-gray-200",
                  "h-5 w-5 flex-shrink-0"
                )}
                aria-hidden="true"
              />
            ))}
          </div>
          <div aria-hidden="true" className="ml-4 text-sm text-gray-300">
            ·
          </div>
          <div className="ml-4 flex">
            <a
              href="#"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              See all {reviews.totalCount} reviews
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
