export interface Skip {
  id: number,
  size: number,
  hire_period_days: number,
  transport_cost: number,
  per_tonne_cost: number,
  price_before_vat: number,
  vat: number,
  postcode: string,
  area: number,
  forbidden: boolean,
  created_at: string,
  updated_at: string,
  allowed_on_road: boolean,
  allows_heavy_waste: boolean
}

export interface SkipOption {
  id: number;
  size: string;
  hirePeriod: string;
  price: string;
}