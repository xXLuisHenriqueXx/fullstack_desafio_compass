// import { useParams } from "react-router";
import Container from "../../components/Common/Container";
import Footer from "../../components/Common/Footer";
import Costumer from "../../components/ProductDetail/Costumer";
import MorePuppies from "../../components/ProductDetail/MorePuppies";

export default function ProductDetail() {
  //   const { id } = useParams<{ id: string }>();

  return (
    <Container page="product-detail">
      <Costumer />
      <MorePuppies />
      <Footer />
    </Container>
  );
}
