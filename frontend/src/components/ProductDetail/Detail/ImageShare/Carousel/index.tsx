import { useState } from "react";
import { tv } from "tailwind-variants";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[] | undefined;
}

const card = tv({
  slots: {
    containerMain: "flex flex-col gap-y-3 max-w-full mb-2.5",
    containerImage: "relative flex flex-row items-center",
    containerNav:
      "flex flex-row items-center gap-x-3 max-w-full overflow-x-auto",
    image: "w-full h-[480px] rounded-lg object-cover",
    imageNav:
      "w-24 aspect-square rounded-md object-cover mt-4 cursor-pointer transition-opacity duration-200",
    button:
      "absolute flex flex-row items-center justify-center w-10 h-10 bg-neutral-40 rounded-full text-white",
  },
  variants: {
    side: {
      left: {
        button: "left-4",
      },
      right: {
        button: "right-4",
      },
    },
    active: {
      yes: {
        imageNav: "opacity-100",
      },
      no: {
        imageNav: "opacity-50",
      },
    },
  },
});

const { containerMain, containerImage, containerNav, image, imageNav, button } =
  card();

export default function Carousel({ images }: Props) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) return null;

  const goTo = (idx: number) => setCurrent(idx);
  const prev = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className={containerMain()}>
      <div className={containerImage()}>
        <img className={image()} src={images[current]} loading="lazy" />

        <button className={button({ side: "left" })} onClick={prev}>
          <ChevronLeft size={24} />
        </button>

        <button className={button({ side: "right" })} onClick={next}>
          <ChevronRight size={24} />
        </button>
      </div>

      <div
        className={containerNav()}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {images?.map((item, index) => (
          <img
            key={index}
            className={imageNav({ active: index === current ? "yes" : "no" })}
            src={item}
            loading="lazy"
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
