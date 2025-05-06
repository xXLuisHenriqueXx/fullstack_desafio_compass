import { EnumProductType } from "../enum/ProductType";

export interface IGetAllProductsParams {
  limit?: number;
  offset?: number;
  type?: EnumProductType;
  gender?: string[];
  color?: string[];
  minPrice?: number;
  maxPrice?: number;
  size?: string[];
}
