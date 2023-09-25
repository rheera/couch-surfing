import { Review } from "../types/interfaces";

export function top2Reviews(reviews: Review[]) {
  return reviews.sort((a, b) => b.stars - a.stars).slice(0, 2);
}

export function getLatestReview(reviews: Review[]) {
  return reviews.sort((a, b) => a.date.localeCompare(b.date))[0];
}
