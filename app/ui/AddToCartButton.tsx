"use client";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";

export default function AddToCart({ id }: { id: number }) {
  const [itemAddedToCart, setItemAddedToCart] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [cartItems, setCartItems] = useState<number[]>([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    );
    setCartItems(storedCartItems);
    setItemAddedToCart(storedCartItems.includes(id));
  }, [id]);

  const addToLocalStorage = () => {
    let updatedCartItems: number[];
    const storedCartItems: number[] = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    );
    if (storedCartItems.includes(id)) {
      updatedCartItems = storedCartItems.filter((item) => item !== id);

      setMessage("Item removed from cart.");
    } else {
      updatedCartItems = [...storedCartItems, id];

      setMessage("Item added to cart.");
    }
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
    setItemAddedToCart(updatedCartItems.includes(id));
  };

  useEffect(() => {
    // Clear any existing timeout when message is updated
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (message) {
      timeoutRef.current = setTimeout(() => {
        setMessage(null);
      }, 2000);
    }

    // Cleanup on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [message]);
  return (
    <>
      {message && (
        <div className=" fixed   w-svw  top-0 right-0 flex py-2 justify-center items-center">
          <div
            id="alert-1"
            className={clsx(
              "flex items-center p-4 mb-4  rounded-lg w-96",
              itemAddedToCart
                ? "bg-green-50 text-green-800 "
                : "bg-red-50  text-red-800 "
            )}
            role="alert"
          >
            <svg
              className="flex-shrink-0 w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div className="ms-3 text-sm font-medium">{message}</div>
            <button
              type="button"
              className={clsx(
                "ms-auto -mx-1.5 -my-1.5  rounded-lg focus:ring-2 p-1.5 inline-flex items-center justify-center h-8 w-8",
                itemAddedToCart
                  ? "hover:bg-green-200 focus:ring-green-400 bg-green-50 text-green-500 "
                  : "bg-red-50  text-red-500  hover:bg-red-200 focus:ring-red-400 "
              )}
              data-dismiss-target="#alert-1"
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={addToLocalStorage}
        className={clsx(
          "inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-medium text-white  focus:outline-none focus:ring-2   dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
          itemAddedToCart
            ? "bg-red-500 hover:bg-red-600 focus:ring-red-300"
            : "bg-primary-700 hover:bg-primary-800 focus:ring-primary-300"
        )}
      >
        {itemAddedToCart ? (
          <>
            <svg
              className="-ms-2 me-2 h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.1 8.5L12 6.4L9.9 8.5L8.5 7.1L10.6 5L8.5 2.9l1.4-1.4L12 3.6l2.1-2.1l1.4 1.4L13.4 5l2.1 2.1zM7 18c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m10 0c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m-9.8-3.2c0 .1.1.2.2.2H19v2H7c-1.1 0-2-.9-2-2c0-.4.1-.7.2-1l1.3-2.4L3 4H1V2h3.3l4.3 9h7l3.9-7l1.7 1l-3.9 7c-.3.6-1 1-1.7 1H8.1l-.9 1.6z"
              />
            </svg>
            Remove from cart
          </>
        ) : (
          <>
            <svg
              className="-ms-2 me-2 h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
              />
            </svg>
            Add to cart
          </>
        )}
      </button>
    </>
  );
}
