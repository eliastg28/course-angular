import {Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  constructor() {
  }

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  borrado: string = '';

  borraHeroe(): void{
    this.borrado = this.heroes.shift() || '';
  }

}
