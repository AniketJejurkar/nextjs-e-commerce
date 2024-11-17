import React from "react";

export function ProductDetailsSkeleton() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* <ProductImageGallery images={images} /> */}
          <ProductImageGallerySkeleton />

          <div className="w-full md:w-1/2 px-4 animate-pulse">
            <div className="block w-56 h-4 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
              &nbsp;
            </div>

            <div
              style={{ width: "30%" }}
              className="block h-3 mb-2 font-sans text-base animate-pulse antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit"
            >
              &nbsp;
            </div>
            <div className="flex items-center my-2 py-2 animate-pulse">
              <svg
                className="size-6 ms-1 text-gray-300 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="size-6 ms-1 text-gray-300 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="size-6 ms-1 text-gray-300 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="size-6 ms-1 text-gray-300 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="size-6 ms-1 text-gray-300 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <div className="animate-pulse my-5">
              <div
                style={{ width: "80%" }}
                className="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit"
              >
                &nbsp;
              </div>
              <div
                style={{ width: "80%" }}
                className="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit"
              >
                &nbsp;
              </div>
              <div
                style={{ width: "80%" }}
                className="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit"
              >
                &nbsp;
              </div>
              <div
                style={{ width: "80%" }}
                className="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit"
              >
                &nbsp;
              </div>
              <div
                style={{ width: "40%" }}
                className="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit"
              >
                &nbsp;
              </div>
              <div
                style={{ width: "20%" }}
                className="block  h-3 my-4 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit"
              >
                &nbsp;
              </div>

              <div className="flex space-x-2 mb-2">
                <button
                  disabled={true}
                  className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none "
                ></button>
                <button
                  disabled={true}
                  className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none "
                ></button>
                <button
                  disabled={true}
                  className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none "
                ></button>
              </div>
              <div
                style={{ width: "12%" }}
                className="block  h-2 mt-4 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit"
              >
                &nbsp;
              </div>
              <div
                style={{ width: "8%" }}
                className="block mt-1 h-6  font-sans text-base antialiased font-light leading-relaxed bg-gray-300  text-inherit"
              >
                &nbsp;
              </div>
            </div>

            <div className="pb-2">
              <button
                disabled={true}
                tabIndex={-1}
                className="align-middle mr-2 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-4 px-6 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 w-40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w- bg-gray-300 shadow-none hover:shadow-none"
                type="button"
              >
                &nbsp;
              </button>
              <button
                disabled={true}
                tabIndex={-1}
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-4 px-6 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 w-40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w- bg-gray-300 shadow-none hover:shadow-none"
                type="button"
              >
                &nbsp;
              </button>
            </div>
            <div
              style={{ width: "20%" }}
              className="block h-3 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit"
            >
              &nbsp;
            </div>
            <ul className="list-none space-y-2 text-gray-300 mt-3">
              <li className="flex items-center ">
                <span className="w-2 h-2 mr-3 bg-gray-300 rounded-full"></span>
                <span
                  style={{ width: "30%" }}
                  className="block h-2 bg-gray-300 rounded-full"
                >
                  &nbsp;
                </span>
              </li>
              <li className="flex items-center ">
                <span className="w-2 h-2 mr-3 bg-gray-300 rounded-full"></span>
                <span
                  style={{ width: "30%" }}
                  className="block h-2 bg-gray-300 rounded-full"
                >
                  &nbsp;
                </span>
              </li>
              <li className="flex items-center ">
                <span className="w-2 h-2 mr-3 bg-gray-300 rounded-full"></span>
                <span
                  style={{ width: "30%" }}
                  className="block h-2 bg-gray-300 rounded-full"
                >
                  &nbsp;
                </span>
              </li>
              <li className="flex items-center ">
                <span className="w-2 h-2 mr-3 bg-gray-300 rounded-full"></span>
                <span
                  style={{ width: "30%" }}
                  className="block h-2 bg-gray-300 rounded-full"
                >
                  &nbsp;
                </span>
              </li>
              <li className="flex items-center ">
                <span className="w-2 h-2 mr-3 bg-gray-300 rounded-full"></span>
                <span
                  style={{ width: "30%" }}
                  className="block h-2 bg-gray-300 rounded-full"
                >
                  &nbsp;
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductCardsSkeleton() {
  return (
    <section className="bg-gray-50 py-2 antialiased dark:bg-gray-900 relative">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0  ">
        <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
          <div>
            <div className="animate-pulse  h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mt-4"></div>
          </div>
        </div>
        <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4 ">
          <div className="relative flex flex-col mt-2 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl  animate-pulse">
            <div className="relative grid h-56 mx-4 mt-4 overflow-hidden text-gray-700 bg-gray-300 bg-clip-border rounded-xl place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="w-12 h-12 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                ></path>
              </svg>
            </div>
            <div className="p-6">
              <div className="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
              <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
              <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
              <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
              <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
            </div>
            <div className="p-6 pt-0 flex justify-between">
              <div className=" flex justify-center items-center ">
                <div className="w-20 h-5 flex justify-center items-center font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                  &nbsp;
                </div>
              </div>
              <button
                disabled={true}
                tabIndex={-1}
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
                type="button"
              >
                &nbsp;
              </button>
            </div>
          </div>
          <div className="relative flex flex-col mt-2 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl  animate-pulse">
            <div className="relative grid h-56 mx-4 mt-4 overflow-hidden text-gray-700 bg-gray-300 bg-clip-border rounded-xl place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="w-12 h-12 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                ></path>
              </svg>
            </div>
            <div className="p-6">
              <div className="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
              <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
              <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
              <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
              <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
            </div>
            <div className="p-6 pt-0 flex justify-between">
              <div className=" flex justify-center items-center ">
                <div className="w-20 h-5 flex justify-center items-center font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                  &nbsp;
                </div>
              </div>
              <button
                disabled={true}
                tabIndex={-1}
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
                type="button"
              >
                &nbsp;
              </button>
            </div>
          </div>
          <div className="relative flex flex-col mt-2 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl  animate-pulse">
            <div className="relative grid h-56 mx-4 mt-4 overflow-hidden text-gray-700 bg-gray-300 bg-clip-border rounded-xl place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="w-12 h-12 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                ></path>
              </svg>
            </div>
            <div className="p-6">
              <div className="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
              <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
              <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
              <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
              <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
            </div>
            <div className="p-6 pt-0 flex justify-between">
              <div className=" flex justify-center items-center ">
                <div className="w-20 h-5 flex justify-center items-center font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                  &nbsp;
                </div>
              </div>
              <button
                disabled={true}
                tabIndex={-1}
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
                type="button"
              >
                &nbsp;
              </button>
            </div>
          </div>
          <div className="relative flex flex-col mt-2 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl  animate-pulse">
            <div className="relative grid h-56 mx-4 mt-4 overflow-hidden text-gray-700 bg-gray-300 bg-clip-border rounded-xl place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="w-12 h-12 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                ></path>
              </svg>
            </div>
            <div className="p-6">
              <div className="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
              <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
              <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
              <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
              <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
            </div>
            <div className="p-6 pt-0 flex justify-between">
              <div className=" flex justify-center items-center ">
                <div className="w-20 h-5 flex justify-center items-center font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                  &nbsp;
                </div>
              </div>
              <button
                disabled={true}
                tabIndex={-1}
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
                type="button"
              >
                &nbsp;
              </button>
            </div>
          </div>
          <div className="relative flex flex-col mt-2 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl  animate-pulse">
            <div className="relative grid h-56 mx-4 mt-4 overflow-hidden text-gray-700 bg-gray-300 bg-clip-border rounded-xl place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="w-12 h-12 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                ></path>
              </svg>
            </div>
            <div className="p-6">
              <div className="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
              <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
              <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
              <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
              <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
            </div>
            <div className="p-6 pt-0 flex justify-between">
              <div className=" flex justify-center items-center ">
                <div className="w-20 h-5 flex justify-center items-center font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                  &nbsp;
                </div>
              </div>
              <button
                disabled={true}
                tabIndex={-1}
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
                type="button"
              >
                &nbsp;
              </button>
            </div>
          </div>
          <div className="relative flex flex-col mt-2 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl  animate-pulse">
            <div className="relative grid h-56 mx-4 mt-4 overflow-hidden text-gray-700 bg-gray-300 bg-clip-border rounded-xl place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="w-12 h-12 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                ></path>
              </svg>
            </div>
            <div className="p-6">
              <div className="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
              <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
              <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
              <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
              <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
            </div>
            <div className="p-6 pt-0 flex justify-between">
              <div className=" flex justify-center items-center ">
                <div className="w-20 h-5 flex justify-center items-center font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                  &nbsp;
                </div>
              </div>
              <button
                disabled={true}
                tabIndex={-1}
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
                type="button"
              >
                &nbsp;
              </button>
            </div>
          </div>
          <div className="relative flex flex-col mt-2 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl  animate-pulse">
            <div className="relative grid h-56 mx-4 mt-4 overflow-hidden text-gray-700 bg-gray-300 bg-clip-border rounded-xl place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="w-12 h-12 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                ></path>
              </svg>
            </div>
            <div className="p-6">
              <div className="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
              <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
              <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
              <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
              <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
            </div>
            <div className="p-6 pt-0 flex justify-between">
              <div className=" flex justify-center items-center ">
                <div className="w-20 h-5 flex justify-center items-center font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                  &nbsp;
                </div>
              </div>
              <button
                disabled={true}
                tabIndex={-1}
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
                type="button"
              >
                &nbsp;
              </button>
            </div>
          </div>
          <div className="relative flex flex-col mt-2 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl  animate-pulse">
            <div className="relative grid h-56 mx-4 mt-4 overflow-hidden text-gray-700 bg-gray-300 bg-clip-border rounded-xl place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="w-12 h-12 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                ></path>
              </svg>
            </div>
            <div className="p-6">
              <div className="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
              <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
              <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
              <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
              <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                &nbsp;
              </div>
            </div>
            <div className="p-6 pt-0 flex justify-between">
              <div className=" flex justify-center items-center ">
                <div className="w-20 h-5 flex justify-center items-center font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                  &nbsp;
                </div>
              </div>
              <button
                disabled={true}
                tabIndex={-1}
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
                type="button"
              >
                &nbsp;
              </button>
            </div>
          </div>
          ;
        </div>
      </div>
    </section>
  );
}

export function ProductImageGallerySkeleton() {
  return (
    <div className="w-full md:w-1/2 px-4 mb-8 animate-pulse">
      <div className="flex items-center justify-center h-80 w-full  rounded-lg shadow-md mb-4 bg-gray-300 ">
        <svg
          className="w-10 h-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>

      <div className="flex gap-4 py-4 justify-center overflow-x-auto">
        <div className="flex items-center  justify-center   rounded-lg shadow-md mb-4 bg-gray-300 size-16 sm:size-20  dark:bg-gray-700">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="flex items-center  justify-center   rounded-lg shadow-md mb-4 bg-gray-300 size-16 sm:size-20  dark:bg-gray-700">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="flex items-center  justify-center   rounded-lg shadow-md mb-4 bg-gray-300 size-16 sm:size-20  dark:bg-gray-700">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="flex items-center  justify-center   rounded-lg shadow-md mb-4 bg-gray-300 size-16 sm:size-20  dark:bg-gray-700">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="flex items-center  justify-center   rounded-lg shadow-md mb-4 bg-gray-300 size-16 sm:size-20  dark:bg-gray-700">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>

        {/* <img
            src={images[0]}
            onClick={() => changeImage(images[0])}
            alt="Thumbnail 1"
            className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
          />
          <img
            src={images[1]}
            alt="Thumbnail 2"
            onClick={() => changeImage(images[1])}
            className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
          />
          <img
            src={images[2]}
            alt="Thumbnail 3"
            onClick={() => changeImage(images[2])}
            className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
          />
          <img
            src={images[3]}
            onClick={() => changeImage(images[3])}
            alt="Thumbnail 4"
            className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
          />
          <img
            src={images[4]}
            onClick={() => changeImage(images[4])}
            alt="Thumbnail 5"
            className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
          /> */}
      </div>
    </div>
  );
}

export function CartViewSkeleton() {
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900  animate-pulse">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div
          style={{ width: "10%" }}
          className=" h-5 flex justify-center items-center font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit"
        >
          &nbsp;
        </div>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              <div className="rounded-lg   bg-gray-100 p-4 shadow-sm   md:p-6">
                <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                  <div className="flex items-center justify-center h-20 w-20  rounded-lg shadow-md mb-4 bg-gray-300 ">
                    <svg
                      className="w-10 h-10 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between md:order-3 md:justify-end">
                    <div className="flex items-center">
                      <button
                        type="button"
                        disabled={true}
                        id="increment-button"
                        data-input-counter-increment="counter-input"
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border bg-gray-200"
                      ></button>

                      <div className="h-5 mx-1 bg-gray-200 rounded-full dark:bg-gray-700 w-6"></div>
                      <button
                        type="button"
                        disabled={true}
                        id="increment-button"
                        data-input-counter-increment="counter-input"
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border bg-gray-200"
                      ></button>
                    </div>
                    <div className="text-end md:order-4 md:w-32 flex justify-end items-center">
                      <div className="h-5  bg-gray-200 rounded-full dark:bg-gray-700 w-16 "></div>
                    </div>
                  </div>

                  <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>

                    <div className="flex items-center gap-4">
                      <button
                        disabled={true}
                        tabIndex={-1}
                        className=" align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-36 bg-gray-300 shadow-none hover:shadow-none"
                        type="button"
                      >
                        &nbsp;
                      </button>
                      <button
                        disabled={true}
                        tabIndex={-1}
                        className=" align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-24 bg-gray-300 shadow-none hover:shadow-none"
                        type="button"
                      >
                        &nbsp;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg   bg-gray-100 p-4 shadow-sm   md:p-6">
                <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                  <div className="flex items-center justify-center h-20 w-20  rounded-lg shadow-md mb-4 bg-gray-300 ">
                    <svg
                      className="w-10 h-10 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between md:order-3 md:justify-end">
                    <div className="flex items-center">
                      <button
                        type="button"
                        disabled={true}
                        id="increment-button"
                        data-input-counter-increment="counter-input"
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border bg-gray-200"
                      ></button>

                      <div className="h-5 mx-1 bg-gray-200 rounded-full dark:bg-gray-700 w-6"></div>
                      <button
                        type="button"
                        disabled={true}
                        id="increment-button"
                        data-input-counter-increment="counter-input"
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border bg-gray-200"
                      ></button>
                    </div>
                    <div className="text-end md:order-4 md:w-32 flex justify-end items-center">
                      <div className="h-5  bg-gray-200 rounded-full dark:bg-gray-700 w-16 "></div>
                    </div>
                  </div>

                  <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>

                    <div className="flex items-center gap-4">
                      <button
                        disabled={true}
                        tabIndex={-1}
                        className=" align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-36 bg-gray-300 shadow-none hover:shadow-none"
                        type="button"
                      >
                        &nbsp;
                      </button>
                      <button
                        disabled={true}
                        tabIndex={-1}
                        className=" align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-24 bg-gray-300 shadow-none hover:shadow-none"
                        type="button"
                      >
                        &nbsp;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg   bg-gray-100 p-4 shadow-sm   md:p-6">
                <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                  <div className="flex items-center justify-center h-20 w-20  rounded-lg shadow-md mb-4 bg-gray-300 ">
                    <svg
                      className="w-10 h-10 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between md:order-3 md:justify-end">
                    <div className="flex items-center">
                      <button
                        type="button"
                        disabled={true}
                        id="increment-button"
                        data-input-counter-increment="counter-input"
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border bg-gray-200"
                      ></button>

                      <div className="h-5 mx-1 bg-gray-200 rounded-full dark:bg-gray-700 w-6"></div>
                      <button
                        type="button"
                        disabled={true}
                        id="increment-button"
                        data-input-counter-increment="counter-input"
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border bg-gray-200"
                      ></button>
                    </div>
                    <div className="text-end md:order-4 md:w-32 flex justify-end items-center">
                      <div className="h-5  bg-gray-200 rounded-full dark:bg-gray-700 w-16 "></div>
                    </div>
                  </div>

                  <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>

                    <div className="flex items-center gap-4">
                      <button
                        disabled={true}
                        tabIndex={-1}
                        className=" align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-36 bg-gray-300 shadow-none hover:shadow-none"
                        type="button"
                      >
                        &nbsp;
                      </button>
                      <button
                        disabled={true}
                        tabIndex={-1}
                        className=" align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-24 bg-gray-300 shadow-none hover:shadow-none"
                        type="button"
                      >
                        &nbsp;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg   bg-gray-100 p-4 shadow-sm   md:p-6">
                <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                  <div className="flex items-center justify-center h-20 w-20  rounded-lg shadow-md mb-4 bg-gray-300 ">
                    <svg
                      className="w-10 h-10 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between md:order-3 md:justify-end">
                    <div className="flex items-center">
                      <button
                        type="button"
                        disabled={true}
                        id="increment-button"
                        data-input-counter-increment="counter-input"
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border bg-gray-200"
                      ></button>

                      <div className="h-5 mx-1 bg-gray-200 rounded-full dark:bg-gray-700 w-6"></div>
                      <button
                        type="button"
                        disabled={true}
                        id="increment-button"
                        data-input-counter-increment="counter-input"
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border bg-gray-200"
                      ></button>
                    </div>
                    <div className="text-end md:order-4 md:w-32 flex justify-end items-center">
                      <div className="h-5  bg-gray-200 rounded-full dark:bg-gray-700 w-16 "></div>
                    </div>
                  </div>

                  <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>

                    <div className="flex items-center gap-4">
                      <button
                        disabled={true}
                        tabIndex={-1}
                        className=" align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-36 bg-gray-300 shadow-none hover:shadow-none"
                        type="button"
                      >
                        &nbsp;
                      </button>
                      <button
                        disabled={true}
                        tabIndex={-1}
                        className=" align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-24 bg-gray-300 shadow-none hover:shadow-none"
                        type="button"
                      >
                        &nbsp;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border bg-gray-100 p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-36 mb-2"></div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-28 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2"></div>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-14 mb-2"></div>
                  </dl>
                  <dl className="flex items-center justify-between gap-4">
                    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-16 mb-2"></div>
                  </dl>
                  <dl className="flex items-center justify-between gap-4">
                    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2"></div>
                  </dl>
                </div>

                <dl className="flex items-center justify-between gap-4 ">
                  <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-16 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-2"></div>
                </dl>
              </div>

              <button
                disabled={true}
                tabIndex={-1}
                className=" align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-full bg-gray-300 shadow-none hover:shadow-none"
                type="button"
              >
                &nbsp;
              </button>

              <div className="flex items-center justify-center gap-2">
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const ProductReviewSkeleton = () => {
  return (
    <section className="bg-white py-4 antialiased dark:bg-gray-900  animate-pulse">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="flex items-center justify-start gap-2">
          <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-2"></div>

          <div className=" flex items-center gap-2 sm:mt-0">
            <div className="flex items-center gap-0.5">
              <svg
                className="h-4 w-4 text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <svg
                className="h-4 w-4 text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <svg
                className="h-4 w-4 text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <svg
                className="h-4 w-4 text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <svg
                className="h-4 w-4 text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="my-6 gap-8 sm:flex sm:items-start md:my-8">
          <div className="shrink-0 space-y-4">
            <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-28 mb-2"></div>
            <button
              disabled={true}
              tabIndex={-1}
              className=" align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-full bg-gray-300 shadow-none hover:shadow-none"
              type="button"
            >
              &nbsp;
            </button>
          </div>

          <div className="mt-6 min-w-0 flex-1 space-y-3 sm:mt-0">
            <div className="flex items-center gap-2">
              <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-400 dark:text-white">
                5
              </p>
              <svg
                className="h-4 w-4 shrink-0 text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                <div
                  className="h-1.5 rounded-full bg-gray-300"
                  style={{ width: "20%" }}
                ></div>
              </div>
              <a
                href="#"
                className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left"
              ></a>
            </div>

            <div className="flex items-center gap-2">
              <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-400 dark:text-white">
                4
              </p>
              <svg
                className="h-4 w-4 shrink-0 text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                <div
                  className="h-1.5 rounded-full bg-gray-300"
                  style={{ width: "60%" }}
                ></div>
              </div>
              <a
                href="#"
                className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left"
              ></a>
            </div>

            <div className="flex items-center gap-2">
              <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-400 dark:text-white">
                3
              </p>
              <svg
                className="h-4 w-4 shrink-0 text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                <div
                  className="h-1.5 rounded-full bg-gray-300"
                  style={{ width: "15%" }}
                ></div>
              </div>
              <a
                href="#"
                className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left"
              ></a>
            </div>

            <div className="flex items-center gap-2">
              <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-400 dark:text-white">
                2
              </p>
              <svg
                className="h-4 w-4 shrink-0 text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                <div
                  className="h-1.5 rounded-full bg-gray-300"
                  style={{ width: "5%" }}
                ></div>
              </div>
              <a
                href="#"
                className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left"
              ></a>
            </div>

            <div className="flex items-center gap-2">
              <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-400 dark:text-white">
                1
              </p>
              <svg
                className="h-4 w-4 shrink-0 text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
                <div
                  className="h-1.5 rounded-full bg-gray-300"
                  style={{ width: "0%" }}
                ></div>
              </div>
              <a
                href="#"
                className="w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left"
              ></a>
            </div>
          </div>
        </div>
        <div className="mt-6 divide-y divide-gray-200 dark:divide-gray-700 pt-4">
          <div className="gap-3 pb-6 sm:flex sm:items-start">
            <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
              <div className="flex items-center gap-0.5">
                <svg
                  className="h-4 w-4 text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
              </div>

              <div className="space-y-0.5">
                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
              </div>

              <div className="inline-flex items-center gap-1">
                <svg
                  className="h-5 w-5 text-gray-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p className="text-sm font-medium text-gray-400 dark:text-white">
                  Verified purchase
                </p>
              </div>
            </div>

            <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
              <div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mt-2"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mt-2"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-60 mt-2"></div>
              </div>

              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-gray-400 dark:text-gray-400">
                  Was it helpful to you?
                </p>
                <div className="flex items-center">
                  <input
                    id="reviews-radio-1"
                    type="radio"
                    value=""
                    disabled={true}
                    name="reviews-radio"
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                  />
                  <label
                    htmlFor="reviews-radio-1"
                    className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="reviews-radio-2"
                    type="radio"
                    value=""
                    disabled={true}
                    name="reviews-radio"
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                  />
                  <label
                    htmlFor="reviews-radio-2"
                    className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 divide-y divide-gray-200 dark:divide-gray-700 pt-4">
          <div className="gap-3 pb-6 sm:flex sm:items-start">
            <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
              <div className="flex items-center gap-0.5">
                <svg
                  className="h-4 w-4 text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
              </div>

              <div className="space-y-0.5">
                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
              </div>

              <div className="inline-flex items-center gap-1">
                <svg
                  className="h-5 w-5 text-gray-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p className="text-sm font-medium text-gray-400 dark:text-white">
                  Verified purchase
                </p>
              </div>
            </div>

            <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
              <div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mt-2"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mt-2"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-96 mt-2"></div>
              </div>

              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-gray-400 dark:text-gray-400">
                  Was it helpful to you?
                </p>
                <div className="flex items-center">
                  <input
                    id="reviews-radio-1"
                    type="radio"
                    value=""
                    disabled={true}
                    name="reviews-radio"
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                  />
                  <label
                    htmlFor="reviews-radio-1"
                    className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="reviews-radio-2"
                    type="radio"
                    value=""
                    disabled={true}
                    name="reviews-radio"
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                  />
                  <label
                    htmlFor="reviews-radio-2"
                    className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 divide-y divide-gray-200 dark:divide-gray-700 pt-4">
          <div className="gap-3 pb-6 sm:flex sm:items-start">
            <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
              <div className="flex items-center gap-0.5">
                <svg
                  className="h-4 w-4 text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
              </div>

              <div className="space-y-0.5">
                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
              </div>

              <div className="inline-flex items-center gap-1">
                <svg
                  className="h-5 w-5 text-gray-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p className="text-sm font-medium text-gray-400 dark:text-white">
                  Verified purchase
                </p>
              </div>
            </div>

            <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
              <div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mt-2"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mt-2"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mt-2"></div>
              </div>

              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-gray-400 dark:text-gray-400">
                  Was it helpful to you?
                </p>
                <div className="flex items-center">
                  <input
                    id="reviews-radio-1"
                    type="radio"
                    value=""
                    disabled={true}
                    name="reviews-radio"
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                  />
                  <label
                    htmlFor="reviews-radio-1"
                    className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="reviews-radio-2"
                    type="radio"
                    value=""
                    disabled={true}
                    name="reviews-radio"
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                  />
                  <label
                    htmlFor="reviews-radio-2"
                    className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 divide-y divide-gray-200 dark:divide-gray-700 pt-4">
          <div className="gap-3 pb-6 sm:flex sm:items-start">
            <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
              <div className="flex items-center gap-0.5">
                <svg
                  className="h-4 w-4 text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>

                <svg
                  className="h-4 w-4 text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
              </div>

              <div className="space-y-0.5">
                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
              </div>

              <div className="inline-flex items-center gap-1">
                <svg
                  className="h-5 w-5 text-gray-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p className="text-sm font-medium text-gray-400 dark:text-white">
                  Verified purchase
                </p>
              </div>
            </div>

            <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
              <div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mt-2"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mt-2"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-60 mt-2"></div>
              </div>

              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-gray-400 dark:text-gray-400">
                  Was it helpful to you?
                </p>
                <div className="flex items-center">
                  <input
                    id="reviews-radio-1"
                    type="radio"
                    value=""
                    disabled={true}
                    name="reviews-radio"
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                  />
                  <label
                    htmlFor="reviews-radio-1"
                    className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="reviews-radio-2"
                    type="radio"
                    value=""
                    disabled={true}
                    name="reviews-radio"
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                  />
                  <label
                    htmlFor="reviews-radio-2"
                    className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button
            disabled={true}
            tabIndex={-1}
            className=" align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-32 bg-gray-300 shadow-none hover:shadow-none"
            type="button"
          >
            &nbsp;
          </button>
        </div>
      </div>
    </section>
  );
};
