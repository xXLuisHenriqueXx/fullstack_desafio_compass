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

  const notFoundText = tv({
    slots: {
      containerText: "py-14",
      text: "text-2xl font-semibold text-primary-80 text-center",
    },
    variants: {
      colsSpan: {
        1: {
          containerText: "col-span-1",
        },
        2: {
          containerText: "col-span-2",
        },
        3: {
          containerText: "col-span-3",
        },
        4: {
          containerText: "col-span-4",
        },
        5: {
          containerText: "col-span-5",
        },
        6: {
          containerText: "col-span-6",
        },
      },
    },
  });
  const { containerText, text } = notFoundText();

  return (
    <ul className={container({ cols: numCols })}>
      {data?.length === 0 ? (
        <div className={containerText({ colsSpan: numCols })}>
          <p className={text()}>
            Sorry, seems like we cannot find products for you...
          </p>
        </div>
      ) : (
        data?.map((item: IProduct) => <Item key={item.id} data={item} />)
      )}
    </ul>
  );
}
