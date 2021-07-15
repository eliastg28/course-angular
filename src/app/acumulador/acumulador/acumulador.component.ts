import {Component} from "@angular/core";

@Component({
  selector: 'app-acumulador',
  template: `<h1>{{title}}</h1>

<h3>La base es: {{base}}</h3>

<button (click)="acumular(-base)">-5</button>
<span>{{num}}</span>
<button (click)="acumular(base)">+5</button>
`
})

export class AcumuladorComponent {
  title: string = 'Accumulator App';
  num: number = 0;
  base: number = 5;

  acumular = (numero: number) => {
    this.num += numero;
  }
}

