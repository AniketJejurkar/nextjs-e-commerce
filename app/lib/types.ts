export interface ProductType {
  id: number;
  name: string;
  price: number;
}

export interface UserType {
  id: number;
  username: string;
  email: string;
  password: string;
  refreshToken?: string;
}
