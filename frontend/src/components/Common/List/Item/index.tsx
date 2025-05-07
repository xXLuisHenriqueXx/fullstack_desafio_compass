import { useNavigate } from "react-router";
import { tv } from "tailwind-variants";
import { Dot } from "lucide-react";

import { IProduct } from "../../../../common/interfaces/Product";
import { EnumProductType } from "../../../../common/enum/ProductType";
import GiftIcon from "../../../../assets/gift_icon.svg";

interface Props {
  data?: IProduct;
}

const card = tv({
  slots: {
    containerMain:
      "flex flex-col p-2 pb-5 gap-y-4 bg-neutral shadow-card hover:shadow-card-hover rounded-xl hover:scale-105 translate-all duration-300",
    containerInfo:
      "flex flex-col gap-y-1 text-left text-base font-bold text-neutral-100",
    containerTextInfo:
      "flex flex-row items-center gap-x-1 text-xs font-medium text-neutral-60 capitalize",
    containerGift:
      "flex flex-row items-center w-full px-2.5 py-1.5 overflow-hidden bg-secondary-40 rounded-md text-primary-80",
    highlightText: "font-bold",
    image: "max-w-full aspect-square rounded-lg object-cover",
  },
  variants: {
    size: {
      sm: {
        highlightText: "text-sm",
      },
    },
    truncate: {
      gift: {
        highlightText: "truncate",
      },
    },
  },
});

const {
  containerMain,
  containerInfo,
  containerTextInfo,
  containerGift,
  highlightText,
  image,
} = card();

export default function Item({ data }: Props) {
  const navigate = useNavigate();
  const isPet = data?.type === EnumProductType.PET;

  const navigateToProductDetail = (id: number | undefined) => {
    navigate(`/product/detail/${id}`);
  };

  return (
    <li
      className={containerMain()}
      onClick={() => navigateToProductDetail(data?.id)}
    >
      <img className={image()} src={data?.images[0]} loading="lazy" />

      <div className={containerInfo()}>
        <p>{data?.name}</p>

        {isPet && (
          <div className={containerTextInfo()}>
            <p>
              Gender: <span className={highlightText()}>{data?.gender}</span>
            </p>

            <Dot size={12} />

            <p>
              Age: <span className={highlightText()}>{data?.age}</span>
            </p>
          </div>
        )}

        {!isPet && (
          <div className={containerTextInfo()}>
            <p>
              Product: <span className={highlightText()}>{data?.category}</span>
            </p>

            {data?.size && <Dot size={12} />}

            {data?.size && (
              <p>
                Size: <span className={highlightText()}>{data?.size}</span>
              </p>
            )}
          </div>
        )}

        <p className={highlightText({ size: "sm" })}>
          $ {data?.price.toFixed(2)}
        </p>

        {!isPet && (
          <div className={containerGift()}>
            <img src={GiftIcon} alt="Gift" />

            <Dot size={28} />

            <p className={highlightText({ size: "sm", truncate: "gift" })}>
              {data?.gift}
            </p>
          </div>
        )}
      </div>
    </li>
  );
}
