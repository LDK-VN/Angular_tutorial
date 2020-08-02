# Property bidding

Use property(thuộc tính) binding to set properties of target elements or directive @Input() decorators.

## DataBinding  
Two-Way Data-Binding: Bất cứ thay đổi nào trên view đều được tự động cập nhật vào component class và ngược lại

  1. `PropertyBiding`binding with template (component -> template).
  2. `EventBidding` interactive with template (template -> component)
  3. Using `Curly brackets` when you want show information and using `Square brackets` when you want binding attributes of element
  
### Attribute binding 
  - `<img [class][id]>` document.getElementById(...).attribute

  ```HTML
    import { Component } from '@angular/core';

    @Component({
      selector: 'app-root',
      template: `
      <h1 [style.color]="textColor" [style.background]="backgroundColor">Wellcom to {{ title }}</h1>
      <h2 [ngStyle]="styleObj">Wellcom to {{ title }}</h2>
      <h3 [class.with-border]="withBorder">Wellcom to {{ title }}</h3>
      <h4 [ngClass]="{'with-border': withBorder, 'other-class': true}">Wellcom to {{ title }}</h4>
      <img [src]="imageSrc">
      `,
      styleUrls: ['./app.component.css']
    })
    export class AppComponent {
      title: string = 'Viet Nam!';
      imageSrc = 'https://picsum.photos/200/300';

      textColor = "tomato";
      backgroundColor = "black";

      styleObj = {color: this.textColor, background: this.backgroundColor};

      withBorder = true;
    }

  ```

# NOTE
  - Khi gán value cho variable -> type của variable lúc này chính là type của value 
  
  ```
    title: string = 'khanhld' Declare type string
    `title = 'khanhld' No need to declare `string`
  ```
