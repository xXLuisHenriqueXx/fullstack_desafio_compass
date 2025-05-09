import { tv } from "tailwind-variants";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { useProductsStore } from "../../../../../states/ProductsState";

interface Props {
  totalPages: number;
}

const pageNavigatorStyles = tv({
  slots: {
    containerMain: "flex flex-row items-center self-center gap-x-3 mt-10",
    buttonNav: "px-3.5 py-1.5 text-primary-80",
    buttonNumber:
      "px-3.5 py-1.5 text-lg font-bold rounded-lg transition-all duration-300 cursor-pointer",
  },
  variants: {
    active: {
      yes: {
        buttonNumber: "bg-primary text-neutral",
      },
      no: {
        buttonNumber: "text-primary hover:bg-primary hover:text-neutral",
      },
    },
    disable: {
      yes: {
        buttonNav: "opacity-50 cursor-not-allowed",
      },
      no: {
        buttonNav: "cursor-pointer",
      },
    },
  },
});

const { containerMain, buttonNav, buttonNumber } = pageNavigatorStyles();

export default function PageNavigator({ totalPages }: Props) {
  const { page, setPage } = useProductsStore();

  return (
    <nav className={containerMain()}>
      <button
        className={buttonNav({ disable: page === 1 ? "yes" : "no" })}
        aria-label="Previous page"
        onClick={() => setPage(Math.max(1, page - 1))}
        disabled={page === 1}
      >
        <ArrowLeft size={20} />
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={`page-${index + 1}`}
          className={buttonNumber({
            active: page === index + 1 ? "yes" : "no",
          })}
          aria-label="Page number"
          onClick={() => setPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        className={buttonNav({ disable: page === totalPages ? "yes" : "no" })}
        aria-label="Next page"
        onClick={() => setPage(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
      >
        <ArrowRight size={20} />
      </button>
    </nav>
  );
}
