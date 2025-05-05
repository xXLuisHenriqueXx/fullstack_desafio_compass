import ProductsSection from "./ProductsSection";
import Sidebar from "./Sidebar";

export default function Products({ name }: { name: string | undefined }) {
  return (
    <section className="flex flex-row items-start gap-x-5 px-32 pt-9 pb-15">
      <Sidebar />
      <ProductsSection name={name} />
    </section>
  );
}
