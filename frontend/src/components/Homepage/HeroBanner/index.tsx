import { CirclePlay } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="flex items-center w-full h-[695px] px-32 bg-hero-banner bg-center bg-no-repeat bg-cover rounded-b-4xl">
      <article className="w-[490px]">
        <h1 className="pb-1 text-6xl font-extrabold text-primary-80">
          One more friend
        </h1>
        <h2 className="pb-6 text-5xl font-bold text-primary-80">
          Thousands more fun!
        </h2>
        <p className="pb-8 text-base font-medium text-neutral-80 text-left">
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>

        <div className="flex flex-row gap-x-5">
          <button className="flex flex-row items-center gap-x-2 px-7 py-3.5 border-2 border-primary hover:bg-primary text-primary hover:text-neutral font-medium rounded-full transition-all duration-300">
            View Intro
            <CirclePlay size={20} />
          </button>
          <button className="px-7 py-3.5 bg-primary hover:bg-neutral text-neutral hover:text-primary font-medium rounded-full transition-all duration-300">
            Explore Now
          </button>
        </div>
      </article>
    </section>
  );
}
