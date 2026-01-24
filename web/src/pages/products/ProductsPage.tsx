import { CoatingsProtection } from "./components/CoatingsProtection";
import { IndustrialFasteners } from "./components/IndustrialFasteners";
import { ProductsHero } from "./components/ProductsHero";
import { RegulatoryFramework } from "./components/RegulatoryFramework";

export const ProductsPage = () => {
  return (
    <>
      <ProductsHero />
      <IndustrialFasteners />
      <CoatingsProtection />
      <RegulatoryFramework />
    </>
  );
};
