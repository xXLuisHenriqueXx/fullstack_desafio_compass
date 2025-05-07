import { tv } from "tailwind-variants";

import { PetKnowDataProps } from "../PetKnowledgeList";

const card = tv({
  slots: {
    containerMain:
      "flex flex-col p-2 pb-5 gap-y-4 bg-neutral shadow-card hover:shadow-card-hover rounded-xl hover:scale-105 translate-all duration-300",
    containerText: "flex flex-col gap-y-2.5 text-left",
    titles: "text-base font-bold text-neutral-100",
    text: "pb-2 text-sm font-normal text-neutral-80",
    tag: "w-24 px-2.5 py-0.5 bg-state-blue text-[10px] font-bold text-neutral rounded-full",
    images: "w-full h-60 rounded-lg",
  },
});

const { containerMain, containerText, titles, text, tag, images } = card();

export default function PetKnowledgeItem({
  id,
  image,
  title,
  description,
}: PetKnowDataProps) {
  return (
    <article key={id} className={containerMain()}>
      <img className={images()} src={image} />

      <div className={containerText()}>
        <p className={tag()}>Pet Knowledge</p>
        <p className={titles()}>{title}</p>
        <p className={text()}>{description}</p>
      </div>
    </article>
  );
}
