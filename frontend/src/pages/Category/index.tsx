import { useParams } from "react-router";
import Container from "../../components/Common/Container";
import CategoryBanner from "../../components/Category/CategoryBanner";
import Path from "../../components/Category/Path";
import Footer from "../../components/Common/Footer";
import Products from "../../components/Category/Products";

export default function Category() {
  const { name } = useParams<{ name: string }>();
  return (
    <Container page="category">
      <Path name={name} />
      <CategoryBanner />
      <Products />
      <Footer />
    </Container>
  );
}
