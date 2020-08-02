import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Hero } from 'src/app/models/Hero';


@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css']
})
export class OnChangesComponent implements OnChanges {

  @Input() hero: Hero;
  @Input() message: string;

  allMsgChangeLogs: string[] = [];
  allHeroChangeLogs: string[] = [];

  ngOnChanges(changes: SimpleChanges) {

	for (let propName in changes) {
		let change = changes[propName];

		let curVal  = JSON.stringify(change.currentValue);
		let prevVal = JSON.stringify(change.previousValue);
		let changeLog = `${propName}: currentValue = ${curVal}, previousValue = ${prevVal}`;

		if (propName === 'message') {
		   this.allMsgChangeLogs.push(changeLog);
		} else if (propName === 'hero') {
		   this.allHeroChangeLogs.push(changeLog);
		}
        }
  }


}
