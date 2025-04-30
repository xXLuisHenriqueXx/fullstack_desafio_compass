import MorePuppiesItem from "../MorePuppiesItem";

export default function MorePuppiesList() {
  const items = Array.from({ length: 4 }, (_, i) => i + 1);

  return (
    <ul className="flex flex-row justify-between w-full gap-5">
      {items.map((_) => (
        <MorePuppiesItem />
      ))}
    </ul>
  );
}
