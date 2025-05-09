import { tv } from "tailwind-variants";

import PetKnowledgeItem from "../PetKnowledgeItem";

import { petKnowData } from "../../../../common/data/PetKnowledge";

const container = tv({
  base: "grid grid-cols-3 w-full gap-5",
});

export default function PetKnowledgeList() {
  return (
    <ul className={container()}>
      {petKnowData.map((item) => (
        <PetKnowledgeItem
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </ul>
  );
}
