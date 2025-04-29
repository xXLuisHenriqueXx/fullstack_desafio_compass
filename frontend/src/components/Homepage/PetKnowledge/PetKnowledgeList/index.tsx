import PetKnow1 from "@/assets/pet_know1.jpg";
import PetKnow2 from "@/assets/pet_know2.jpg";
import PetKnow3 from "@/assets/pet_know3.jpg";

interface PetKnowDataProps {
  id: number;
  image: string;
  title: string;
  description: string;
}

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
    <ul className="flex flex-row flex-wrap justify-between w-full gap-5">
      {petKnowData.map((item) => (
        <article
          key={item.id}
          className="flex flex-col p-2 pb-5 gap-y-4 bg-neutral shadow-card rounded-xl"
          style={{ flex: "1 1 calc(33% - 20px)" }}
        >
          <img className="w-full h-60 rounded-lg" src={item.image} alt="Pet" />

          <div className="flex flex-col gap-y-2.5 text-left">
            <p className="w-24 px-2.5 py-0.5 bg-state-blue text-[10px] font-bold text-neutral rounded-full">
              Pet Knowledge
            </p>
            <p className="text-base font-bold text-neutral-100">{item.title}</p>
            <p className="pb-2 text-sm font-normal text-neutral-80">
              {item.description}
            </p>
          </div>
        </article>
      ))}
    </ul>
  );
}
