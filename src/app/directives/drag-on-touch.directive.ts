import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDragOnTouch]'
})
export class DragOnTouchDirective {

  constructor(private el: ElementRef) {
    //el.nativeElement.style.cursor = 'grabbing';
   }

   @HostListener('mouseenter') onMouseEnter() {
      this.el.nativeElement.style.cursor = 'pointer';
   }

   

}
