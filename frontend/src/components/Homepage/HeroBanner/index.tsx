import { tv } from "tailwind-variants";
import { CirclePlay } from "lucide-react";

import Button from "../../Common/Button";

const heroBannerStyles = tv({
  slots: {
    containerMain:
      "flex items-center w-full min-h-[695px] h-auto px-32 bg-hero-banner bg-center bg-no-repeat bg-cover rounded-b-4xl",
    containerText: "max-w-[490px]",
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
} = heroBannerStyles();

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
          <Button
            flex="yes"
            padding="sm"
            gap="xs"
            border="primary"
            text="basePrimaryMedium"
            label="Watch introduction video"
          >
            View Intro
            <CirclePlay size={20} />
          </Button>

          <Button
            padding="sm"
            background="primary"
            text="baseNeutralMedium"
            label="Explore our content now"
          >
            Explore Now
          </Button>
        </div>
      </article>
    </section>
  );
}
