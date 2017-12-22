import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // tenerlo externo
  styleUrls: ['./app.component.css'] // llama archivos css
})
export class AppComponent {
  title = 'PlatziSquare';
  lugares:any = [
    { active: true , nombre:'Floreria la Gardemia' },
    { active: true , nombre: 'Donas La Caserita' },
    { active: false , nombre: 'Veterinaria happyDog' },
    { active: false , nombre: 'Floreria la Gardemia' },
    { active: true , nombre: 'Donas La Caserita' },
    { active: true , nombre: 'Veterinaria happyDog' },
  ] // acepta cualquier tipo de objeto
  constructor() {
   
  }
 
}
