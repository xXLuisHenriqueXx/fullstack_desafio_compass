import { tv } from "tailwind-variants";
import { CirclePlay } from "lucide-react";

import Button from "../../Common/Button";
import PawIcon from "@/assets/paw_icon.svg";

const card = tv({
  slots: {
    containerMain:
      "relative flex flex-col justify-center w-[calc(100% - 256px)] h-[378px] mx-32 bg-bottom-banner bg-cover bg-no-repeat bg-center rounded-[20px]",
    containerText:
      "absolute left-24 flex flex-col items-start max-w-2/5 text-left",
    containerTitle: "flex flex-row items-center gap-x-4",
    containerButtons: "flex flex-row-reverse gap-x-5",
    title: "pb-1 text-[52px] font-extrabold text-primary",
    subtitle: "pb-2 text-4xl font-bold text-primary",
    text: "pb-11 text-xs font-medium text-neutral-80",
  },
});

const {
  containerMain,
  containerText,
  containerTitle,
  containerButtons,
  title,
  subtitle,
  text,
} = card();

export default function BottomBanner() {
  return (
    <section className={containerMain()}>
      <div className={containerText()}>
        <div className={containerTitle()}>
          <h1 className={title()}>Adoption</h1>

          <img src={PawIcon} alt="Paw" />
        </div>
        <h2 className={subtitle()}>We need help. so do they.</h2>
        <p className={text()}>
          Adopt a pet and give it a home, it will be love you back
          unconditionally.
        </p>

        <div className={containerButtons()}>
          <Button
            flex="yes"
            padding="sm"
            gap="xs"
            border="primary"
            text="basePrimaryMedium"
          >
            View Intro
            <CirclePlay size={20} />
          </Button>

          <Button padding="sm" background="primary" text="baseNeutralMedium">
            Explore Now
          </Button>
        </div>
      </div>
    </section>
  );
}
