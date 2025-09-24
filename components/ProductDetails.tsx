import { Product } from "@/sanity.types";
import React from "react";

const ProductDetails = async ({
  product,
}: {
  product: Product | null | undefined;
}) => {
  return (
    <>
      <div
        className="flex space-x-1 rounded-xl bg-shop_dark_green/10 p-1"
        role="tablist "
        aria-orientation="horizontal"
      >
        <button
          className="w-full rounded-lg py-2.5 text-xs md:text-sm leading-5 text-dark-color tracking-wide ring-white ring-opacity-60 ring-offset-2 ring-offset-shop_dark_green focus:outline-hidden focus:ring-2 bg-white shadow-sm text-shop_dark_green font-semibold"
          id="headlessui-tabs-tab-_r_o_"
          role="tab"
          type="button"
          aria-selected="true"
          tabIndex="0"
          data-headlessui-state="selected"
          aria-controls="headlessui-tabs-panel-_r_u_"
          data-selected=""
        >
          Description
        </button>

        <button
          className="w-full rounded-lg py-2.5 text-xs md:text-sm leading-5 text-dark-color font-medium tracking-wide ring-white ring-opacity-60 ring-offset-2 ring-offset-shop_dark_green focus:outline-hidden focus:ring-2 text-blue-100 hover:bg-white/12 hover:text-shop_dark_green"
          id="headlessui-tabs-tab-_r_q_"
          role="tab"
          type="button"
          aria-selected="false"
          tabIndex="-1"
          data-headlessui-state=""
          aria-controls="headlessui-tabs-panel-_r_10_"
        >
          Additional Information
        </button>

        <button
          className="w-full rounded-lg py-2.5 text-xs md:text-sm leading-5 text-dark-color font-medium tracking-wide ring-white ring-opacity-60 ring-offset-2 ring-offset-shop_dark_green focus:outline-hidden focus:ring-2 text-blue-100 hover:bg-white/12 hover:text-shop_dark_green"
          id="headlessui-tabs-tab-_r_s_"
          role="tab"
          type="button"
          aria-selected="false"
          tabIndex="-1"
          data-headlessui-state=""
          aria-controls="headlessui-tabs-panel-_r_12_"
        >
          Reviews
        </button>

        <div className="mt-2">
          <div
            className="rounded-xl bg-white py-3 space-y-4"
            role="tabpanel"
            aria-labelledby="headlessui-tabs-tab-r_o"
            tabIndex="0"
            data-headlessui-state="selected"
            data-selected=""
          >
            <div className="relative rounded-md">
              <p className="mt-1 text-sm text-gray-600 whitespace-pre-line">
                {product?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
