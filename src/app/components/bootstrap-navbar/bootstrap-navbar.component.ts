import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-bootstrap-navbar',
  templateUrl: './bootstrap-navbar.component.html',
  styleUrls: ['./bootstrap-navbar.component.scss']
})
export class BootstrapNavbarComponent implements OnInit {

  @ViewChild('navbar') navbarRef: ElementRef;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', (e) => {
      console.log('scroll event!', window.scrollY);
      if (window.scrollY > 0) {
        console.log('esta escroleado');
        this.navbarRef.nativeElement.classList.add('bootstrap-navbar-scrolled');
      } else {
        console.log('no esta escroleado');
        this.navbarRef.nativeElement.classList.remove('bootstrap-navbar-scrolled');
      }
    });
  }

}
