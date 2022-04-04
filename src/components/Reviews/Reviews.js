import React from "react";
import user from "../../Assets/img/user.jpg";
import Rating from "react-rating";
import { AiFillStar } from "react-icons/ai";
import useReviews from "../../Hooks/useReviews";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div className="px-4 pt-10 pb-24 mx-auto max-w-7xl md:px-2">
      <h1 className="text-3xl text-center border-2 mb-10 text-orange-600">
        What Our Customer Say!
      </h1>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {reviews.map((review) => (
          <div className="bg-orange-600 border-radius-4 text-white px-5 py-3 rounded-2 border-4">
            <img
              className="w-14 h-14 m-auto rounded-full"
              src={user}
              alt="ledger-nano-x"
            />
            <h2 className="text-2xl text-center mt-2">{review.name}</h2>
            <h3 className="text-center mt-2">{review.description}</h3>
            <div className="text-center mt-5">
              <Rating
                initialRating={4.5}
                emptySymbol={<AiFillStar />}
                fullSymbol={
                  <AiFillStar
                    style={{ color: "goldenrod" }}
                    icon={AiFillStar}
                  />
                }
                readonly
              ></Rating>
              <p>{review.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
