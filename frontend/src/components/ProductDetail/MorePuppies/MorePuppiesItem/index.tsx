import { Dot } from "lucide-react";

export default function MorePuppiesItem() {
  return (
    <article
      className="flex flex-col p-2 pb-5 gap-y-4 bg-neutral shadow-card hover:shadow-card-hover rounded-xl hover:scale-105 translate-all duration-300"
      style={{ flex: "1 1 calc(25% - 20px)" }}
    >
      <img
        className="w-full aspect-square rounded-lg object-cover"
        src="https://placedog.net/600?random"
        alt="Puppy"
        loading="lazy"
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
    </article>
  );
}
