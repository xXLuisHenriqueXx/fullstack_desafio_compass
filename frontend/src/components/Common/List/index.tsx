import Item from "./Item";

interface Props {
  numCols: number;
  numItems: number;
}

export default function List({ numCols, numItems }: Props) {
  const items = Array.from({ length: numItems }, (_, i) => i + 1);

  return (
    <ul className={`grid grid-cols-${numCols} gap-5 w-full`}>
      {items.map((_) => (
        <Item />
      ))}
    </ul>
  );
}
