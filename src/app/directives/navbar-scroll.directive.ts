import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavbarScroll]'
})
export class NavbarScrollDirective {

  constructor(private el: ElementRef) { }

  @HostListener('window:scroll') onWindowScroll() {
    if (window.scrollY > 0) {
      this.el.nativeElement.classList.add('bootstrap-navbar-scrolled');
    } else {
      this.el.nativeElement.classList.remove('bootstrap-navbar-scrolled');
    }
  }

}
