import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-test-global-css',
  templateUrl: './test-global-css.component.html',
  styleUrl: './test-global-css.component.css'
})
export class TestGlobalCSSComponent {

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

}
