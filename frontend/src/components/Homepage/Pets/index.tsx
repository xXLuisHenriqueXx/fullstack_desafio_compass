import { ChevronRight } from "lucide-react";
import List from "../../Common/List";
import { useEffect, useState } from "react";
import { IProduct } from "../../../common/interfaces/Product";
import { productsService } from "../../../services/ProductsService";
import { EnumProductType } from "../../../common/enum/ProductType";
import { useNavigate } from "react-router";

export default function Pets() {
  const navigate = useNavigate();
  const [pets, setPets] = useState<IProduct[]>();

  useEffect(() => {
    getPets();
  }, []);

  const getPets = async () => {
    await productsService
      .getAll({
        limit: 8,
        type: EnumProductType.PET,
      })
      .then((response) => {
        setPets(response.data.items);
      });
  };

  const navigateToCategory = () => {
    navigate("/Category/PET");
  };

  return (
    <section className="flex flex-col w-full px-32">
      <header className="flex flex-row items-end justify-between w-full mb-9">
        <div>
          <h3 className="text-base font-medium text-black">Whats new?</h3>
          <h2 className="text-2xl font-bold text-primary">
            Take a look at some of our pets
          </h2>
        </div>

        <button
          onClick={navigateToCategory}
          className="flex flex-row items-center gap-x-2 px-7 py-3 border-2 border-primary hover:bg-primary text-primary hover:text-neutral font-medium text-sm rounded-full transition-all duration-300 cursor-pointer"
        >
          <p>View more</p>
          <ChevronRight size={16} />
        </button>
      </header>

      <List numCols={4} data={pets} />
    </section>
  );
}
