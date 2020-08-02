import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `
  // <h1 [style.color]="textColor" [style.background]="backgroundColor">Wellcom to {{ title }}</h1>
  // <h2 [ngStyle]="styleObj">Wellcom to {{ title }}</h2>
  // <h3 [class.with-border]="withBorder">Wellcom to {{ title }}</h3>
  // <h4 [ngClass]="{'with-border': withBorder, 'other-class': true}">Wellcom to {{ title }}</h4>
  // <img [src]="imageSrc">
  // `,
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title: string = 'Viet Nam!';
  // imageSrc = 'https://picsum.photos/200/300';

  // textColor = "tomato";
  // backgroundColor = "black";

  // styleObj = {color: this.textColor, background: this.backgroundColor};

  // withBorder = true;

  itemImageUrl = '../assets/phone.png';
  isUnchanged = true;
  classes = 'special';

}
