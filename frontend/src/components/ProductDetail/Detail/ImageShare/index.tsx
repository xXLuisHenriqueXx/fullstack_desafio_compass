import DogHeartIcon from "@/assets/dog_heart_icon.svg";
import CatDogIcon from "@/assets/cat_dog_icon.svg";
import { Share2 } from "lucide-react";
import { Facebook, Instagram, Twitter, Youtube } from "../../../Common/Icons";

const items = Array.from({ length: 10 }, (_, i) => i + 1);

export default function ImageShare() {
  return (
    <article className="flex flex-col gap-y-4 max-w-1/2">
      <div className="flex flex-col gap-y-3 max-w-full mb-2.5">
        <img
          className="w-full h-[480px] rounded-lg object-cover"
          src="https://placedog.net/600?random"
          alt="Puppy"
          loading="lazy"
        />

        <div
          className="flex flex-row items-center gap-x-3 max-w-full overflow-x-auto"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {items.map((item) => (
            <img
              key={item}
              className="w-24 aspect-square rounded-md object-cover mt-4"
              src={`https://placedog.net/100?random`}
              alt="Puppy"
              loading="lazy"
            />
          ))}
        </div>
      </div>

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
    </article>
  );
}
