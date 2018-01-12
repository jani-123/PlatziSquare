import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html', // tenerlo externo
  //styleUrls: ['./app.component.css'] // llama archivos css
})
export class LugaresComponent {
  title = 'PlatziSquare';

  lat: number = -16.4571485;
  lng: number = -71.5307593;
  lugares = null;
  constructor(private lugaresService: LugaresService) {
    //this.lugares = lugaresService.getLugares();
    lugaresService.getLugares()
        .subscribe(lugares =>{
          this.lugares = lugares;
          var me = this;
          me.lugares = Object.keys(me.lugares).map(function (key){ return me.lugares[key]; });
        }, error => {
          console.log(error);
          alert('Dificultades Tecnicas. Error: '+ error.statusText);
        })
  }

}

