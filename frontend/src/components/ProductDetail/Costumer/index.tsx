import { useRef, useState } from "react";

const data = [
  {
    id: 1,
    src: "https://media.istockphoto.com/id/1325997469/photo/active-ethnic-senior-woman-enjoying-the-outdoors-with-her-pet-dog.jpg?s=612x612&w=0&k=20&c=ZV-0heA3MYuwT5IGGnTQwEA1t3aekl8yoNqjTRbtnrM=",
  },
  {
    id: 2,
    src: "https://akm-img-a-in.tosshub.com/sites/btmt/images/stories//Newstaffpics/bt_70-71r-3-mos_090419060322.jpg",
  },
  {
    id: 3,
    src: "https://www.flightpath.com/wp-content/uploads/2023/06/blog_hispanicpetownership_wide.jpg",
  },
  {
    id: 4,
    src: "https://portrait-my-pet.com/cdn/shop/articles/Step-Brothers-Custom-Family-Pet-Portrait-9_668x_cdbb3d52-7d9c-47b5-9f8c-78d79380b502.webp?v=1722162439",
  },
  {
    id: 5,
    src: "https://www.shutterstock.com/image-photo/merry-christmas-cute-dog-reindeer-600nw-2218181165.jpg",
  },
  {
    id: 6,
    src: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2021_08/3453022/210226-owner-reunited-long-lost-cat-inline-al-1340.jpg",
  },
  {
    id: 7,
    src: "https://www.shutterstock.com/image-photo/full-body-positive-female-owner-600nw-2133418967.jpg",
  },
  {
    id: 8,
    src: "https://preview.redd.it/m0nv51hnhdk51.jpg?width=640&crop=smart&auto=webp&s=e3f49e54bfc1686dc70b8f1bc38398a54396b700",
  },
  {
    id: 9,
    src: "https://i.dailymail.co.uk/i/newpix/2018/07/12/12/4E270F4000000578-5945753-Harry_Bolman_53_feeds_his_cat_Uma_five_a_diet_of_vegetables_and_-a-40_1531396452217.jpg",
  },
  {
    id: 10,
    src: "https://i.guim.co.uk/img/media/484b931c9149ddd355b7881c301da0012715b940/0_0_3024_4032/master/3024.jpg?width=445&dpr=1&s=none&crop=none",
  },
  {
    id: 11,
    src: "https://img.freepik.com/free-photo/adorable-chihuahua-dog-with-female-owner_23-2149880067.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 12,
    src: "https://preview.redd.it/first-time-cat-owner-tips-and-advice-v0-izkuflpq0l1a1.jpg?width=640&crop=smart&auto=webp&s=f42cf0fc253f0adfc1ac8694057e120cb0194acf",
  },
  {
    id: 13,
    src: "https://media.istockphoto.com/id/1813083710/photo/young-man-with-his-border-collie-dog.jpg?s=612x612&w=0&k=20&c=RpKaXkhAfZHMZQbSxkWOjRb6O9NEAsgzTNRG26QLnd0=",
  },
  {
    id: 14,
    src: "https://talker.news/wp-content/uploads/2024/09/oldest-cat-in-t-1249555-739x1024.jpg",
  },
];

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
            {data.map((item) => (
              <img
                key={item.id}
                className="w-60 h-[340px] rounded-lg object-cover"
                src={item.src}
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
