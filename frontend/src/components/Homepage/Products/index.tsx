import { ChevronRight } from "lucide-react";
import List from "../../Common/List";
import { useEffect, useState } from "react";
import { IProduct } from "../../../common/interfaces/Product";
import { EnumProductType } from "../../../common/enum/ProductType";
import { productsService } from "../../../services/ProductsService";

export default function Products() {
  const [products, setProducts] = useState<IProduct[]>();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await productsService.getAll({
      limit: 8,
      type: EnumProductType.PRODUCT,
    });

    setProducts(response.data);
  };

  return (
    <section className="flex flex-col w-full px-32">
      <header className="flex flex-row items-end justify-between w-full mb-9">
        <div>
          <h3 className="text-base font-medium text-black">
            Hard to choose right products for your products?
          </h3>
          <h2 className="text-2xl font-bold text-primary">Our Products</h2>
        </div>

        <button className="flex flex-row items-center gap-x-2 px-7 py-3 border-2 border-primary hover:bg-primary text-primary hover:text-neutral font-medium text-sm rounded-full transition-all duration-300 cursor-pointer">
          <p>View more</p>
          <ChevronRight size={16} />
        </button>
      </header>

      <List numCols={4} data={products} />
    </section>
  );
}
