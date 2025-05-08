import { tv } from "tailwind-variants";

interface Props {
  type: string;
}

const container = tv({
  base: "flex flex-row gap-x-1.5 mt-28 mb-3 ml-32 text-sm font-medium text-neutral-60",
});

export default function Path({ type }: Props) {
  return (
    <div className={container()}>
      <p>Home</p>
      <p>{">"}</p>
      <p>{type}</p>
    </div>
  );
}
