import { Component } from '@angular/core';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
export class TesterComponent {

  textValue: string;

  constructor() { }

  processClick() { }

  get runChangeDetection() {
    console.log('Running change detection cycle');
    return true;
  }

}
