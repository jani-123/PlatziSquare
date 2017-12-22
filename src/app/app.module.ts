import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { Routes, RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
const appRoutes: Routes = [ // arreglo de rutas
  { path: '', component: LugaresComponent },
  { path:'lugares', component: LugaresComponent },
  { path:'detalle/:id', component: DetalleComponent },
  { path: 'contacto', component: ContactoComponent }
]

@NgModule({ 
  declarations: [ // agrega componentes
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent
  ],
  imports: [  // llama a los modulos a utilizae
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD0tdktt2f5mHTIC68ybO7is8lr78Sw8xM'
    }),
    BrowserAnimationsModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [], // servicios a implementar
  bootstrap: [AppComponent]
})
export class AppModule { }
