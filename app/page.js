export const dynamic = "force-dynamic";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Banner from "./_Components/Banner/Banner";
import OurProduct from "./_Components/OurProduct/OurProduct";
import TopCatagories from "./_Components/TopCatagories/TopCatagories";
import SpecialOffers from "./_Components/SpecialOffers/SpecialOffers";
import MakeCall from "./_Components/MakeCall/MakeCall";
import MiniBanner from "./_Components/MiniBanner/MiniBanner";
import BestProductCategory from "./_Components/BestProductCategory/BestProductCategory";
import ProductBrand from "./_Components/ProductBrand/ProductBrand";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto">
        <Banner />
        <OurProduct />
      </div>
      <TopCatagories />
      <SpecialOffers />
      <MakeCall />
      <MiniBanner />
      <BestProductCategory />
      <ProductBrand />
    </div>
  );
}
