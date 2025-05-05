import ProductItem from "../ProductItem";

export default function ProductsList() {
  const items = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <ul className="flex flex-row flex-wrap justify-between w-full gap-5">
      {items.map((_) => (
        <ProductItem />
      ))}
    </ul>
  );
}
