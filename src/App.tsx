import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { reviews } from "./assets/data/reviews";
import "./scss/App.scss";

function App() {
  const [allReviews, setAllReviews] = useState(reviews);

  const displayReviews = allReviews.map((review) => (
    <h5 key={review.name} className="review-user">
      {review.name}
    </h5>
  ));

  return (
    <>
      <Navbar />
      <div className="container">
        <h5 id="reviews"></h5>
        {displayReviews}
      </div>
      <Footer />
    </>
  );
}

export default App;
