export interface IUpdateProductParams {
  sku: number;
  name: string;
  price: number;
  gender?: string;
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
}
