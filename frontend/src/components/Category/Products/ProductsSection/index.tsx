import { ChevronDown } from "lucide-react";
import PageNavigator from "./PageNavigator";
import List from "../../../Common/List";

export default function ProductsSection({
  name,
}: {
  name: string | undefined;
}) {
  return (
    <section className="flex flex-col w-full">
      <header className="flex flex-row items-end justify-between w-full mb-9">
        <div className="flex flex-row items-end gap-x-3.5">
          <h2 className="text-2xl font-bold text-primary">{name}</h2>
          <p className="text-sm font-medium text-neutral-60">XX puppies</p>
        </div>

        <button className="flex flex-row items-center gap-x-2 px-5 py-1.5 border-2 border-neutral-20 hover:bg-neutral-20 text-neutral-20 hover:text-neutral font-medium text-sm rounded-full transition-all duration-300 cursor-pointer">
          <p>Sort by: Popular</p>
          <ChevronDown size={20} />
        </button>
      </header>

      <List numCols={3} numItems={15} />

      <PageNavigator />
    </section>
  );
}
