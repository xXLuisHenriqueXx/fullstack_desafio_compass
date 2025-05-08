import { useEffect, useState } from "react";
import { tv } from "tailwind-variants";

import List from "../../Common/List";
import { productsService } from "../../../services/ProductsService";
import { EnumProductType } from "../../../common/enum/ProductType";
import { IProduct } from "../../../common/interfaces/Product";

interface Props {
  type: EnumProductType | undefined;
}

const card = tv({
  slots: {
    containerMain: "flex flex-col w-full px-32 mb-20",
    containerHeader: "flex flex-row items-end justify-between w-full mb-9",
    title: "text-2xl font-bold text-primary",
    subtitle: "text-base font-medium text-black",
  },
});

const { containerMain, containerHeader, title, subtitle } = card();

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
    <section className={containerMain()}>
      <header className={containerHeader()}>
        <div>
          <h3 className={subtitle()}>Whats new?</h3>
          <h2 className={title()}>
            {isPet ? "See More Puppies" : "See More Products"}
          </h2>
        </div>
      </header>

      <List numCols={4} data={items} />
    </section>
  );
}
