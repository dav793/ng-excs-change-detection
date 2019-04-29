import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  modelImmutable = { name: 'Tester Component' };

  modelObservable = new Observable((observer) => {
    setInterval(() => {
      observer.next(Math.random());
    }, 1000);
  });

  processClick() {

    // esta línea NO dispara detección de cambios, ya que la referencia del objeto no cambia.
    // this.model.name = 'New Component';

    // esta línea SI dispara detección de cambios, ya que la referencia del objeto se cambia
    this.modelImmutable = { name: 'New Component' };

  }

}
