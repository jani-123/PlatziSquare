import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html', // tenerlo externo
  //styleUrls: ['./app.component.css'] // llama archivos css
})
export class DetalleComponent {
  lugares: any = [
    { id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: 'Floreria la Gardemia' , descripcion: 'negocios que estan cerca a ti'},
    { id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre: 'Donas La Caserita' , descripcion: 'negocios que estan cerca a ti'},
    { id: 3, plan: 'pagado', cercania: 2, distancia: 5, active: false, nombre: 'Veterinaria happyDog' , descripcion: 'negocios que estan cerca a ti'},
    { id: 4, plan: 'gratuito', cercania: 3, distancia: 10, active: false, nombre: 'Floreria la Gardemia' , descripcion: 'negocios que estan cerca a ti'},
    { id: 5, plan: 'gratuito', cercania: 3, distancia: 35, active: true, nombre: 'Donas La Caserita' , descripcion: 'negocios que estan cerca a ti'},
    { id: 6, plan: 'pagado', cercania: 3, distancia: 120, active: true, nombre: 'Veterinaria happyDog' , descripcion: 'negocios que estan cerca a ti'},
  ];
  id= null;
  lugar:any = {}; // objeto vacio
  constructor(private route: ActivatedRoute, private lugaresService:LugaresService){
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.queryParams);
    console.log(this.route.snapshot.queryParams['actions2']);
    console.log(this.route.snapshot.queryParams['refare']);
    this.id = this.route.snapshot.params['id'];
    //this.lugar = this.lugaresService.buscarLugar(this.id);
    this.lugaresService.buscarLugar(this.id)
      .valueChanges().subscribe(lugar => {
        this.lugar = lugar;
      });
  }
}
