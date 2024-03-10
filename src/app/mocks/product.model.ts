export type Category = 'classic' | 'cocktail' | 'original';
export interface Product {
    id: number;
    title: string;
    img: string;
    smallDescription: string;
    longDescription: string;
    price: number;
    pitch: string;
    feature1:string;
    feature2:string;
    feature3:string;
    category: Category;
  }