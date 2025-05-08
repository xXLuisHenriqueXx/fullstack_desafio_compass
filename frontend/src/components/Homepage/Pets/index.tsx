import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { tv } from "tailwind-variants";
import { ChevronRight } from "lucide-react";

import List from "../../Common/List";
import Button from "../../Common/Button";
import { productsService } from "../../../services/ProductsService";
import { IProduct } from "../../../common/interfaces/Product";
import { EnumProductType } from "../../../common/enum/ProductType";

const card = tv({
  slots: {
    containerMain: "flex flex-col w-full px-32",
    containerHeader: "flex flex-row items-end justify-between w-full mb-9",
    title: "text-2xl font-bold text-primary",
    subtitle: "text-base font-medium text-black",
  },
});

const { containerMain, containerHeader, title, subtitle } = card();

export default function Pets() {
  const navigate = useNavigate();
  const [pets, setPets] = useState<IProduct[]>();

  useEffect(() => {
    getPets();
  }, []);

  const getPets = async () => {
    const params = {
      limit: 8,
      type: EnumProductType.PET,
    };

    await productsService.getAll(params).then((response) => {
      setPets(response.data.items);
    });
  };

  const navigateToCategory = () => {
    navigate("/Category/PET");
  };

  return (
    <section className={containerMain()}>
      <header className={containerHeader()}>
        <div>
          <h3 className={subtitle()}>Whats new?</h3>
          <h2 className={title()}>Take a look at some of our pets</h2>
        </div>

        <Button
          flex="yes"
          padding="xs"
          gap="xs"
          border="primary"
          text="smPrimaryMedium"
          action={navigateToCategory}
        >
          View more
          <ChevronRight size={16} />
        </Button>
      </header>

      <List numCols={4} data={pets} />
    </section>
  );
}
