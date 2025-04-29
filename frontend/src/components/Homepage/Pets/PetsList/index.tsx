import PetItem from "../PetItem";

export default function PetsList() {
  const items = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <ul className="flex flex-row flex-wrap justify-between w-full gap-5">
      {items.map((_) => (
        <PetItem />
      ))}
    </ul>
  );
}
