import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isDesktopView = true;
  showBurgerMenu = false;


  private checkScreenWidth(): void {
    this.isDesktopView = window.innerWidth > 430;
    this.showBurgerMenu = !this.isDesktopView;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenWidth();
  }

  ngOnInit(): void {
    this.checkScreenWidth();
  }

  toggleMenu(): void {
    this.showBurgerMenu = !this.showBurgerMenu;
  }


  // Fonctionnalité search (WIP)
  searchTerm: string = '';

  onSubmit() {
    // Mettez en œuvre la logique de recherche ici, par exemple, vous pouvez émettre un événement
    // pour informer le composant parent de la recherche.
    // Vous pouvez également appeler une fonction de service pour effectuer la recherche.
  }


}
