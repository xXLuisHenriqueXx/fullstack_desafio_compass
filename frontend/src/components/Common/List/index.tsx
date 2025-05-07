import { tv } from "tailwind-variants";

import Item from "./Item";
import { IProduct } from "../../../common/interfaces/Product";

interface Props {
  data?: IProduct[];
  numCols: 1 | 2 | 3 | 4 | 5 | 6 | undefined;
}

export default function List({ data, numCols }: Props) {
  const container = tv({
    base: "grid gap-5 w-full",
    variants: {
      cols: {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
        5: "grid-cols-5",
        6: "grid-cols-6",
      },
    },
    defaultVariants: {
      cols: 1,
    },
  });

  return (
    <ul className={container({ cols: numCols })}>
      {data?.map((item) => (
        <Item data={item} />
      ))}
    </ul>
  );
}
