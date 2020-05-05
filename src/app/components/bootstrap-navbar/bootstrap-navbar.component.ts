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
      if (window.scrollY > 0) {
        this.navbarRef.nativeElement.classList.add('bootstrap-navbar-scrolled');
      } else {
        this.navbarRef.nativeElement.classList.remove('bootstrap-navbar-scrolled');
      }
    });
  }

}
