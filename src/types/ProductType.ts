export type TeaCategory = 'loose-leaf' | 'tea-bags' | 'ceremony' | 'sets';
export type TeaType =
  | 'green'
  | 'black'
  | 'oolong'
  | 'herbal'
  | 'white'
  | 'blend';
export type CaffeineLevel = 'none' | 'low' | 'medium' | 'high';

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle?: string;
  category: TeaCategory;
  teaType: TeaType;
  caffeine: CaffeineLevel;
  price: number;
  pricePer100g?: number;
  sizes: string[];
  origin?: string;
  flavourNotes?: string[];
  brewingTemp?: string;
  brewingTime?: string;
  badges?: string[];
  tags: string[];
  image: string;
  isFeatured?: boolean;
}
