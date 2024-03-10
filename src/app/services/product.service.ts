import { Injectable } from '@angular/core';
import { Product } from '../mocks/product.model';
import { Router } from '@angular/router';

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
      price: 4,
      pitch: "Faites de la Tomate Cœur de Bœuf le joyau de votre jardin et savourez des récoltes abondantes de ces délicieuses tomates. Transformez vos plats en créations culinaires irrésistibles grâce à cette variété exceptionnelle.",
      feature1: "Forme Unique : Les tomates Cœur de Bœuf se distinguent par leur forme généreuse et arrondie, évoquant celle d'un cœur. Chair Charpentée : La chair de ces tomates est juteuse, dense et pleine de saveurs, idéale pour des salades gourmandes, des sauces ou des sandwiches.",
      feature2: "Sucrosité Délicate : Les tomates Cœur de Bœuf offrent une douceur naturelle équilibrée avec une légère acidité, créant une combinaison de saveurs inoubliable. Arôme Enivrant : Chaque bouchée libère un arôme frais et enivrant qui capture l'essence même des tomates cultivées avec soin.",
      feature3: "Semences de Qualité : Nos graines de tomates Cœur de Bœuf sont sélectionnées avec soin pour garantir des plants vigoureux et productifs. Cultivation Responsable : Nous nous engageons à promouvoir des pratiques agricoles durables pour vous offrir des produits de la plus haute qualité.",
      category: "classic", 
    },
    { 
      id: 2, 
      title: 'Beauty Queen', 
      img: 'assets/img/product-beauty-queen.png',
      smallDescription: "Sachet individuel d’une quinzaine de graines.", 
      longDescription: "BEAUTY QUEEN PLACEHOLDER", 
      price: 5,
      pitch: "",
      feature1: "feature",
      feature2: "feature",
      feature3: "feature",
      category: "classic",  
    },
    { 
      id: 3, 
      title: 'Noire de crimée', 
      img: 'assets/img/product-noire-de-crimee.png',
      smallDescription: "Sachet individuel d’une quinzaine de graines.", 
      longDescription: "NOIRE DE CRIMEE PLACEHOLDER", 
      price: 3,
      pitch: "",
      feature1: "feature",
      feature2: "feature",
      feature3: "feature",
      category: "classic",  
    },
    { 
      id: 4, 
      title: 'Ananas', 
      img: 'assets/img/product-ananas.png',
      smallDescription: "Sachet individuel d’une quinzaine de graines.", 
      longDescription: "ANANAS PLACEHOLDER", 
      price: 6,
      pitch: "",
      feature1: "feature",
      feature2: "feature",
      feature3: "feature",
      category: "classic",  
    },
    { 
      id: 5, 
      title: 'Green Zebra', 
      img: 'assets/img/product-green-zebra.png',
      smallDescription: "Sachet individuel d’une quinzaine de graines.", 
      longDescription: "GREEN ZEBRA PLACEHOLDER", 
      price: 2,
      pitch: "",
      feature1: "feature",
      feature2: "feature",
      feature3: "feature",
      category: "classic",  
    },
    { 
      id: 6, 
      title: 'White Beauty', 
      img: 'assets/img/product-white-beauty.png',
      smallDescription: "Sachet individuel d’une quinzaine de graines.", 
      longDescription: "WHITE BEAUTY PLACEHOLDER", 
      price: 66.55,
      pitch: "",
      feature1: "feature",
      feature2: "feature",
      feature3: "feature",
      category: "classic",  
    },
  ];

  constructor(
    private router: Router
  ) { }

  getProducts(): Product[] {
    return this.products;
  }

  //Méthode pour récupération d'un produit par son Id
  //Condition: produit retourné si son id existe
  getProductById(id: number): Product {
    const product = this.products.find(product => product.id === id);
    if (product) {
      return product;
    } else {
      this.router.navigateByUrl('/error404');
      throw new Error("le produit avec l'id ${id} est introuvable.");
    }
  }
}
