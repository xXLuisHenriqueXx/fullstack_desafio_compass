import { api } from "./Api";

import { queryToString } from "../utils/queryToString";

import { IGetAllProductsParams } from "../common/interfaces/GetAllQueryParams";

export const productsService = {
  getAll: async (params: IGetAllProductsParams) => {
    const baseUrl = "/products";

    const url = `${baseUrl}${queryToString(params)}`;

    const response = await api.get(url);

    return response;
  },

  getById: async (id: number) => {
    const url = `/products/${id}`;

    const response = await api.get(url);

    return response;
  },
};
