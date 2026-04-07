"use client";
import { useState, useEffect } from "react";
import { MoveLeft, MoveRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    verified: true,
    rating: 5,
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    id: 2,
    name: "Alex K.",
    verified: true,
    rating: 5,
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    id: 3,
    name: "James L.",
    verified: true,
    rating: 5,
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    id: 4,
    name: "Mooen",
    verified: true,
    rating: 5,
    review:
      "The quality of the products is outstanding. I've been shopping here for months and every purchase has been worth it. Highly recommend to anyone looking for stylish clothing!",
  },
  {
    id: 5,
    name: "Emily R.",
    verified: true,
    rating: 5,
    review:
      "Shop.co has become my go-to for all my fashion needs. The customer service is excellent and the delivery is always on time. Love the variety and quality!",
  },
];

export default function HappyCustomers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewsPerPage, setReviewsPerPage] = useState(1);

  useEffect(() => {
    // Set initial value based on window width
    const updateReviewsPerPage = () => {
      setReviewsPerPage(window.innerWidth >= 1024 ? 3 : 1);
    };

    updateReviewsPerPage();
    window.addEventListener("resize", updateReviewsPerPage);

    return () => window.removeEventListener("resize", updateReviewsPerPage);
  }, []);

  const maxIndex = Math.max(0, reviews.length - reviewsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-10 sm:py-14 lg:py-[72px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-10 lg:mb-[40px]">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-black tracking-tight">
            OUR HAPPY CUSTOMERS
          </h2>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-4 sm:gap-5">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="hover:opacity-60 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
              aria-label="Previous reviews"
            >
              <MoveLeft className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.5} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="hover:opacity-60 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
              aria-label="Next reviews"
            >
              <MoveRight className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-5"
            style={{
              transform: `translateX(-${currentIndex * (100 / reviewsPerPage + 1.5)}%)`,
            }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="shrink-0 w-full lg:w-[calc(33.333%-14px)] bg-white border border-black/10 rounded-[20px] p-6 sm:p-7 lg:p-8"
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[22.58px] lg:h-[22.58px] text-[#FFC633]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Name with verification */}
                <div className="flex items-center gap-1 mb-3">
                  <h3 className="font-bold text-base sm:text-lg lg:text-xl">
                    {review.name}
                  </h3>
                  {review.verified && (
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>

                {/* Review Text */}
                <p className="text-black/60 text-sm sm:text-base leading-[22px]">
                  &quot;{review.review}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
