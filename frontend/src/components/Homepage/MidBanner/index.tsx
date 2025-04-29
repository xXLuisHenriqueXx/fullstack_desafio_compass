import { CirclePlay } from "lucide-react";

export default function MidBanner() {
  return (
    <section className="relative flex flex-col justify-center w-[calc(100% - 256px)] h-[378px] mx-32 bg-mid-banner bg-cover bg-no-repeat bg-center rounded-[20px]">
      <div className="absolute right-24 flex flex-col items-end max-w-1/3 text-right">
        <h1 className="pb-1 text-[52px] font-extrabold text-primary">
          One more friend
        </h1>
        <h2 className="pb-2 text-4xl font-bold text-primary">
          Thousands more fun!
        </h2>
        <p className="pb-6 text-xs font-medium text-neutral-80">
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>

        <div className="flex flex-row gap-x-5">
          <button className="flex flex-row items-center gap-x-2 px-7 py-3.5 border-2 border-primary hover:bg-primary text-primary hover:text-neutral font-medium text-base rounded-full transition-all duration-300">
            View Intro
            <CirclePlay size={20} />
          </button>
          <button className="px-7 py-3.5 bg-primary hover:bg-neutral text-neutral hover:text-primary font-medium text-base rounded-full transition-all duration-300">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
}
