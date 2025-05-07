import { tv } from "tailwind-variants";
import { ChevronRight } from "lucide-react";

import PetKnowledgeList from "./PetKnowledgeList";

const card = tv({
  slots: {
    containerMain: "flex flex-col w-full px-32",
    containerHeader: "flex flex-row items-end justify-between w-full mb-9",
    title: "text-2xl font-bold text-primary",
    subtitle: "text-base font-medium text-black",
  },
});

const { containerMain, containerHeader, title, subtitle } = card();

export default function PetKnowledge() {
  return (
    <section className={containerMain()}>
      <header className={containerHeader()}>
        <div>
          <h3 className={subtitle()}>You already know?</h3>
          <h2 className={title()}>Useful pet knowledge</h2>
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
