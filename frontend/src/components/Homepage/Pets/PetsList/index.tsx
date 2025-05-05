import PetItem from "../PetItem";

export default function PetsList() {
  const items = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <ul className="grid grid-cols-4 gap-5 w-full">
      {items.map((_) => (
        <PetItem />
      ))}
    </ul>
  );
}
