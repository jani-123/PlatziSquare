import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [ // agrega componentes
    AppComponent
  ],
  imports: [  // llama a los modulos a utilizae
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD0tdktt2f5mHTIC68ybO7is8lr78Sw8xM'
    })
  ],
  providers: [], // servicios a implementar
  bootstrap: [AppComponent]
})
export class AppModule { }
