import { create } from "zustand";

import { IGetAllProductsParams } from "../common/interfaces/products/GetAllQueryParams";

interface ProductsState {
  filters: Omit<IGetAllProductsParams, "limit" | "offset" | "type">;
  page: number;
  setFilters: (filters: Partial<ProductsState["filters"]>) => void;
  setPage: (page: number) => void;
  reset: () => void;
}

export const useProductsStore = create<ProductsState>((set) => ({
  filters: {},
  page: 1,
  setFilters: (filters) =>
    set((state) => ({
      filters: { ...state.filters, ...filters },
      page: 1,
    })),
  setPage: (page) => set(() => ({ page })),
  reset: () => set({ filters: {}, page: 1 }),
}));
