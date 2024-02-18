import { Injectable } from '@angular/core';
import { Product } from '../mocks/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    { 
      id: 1, 
      title: 'Coeur de boeuf', 
      img: 'assets/img/product-coeur-de-boeuf.png',
      smallDescription: "Sachet individuel d’une quinzaine de graines.", 
      longDescription: "Découvrez l'exquise Tomate Cœur de Bœuf, une variété qui séduira les amateurs de tomates par sa forme distinctive et son goût exceptionnel. Ces tomates sont caractérisées par leur grande taille, leur forme côtelée et leur chair charnue, offrant une expérience gustative riche et savoureuse.", 
      price: 4 
    },
    { 
      id: 2, 
      title: 'Beauty Queen', 
      img: 'assets/img/product-beauty-queen.png',
      smallDescription: "Sachet individuel d’une quinzaine de graines.", 
      longDescription: "BEAUTY QUEEN PLACEHOLDER", 
      price: 5 
    },
    { 
      id: 3, 
      title: 'Noire de crimée', 
      img: 'assets/img/product-noire-de-crimee.png',
      smallDescription: "Sachet individuel d’une quinzaine de graines.", 
      longDescription: "NOIRE DE CRIMEE PLACEHOLDER", 
      price: 3 
    },
    { 
      id: 4, 
      title: 'Ananas', 
      img: 'assets/img/product-ananas.png',
      smallDescription: "Sachet individuel d’une quinzaine de graines.", 
      longDescription: "ANANAS PLACEHOLDER", 
      price: 6 
    },
    { 
      id: 5, 
      title: 'Green Zebra', 
      img: 'assets/img/product-green-zebra.png',
      smallDescription: "Sachet individuel d’une quinzaine de graines.", 
      longDescription: "GREEN ZEBRA PLACEHOLDER", 
      price: 2 
    },
    { 
      id: 6, 
      title: 'White Beauty', 
      img: 'assets/img/product-white-beauty.png',
      smallDescription: "Sachet individuel d’une quinzaine de graines.", 
      longDescription: "WHITE BEAUTY PLACEHOLDER", 
      price: 66.55 
    },
    // Ajoutez les autres produits de manière similaire
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

}
