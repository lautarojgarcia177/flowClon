import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPointerCursor]'
})
export class PointerCursorDirective {

  constructor(private el: ElementRef) {
    
   }

   @HostListener('mouseenter') onMouseEnter() {
      this.el.nativeElement.style.cursor = 'pointer';
   }

}
