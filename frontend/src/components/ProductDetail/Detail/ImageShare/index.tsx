import Carousel from "./Carousel";
import Share from "./Share";

interface Props {
  images: string[] | undefined;
}

export default function ImageShare({ images }: Props) {
  return (
    <article className="flex flex-col gap-y-4 max-w-1/2">
      <Carousel images={images} />

      <Share />
    </article>
  );
}
