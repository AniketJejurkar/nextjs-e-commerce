"use client";
import React, { Suspense, useEffect, useState } from "react";
import CartView from "../ui/CartView";
import { CartViewSkeleton } from "../ui/Skeletons";

export default function page() {
  const [cartItems, setCartItems] = useState<number[]>([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    );
    setCartItems(storedCartItems);
    const handleStorageChange = () => {
      const updatedCartItems = JSON.parse(
        localStorage.getItem("cartItems") || "[]"
      );
      setCartItems(updatedCartItems);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  return (
    <Suspense fallback={<CartViewSkeleton />}>
      <CartView cartIds={cartItems} />
    </Suspense>
  );
}
