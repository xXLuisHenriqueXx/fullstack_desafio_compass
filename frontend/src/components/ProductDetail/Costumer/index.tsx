import { useRef, useState } from "react";

const items = Array.from({ length: 15 }, (_, i) => i + 1);

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
    <section className="flex flex-col max-w-full mx-32 px-8 py-6 mb-16">
      <h1 className="text-2xl font-bold text-neutral-100">
        Our lovely customer
      </h1>

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
          <ul className="flex flex-row gap-x-3 mt-3 mb-6">
            {items.map((item) => (
              <img
                key={item}
                className="w-60 h-[340px] rounded-lg object-cover"
                src="https://placedog.net/300?random"
                alt={`Customer ${item}`}
                loading="lazy"
              />
            ))}
          </ul>
        </div>

        <div className="flex flex-row justify-center gap-x-1.5">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className={`h-2 transition-all duration-300 ease-in-out rounded-full ${
                activeDot === idx ? "w-5 bg-primary" : "w-2 bg-neutral-20"
              }`}
            ></div>
          ))}
        </div>
      </article>
    </section>
  );
}
