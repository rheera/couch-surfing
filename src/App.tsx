import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import FeaturedProperty from "./components/FeaturedProperty";
import { reviews } from "./assets/data/reviews";
import { you } from "./assets/data/user";
import { properties } from "./assets/data/properties";
import { top2Reviews, getLatestReview } from "./utils/functionsForReviews";
import "./scss/App.scss";

function App() {
  const [allReviews, setAllReviews] = useState(reviews);
  const [user, setUser] = useState(you);
  const [showReviews, setShowReviews] = useState(false);

  const displayTop2 = top2Reviews(allReviews).map((review) => (
    <div className="review-card" key={review.name}>
      {review.stars} stars from {review.name}
    </div>
  ));

  const displayProperties = properties.map((property) => (
    <Card
      key={property.title}
      title={property.title}
      image={property.image}
      price={property.price}
    />
  ));

  return (
    <>
      <Navbar name={user.firstName} isReturning={user.isReturning} />
      <div className="container">
        <section className="featured-property">
          <FeaturedProperty
            totalReviews={allReviews.length}
            latestReview={getLatestReview(allReviews)}
          />
          <div className="reviews"> {showReviews && displayTop2}</div>
          {!showReviews && (
            <button
              onClick={() =>
                setShowReviews((prevShowReviews) => !prevShowReviews)
              }
            >
              Get reviews
            </button>
          )}
        </section>

        <div className="break"></div>
        <section className="other-properties">
          <h3>Other Properties recommended to you:</h3>
          <div className="properties">{displayProperties}</div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
