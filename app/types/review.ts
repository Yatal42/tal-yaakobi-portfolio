export interface Review {
  id: string;
  name: string;
  role: string;
  message: string;
  rating: number;
}

export interface ReviewInput {
  name: string;
  role: string;
  message: string;
  rating: number;
}
