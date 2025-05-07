import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Props {
  images: string[] | undefined;
}

export default function Carousel({ images }: Props) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) return null;

  const goTo = (idx: number) => setCurrent(idx);
  const prev = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="flex flex-col gap-y-3 max-w-full mb-2.5">
      <div className="relative flex flex-row items-center">
        <div className="w-full">
          <img
            className="w-full h-[480px] rounded-lg object-cover"
            src={images[current]}
            loading="lazy"
          />
        </div>

        <button
          className="absolute left-4 flex flex-row items-center justify-center w-10 h-10 bg-neutral-40 rounded-full text-white"
          onClick={prev}
        >
          <ChevronLeft size={24} />
        </button>

        <button
          className="absolute right-4 flex flex-row items-center justify-center w-10 h-10 bg-neutral-40 rounded-full text-white"
          onClick={next}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div
        className="flex flex-row items-center gap-x-3 max-w-full overflow-x-auto"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {images?.map((item, index) => (
          <img
            key={index}
            className={`w-24 aspect-square rounded-md object-cover mt-4 cursor-pointer transition-opacity duration-200 ${
              index === current ? "opacity-100" : "opacity-50"
            }`}
            src={item}
            loading="lazy"
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
