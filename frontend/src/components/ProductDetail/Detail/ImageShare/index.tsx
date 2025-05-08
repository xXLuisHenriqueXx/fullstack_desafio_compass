import { tv } from "tailwind-variants";

import Carousel from "./Carousel";
import Share from "./Share";

interface Props {
  images: string[] | undefined;
}

const container = tv({
  base: "flex flex-col gap-y-4 max-w-1/2",
});

export default function ImageShare({ images }: Props) {
  return (
    <article className={container()}>
      <Carousel images={images} />

      <Share />
    </article>
  );
}
