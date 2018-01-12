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
import { LugaresService } from './services/lugares.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CrearComponent } from './crear/crear.component';
import { HttpModule } from '@angular/http';
const appRoutes: Routes = [ // arreglo de rutas
  { path: '', component: LugaresComponent },
  { path:'lugares', component: LugaresComponent },
  { path:'detalle/:id', component: DetalleComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'crear/:id', component: CrearComponent }
]
export const firebaseConfig = {
    apiKey: "AIzaSyDZudGmo5hraVyFiH3zjIomtzyjOZ8IkxU",
    authDomain: "valued-watch-183001.firebaseapp.com",
    databaseURL: "https://valued-watch-183001.firebaseio.com",
    projectId: "valued-watch-183001",
    storageBucket: "",
    messagingSenderId: "309122197106"
};

@NgModule({ 
  declarations: [ // agrega componentes
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent
  ],
  imports: [  // llama a los modulos a utilizae
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD0tdktt2f5mHTIC68ybO7is8lr78Sw8xM'
    }),
    BrowserAnimationsModule,
      RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    HttpModule
  ],
  providers: [LugaresService], // servicios a implementar
  bootstrap: [AppComponent]
})
export class AppModule { }
