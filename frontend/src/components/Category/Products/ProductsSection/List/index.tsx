import ListItem from "../ListItem";

export default function List() {
  const items = Array.from({ length: 15 }, (_, i) => i + 1);

  return (
    <ul className="flex flex-row flex-wrap justify-between w-full gap-5">
      {items.map((_) => (
        <ListItem />
      ))}
    </ul>
  );
}
