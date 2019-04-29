import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-with-manual',
  templateUrl: './with-manual.component.html',
  styleUrls: ['./with-manual.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WithManualComponent {

  value = 0;

  constructor(private changeDetector: ChangeDetectorRef) {

    setTimeout(() => {
      this.value = 100;

      this.changeDetector.detectChanges();    // trigger change detection manually

      console.log('timer modified value');
    }, 5000);

  }

}
