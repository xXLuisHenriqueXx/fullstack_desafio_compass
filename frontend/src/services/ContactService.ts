import { api } from "./Api";

import { ICreateContactParams } from "../common/interfaces/contact/CreateContactParams";

export const contactService = {
  create: async (params: ICreateContactParams) => {
    const url = "/contact";

    const response = await api.post(url, params);

    return response.data;
  },
};
