import { tv } from "tailwind-variants";

import { IProduct } from "../../../../../common/interfaces/Product";

interface Props {
  data: IProduct | undefined;
}

const card = tv({
  slots: {
    containerMain: "flex flex-col w-full max-w-full",
    containerInfo:
      "grid grid-cols-2 justify-items-start place-items-start w-full py-2 border-b border-neutral-10 text-sm font-medium text-neutral-60 capitalize",
  },
});

const { containerMain, containerInfo } = card();

export default function Product({ data }: Props) {
  return (
    <div className={containerMain()}>
      <div className={containerInfo()}>
        <p>SKU</p>
        <p>: #{data?.sku}</p>
      </div>

      {data?.size && (
        <div className={containerInfo()}>
          <p>Size</p>
          <p>: {data?.size}</p>
        </div>
      )}

      <div className={containerInfo()}>
        <p>Location</p>
        <p>: {data?.location}</p>
      </div>

      <div className={containerInfo()}>
        <p>Gift</p>
        <p>: {data?.gift}</p>
      </div>

      <div className={containerInfo()}>
        <p>Published Date</p>
        <p>
          :{" "}
          {data?.createdDate && new Date(data.createdDate).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
