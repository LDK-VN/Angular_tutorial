import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import {Hero} from './models/Hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hero = new Hero('Khanh', 20);
  msg: string = 'Hello World!';

  onFormSubmit(heroForm: NgForm) {
    let name = heroForm.controls['name'].value;
     let age = heroForm.controls['age'].value;
    this.hero = new Hero(name, age);
  }
}
