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

  return (
    <ul className={`grid grid-cols-${numCols} gap-5 w-full`}>
      {items?.map((_) => (
        <Item />
      ))}

      {data?.map((item) => (
        <Item data={item} />
      ))}
    </ul>
  );
}
