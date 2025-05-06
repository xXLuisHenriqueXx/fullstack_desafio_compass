import { EnumProductType } from "../enum/ProductType";

export interface ICreateProductParams {
  sku: number;
  name: string;
  price: number;
  gender?: string;
  size?: string;
  age?: string;
  color: string[];
  vaccinated?: boolean;
  dewormed?: boolean;
  certified?: string;
  microchip?: boolean;
  location?: string;
  addInfo?: string[];
  images: string[];
  gift?: string;
  category?: string;
  type: EnumProductType;
}
