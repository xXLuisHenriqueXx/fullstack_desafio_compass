import { IProduct } from "../../../common/interfaces/Product";
import ImageShare from "./ImageShare";
import Info from "./Info";

interface Props {
  data: IProduct | undefined;
}

export default function Detail({ data }: Props) {
  return (
    <section className="flex flex-row items-start gap-x-8 max-w-full mx-32 mt-32 px-5 py-6 border border-neutral-10 rounded-3xl">
      <ImageShare images={data?.images} />
      <Info data={data} />
    </section>
  );
}
