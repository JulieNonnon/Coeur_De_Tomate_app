import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  //Use of Inputs to customize both the title and backgroungImage of the banner
  @Input() title!: string;
  @Input() backgroundImageUrl!: string;

}
