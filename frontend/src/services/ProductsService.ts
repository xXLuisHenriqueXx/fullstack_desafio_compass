import { IGetAllProductsParams } from "../common/interfaces/GetAllQueryParams";
import { api } from "./Api";

export const productsService = {
  getAll: async (params: IGetAllProductsParams) => {
    const baseUrl = "/products?";
    const queryArray: string[] = [];

    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        if (Array.isArray(value)) {
          value.forEach((v) =>
            queryArray.push(
              `${encodeURIComponent(key)}=${encodeURIComponent(v)}`
            )
          );
        } else {
          queryArray.push(
            `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
          );
        }
      }
    });
    const queryString = queryArray.length ? `?${queryArray.join("&")}` : "";

    const url = `${baseUrl}${queryString}`;

    const response = await api.get(url);

    return response;
  },

  getById: async (id: number) => {
    const url = `/products/${id}`;

    const response = await api.get(url);

    console.log(response.data);

    return response;
  },
};
