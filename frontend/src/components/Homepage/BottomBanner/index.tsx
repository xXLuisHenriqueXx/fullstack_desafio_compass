import { CirclePlay } from "lucide-react";
import PawIcon from "@/assets/paw_icon.svg";

export default function BottomBanner() {
  return (
    <section className="relative flex flex-col justify-center w-[calc(100% - 256px)] h-[378px] mx-32 bg-bottom-banner bg-cover bg-no-repeat bg-center rounded-[20px]">
      <div className="absolute left-24 flex flex-col items-start max-w-2/5 text-left">
        <div className="flex flex-row items-center gap-x-4">
          <h1 className="pb-1 text-[52px] font-extrabold text-primary">
            Adoption
          </h1>

          <img src={PawIcon} alt="Paw" />
        </div>
        <h2 className="pb-2 text-4xl font-bold text-primary">
          We need help. so do they.
        </h2>
        <p className="pb-11 text-xs font-medium text-neutral-80">
          Adopt a pet and give it a home, it will be love you back
          unconditionally.
        </p>

        <div className="flex flex-row-reverse gap-x-5">
          <button className="flex flex-row items-center gap-x-2 px-7 py-3.5 border-2 border-primary hover:bg-primary text-primary hover:text-neutral font-medium text-base rounded-full transition-all duration-300 cursor-pointer">
            View Intro
            <CirclePlay size={20} />
          </button>
          <button className="px-7 py-3.5 bg-primary hover:bg-neutral text-neutral hover:text-primary font-medium text-base rounded-full transition-all duration-300 cursor-pointer">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
}
