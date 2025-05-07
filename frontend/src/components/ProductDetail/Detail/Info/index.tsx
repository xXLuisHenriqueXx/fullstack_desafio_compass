import { MessageSquareMore } from "lucide-react";
import { IProduct } from "../../../../common/interfaces/Product";
import { EnumProductType } from "../../../../common/enum/ProductType";
import Pet from "./Pet";
import Product from "./Product";

interface Props {
  data: IProduct | undefined;
}

export default function Info({ data }: Props) {
  const isPet = data?.type === EnumProductType.PET;

  return (
    <article className="flex flex-col items-start w-full gap-y-5 max-w-1/2">
      <div className="flex flex-row items-center gap-x-2 text-sm font-medium text-neutral-60">
        <p>Home</p>
        <p>{">"}</p>
        <p>{isPet ? "Pet" : "Product"}</p>
        <p>{">"}</p>
        <p>{data?.name}</p>
      </div>

      <div className="flex flex-col items-start gap-y-1.5">
        <div className="flex flex-col items-start gap-y-0.5">
          <p className="text-sm font-medium text-neutral-40">
            SKU #{data?.sku}
          </p>
          <h1 className="text-2xl font-bold text-neutral-100">{data?.name}</h1>
        </div>
        <h2 className="text-xl font-bold text-primary-80">
          $ {data?.price.toFixed(2)}
        </h2>
      </div>

      <div className="flex flex-row items-center gap-x-5">
        <button className="px-7 py-3 bg-primary hover:bg-state-blue text-base font-bold text-neutral hover:text-primary rounded-full transition-all duration-300 cursor-pointer">
          Contact us
        </button>
        <button className="flex flex-row items-center gap-x-2.5 px-7 py-3 border-2 border-primary-80 hover:bg-primary-80 text-base font-bold text-primary hover:text-neutral rounded-full transition-all duration-300 cursor-pointer">
          <MessageSquareMore size={24} />
          Chat with Monito
        </button>
      </div>

      {isPet ? <Pet data={data} /> : <Product data={data} />}
    </article>
  );
}
