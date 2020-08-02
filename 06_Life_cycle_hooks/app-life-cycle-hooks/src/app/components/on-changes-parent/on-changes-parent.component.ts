import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from 'src/app/models/Hero';

@Component({
  selector: 'app-on-changes-parent',
  templateUrl: './on-changes-parent.component.html',
  styleUrls: ['./on-changes-parent.component.css']
})
export class OnChangesParentComponent implements OnInit {

  hero = new Hero('Khanh', 20);
  msg: string = 'Hello World!';

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  onFormSubmit(heroForm: NgForm) {
    let name = heroForm.controls['name'].value;
    let age = heroForm.controls['age'].value;
    this.hero = new Hero(name, age);
  }

}
