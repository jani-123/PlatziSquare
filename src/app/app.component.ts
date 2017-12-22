import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // tenerlo externo
  styleUrls: ['./app.component.css'] // llama archivos css
})
export class AppComponent {
  title = 'PlatziSquare';
  lugares:any = [
    { plan: 'pagado', cercania: 1, distancia: 1, active: true , nombre:'Floreria la Gardemia' },
    { plan: 'gratuito', cercania: 1, distancia: 1.8, active: true , nombre: 'Donas La Caserita' },
    { plan: 'pagado', cercania: 2, distancia: 5, active: false , nombre: 'Veterinaria happyDog' },
    { plan: 'gratuito', cercania: 3, distancia: 10, active: false , nombre: 'Floreria la Gardemia' },
    { plan: 'gratuito', cercania: 3, distancia: 35, active: true , nombre: 'Donas La Caserita' },
    { plan: 'pagado', cercania: 3, distancia: 120, active: true , nombre: 'Veterinaria happyDog' },
  ]; // acepta cualquier tipo de objeto
  personas: any = [
    { nombres: 'juan perez', edad: 12},
    { nombres: 'maria garcia', edad: 34 },
    { nombres: 'ana caredenas', edad: 20 },
    { nombres: 'juana', edad: 21 },
    { nombres: 'rocio', edad: 16 },
    { nombres: 'maripaz', edad: 15 },
  ];
  lat: number = -16.4571485;
  lng: number = -71.5307593;
  constructor() {
   
  }
 
}
