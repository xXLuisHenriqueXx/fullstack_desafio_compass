import { IProduct } from "../../../../../common/interfaces/Product";

interface Props {
  data: IProduct | undefined;
}

export default function Product({ data }: Props) {
  return (
    <div className="flex flex-col w-full max-w-full">
      <div className="flex flex-row items-center justify-evenly w-full py-2 border-b border-neutral-10 text-sm font-medium text-neutral-60">
        <p className="w-1/2 capitalize">SKU</p>
        <p className="w-1/2 capitalize">: #{data?.sku}</p>
      </div>

      {data?.size && (
        <div className="flex flex-row items-center justify-evenly w-full py-2 border-b border-neutral-10 text-sm font-medium text-neutral-60">
          <p className="w-1/2 capitalize">Size</p>
          <p className="w-1/2 capitalize">: {data?.size}</p>
        </div>
      )}

      <div className="flex flex-row items-center justify-evenly w-full py-2 border-b border-neutral-10 text-sm font-medium text-neutral-60">
        <p className="w-1/2 capitalize">Location</p>
        <p className="w-1/2 capitalize">: {data?.location}</p>
      </div>

      <div className="flex flex-row items-center justify-evenly w-full py-2 border-b border-neutral-10 text-sm font-medium text-neutral-60">
        <p className="w-1/2 capitalize">Gift</p>
        <p className="w-1/2 capitalize">: {data?.gift}</p>
      </div>

      <div className="flex flex-row items-center justify-evenly w-full py-2 border-b border-neutral-10 text-sm font-medium text-neutral-60">
        <p className="w-1/2 capitalize">Published Date</p>
        <p className="w-1/2 capitalize">
          :{" "}
          {data?.createdDate && new Date(data.createdDate).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
