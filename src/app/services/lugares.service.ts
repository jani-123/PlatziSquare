import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";
import { Http , Headers} from "@angular/http";

@Injectable() // puede ser inyectado en otros componentes o inyectar otros componentes aqui mismo
export class LugaresService {
  API_ENDPOINT = "https://valued-watch-183001.firebaseio.com";
  lugares: any = [
    { id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: 'Floreria la Gardemia' },
    { id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre: 'Donas La Caserita' },
    { id: 3, plan: 'pagado', cercania: 2, distancia: 5, active: false, nombre: 'Veterinaria happyDog' },
    { id: 4, plan: 'gratuito', cercania: 3, distancia: 10, active: false, nombre: 'Floreria la Gardemia' },
    { id: 5, plan: 'gratuito', cercania: 3, distancia: 35, active: true, nombre: 'Donas La Caserita' },
    { id: 6, plan: 'pagado', cercania: 3, distancia: 120, active: true, nombre: 'Veterinaria happyDog' },
    { id: 7, plan: 'gratuito', cercania: 5, distancia: 65, active: true, nombre: 'La Calera' },
    { id: 8, plan: 'pagado', cercania: 6, distancia: 12, active: true, nombre: 'Hospital Paso al Infierno' },
  ]; 
  constructor (private afDB:AngularFireDatabase, private http:Http){}
  public getLugares(){
    //return this.afDB.list('lugares/');
    return this.http.get(this.API_ENDPOINT + '/.json')
        .map((resultado) =>{
          const data = resultado.json().lugares;
          return data;
        })
  }
  public buscarLugar(id) {
    //return this.lugares.filter((lugar) => { return lugar.id == id })[0] || null;
    return this.afDB.object('lugares/' + id);
  }
  public guardarLugar(lugar){
    //this.afDB.database.ref('lugares/'+ lugar.id).set(lugar);
    const headers = new Headers({"content-Type":"application/json"});
    return this.http.post(this.API_ENDPOINT+'/lugares.json', lugar,{headers:headers}).subscribe();
  }
  public editarLugar(lugar) {
    this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
  }
  public obtenerGeoData(direccion){
    //http://maps.google.com/maps/api/geocode/json?address=78-43+diagonal+70f,+Bogota,Colombia
    return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion)
  }
  public getLugar(id) {
    return this.afDB.object('lugares/' + id);
  }
}