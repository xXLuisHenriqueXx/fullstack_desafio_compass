import { tv } from "tailwind-variants";
import { ChevronRight } from "lucide-react";

import PetKnowledgeList from "./PetKnowledgeList";

import Button from "../../Common/Button";

const petKnowledgeStyles = tv({
  slots: {
    containerMain: "flex flex-col w-full px-32",
    containerHeader: "flex flex-row items-end justify-between w-full mb-9",
    title: "text-2xl font-bold text-primary",
    subtitle: "text-base font-medium text-black",
  },
});

const { containerMain, containerHeader, title, subtitle } =
  petKnowledgeStyles();

export default function PetKnowledge() {
  return (
    <section className={containerMain()}>
      <header className={containerHeader()}>
        <div>
          <h3 className={subtitle()}>You already know?</h3>
          <h2 className={title()}>Useful pet knowledge</h2>
        </div>

        <Button
          flex="yes"
          padding="xs"
          gap="xs"
          border="primary"
          text="smPrimaryMedium"
          label="View more content"
        >
          View more
          <ChevronRight size={16} />
        </Button>
      </header>

      <PetKnowledgeList />
    </section>
  );
}
