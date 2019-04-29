import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-with-input',
  templateUrl: './with-input.component.html',
  styleUrls: ['./with-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WithInputComponent {

  @Input() modelImmutable;
  @Input() modelObservable;

  constructor() { }

}
