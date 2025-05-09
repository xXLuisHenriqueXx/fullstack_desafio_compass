import { useParams } from "react-router";

import Container from "../../components/Common/Container";
import Footer from "../../components/Common/Footer";

import Path from "../../components/Category/Path";
import CategoryBanner from "../../components/Category/CategoryBanner";
import Products from "../../components/Category/Products";

import { EnumProductType } from "../../common/enum/ProductType";

export default function Category() {
  const { type } = useParams<{ type: EnumProductType }>();
  let typeText = "All";
  if (type === EnumProductType.PET) typeText = "Pet";
  if (type === EnumProductType.PRODUCT) typeText = "Product";

  return (
    <Container>
      <Path type={typeText} />
      <CategoryBanner />
      <Products type={type} typeText={typeText} />
      <Footer />
    </Container>
  );
}
