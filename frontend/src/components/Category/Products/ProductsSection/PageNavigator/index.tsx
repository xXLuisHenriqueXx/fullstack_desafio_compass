import { ArrowLeft, ArrowRight } from "lucide-react";
import { useProductsStore } from "../../../../../states/ProductsState";

interface Props {
  totalPages: number;
}

export default function PageNavigator({ totalPages }: Props) {
  const { page, setPage } = useProductsStore();

  return (
    <nav className="flex flex-row items-center self-center gap-x-3 mt-10">
      <button
        className="px-3.5 py-1.5 text-primary-80 cursor-pointer"
        onClick={() => setPage(Math.max(1, page - 1))}
        disabled={page === 1}
      >
        <ArrowLeft size={20} />
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={`px-3.5 py-1.5 text-lg font-bold ${
            page === index + 1
              ? "bg-primary text-neutral rounded-lg"
              : "text-primary"
          } cursor-pointer`}
          onClick={() => setPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        className="px-3.5 py-1.5 text-primary-80 cursor-pointer"
        onClick={() => setPage(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
      >
        <ArrowRight size={20} />
      </button>
    </nav>
  );
}
