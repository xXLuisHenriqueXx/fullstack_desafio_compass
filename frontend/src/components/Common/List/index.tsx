import { IProduct } from "../../../common/interfaces/Product";
import Item from "./Item";

interface Props {
  data?: IProduct[];
  numCols: number;
  numItems?: number;
}

export default function List({ data, numCols, numItems }: Props) {
  let items;
  if (numItems) items = Array.from({ length: numItems }, (_, i) => i + 1);

  const colClass =
    {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      5: "grid-cols-5",
      6: "grid-cols-6",
    }[numCols] || "grid-cols-1";

  return (
    <>
      {numItems && (
        <ul className={`grid ${colClass} gap-5 w-full`}>
          {items?.map((_) => (
            <Item />
          ))}
        </ul>
      )}

      {data && (
        <ul className={`grid ${colClass} gap-5 w-full`}>
          {data?.map((item) => (
            <Item data={item} />
          ))}
        </ul>
      )}
    </>
  );
}
