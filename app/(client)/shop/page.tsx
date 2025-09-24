import { getAllBrands, getCategories } from "@/sanity/queries";
import React from "react";

const shopPage = async () => {
  const categories = await getCategories();
  const brands = await getAllBrands();

  return <div className="bg-white">shopPage</div>;
};

export default shopPage;
