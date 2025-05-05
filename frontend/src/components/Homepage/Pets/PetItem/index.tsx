import { Dot } from "lucide-react";

export default function PetItem() {
  return (
    <article
      className="flex flex-col p-2 pb-5 gap-y-4 bg-neutral shadow-card hover:shadow-card-hover rounded-xl hover:scale-105 translate-all duration-300"
      style={{ flex: "1 1 calc(20% - 20px)" }}
    >
      <div className="w-full aspect-square rounded-lg bg-neutral-40" />

      <div className="flex flex-col gap-y-1 text-left">
        <p className="text-base font-bold text-neutral-100">
          MO231 - Pomeranian White
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
    </article>
  );
}
