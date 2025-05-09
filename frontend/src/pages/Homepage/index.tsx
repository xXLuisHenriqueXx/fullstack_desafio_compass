import Container from "../../components/Common/Container";
import Footer from "../../components/Common/Footer";

import HeroBanner from "../../components/Homepage/HeroBanner";
import Pets from "../../components/Homepage/Pets";
import MidBanner from "../../components/Homepage/MidBanner";
import Products from "../../components/Homepage/Products";
import Sellers from "../../components/Homepage/Sellers";
import BottomBanner from "../../components/Homepage/BottomBanner";
import PetKnowledge from "../../components/Homepage/PetKnowledge";

export default function Homepage() {
  return (
    <Container page="homepage">
      <HeroBanner />
      <Pets />
      <MidBanner />
      <Products />
      <Sellers />
      <BottomBanner />
      <PetKnowledge />
      <Footer />
    </Container>
  );
}
