import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ // agrega componentes
    AppComponent
  ],
  imports: [  // llama a los modulos a utilizae
    BrowserModule,
    FormsModule
  ],
  providers: [], // servicios a implementar
  bootstrap: [AppComponent]
})
export class AppModule { }
