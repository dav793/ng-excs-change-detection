# NgExcsChangeDetection

## Cómo sabe Angular cuándo actualizar los valores interpolados en los templates?

Mediante una [estrategia de  detección de cambios](https://angular.io/api/core/ChangeDetectionStrategy).

Angular viene con dos disponibles:

### ChangeDetectionStrategy.Default

Demo:

* `git checkout default-change-detection`
* `ng serve`
* Escriba en el textbox o presione el botón. Observe cómo estos eventos ocasionan un nuevo ciclo de detección de cambios.
* Duplique el tester component en la vista. Observe como un evento disparado por CUALQUIER componente ocasiona un nuevo ciclo de detección de cambios para TODOS los componentes.

Con esta estrategia, Angular reacciona ante casi cualquier estímulo con un nuevo ciclo de detección de cambios. 

Durante cada ciclo, Angular revisa cada valor interpolado en cada template, lo compara contra su valor en el ciclo pasado, y si son distintos actualiza la vista.

Esto se puede volver lento fácilmente... En especial conforme la aplicación crezca en complejidad.

### ChangeDetectionStrategy.OnPush

Demo: 

* `git checkout on-push-change-detection`
* `ng serve`

Con esta estrategia, Angular sólo va a disparar un nuevo ciclo de detección de cambios en un componente si ocurre cualquiera de estas tres cosas:

#### A. La referencia a una propiedad `@Input` cambia.
Cuando usamos la estrategia `OnPush` estamos "firmando un contrato" con Angular que nos obliga a usar como `@Inputs` ya sea **observables** u **objetos inmutables**.

La ventaja de los objetos inmutables sobre los mutables es que es mucho más eficiente detectar cambios en objetos inmutables.

Demo:

* Descomente el componente `app-with-input` en `app.component.html`.
* Observe cómo cambia cada segundo el valor interpolado en la vista del componente.
* Presione el botón `Trigger`.
* Observe el cambio en el valor interpolado en la vista del componente.

#### B. Un evento del DOM es originado desde el componente o uno de sus descendientes.
Note que únicamente sucede con eventos del DOM (e.g. clicks, teclas, scroll...) y no eventos puramente a nivel de código (e.g. http requests, timers, observables, promises...). Para disparar la detección de cambios en estos casos, use uno de los otros dos métodos.

Demo:

* Descomente el componente `app-with-event` en `app.component.html`.
* Presione el botón `Add`.
* Observe el incremento en el valor interpolado en la vista del componente.
* Descomente una a una las funciones dentro del constructor. Note como no disparan un nuevo ciclo de detección de cambios.

#### C. Un nuevo ciclo de detección de cambios es disparado manualmente.
Para disparar un cicle de detección de cambios manualmente, invoque la función `detectChanges()` de `ChangeDetectorRef`.
Esto corre un ciclo de detección de cambios en el componente que invoca la función, así como en sus descendientes.

Demo:

* Descomente el componente `app-with-manual` en `app.component.html`.
* Espere 5 segundos.
* Observe como cambia el valor interpolado en la vista.

### Recursos
* [Immutable Objects](https://wecodetheweb.com/2016/02/12/immutable-javascript-using-es6-and-beyond/)
* [Guide to OnPush Change Detection](https://netbasal.com/a-comprehensive-guide-to-angular-onpush-change-detection-strategy-5bac493074a4)
