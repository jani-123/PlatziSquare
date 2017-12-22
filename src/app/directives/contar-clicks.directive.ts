import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({ selector: 'li[contar-clicks]'})

export class ContarClicksDirective{
  clickN = 0;
  @HostBinding('style.opacity') opacity: number = .1;
  @HostListener('click' , ['$event.target']) onclick(btn){ // ayuda q que escucha al evento al agregar la directive al html
    console.log('a' , btn , "Numero de click:" , this.clickN++);
    this.opacity += .1;
  }
}