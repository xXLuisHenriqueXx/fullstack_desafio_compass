import { tv } from "tailwind-variants";

import PetKnowledgeItem from "../PetKnowledgeItem";
import PetKnow1 from "@/assets/pet_know1.jpg";
import PetKnow2 from "@/assets/pet_know2.jpg";
import PetKnow3 from "@/assets/pet_know3.jpg";

export interface PetKnowDataProps {
  id: number;
  image: string;
  title: string;
  description: string;
}

const container = tv({
  base: "grid grid-cols-3 w-full gap-5",
});

const petKnowData: PetKnowDataProps[] = [
  {
    id: 1,
    image: PetKnow1,
    title: "What is a Pomeranian? How to Identify Pomeranian Dogs",
    description:
      "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.",
  },
  {
    id: 2,
    image: PetKnow2,
    title: "Dog Diet You Need To Know",
    description:
      "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.",
  },
  {
    id: 3,
    image: PetKnow3,
    title:
      "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
    description:
      "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.",
  },
];

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
