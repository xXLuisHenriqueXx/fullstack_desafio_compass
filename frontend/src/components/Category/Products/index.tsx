import { useEffect, useState } from "react";
import { tv } from "tailwind-variants";

import ProductsSection from "./ProductsSection";
import Sidebar from "./Sidebar";

import Loader from "../../Common/Loader";

import { productsService } from "../../../services/ProductsService";
import { useProductsStore } from "../../../states/ProductsState";

import { EnumProductType } from "../../../common/enum/ProductType";
import { IProduct } from "../../../common/interfaces/Product";

interface Props {
  type?: EnumProductType;
  typeText: string;
}

const container = tv({
  base: "flex flex-row items-start gap-x-5 px-32 pt-9 pb-15",
});

export default function Products({ type, typeText }: Props) {
  const { filters, page } = useProductsStore();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [total, setTotal] = useState<number>(0);
  const limit = 15;
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);

    try {
      const params = {
        ...filters,
        type: type === EnumProductType.ALL ? undefined : type,
        limit,
        offset: (page - 1) * limit,
      };

      productsService.getAll(params).then((response) => {
        setProducts(response.data.items);
        setTotal(response.data.total);
      });
    } catch (error: any) {
      console.error("Failed to fetch products", error);
    } finally {
      setIsLoading(false);
    }
  }, [filters, page, type]);

  return (
    <section className={container()}>
      <Sidebar type={type} />
      {isLoading ? (
        <Loader />
      ) : (
        <ProductsSection name={typeText} data={products} total={total} />
      )}
    </section>
  );
}
