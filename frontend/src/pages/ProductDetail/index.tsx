import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Container from "../../components/Common/Container";
import Footer from "../../components/Common/Footer";
import Loader from "../../components/Common/Loader";

import Detail from "../../components/ProductDetail/Detail";
import Costumer from "../../components/ProductDetail/Costumer";
import More from "../../components/ProductDetail/More";

import { productsService } from "../../services/ProductsService";

import { IProduct } from "../../common/interfaces/products/Product";
import ModalContact from "../../components/ProductDetail/Detail/Info/ModalContact/indes";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<IProduct>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);

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

  const handleManageModal = () => {
    setShowModal(!showModal);
  };

  if (isLoading)
    return (
      <Container>
        <Loader />
      </Container>
    );

  return (
    <Container>
      <Detail data={item} action={handleManageModal} />
      <Costumer />
      {item && <More type={item.type} />}
      <Footer />

      {showModal && (
        <ModalContact showModal={showModal} setShowModal={setShowModal} />
      )}
    </Container>
  );
}
