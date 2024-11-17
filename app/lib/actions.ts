import { products, users } from "./data";
import {
  ACCESS_TOKEN_EXPIRY,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRY,
  REFRESH_TOKEN_SECRET,
} from "./env";
import { ProductType, UserType } from "./types";
import jwt from "jsonwebtoken";
export const fetchProductById = (
  id: number
): Promise<ProductType | null | undefined> => {
  const product = products.find((product) => product.id == id);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(product);
    }, 2000);
  });
};
export const fetchReviews = (
  id: string
): Promise<string[] | null | undefined> => {
  const reviews = ["Nice product", "Bad delivery"];
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(reviews);
    }, 2000);
  });
};

const ITEMS_PER_PAGE = 8;
export const fetchfilteredProducts = async (
  query: string,
  currentPage: number
): Promise<ProductType[] | null> => {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
  const paginatedProducts = filteredProducts.slice(
    offset,
    offset + ITEMS_PER_PAGE
  );
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(paginatedProducts);
    }, 3000);
  });
};

export const getTotalPages = (query: string): number => {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  return totalPages;
};

export const fetchCartItems = (
  cartIds: number[]
): Promise<ProductType[] | null> => {
  const cartItems = products.filter((product) => cartIds.includes(product.id));
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cartItems);
    }, 3000);
  });
};

export const generateRefreshToken = (user: UserType) => {
  return jwt.sign({ id: user.id }, REFRESH_TOKEN_SECRET, {
    expiresIn: REFRESH_TOKEN_EXPIRY,
  });
};

export const generateAccessToken = (user: UserType) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
    },
    ACCESS_TOKEN_SECRET,
    {
      expiresIn: ACCESS_TOKEN_EXPIRY,
    }
  );
};

export const getUserById = async (userId: number) => {
  const user = users[userId];
  return user;
};
export const generateAccessTokenAndRefreshToken = async (userId: number) => {
  const user: UserType = await getUserById(userId);
  const refreshToken = generateRefreshToken(user);
  user.refreshToken = refreshToken;
  const accessToken = generateAccessToken(user);
  return { refreshToken, accessToken };
};
