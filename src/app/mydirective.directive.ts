import { Directive, ElementRef, Input, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {

  @Input('appMydirective') customColor: string;

  defaultColor = 'red';


  constructor(private el: ElementRef, private render: Renderer2) {

    this.render.setStyle(this.el.nativeElement, 'color', this.defaultColor);

  }

  @HostListener('mouseenter') setStyle() {
    this.el.nativeElement.style.color = this.customColor;
  }

  @HostListener('mouseleave') resetStyle() {
    this.el.nativeElement.style.color = this.defaultColor;
  }


}
