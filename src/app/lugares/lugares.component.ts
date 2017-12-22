import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html', // tenerlo externo
  //styleUrls: ['./app.component.css'] // llama archivos css
})
export class LugaresComponent {
  title = 'PlatziSquare';
  lugares: any = [
    { id:1 , plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: 'Floreria la Gardemia' },
    { id:2 , plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre: 'Donas La Caserita' },
    { id:3 , plan: 'pagado', cercania: 2, distancia: 5, active: false, nombre: 'Veterinaria happyDog' },
    { id:4 , plan: 'gratuito', cercania: 3, distancia: 10, active: false, nombre: 'Floreria la Gardemia' },
    { id:5 , plan: 'gratuito', cercania: 3, distancia: 35, active: true, nombre: 'Donas La Caserita' },
    { id:6 , plan: 'pagado', cercania: 3, distancia: 120, active: true, nombre: 'Veterinaria happyDog' },
  ]; // acepta cualquier tipo de objeto
  personas: any = [
    { id:1 , nombres: 'juan perez', edad: 12 },
    { id:2 , nombres: 'maria garcia', edad: 34 },
    { id:3 , nombres: 'ana caredenas', edad: 20 },
    { id:4 , nombres: 'juana', edad: 21 },
    { id:5 , nombres: 'rocio', edad: 16 },
    { id:6 , nombres: 'maripaz', edad: 15 },
  ];
  lat: number = -16.4571485;
  lng: number = -71.5307593;
  constructor() {

  }

}

