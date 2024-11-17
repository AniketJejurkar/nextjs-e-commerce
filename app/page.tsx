import Image from "next/image";
import { ProductCards } from "./ui/ProductCards";
import { getTotalPages } from "./lib/actions";
import { Pagination } from "./ui/Pagination";
import { Suspense } from "react";
import { ProductCardsSkeleton } from "./ui/Skeletons";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = getTotalPages(query);
  return (
    <>
      <Suspense key={query + currentPage} fallback={<ProductCardsSkeleton />}>
        <ProductCards query={query} currentPage={currentPage} />
      </Suspense>
      <Pagination totalPages={totalPages} />
    </>
  );
}
