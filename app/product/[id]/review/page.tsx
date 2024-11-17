import ProductReview from "@/app/ui/ProductReview";
import { ProductReviewSkeleton } from "@/app/ui/Skeletons";
import React, { Suspense } from "react";

export default function page({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<ProductReviewSkeleton />}>
      <ProductReview id={params.id} />
    </Suspense>
  );
}
