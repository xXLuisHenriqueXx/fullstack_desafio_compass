import { tv } from "tailwind-variants";
import { MessageSquareMore } from "lucide-react";

import Pet from "./Pet";
import Product from "./Product";
import Button from "../../../Common/Button";
import { IProduct } from "../../../../common/interfaces/Product";
import { EnumProductType } from "../../../../common/enum/ProductType";

interface Props {
  data: IProduct | undefined;
}

const card = tv({
  slots: {
    containerMain: "flex flex-col items-start w-full gap-y-5 max-w-1/2",
    containerPath:
      "flex flex-row items-center gap-x-2 text-sm font-medium text-neutral-60",
    containerNamePrice: "flex flex-col items-start gap-y-1.5",
    containerTitle: "flex flex-col items-start gap-y-0.5",
    containerButtons: "flex flex-row items-center gap-x-5",
    title: "text-2xl font-bold text-neutral-100",
    subtitle: "text-xl font-bold text-primary-80",
    text: "text-sm font-medium text-neutral-40",
  },
});

const {
  containerMain,
  containerPath,
  containerNamePrice,
  containerTitle,
  containerButtons,
  title,
  subtitle,
  text,
} = card();

export default function Info({ data }: Props) {
  const isPet = data?.type === EnumProductType.PET;

  return (
    <article className={containerMain()}>
      <div className={containerPath()}>
        <p>Home</p>
        <p>{">"}</p>
        <p>{isPet ? "Pet" : "Product"}</p>
        <p>{">"}</p>
        <p>{data?.name}</p>
      </div>

      <div className={containerNamePrice()}>
        <div className={containerTitle()}>
          <p className={text()}>SKU #{data?.sku}</p>
          <h1 className={title()}>{data?.name}</h1>
        </div>
        <h2 className={subtitle()}>$ {data?.price.toFixed(2)}</h2>
      </div>

      <div className={containerButtons()}>
        <Button padding="xs" background="primary" text="baseNeutralBold">
          Contact us
        </Button>

        <Button
          flex="yes"
          padding="xs"
          gap="sm"
          border="primary80"
          text="basePrimaryBold"
        >
          <MessageSquareMore size={24} />
          Chat with Monito
        </Button>
      </div>

      {isPet ? <Pet data={data} /> : <Product data={data} />}
    </article>
  );
}
