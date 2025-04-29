import { ChevronRight } from "lucide-react";
import ProductsList from "./ProductsList";

export default function Products() {
  return (
    <section className="flex flex-col w-full px-32">
      <header className="flex flex-row items-end justify-between w-full mb-9">
        <div>
          <h3 className="text-base font-medium text-black">
            Hard to choose right products for your pets?
          </h3>
          <h2 className="text-2xl font-bold text-primary">Our Products</h2>
        </div>

        <button className="flex flex-row items-center gap-x-2 px-7 py-3 border-2 border-primary hover:bg-primary text-primary hover:text-neutral font-medium text-sm rounded-full transition-all duration-300">
          <p>View more</p>
          <ChevronRight size={16} />
        </button>
      </header>

      <ProductsList />
    </section>
  );
}
