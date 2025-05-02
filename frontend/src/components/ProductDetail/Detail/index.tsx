import ImageShare from "./ImageShare";
import Info from "./Info";

export default function Detail() {
  return (
    <section className="flex flex-row items-start gap-x-8 max-w-full mx-32 mt-32 px-5 py-6 border border-neutral-10 rounded-3xl">
      <ImageShare />
      <Info />
    </section>
  );
}
