import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h4
      [ngClass]="{ 'with-border': withBorder, 'other-class': true }"
      [style.color] = textColor
      (mouseover)="onTextMouseOver()"
      (mouseout)="onTextMouseOut()"
    >
      Wellcom to {{ title }}
    </h4>
    <!-- <img [src]="imageSrc"> -->
    <button (click)="onButtonClick()">
      {{ withBorder ? 'Hide' : 'Show' }} Border
    </button>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Viet Nam!';
  imageSrc = 'https://picsum.photos/200/300';

  textColor = 'tomato';
  backgroundColor = 'black';

  withBorder = true;

  onTextMouseOver() {
    this.textColor = 'blue';
    console.log('onTextMouseOver');
  }

  onTextMouseOut() {
    this.textColor = 'tomato';
    console.log('onTextMouseOut');
  }

  onButtonClick() {
    this.withBorder = !this.withBorder;
  }
}
