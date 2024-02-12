import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top-btn',
  templateUrl: './back-to-top-btn.component.html',
  styleUrl: './back-to-top-btn.component.css'
})
export class BackToTopBtnComponent {

// Fonction pour faire défiler jusqu'en haut
scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}



//showButton: boolean = false;

/*
@HostListener('window:scroll', [])
onWindowScroll() {
  // Calcul de la position actuelle de l'utilisateur
  const yOffset = window.pageYOffset || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  
  // Afficher le bouton lorsque l'utilisateur a fait défiler jusqu'à la moitié du site
  this.showButton = yOffset > windowHeight / 2;
}
*/


}
