"use client";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import Link from "next/link";
import { ProductType } from "../lib/types";

export const Navbar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [requiredCartItems, setRequiredCartItems] = useState<ProductType[]>([]);
  const [cartItemsCount, setCartItemsCount] = useState<number>(0);
  useEffect(() => {
    const updateCartItemsCount = () => {
      const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
      setCartItemsCount(cartItems.length);
    };

    updateCartItemsCount();
    const interval = setInterval(updateCartItemsCount, 500);

    return () => clearInterval(interval);
  }, []);

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen((prevState) => {
      const newState = !prevState;
      if (!newState) {
        setIsNavbarOpen(false);
      }
      return newState;
    });
  };

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`/${pathname}?${params.toString()}`);
  }, 300);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
    if (!isNavbarOpen) {
      setIsUserDropdownOpen(false);
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-800 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="shrink-0">
              <Link href="#" title="" className="">
                <img
                  className="hidden md:block w-auto h-8 dark:hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg"
                  alt=""
                />
                <img
                  className="block md:hidden w-auto h-8 dark:block"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg"
                  alt=""
                />
              </Link>
            </div>

            <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
              <li>
                <Link
                  href="/"
                  title=""
                  className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/product/1"
                  title=""
                  className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href="/product/100"
                  title=""
                  className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                >
                  Error
                </Link>
              </li>
            </ul>
          </div>
          {pathname === "/" ? (
            <div>
              <form className="flex items-center max-w-sm  mx-4">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    onChange={(e) => {
                      handleSearch(e.target.value);
                    }}
                    defaultValue={searchParams.get("query")?.toString()}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search branch name..."
                    required
                  />
                </div>
              </form>
            </div>
          ) : null}
          {isLogin ? (
            <div className="flex items-center relative lg:space-x-2">
              <Link href="/view-cart">
                <button
                  id="myCartDropdownButton1"
                  type="button"
                  className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
                >
                  <span className="sr-only">My Cart</span>
                  <div className="absolute left-5 bottom-6">
                    <span className=" flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                      {cartItemsCount}
                    </span>
                  </div>
                  <svg
                    className="w-6 h-6 lg:me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                    />
                  </svg>
                  <span className="hidden sm:flex ">My Cart</span>
                </button>
              </Link>

              <button
                id="myCartDropdownButton2"
                type="button"
                onClick={toggleUserDropdown}
                className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
              >
                <svg
                  className="w-5 h-5 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <span className="hidden sm:flex">Account</span>
                <svg
                  className="w-4 h-4 text-gray-900 dark:text-white ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>

              {isUserDropdownOpen ? (
                <div
                  id="userdropdown"
                  className="z-10 mx-auto max-w-sm space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg dark:bg-gray-800 absolute right-0 top-14"
                >
                  <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                    <li>
                      <Link
                        href="#"
                        title=""
                        className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        {" "}
                        My Account{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        title=""
                        className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        {" "}
                        My Orders{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        title=""
                        className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        {" "}
                        Settings{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        title=""
                        className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        {" "}
                        Favourites{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        title=""
                        className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        {" "}
                        Delivery Addresses{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        title=""
                        className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        {" "}
                        Billing Data{" "}
                      </Link>
                    </li>
                  </ul>

                  <div className="p-2 text-sm font-medium text-gray-900 dark:text-white">
                    <Link
                      href="#"
                      title=""
                      className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      {" "}
                      Sign Out{" "}
                    </Link>
                  </div>
                </div>
              ) : null}
              <button
                type="button"
                data-collapse-toggle="ecommerce-navbar-menu-1"
                aria-controls="ecommerce-navbar-menu-1"
                aria-expanded={isNavbarOpen}
                onClick={toggleNavbar}
                className="inline-flex lg:hidden  items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700  p-2 text-gray-900 dark:text-white"
              >
                <span className="sr-only">Open Menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M5 7h14M5 12h14M5 17h14"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <div className="flex items-center lg:space-x-2">
              <Link href="/sign-in" className="underline-none">
                <button
                  type="button"
                  className="text-white bg-gray-700
               hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-xl text-sm px-8 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-900 dark:focus:ring-gray-700 dark:border-gray-700 relative top-1 right-100 "
                >
                  Login
                </button>
              </Link>
              <button
                type="button"
                data-collapse-toggle="ecommerce-navbar-menu-1"
                aria-controls="ecommerce-navbar-menu-1"
                aria-expanded={isNavbarOpen}
                onClick={toggleNavbar}
                className="inline-flex lg:hidden  items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700  p-2 text-gray-900 dark:text-white"
              >
                <span className="sr-only">Open Menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M5 7h14M5 12h14M5 17h14"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        {isNavbarOpen ? (
          <div
            id="ecommerce-navbar-menu-1"
            className="z-10 mx-auto max-w-sm space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg dark:bg-gray-800 absolute right-0 top-14 lg:hidden"
          >
            <ul className="text-gray-900 dark:text-white text-sm font-medium  space-y-3">
              <li>
                <Link
                  href="#"
                  className="hover:text-primary-700 dark:hover:text-primary-500"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="hover:text-primary-700 dark:hover:text-primary-500"
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary-700 dark:hover:text-primary-500"
                >
                  Home & Garden
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </nav>
  );
};
