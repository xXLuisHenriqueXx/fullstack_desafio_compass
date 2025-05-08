import { tv } from "tailwind-variants";
import { Share2 } from "lucide-react";

import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "../../../../Common/Icons";
import DogHeartIcon from "@/assets/dog_heart_icon.svg";
import CatDogIcon from "@/assets/cat_dog_icon.svg";

const card = tv({
  slots: {
    containerInfoMain:
      "flex flex-row items-center justify-between max-w-full px-3 py-2 bg-secondary-40 rounded-lg",
    containerInfo: "flex flex-row items-center text-primary-80",
    text: "text-sm font-bold",
    icon: "w-5 h-5 fill-neutral-60 hover:fill-primary-80 transition-all duration-300 cursor-pointer",
  },
  variants: {
    gap: {
      sm: {
        containerInfo: "gap-x-2",
      },
      md: {
        containerInfo: "gap-x-5",
      },
    },
  },
});

const { containerInfoMain, containerInfo, text, icon } = card();

export default function Share() {
  return (
    <>
      <div className={containerInfoMain()}>
        <div className={containerInfo({ gap: "sm" })}>
          <img src={DogHeartIcon} loading="lazy" />
          <p className={text()}>100% health guarantee for pets</p>
        </div>

        <div className={containerInfo({ gap: "sm" })}>
          <img src={CatDogIcon} loading="lazy" />
          <p className={text()}>100% guarantee of pet identification</p>
        </div>
      </div>

      <div className={containerInfo({ gap: "md" })}>
        <div className={containerInfo({ gap: "sm" })}>
          <Share2 size={20} />
          <p className={text()}>Share:</p>
        </div>

        <Facebook className={icon()} />
        <Twitter className={icon()} />
        <Instagram className={icon()} />
        <Youtube className={icon()} />
      </div>
    </>
  );
}
