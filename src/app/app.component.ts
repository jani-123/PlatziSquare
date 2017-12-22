import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // tenerlo externo
  styleUrls: ['./app.component.css'] // llama archivos css
})
export class AppComponent {
  title = 'PlatziSquare';
  a = 3;
  b = 5;
  listo = false;
  nombre:string = ''; // tipo a la variable

  constructor() {
    setTimeout(() => { //pasado 3 segundos se activa el boton
      this.listo = true;
    }, 3000)
  }
  hacerAlgo(){
    alert('haciendo el curso de platzi'); // event binding
  }
}
