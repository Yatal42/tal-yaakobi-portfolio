export type ReviewStatus = "pending" | "approved" | "rejected";

export interface Review {
  id: string;
  name: string;
  role: string;
  message: string;
  rating: number;
  status: ReviewStatus;
  createdAt: string;
}

export interface ReviewInput {
  name: string;
  role: string;
  message: string;
  rating: number;
}
