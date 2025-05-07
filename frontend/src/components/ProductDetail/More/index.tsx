import { useEffect, useState } from "react";
import { EnumProductType } from "../../../common/enum/ProductType";
import List from "../../Common/List";
import { IProduct } from "../../../common/interfaces/Product";
import { productsService } from "../../../services/ProductsService";

interface Props {
  type: EnumProductType | undefined;
}

export default function More({ type }: Props) {
  const isPet = type === EnumProductType.PET;
  const [items, setItems] = useState<IProduct[]>([]);

  useEffect(() => {
    const params = {
      limit: 4,
      type: type,
    };

    productsService.getAll(params).then((response) => {
      setItems(response.data.items);
    });
  }, []);

  return (
    <section className="flex flex-col w-full px-32 mb-20">
      <header className="flex flex-row items-end justify-between w-full mb-9">
        <div>
          <h3 className="text-base font-medium text-black">Whats new?</h3>
          <h2 className="text-2xl font-bold text-primary">
            {isPet ? "See More Puppies" : "See More Products"}
          </h2>
        </div>
      </header>

      <List numCols={4} data={items} />
    </section>
  );
}
