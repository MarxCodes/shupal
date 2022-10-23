import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appProductHover]'
})
export class ProductHoverDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.renderer.
}
@HostListener('mouseleave') mousteout(eventData: Event) {
  this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '')
}

}
