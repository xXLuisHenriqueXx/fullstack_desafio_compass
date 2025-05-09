import { tv } from "tailwind-variants";
import { CirclePlay } from "lucide-react";

import Button from "../../Common/Button";

const midBannerStyles = tv({
  slots: {
    containerMain:
      "relative flex flex-col justify-center w-[calc(100% - 256px)] h-[378px] mx-32 bg-mid-banner bg-cover bg-no-repeat bg-center rounded-[20px]",
    containerText:
      "absolute right-24 flex flex-col items-end max-w-1/3 text-right",
    containerButtons: "flex flex-row gap-x-5",
    title: "pb-1 text-[52px] font-extrabold text-primary",
    subtitle: "pb-2 text-4xl font-bold text-primary",
    text: "pb-6 text-xs font-medium text-neutral-80",
  },
});

const {
  containerMain,
  containerText,
  containerButtons,
  title,
  subtitle,
  text,
} = midBannerStyles();

export default function MidBanner() {
  return (
    <section className={containerMain()}>
      <div className={containerText()}>
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
      </div>
    </section>
  );
}
