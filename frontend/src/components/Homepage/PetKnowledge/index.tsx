import { ChevronRight } from "lucide-react";
import PetKnowledgeList from "./PetKnowledgeList";

export default function PetKnowledge() {
  return (
    <section className="flex flex-col w-full px-32">
      <header className="flex flex-row items-end justify-between w-full mb-9">
        <div>
          <h3 className="text-base font-medium text-black">Whats new?</h3>
          <h2 className="text-2xl font-bold text-primary">
            Take a look at some of our pets
          </h2>
        </div>

        <button className="flex flex-row items-center gap-x-2 px-7 py-3 border-2 border-primary hover:bg-primary text-primary hover:text-neutral font-medium text-sm rounded-full transition-all duration-300 cursor-pointer">
          <p>View more</p>
          <ChevronRight size={16} />
        </button>
      </header>

      <PetKnowledgeList />
    </section>
  );
}
