import { Directive, OnInit , ElementRef , Renderer2 , Input} from "@angular/core";
@Directive({selector: '[resaltar]'})

export class ResaltarDirective implements OnInit{
  constructor(private elRef: ElementRef, private renderer: Renderer2){}
  @Input('resaltar') plan: string = '';
  ngOnInit(){ // ecribe codigo para obtener el elemento del atributo
    if (this.plan === 'pagado') {
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
      this.renderer.setStyle(this.elRef.nativeElement, 'font-wieght', 'bold');
    }
  }

}