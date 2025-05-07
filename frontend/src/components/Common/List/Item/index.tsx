import { Dot } from "lucide-react";
import { IProduct } from "../../../../common/interfaces/Product";
import { EnumProductType } from "../../../../common/enum/ProductType";
import GiftIcon from "../../../../assets/gift_icon.svg";
import { useNavigate } from "react-router";

interface Props {
  data?: IProduct;
}

export default function Item({ data }: Props) {
  const navigate = useNavigate();
  const isPet = data?.type === EnumProductType.PET;

  const navigateToProductDetail = (id: number | undefined) => {
    navigate(`/product/detail/${id}`);
  };

  return (
    <li
      className="flex flex-col p-2 pb-5 gap-y-4 bg-neutral shadow-card hover:shadow-card-hover rounded-xl hover:scale-105 translate-all duration-300"
      onClick={() => navigateToProductDetail(data?.id)}
    >
      <img
        className="max-w-full aspect-square rounded-lg object-cover"
        src={data?.images[0]}
        loading="lazy"
      />

      <div className="flex flex-col gap-y-1 text-left">
        <p className="text-base font-bold text-neutral-100">{data?.name}</p>

        {isPet && (
          <div className="flex flex-row items-center gap-x-1 text-xs text-neutral-60">
            <p>
              Gender:{" "}
              <span className="font-bold capitalize">{data?.gender}</span>
            </p>

            <Dot size={12} />

            <p>
              Age: <span className="font-bold">{data?.age}</span>
            </p>
          </div>
        )}

        {!isPet && (
          <div className="flex flex-row items-center gap-x-1 text-xs text-neutral-60">
            <p>
              Product:{" "}
              <span className="font-bold capitalize">{data?.category}</span>
            </p>

            {data?.size && <Dot size={12} />}

            {data?.size && (
              <p>
                Size: <span className="font-bold">{data?.size}</span>
              </p>
            )}
          </div>
        )}

        <p className="text-sm font-bold text-neutral-100">
          $ {data?.price.toFixed(2)}
        </p>

        {!isPet && (
          <div className="flex flex-row items-center w-full px-2.5 py-1.5 overflow-hidden bg-secondary-40 rounded-md text-primary-80">
            <img src={GiftIcon} alt="Gift" />

            <Dot size={28} />

            <p className="text-sm font-bold truncate">{data?.gift}</p>
          </div>
        )}
      </div>
    </li>
  );
}
