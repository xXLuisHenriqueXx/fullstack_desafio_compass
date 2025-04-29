import { PetKnowDataProps } from "../PetKnowledgeList";

export default function PetKnowledgeItem({
  id,
  image,
  title,
  description,
}: PetKnowDataProps) {
  return (
    <article
      key={id}
      className="flex flex-col p-2 pb-5 gap-y-4 bg-neutral shadow-card hover:shadow-card-hover rounded-xl hover:scale-105 translate-all duration-300"
      style={{ flex: "1 1 calc(33% - 20px)" }}
    >
      <img className="w-full h-60 rounded-lg" src={image} alt="Pet" />

      <div className="flex flex-col gap-y-2.5 text-left">
        <p className="w-24 px-2.5 py-0.5 bg-state-blue text-[10px] font-bold text-neutral rounded-full">
          Pet Knowledge
        </p>
        <p className="text-base font-bold text-neutral-100">{title}</p>
        <p className="pb-2 text-sm font-normal text-neutral-80">
          {description}
        </p>
      </div>
    </article>
  );
}
