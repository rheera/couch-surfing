import { Country } from "./types";
import { LoyaltyUser } from "./enums";

export interface Property {
  image: string;
  title: string;
  price: number;
  location: {
    firstLine: string;
    city: string;
    code: number | string;
    country: Country;
  };
  contact: [number, string];
  isAvailable: boolean;
}

export interface Review {
  name: string;
  stars: number;
  loyaltyUser: LoyaltyUser;
  date: string;
}
