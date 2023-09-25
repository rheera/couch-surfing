import { Review } from "../types/interfaces";
import { LoyaltyUser } from "../types/enums";
import "../scss/FeaturedProperty.scss";

export default function FeaturedProperty(props: {
  totalReviews: number;
  latestReview: Review;
}) {
  let sOrNoS: string;
  switch (props.totalReviews) {
    case 1:
      sOrNoS = "";
      break;
    default:
      sOrNoS = "s";
  }
  return (
    <>
      <div className="main-image">
        <img src="images/italian-property.jpg" />
      </div>
      <h5 id="reviews">
        {props.totalReviews} review{sOrNoS} | last reviewed by{" "}
        {props.latestReview.name}{" "}
        {props.latestReview.loyaltyUser === LoyaltyUser.GOLD_USER ? "⭐️" : ""}
      </h5>
    </>
  );
}
