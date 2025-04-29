import Container from "../../components/Common/Container";
import HeroBanner from "../../components/Homepage/HeroBanner";
import Pets from "../../components/Homepage/Pets";
import MidBanner from "../../components/Homepage/MidBanner";

export default function Homepage() {
  return (
    <Container>
      <HeroBanner />

      <Pets />

      <MidBanner />
    </Container>
  );
}
