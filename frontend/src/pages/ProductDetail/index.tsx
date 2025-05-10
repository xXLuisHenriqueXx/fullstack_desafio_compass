import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Container from "../../components/Common/Container";
import Footer from "../../components/Common/Footer";
import Loader from "../../components/Common/Loader";

import Detail from "../../components/ProductDetail/Detail";
import Costumer from "../../components/ProductDetail/Costumer";
import More from "../../components/ProductDetail/More";

import { productsService } from "../../services/ProductsService";

import { IProduct } from "../../common/interfaces/Product";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<IProduct>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);

    try {
      if (id) {
        productsService.getById(parseInt(id)).then((response) => {
          setItem(response.data);
        });
      }
    } catch (error: any) {
      console.error("Failed to fetch item", error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading)
    return (
      <Container>
        <Loader />
      </Container>
    );

  return (
    <Container>
      <Detail data={item} />
      <Costumer />
      {item && <More type={item.type} />}
      <Footer />
    </Container>
  );
}
