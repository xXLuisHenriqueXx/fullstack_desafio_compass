import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { IProduct } from "../../common/interfaces/Product";
import { productsService } from "../../services/ProductsService";
import Container from "../../components/Common/Container";
import Detail from "../../components/ProductDetail/Detail";
import Costumer from "../../components/ProductDetail/Costumer";
import More from "../../components/ProductDetail/More";
import Footer from "../../components/Common/Footer";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<IProduct>();

  useEffect(() => {
    if (id)
      productsService.getById(parseInt(id)).then((response) => {
        setItem(response.data);
      });
  }, []);

  return (
    <Container page="product-detail">
      <Detail data={item} />
      <Costumer />
      <More type={item?.type} />
      <Footer />
    </Container>
  );
}
