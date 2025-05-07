import { IProduct } from "../../../../../common/interfaces/Product";

interface Props {
  data: IProduct | undefined;
}

export default function Pet({ data }: Props) {
  return (
    <div className="flex flex-col w-full max-w-full">
      <div className="flex flex-row items-center justify-evenly w-full py-2 border-b border-neutral-10 text-sm font-medium text-neutral-60">
        <p className="w-1/2 capitalize">SKU</p>
        <p className="w-1/2 capitalize">: #{data?.sku}</p>
      </div>

      <div className="flex flex-row items-center justify-evenly w-full py-2 border-b border-neutral-10 text-sm font-medium text-neutral-60">
        <p className="w-1/2 capitalize">Gender</p>
        <p className="w-1/2 capitalize">: {data?.gender}</p>
      </div>

      <div className="flex flex-row items-center justify-evenly w-full py-2 border-b border-neutral-10 text-sm font-medium text-neutral-60">
        <p className="w-1/2 capitalize">Age</p>
        <p className="w-1/2 capitalize">: {data?.age}</p>
      </div>

      <div className="flex flex-row items-center justify-evenly w-full py-2 border-b border-neutral-10 text-sm font-medium text-neutral-60">
        <p className="w-1/2 capitalize">Size</p>
        <p className="w-1/2 capitalize">: {data?.size}</p>
      </div>

      <div className="flex flex-row items-center justify-evenly w-full py-2 border-b border-neutral-10 text-sm font-medium text-neutral-60">
        <p className="w-1/2 capitalize">Color</p>
        <p className="w-1/2 capitalize">: {data?.color?.join(" & ")}</p>
      </div>

      <div className="flex flex-row items-center justify-evenly w-full py-2 border-b border-neutral-10 text-sm font-medium text-neutral-60">
        <p className="w-1/2 capitalize">Vaccinated</p>
        <p className="w-1/2 capitalize">: {data?.vaccinated ? "Yes" : "No"}</p>
      </div>

      <div className="flex flex-row items-center justify-evenly w-full py-2 border-b border-neutral-10 text-sm font-medium text-neutral-60">
        <p className="w-1/2 capitalize">Dewormed</p>
        <p className="w-1/2 capitalize">: {data?.dewormed ? "Yes" : "No"}</p>
      </div>

      <div className="flex flex-row items-center justify-evenly w-full py-2 border-b border-neutral-10 text-sm font-medium text-neutral-60">
        <p className="w-1/2 capitalize">Cert</p>
        <p className="w-1/2 capitalize">
          : {data?.certified ? `Yes (${data?.certified})` : "No"}
        </p>
      </div>

      <div className="flex flex-row items-center justify-evenly w-full py-2 border-b border-neutral-10 text-sm font-medium text-neutral-60">
        <p className="w-1/2 capitalize">Microchip</p>
        <p className="w-1/2 capitalize">: {data?.microchip ? "Yes" : "No"}</p>
      </div>

      <div className="flex flex-row items-center justify-evenly w-full py-2 border-b border-neutral-10 text-sm font-medium text-neutral-60">
        <p className="w-1/2 capitalize">Location</p>
        <p className="w-1/2 capitalize">: {data?.location}</p>
      </div>

      <div className="flex flex-row items-center justify-evenly w-full py-2 border-b border-neutral-10 text-sm font-medium text-neutral-60">
        <p className="w-1/2 capitalize">Published Date</p>
        <p className="w-1/2 capitalize">
          :{" "}
          {data?.createdDate && new Date(data.createdDate).toLocaleDateString()}
        </p>
      </div>

      <div className="flex flex-row items-center justify-evenly w-full py-2 border-b border-neutral-10 text-sm font-medium text-neutral-60">
        <p className="w-1/2 capitalize">Additional Information</p>
        <div className="w-1/2 capitalize">
          {data?.addInfo?.map((item, index) => (
            <p key={index}>
              {index === 0 ? ": " : "\u00A0\u00A0"}
              {item} {data.addInfo && index < data.addInfo.length - 1 && <br />}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
