import { tv } from "tailwind-variants";
import { CirclePlay } from "lucide-react";

const card = tv({
  slots: {
    containerMain:
      "flex items-center w-full h-[695px] px-32 bg-hero-banner bg-center bg-no-repeat bg-cover rounded-b-4xl",
    containerText: "w-[490px]",
    containerButtons: "flex flex-row gap-x-5",
    title: "pb-1 text-6xl font-extrabold text-primary-80",
    subtitle: "pb-6 text-5xl font-bold text-primary-80",
    text: "pb-8 text-base font-medium text-neutral-80 text-left",
  },
});

const {
  containerMain,
  containerText,
  containerButtons,
  title,
  subtitle,
  text,
} = card();

export default function HeroBanner() {
  return (
    <section className={containerMain()}>
      <article className={containerText()}>
        <h1 className={title()}>One more friend</h1>
        <h2 className={subtitle()}>Thousands more fun!</h2>
        <p className={text()}>
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>

        <div className={containerButtons()}>
          <button className="flex flex-row items-center gap-x-2 px-7 py-3.5 border-2 border-primary hover:bg-primary text-primary hover:text-neutral font-medium rounded-full transition-all duration-300 cursor-pointer">
            View Intro
            <CirclePlay size={20} />
          </button>
          <button className="px-7 py-3.5 bg-primary hover:bg-state-blue text-neutral hover:text-primary font-medium rounded-full transition-all duration-300 cursor-pointer">
            Explore Now
          </button>
        </div>
      </article>
    </section>
  );
}
