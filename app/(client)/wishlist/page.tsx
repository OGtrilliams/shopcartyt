import NoAccess from "@/components/NoAccess";
import WishListProducts from "@/components/WishListProducts";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const WishlistPage = async () => {
  const user = await currentUser();

  return (
    <>
      {user ? (
        <WishListProducts />
      ) : (
        <NoAccess details="Login to view your wishlist. Don't miss out on cart products to make a payment!" />
      )}
    </>
  );
};

export default WishlistPage;
