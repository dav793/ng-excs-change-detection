# NgExcsChangeDetection

## Cómo sabe Angular cuándo actualizar los valores interpolados en los templates?

Mediante una [estrategia de  detección de cambios](https://angular.io/api/core/ChangeDetectionStrategy).

Angular viene con dos disponibles:

### ChangeDetectionStrategy.Default

* `git checkout default-change-detection`
* `ng serve`
* Escriba en el textbox o presione el botón. Observe cómo estos eventos ocasionan un nuevo ciclo de detección de cambios.
* Duplique el tester component en la vista. Observe como un evento disparado por CUALQUIER componente ocasiona un nuevo ciclo de detección de cambios para TODOS los componentes.

Con esta estrategia, Angular reacciona ante casi cualquier estímulo con un nuevo ciclo de detección de cambios. 

Durante cada ciclo, Angular revisa cada valor interpolado en cada template, lo compara contra su valor en el ciclo pasado, y si son distintos actualiza la vista.

Esto se puede volver lento fácilmente... En especial conforme la aplicación crezca en complejidad.

### ChangeDetectionStrategy.OnPush

* `git checkout on-push-change-detection`
* `ng serve`

#### Recursos
* [Guide to OnPush Change Detection](https://netbasal.com/a-comprehensive-guide-to-angular-onpush-change-detection-strategy-5bac493074a4)
