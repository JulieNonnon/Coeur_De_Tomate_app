import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css'
})
export class CategoryCardComponent {

  //Use of Inputs to customize both the title and backgroungImage of the card
  @Input() title!: string;
  @Input() backgroundImageUrl!: string;

}
