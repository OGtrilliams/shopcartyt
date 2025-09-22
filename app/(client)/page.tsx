import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "../../components/ProductGrid";
import HomeCategories from "@/components/HomeCategories";
import { getCategories } from "@/sanity/queries";
import ShopByBrands from "@/components/ShopByBrands";

const Home = async () => {
  const categories = await getCategories(6);
  return (
    <Container className="bg-shop-light-pink">
      <HomeBanner />
      <ProductGrid />
      <HomeCategories categories={categories} />
      <ShopByBrands />
    </Container>
  );
};

export default Home;
