import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highlighted: string;



  constructor(private el: ElementRef, private render: Renderer2) {
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', 'white');
  }


  @HostListener('mouseenter') H() {
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', this.highlighted);
  }
  @HostListener('mouseleave') H1() {
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', 'white');
  }
}
