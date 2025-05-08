import { useEffect, useState } from "react";
import { tv } from "tailwind-variants";

import ProductsSection from "./ProductsSection";
import Sidebar from "./Sidebar";
import { IProduct } from "../../../common/interfaces/Product";
import { productsService } from "../../../services/ProductsService";
import { EnumProductType } from "../../../common/enum/ProductType";
import { useProductsStore } from "../../../states/ProductsState";

interface Props {
  type: string;
}

const container = tv({
  base: "flex flex-row items-start gap-x-5 px-32 pt-9 pb-15",
});

export default function Products({ type }: Props) {
  const { filters, page } = useProductsStore();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [total, setTotal] = useState<number>(0);
  const limit = 15;

  let typeEnum = undefined;
  if (type === "Pet") EnumProductType.PET;
  if (type === "Product") EnumProductType.PRODUCT;

  useEffect(() => {
    const params = {
      ...filters,
      type: typeEnum,
      limit,
      offset: (page - 1) * limit,
    };

    productsService.getAll(params).then((response) => {
      setProducts(response.data.items);
      setTotal(response.data.total);
    });
  }, [filters, page, type]);

  return (
    <section className={container()}>
      <Sidebar type={typeEnum} />
      <ProductsSection name={type} data={products} total={total} />
    </section>
  );
}
