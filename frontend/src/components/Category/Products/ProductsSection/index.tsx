import { tv } from "tailwind-variants";
import { ChevronDown } from "lucide-react";

import PageNavigator from "./PageNavigator";

import List from "../../../Common/List";

import { IProduct } from "../../../../common/interfaces/products/Product";

interface Props {
  name: string;
  data: IProduct[];
  total: number;
}

const productsSectionStyles = tv({
  slots: {
    containerMain: "flex flex-col w-full",
    containerHeader: "flex flex-row items-end justify-between w-full mb-9",
    containerText: "flex flex-row items-end gap-x-3.5",
    title: "text-2xl font-bold text-primary",
    text: "text-sm font-medium text-neutral-60",
  },
});

const { containerMain, containerHeader, containerText, title, text } =
  productsSectionStyles();

export default function ProductsSection({ name, data, total }: Props) {
  const totalPages = Math.max(1, Math.floor(total / 15));

  const countMessage =
    name === "Pet" ? `${total} puppies` : `${total} products`;

  return (
    <section className={containerMain()}>
      <header className={containerHeader()}>
        <div className={containerText()}>
          <h2 className={title()}>{name}</h2>
          <p className={text()}>{countMessage}</p>
        </div>

        <button
          className="flex flex-row items-center gap-x-2 px-5 py-1.5 border-2 border-neutral-20 hover:bg-neutral-20 text-neutral-20 hover:text-neutral font-medium text-sm rounded-full transition-all duration-300 cursor-pointer"
          aria-label="Filter content"
        >
          <p>Sort by: Popular</p>
          <ChevronDown size={20} />
        </button>
      </header>

      <List numCols={3} data={data} />

      <PageNavigator totalPages={totalPages} />
    </section>
  );
}
