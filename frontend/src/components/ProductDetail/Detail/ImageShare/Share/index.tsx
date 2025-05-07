import { Share2 } from "lucide-react";

import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "../../../../Common/Icons";
import DogHeartIcon from "@/assets/dog_heart_icon.svg";
import CatDogIcon from "@/assets/cat_dog_icon.svg";

export default function Share() {
  return (
    <>
      <div className="flex flex-row items-center justify-between max-w-full px-3 py-2 bg-secondary-40 rounded-lg">
        <div className="flex flex-row items-center gap-x-2">
          <img src={DogHeartIcon} loading="lazy" />
          <p className="text-sm font-bold text-primary-80">
            100% health guarantee for pets
          </p>
        </div>

        <div className="flex flex-row items-center gap-x-2">
          <img src={CatDogIcon} loading="lazy" />
          <p className="text-sm font-bold text-primary-80">
            100% guarantee of pet identification
          </p>
        </div>
      </div>

      <div className="flex flex-row items-center gap-x-5">
        <div className="flex flex-row items-center gap-x-2 text-primary-80">
          <Share2 size={20} />
          <p className="text-sm font-bold">Share:</p>
        </div>

        <Facebook className="w-5 h-5 fill-neutral-60 hover:fill-primary-80 transition-all duration-300 cursor-pointer" />
        <Twitter className="w-5 h-5 fill-neutral-60 hover:fill-primary-80 transition-all duration-300 cursor-pointer" />
        <Instagram className="w-5 h-5 fill-neutral-60 hover:fill-primary-80 transition-all duration-300 cursor-pointer" />
        <Youtube className="w-5 h-5 fill-neutral-60 hover:fill-primary-80 transition-all duration-300 cursor-pointer" />
      </div>
    </>
  );
}
