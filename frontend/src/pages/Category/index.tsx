import { useParams } from "react-router";
import Container from "../../components/Common/Container";
import CategoryBanner from "../../components/Category/CategoryBanner";
import Path from "../../components/Category/Path";
import Footer from "../../components/Common/Footer";
import Products from "../../components/Category/Products";
import { EnumProductType } from "../../common/enum/ProductType";

export default function Category() {
  const { type } = useParams<{ type: EnumProductType }>();
  let typeText = "All";
  if (type === EnumProductType.PET) typeText = "Pet";
  if (type === EnumProductType.PRODUCT) typeText = "Product";

  return (
    <Container page="another">
      <Path type={typeText} />
      <CategoryBanner />
      <Products type={typeText} />
      <Footer />
    </Container>
  );
}
