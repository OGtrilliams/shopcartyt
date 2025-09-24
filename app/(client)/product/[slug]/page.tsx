import Container from "@/components/Container";
import ImageView from "@/components/ImageView";
import { getProductBySlug } from "@/sanity/queries";
import React from "react";

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  return (
    <Container className="flex flex-col md:flex-row gap-10 pb-10">
      {product?.images && (
        <ImageView images={product?.images} isStock={product?.stock} />
      )}

      <div className="w-full md:w-1/2 flex flex-col gap-5">
        <div className="">
          <h2 className="font-extrabold">{product?.name}</h2>
        </div>
      </div>
    </Container>
  );
};

export default SingleProductPage;
