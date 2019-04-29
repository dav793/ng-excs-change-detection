import {Component, ChangeDetectionStrategy} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-with-event',
  templateUrl: './with-event.component.html',
  styleUrls: ['./with-event.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WithEventComponent {

  count = 0;

  constructor(private http: HttpClient) {
    // this.runTimer();
    // this.runPromise();
    // this.runObservable();
  }

  add() {
    this.count++;
  }

  runTimer() {

    setTimeout(() => {

      this.count = 25;

      console.log('timer modified count');

    }, 2000);

  }

  runPromise() {

    Promise.resolve().then(() => {

      this.count = 50;

      console.log('promise modified count');

    });

  }

  runObservable() {

    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(res => {

      this.count = (res as Array<any>).length;

      console.log('http request modified count');

    });

  }

}
