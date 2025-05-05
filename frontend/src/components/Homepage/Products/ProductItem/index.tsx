import { Dot } from "lucide-react";
import GiftIcon from "@/assets/gift_icon.svg";

export default function ProductItem() {
  return (
    <article className="flex flex-col p-2 pb-5 gap-y-4 bg-neutral shadow-card hover:shadow-card-hover rounded-xl hover:scale-105 translate-all duration-300">
      <img
        className="w-full aspect-square rounded-lg object-cover"
        src={
          "https://www.daxia.com.br/ptbr/wp-content/uploads/2021/05/iStock-1271494334-750x325.jpg"
        }
      />

      <div className="flex flex-col gap-y-1 text-left">
        <p className="text-base font-bold text-neutral-100">
          NaturVet Dogs - Omega-Gold Plus Salmon Oil
        </p>

        <div className="flex flex-row items-center gap-x-1 text-xs text-neutral-60">
          <p>
            Gene: <span className="font-bold">Male</span>
          </p>

          <Dot size={12} />

          <p>
            Age: <span className="font-bold">02 months</span>
          </p>
        </div>

        <p className="text-sm font-bold text-neutral-100">6.900.000 VND</p>
      </div>

      <div className="flex flex-row gap-x-1 items-center w-full px-2.5 py-1 bg-secondary-40 rounded-md text-primary-80">
        <img src={GiftIcon} alt="Gift" />

        <Dot size={16} />

        <p className="text-sm font-bold">Free Toy & Free Shaker</p>
      </div>
    </article>
  );
}
