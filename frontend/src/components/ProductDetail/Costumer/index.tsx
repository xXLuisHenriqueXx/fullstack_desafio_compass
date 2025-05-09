import { useRef, useState } from "react";
import { tv } from "tailwind-variants";

import { costumerData } from "../../../common/data/Costumer";

const costumerStyles = tv({
  slots: {
    containerMain: "flex flex-col max-w-full mx-32 px-8 py-6 mb-16",
    containerImages: "flex flex-row gap-x-3 mt-3 mb-6",
    containerDots: "flex flex-row justify-center gap-x-1.5",
    title: "text-2xl font-bold text-neutral-100",
    image: "w-60 h-[340px] rounded-lg object-cover",
    dots: "h-2 transition-all duration-300 ease-in-out rounded-full",
  },
  variants: {
    active: {
      yes: {
        dots: "w-5 bg-primary",
      },
      no: {
        dots: "w-2 bg-neutral-20",
      },
    },
  },
});

const { containerMain, containerImages, containerDots, title, image, dots } =
  costumerStyles();

export default function Costumer() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const maxScrollLeft = scrollWidth - clientWidth;

      if (maxScrollLeft > 0) {
        const progress = scrollLeft / maxScrollLeft;
        const index = Math.round(progress * (6 - 1));
        setActiveDot(index);
      }
    }
  };

  return (
    <section className={containerMain()}>
      <h1 className={title()}>Our lovely customer</h1>

      <article>
        <div
          className="overflow-x-auto"
          ref={scrollContainerRef}
          onScroll={handleScroll}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <ul className={containerImages()}>
            {costumerData.map((item) => (
              <img
                key={item.id}
                className={image()}
                src={item.src}
                alt={`Costumer ${item.id}`}
                loading="lazy"
              />
            ))}
          </ul>
        </div>

        <div className={containerDots()}>
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className={dots({ active: activeDot === index ? "yes" : "no" })}
            />
          ))}
        </div>
      </article>
    </section>
  );
}
