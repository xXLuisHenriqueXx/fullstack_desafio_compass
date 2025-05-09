import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { tv } from "tailwind-variants";
import { ChevronRight } from "lucide-react";

import List from "../../Common/List";
import Button from "../../Common/Button";
import Loader from "../../Common/Loader";

import { productsService } from "../../../services/ProductsService";

import { EnumProductType } from "../../../common/enum/ProductType";
import { IProduct } from "../../../common/interfaces/Product";

const productsStyles = tv({
  slots: {
    containerMain: "flex flex-col w-full px-32",
    containerHeader: "flex flex-row items-end justify-between w-full mb-9",
    title: "text-2xl font-bold text-primary",
    subtitle: "text-base font-medium text-black",
  },
});

const { containerMain, containerHeader, title, subtitle } = productsStyles();

export default function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    setIsLoading(true);

    try {
      const params = {
        limit: 8,
        type: EnumProductType.PRODUCT,
      };

      productsService.getAll(params).then((response) => {
        setProducts(response.data.items);
      });
    } catch (error: any) {
      console.error("Failed to fetch products", error);
    } finally {
      setIsLoading(false);
    }
  };

  const navigateToCategory = () => {
    navigate("/Category/PRODUCT");
  };

  return (
    <section className={containerMain()}>
      <header className={containerHeader()}>
        <div>
          <h3 className={subtitle()}>
            Hard to choose right products for your pet?
          </h3>
          <h2 className={title()}>Our Products</h2>
        </div>

        <Button
          flex="yes"
          padding="xs"
          gap="xs"
          border="primary"
          text="smPrimaryMedium"
          label="View more content"
          action={navigateToCategory}
        >
          View more
          <ChevronRight size={16} />
        </Button>
      </header>

      {isLoading ? <Loader /> : <List numCols={4} data={products} />}
    </section>
  );
}
