import { fetchProductById } from "@/app/lib/actions";
import ProductImageComponent from "@/app/ui/ProductImageGallery";
import ProductOverview from "@/app/ui/ProductOverview";
import { ProductDetailsSkeleton } from "@/app/ui/Skeletons";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const Page = async (props: { params: { id: number } }) => {
  const id = props.params.id;
  return (
    <Suspense fallback={<ProductDetailsSkeleton />}>
      <ProductOverview id={id} />
    </Suspense>
  );
};

export default Page;
