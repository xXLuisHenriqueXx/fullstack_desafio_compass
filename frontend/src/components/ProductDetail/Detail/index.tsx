import { tv } from "tailwind-variants";

import ImageShare from "./ImageShare";
import Info from "./Info";

import { IProduct } from "../../../common/interfaces/products/Product";

interface Props {
  data: IProduct | undefined;
  action: () => void;
}

const container = tv({
  base: "flex flex-row items-start gap-x-8 max-w-full mx-32 mt-32 px-5 py-6 border border-neutral-10 rounded-3xl",
});

export default function Detail({ data, action }: Props) {
  if (!data) return null;

  return (
    <section className={container()}>
      <ImageShare images={data.images} />
      <Info data={data} action={action} />
    </section>
  );
}
