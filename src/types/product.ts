
export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  sellerName: string;
  rating: number;
  featured?: "basic" | "pro" | undefined;
}
