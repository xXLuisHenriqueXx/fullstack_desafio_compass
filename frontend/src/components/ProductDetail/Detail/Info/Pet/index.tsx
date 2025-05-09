import { tv } from "tailwind-variants";

import { IProduct } from "../../../../../common/interfaces/Product";

interface Props {
  data: IProduct | undefined;
}

const petStyles = tv({
  slots: {
    containerMain: "flex flex-col w-full max-w-full",
    containerInfo:
      "grid grid-cols-2 justify-items-start place-items-start w-full py-2 border-b border-neutral-10 text-sm font-medium text-neutral-60 capitalize",
  },
});

const { containerMain, containerInfo } = petStyles();

export default function Pet({ data }: Props) {
  return (
    <div className={containerMain()}>
      <div className={containerInfo()}>
        <p>SKU</p>
        <p>: #{data?.sku}</p>
      </div>

      <div className={containerInfo()}>
        <p>Gender</p>
        <p>: {data?.gender}</p>
      </div>

      <div className={containerInfo()}>
        <p>Age</p>
        <p>: {data?.age}</p>
      </div>

      <div className={containerInfo()}>
        <p>Size</p>
        <p>: {data?.size}</p>
      </div>

      <div className={containerInfo()}>
        <p>Color</p>
        <p>: {data?.color?.join(" & ")}</p>
      </div>

      <div className={containerInfo()}>
        <p>Vaccinated</p>
        <p>: {data?.vaccinated ? "Yes" : "No"}</p>
      </div>

      <div className={containerInfo()}>
        <p>Dewormed</p>
        <p>: {data?.dewormed ? "Yes" : "No"}</p>
      </div>

      <div className={containerInfo()}>
        <p>Cert</p>
        <p>: {data?.certified ? `Yes (${data?.certified})` : "No"}</p>
      </div>

      <div className={containerInfo()}>
        <p>Microchip</p>
        <p>: {data?.microchip ? "Yes" : "No"}</p>
      </div>

      <div className={containerInfo()}>
        <p>Location</p>
        <p>: {data?.location}</p>
      </div>

      <div className={containerInfo()}>
        <p>Published Date</p>
        <p>
          :{" "}
          {data?.createdDate && new Date(data.createdDate).toLocaleDateString()}
        </p>
      </div>

      <div className={containerInfo()}>
        <p>Additional Information</p>
        <div>
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
