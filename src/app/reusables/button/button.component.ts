import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

//Use of Inputs to customize both the text and link of the button
@Input() text!: string;
@Input() link!: string;


}
